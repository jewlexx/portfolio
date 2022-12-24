mod utils;

use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub struct AverageColour {
    pub r: u64,
    pub g: u64,
    pub b: u64,
    pub is_light: bool,
}

#[wasm_bindgen]
impl AverageColour {
    #[wasm_bindgen(constructor)]
    pub async fn new(url: String) -> Self {
        let image_bytes = reqwest::get(url).await.unwrap().bytes().await.unwrap();

        let average = avgcol::AverageColor::from_bytes(image_bytes).unwrap();

        Self {
            r: average.0,
            g: average.1,
            b: average.2,
            is_light: average.is_light(),
        }
    }
}
