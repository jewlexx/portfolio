mod utils;

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

pub struct WindowSize {
    width: u32,
    height: u32,
}

impl WindowSize {
    pub fn new() -> Self {
        let window = web_sys::window().unwrap();
        WindowSize::from_window(window)
    }

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

struct Star {
    x: usize,
    y: usize,
    length: f64,
    opacity: f64,
    factor: f64,
    increment: f64,
}

impl Star {
    pub fn new() -> Self {
        let window_size = WindowSize::new();
        let mut rng = rand::thread_rng();

        Self {
            x: rng.gen_range(0..window_size.width as usize),
            y: rng.gen_range(0..window_size.height as usize),
            length: rng.gen_range(1.0..=3.0),
            opacity: rng.gen_range(0.0..=1.0),
            factor: 1.0,
            increment: rng.gen_range(0.0..0.3),
        }
    }

    pub fn draw(&mut self, ctx: CanvasRenderingContext2d) {
        let window_size = WindowSize::new();
        ctx.rotate(std::f64::consts::PI * 1.0 / 10.0).unwrap();
        ctx.save();
        ctx.translate(self.x as f64, self.y as f64).unwrap();

        let mut rng = rand::thread_rng();

        if self.opacity > 1.0 {
            self.factor = -1.0;
        } else {
            self.factor = 1.0;

            self.x = rng.gen_range(0..window_size.width as usize);
            self.y = rng.gen_range(0..window_size.height as usize);
        }

        self.opacity += self.increment * self.factor;

        ctx.begin_path();

        for _ in 0..5 {
            ctx.line_to(0.0, self.length);
            ctx.translate(0.0, self.length).unwrap();
            ctx.rotate(std::f64::consts::PI * 2.0 / 10.0).unwrap();
            ctx.line_to(0.0, -self.length);
            ctx.translate(0.0, -self.length).unwrap();
            ctx.rotate(-(std::f64::consts::PI * 6.0 / 10.0)).unwrap();
        }

        ctx.line_to(0.0, self.length);
        ctx.close_path();
        ctx.set_fill_style(&JsValue::from_str(&format!(
            "rgba(255, 255, 200, {})",
            self.opacity
        )));
        ctx.set_shadow_blur(5.0);
        ctx.set_shadow_color("#fff");
        ctx.fill();
        ctx.restore();
    }
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

    // Draw a smiley face
    context.begin_path();

    let mut rng = rand::thread_rng();
    let stars = (0..STARS).map(|_| Star::new()).collect::<Vec<_>>();

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
