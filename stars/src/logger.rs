use std::sync::atomic::{AtomicBool, Ordering};

use log::SetLoggerError;
use wasm_bindgen::prelude::wasm_bindgen;

pub struct WebLogging;

static LOGGER: WebLogging = WebLogging;
static ENABLED: AtomicBool = AtomicBool::new(false);

impl WebLogging {
    pub fn init() -> Result<(), SetLoggerError> {
        log::set_logger(&LOGGER).map(|_logger| ENABLED.store(true, Ordering::Relaxed))
    }
}

impl log::Log for WebLogging {
    fn enabled(&self, _metadata: &log::Metadata) -> bool {
        ENABLED.load(Ordering::Relaxed)
    }

    fn log(&self, record: &log::Record) {
        if self.enabled(record.metadata()) {
            #[wasm_bindgen]
            extern "C" {
                #[wasm_bindgen(js_namespace = console)]
                fn log(s: &str);
            }

            let mid = if let Some((file, line)) =
                record.file().and_then(|a| record.line().map(|b| (a, b)))
            {
                format!(" {file}:{line} ")
            } else {
                "".to_string()
            };

            log(&format_args!("[{}{mid}] {}\n", record.level(), record.args()).to_string());
        }
    }

    fn flush(&self) {}
}
