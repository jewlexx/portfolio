#![feature(inline_const)]

#[macro_use]
extern crate log;

mod logger;
mod stars;
mod stopper;
mod utils;

use std::rc::Rc;

use logger::WebLogging;
use stars::*;

use stopper::StopNotify;
use wasm_bindgen::prelude::*;
use web_sys::{CanvasRenderingContext2d, HtmlCanvasElement};

use lol_alloc::{AssumeSingleThreaded, FreeListAllocator};

// SAFETY: This application is single threaded, so using AssumeSingleThreaded is allowed.
#[global_allocator]
static ALLOCATOR: AssumeSingleThreaded<FreeListAllocator> =
    unsafe { AssumeSingleThreaded::new(FreeListAllocator::new()) };

#[wasm_bindgen(start)]
pub fn start() {
    utils::set_panic_hook();
    WebLogging::init().expect("successfull logger init");
}

#[wasm_bindgen]
pub struct Stars {
    canvas: HtmlCanvasElement,
    stars: Vec<Star>,
    channel: StopNotify,
}

#[wasm_bindgen]
impl Stars {
    #[wasm_bindgen(constructor)]
    pub fn new(canvas: HtmlCanvasElement) -> Self {
        info!("Initialized");

        const STARS: usize = 500;

        let stars = (0..STARS).map(|_| Star::new()).collect::<Vec<_>>();

        Self {
            canvas,
            stars,
            channel: StopNotify::new(),
        }
    }

    pub fn begin_drawing(mut self) -> JsValue {
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

        let stopper = {
            let tx = self.channel.clone();
            Closure::once_into_js(move || {
                info!("Stopping painting stars");
                tx.stop();
            })
        };

        *g.borrow_mut() = Some(Closure::new(move || {
            if self.channel.should_stop() {
                info!("Received stop signal. Stopping painting...");
                // Drop our handle to this closure so that it will get cleaned
                // up once we return.
                let _ = f.borrow_mut().take();
                info!("Dropped painter callback.");
                return;
            }
            debug!("Updating stars");
            self.draw(ctx.clone());
            utils::request_animation_frame(f.borrow().as_ref().unwrap());
        }));

        utils::request_animation_frame(g.borrow().as_ref().unwrap());

        stopper
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

impl Drop for Stars {
    fn drop(&mut self) {
        info!("Stopped painting stars.")
    }
}
