#[macro_use]
extern crate log;

mod logger;
mod stars;
mod utils;

use std::rc::Rc;

use logger::WebLogging;
use stars::*;

use wasm_bindgen::prelude::*;
use web_sys::{CanvasRenderingContext2d, HtmlCanvasElement};

#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

#[wasm_bindgen(start)]
pub fn start() {
    utils::set_panic_hook();
    WebLogging::init().expect("successfull logger init");
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
        info!("Initialized");

        const STARS: usize = 500;

        let stars = (0..STARS).map(|_| Star::new()).collect::<Vec<_>>();

        Self { canvas, stars }
    }

    pub fn begin_drawing(mut self) {
        use std::cell::RefCell;
        let ctx = self
            .canvas
            .get_context("2d")
            .unwrap()
            .unwrap()
            .dyn_into::<web_sys::CanvasRenderingContext2d>()
            .unwrap();

        let f = Rc::new(RefCell::new(None));
        let g = f.clone();

        let ctx = Rc::new(ctx);

        *g.borrow_mut() = Some(Closure::new(move || {
            debug!("Drawing");
            self.draw(ctx.clone());
            utils::request_animation_frame(f.borrow().as_ref().unwrap());
        }));

        utils::request_animation_frame(g.borrow().as_ref().unwrap());
    }

    fn draw(&mut self, ctx: Rc<CanvasRenderingContext2d>) {
        let window_size = WindowSize::new();

        self.canvas.set_width(window_size.width);
        self.canvas.set_height(window_size.height);

        ctx.clear_rect(
            0.0,
            0.0,
            window_size.width as f64,
            window_size.height as f64,
        );

        for star in self.stars.iter_mut() {
            star.draw(&ctx);
        }
    }
}
