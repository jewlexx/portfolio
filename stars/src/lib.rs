mod utils;

use wasm_bindgen::prelude::*;
use web_sys::{HtmlCanvasElement, Window};

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

pub struct WindowSize {
    width: u32,
    height: u32,
}

impl WindowSize {
    pub fn from_window(window: Window) -> Self {
        let width = {
            let width = window.inner_width().unwrap();
            let width_f64 = width.as_f64().expect("number value");

            width_f64.round() as u32
        };
        let height = {
            let height = window.inner_height().unwrap();
            let height_f64 = height.as_f64().expect("number value");

            height_f64.round() as u32
        };

        Self { width, height }
    }
}

#[wasm_bindgen]
pub fn attach(canvas: HtmlCanvasElement) {
    use std::f64;
    let window_size = {
        let window = web_sys::window().unwrap();
        WindowSize::from_window(window)
    };

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

    // Draw a smiley face
    context.begin_path();

    for i in 0..STARS {}

    // Draw the outer circle.
    context
        .arc(75.0, 75.0, 50.0, 0.0, f64::consts::PI * 2.0)
        .unwrap();

    // Draw the mouth.
    context.move_to(110.0, 75.0);
    context.arc(75.0, 75.0, 35.0, 0.0, f64::consts::PI).unwrap();

    // Draw the left eye.
    context.move_to(65.0, 65.0);
    context
        .arc(60.0, 65.0, 5.0, 0.0, f64::consts::PI * 2.0)
        .unwrap();

    // Draw the right eye.
    context.move_to(95.0, 65.0);
    context
        .arc(90.0, 65.0, 5.0, 0.0, f64::consts::PI * 2.0)
        .unwrap();

    context.stroke();
}
