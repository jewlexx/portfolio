#[macro_use]
mod log;

mod stars;
mod utils;

use stars::*;

use wasm_bindgen::prelude::*;
use web_sys::HtmlCanvasElement;

#[wasm_bindgen(start)]
pub fn start() {
    utils::set_panic_hook();
}

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

#[wasm_bindgen]
pub struct Stars {
    canvas: HtmlCanvasElement,
    stars: Vec<Star>,
}

#[wasm_bindgen]
impl Stars {
    #[wasm_bindgen(constructor)]
    pub fn new(canvas: HtmlCanvasElement) -> Self {
        const STARS: usize = 500;

        let stars = (0..STARS).map(|_| Star::new()).collect::<Vec<_>>();

        Self { canvas, stars }
    }

    pub fn draw(&mut self) {
        let context = self
            .canvas
            .get_context("2d")
            .unwrap()
            .unwrap()
            .dyn_into::<web_sys::CanvasRenderingContext2d>()
            .unwrap();

        let window_size = WindowSize::new();

        self.canvas.set_width(window_size.width);
        self.canvas.set_height(window_size.height);

        context.clear_rect(
            0.0,
            0.0,
            window_size.width as f64,
            window_size.height as f64,
        );

        for star in self.stars.iter_mut() {
            star.draw(&context);
        }
    }
}
