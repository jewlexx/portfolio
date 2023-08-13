

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.328fb256.js","_app/immutable/chunks/scheduler.d2620c22.js","_app/immutable/chunks/index.699a8f3d.js","_app/immutable/chunks/singletons.09a9ac2b.js"];
export const stylesheets = [];
export const fonts = [];
