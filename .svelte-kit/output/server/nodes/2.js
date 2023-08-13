import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.c993242f.js","_app/immutable/chunks/scheduler.d2620c22.js","_app/immutable/chunks/index.699a8f3d.js","_app/immutable/chunks/links.3d5462ab.js"];
export const stylesheets = ["_app/immutable/assets/2.5ede0c48.css"];
export const fonts = [];
