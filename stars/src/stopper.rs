use std::{rc::Rc, sync::atomic::AtomicBool};

#[derive(Debug, Clone)]
pub struct StopNotify(Rc<AtomicBool>);

impl StopNotify {
    pub fn new() -> Self {
        Self(Rc::new(AtomicBool::new(false)))
    }

    pub fn should_stop(&self) -> bool {
        self.0.load(std::sync::atomic::Ordering::Relaxed)
    }

    pub fn stop(&self) {
        self.0.store(true, std::sync::atomic::Ordering::Relaxed);
    }
}
