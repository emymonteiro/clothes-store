import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.0fba3591.js","_app/immutable/chunks/index.ba2bb275.js","_app/immutable/chunks/Icon.7f3ffd47.js"];
export const stylesheets = ["_app/immutable/assets/0.9995c348.css"];
export const fonts = [];
