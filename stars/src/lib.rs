mod stars;
mod utils;

use stars::*;

use rand::prelude::*;
use wasm_bindgen::prelude::*;
use web_sys::{CanvasRenderingContext2d, HtmlCanvasElement, Window};

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
pub fn attach(canvas: HtmlCanvasElement) {
    use std::f64;
    let window_size = WindowSize::new();

    const FPS: u16 = 60;
    const STARS: usize = 500;

    canvas.set_width(window_size.width);
    canvas.set_height(window_size.height);

    let context = canvas
        .get_context("2d")
        .unwrap()
        .unwrap()
        .dyn_into::<web_sys::CanvasRenderingContext2d>()
        .unwrap();

    let mut rng = rand::thread_rng();
    let stars = (0..STARS).map(|_| Star::new()).collect::<Vec<_>>();
}
