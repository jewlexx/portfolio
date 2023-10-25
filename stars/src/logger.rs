use std::sync::atomic::{AtomicBool, Ordering};

use log::{LevelFilter, SetLoggerError};

use super::log;

pub struct WebLogging;

static LOGGER: WebLogging = WebLogging;
static ENABLED: AtomicBool = AtomicBool::new(false);

impl WebLogging {
    pub fn init() -> Result<(), SetLoggerError> {
        log::set_logger(&LOGGER).map(|()| {
            log::set_max_level(
                const {
                    if cfg!(debug_assertions) {
                        LevelFilter::Trace
                    } else {
                        LevelFilter::Info
                    }
                },
            );
            ENABLED.store(true, Ordering::Relaxed);
        })
    }
}

impl log::Log for WebLogging {
    fn enabled(&self, _metadata: &log::Metadata) -> bool {
        ENABLED.load(Ordering::Relaxed)
    }

    fn log(&self, record: &log::Record) {
        if self.enabled(record.metadata()) {
            // let mid = if let Some((file, line)) =
            //     record.file().and_then(|a| record.line().map(|b| (a, b)))
            // {
            //     format!(" {file}:{line} ")
            // } else {
            //     "".to_string()
            // };

            log(&format_args!("[{}] {}\n", record.level(), record.args()).to_string());
        }
    }

    fn flush(&self) {}
}
