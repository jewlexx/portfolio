//! Implementation adapted from https://codepen.io/mervedurdagi/pen/PWzmZR

use rand::prelude::*;
use wasm_bindgen::JsValue;
use web_sys::{CanvasRenderingContext2d, Window};

pub struct WindowSize {
    pub width: u32,
    pub height: u32,
}

impl WindowSize {
    pub fn new() -> Self {
        let window = crate::utils::window();
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

pub struct Star {
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
            length: rng.gen_range(1.0..=1.5) + 1.0,
            opacity: rng.gen_range(0.0..=1.0),
            factor: 1.0,
            increment: rng.gen_range(0.0..0.01),
        }
    }

    pub fn draw(&mut self, ctx: &CanvasRenderingContext2d) {
        let window_size = WindowSize::new();
        ctx.rotate(std::f64::consts::PI * 1.0 / 10.0).unwrap();
        ctx.save();
        ctx.translate(self.x as f64, self.y as f64).unwrap();

        if self.opacity > 1.0 {
            self.factor = -1.0;
        } else if self.opacity <= 0.0 {
            self.factor = 1.0;

            let mut rng = rand::thread_rng();
            self.x = rng.gen_range(0..window_size.width as usize);
            self.y = rng.gen_range(0..window_size.height as usize);
        }

        self.opacity += self.increment * self.factor;

        ctx.begin_path();

        // Draw the 5 points of the star
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
        ctx.set_fill_style(&{
            let mut style = Colour::WHITE;
            style.a = self.opacity;
            style.into()
        });
        ctx.set_shadow_blur(5.0);
        ctx.set_shadow_color("#fff");
        ctx.fill();
        ctx.restore();
    }
}

struct Colour {
    r: u8,
    g: u8,
    b: u8,
    a: f64,
}

impl Colour {
    pub const WHITE: Self = Self {
        r: 255,
        g: 255,
        b: 255,
        a: 1.0,
    };
}

impl From<Colour> for JsValue {
    fn from(value: Colour) -> Self {
        let Colour { r, g, b, a } = value;
        let string = format!("rgba({r},{g},{b},{a})");
        JsValue::from_str(&string)
    }
}
