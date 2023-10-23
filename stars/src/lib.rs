mod stars;
mod utils;

use stars::*;

use wasm_bindgen::prelude::*;
use web_sys::{CanvasRenderingContext2d, HtmlCanvasElement};

#[wasm_bindgen(start)]
pub fn start() {
    utils::set_panic_hook();
}

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet() {
    alert("Hello, stars!");
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
        let window_size = WindowSize::new();

        const FPS: u16 = 60;
        const STARS: usize = 500;

        canvas.set_width(window_size.width);
        canvas.set_height(window_size.height);

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

        for star in self.stars.iter_mut() {
            star.draw(&context);
        }
    }
}
