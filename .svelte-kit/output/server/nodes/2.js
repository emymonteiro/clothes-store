import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.52b866d9.js","_app/immutable/chunks/index.ba2bb275.js","_app/immutable/chunks/Icon.7f3ffd47.js"];
export const stylesheets = [];
export const fonts = [];
