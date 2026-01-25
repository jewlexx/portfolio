document.addEventListener("alpine:init", () => {
  const expandedData = {
    expanded: true,
    toggle() {
      this.expanded = !this.expanded;
    },
    set(newValue: boolean) {
      this.expanded = newValue;
    },
  };
  window.Alpine.store("header", expandedData);

  window.Alpine.data("bodydata", () => {
    const data: {
      init(): void;
      handleScroll(ev: Event): void;
      _timer: null | number;
      _queuedMethod: null | (() => void);
      _complexDebounce(method: () => void, delay?: number): void;
    } = {
      init() {
        console.log("intiialized");
      },

      handleScroll(ev: Event) {
        this._complexDebounce(() => {
          const expanded = window.Alpine.store("header") as typeof expandedData;

          var scrollTop = ev.target?.scrollTop;
          if (scrollTop > 125) {
            expanded.set(false);
          } else {
            expanded.set(true);
          }
        });
      },

      _timer: null,
      _queuedMethod: null,
      _complexDebounce(method: () => void, delay: number = 100) {
        if (this._timer) {
          this._queuedMethod = method;
        } else {
          this._timer = window.setTimeout(() => {
            if (this._queuedMethod) {
              this._queuedMethod();
            }
            this._timer = null;
          }, delay);
        }
      },
    };

    return data;
  });
});
