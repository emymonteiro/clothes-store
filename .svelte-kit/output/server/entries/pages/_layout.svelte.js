import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
import { I as Icon } from "../../chunks/Icon.js";
const AppHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header class="bg-pink-50 flex items-center justify-center p-5"><h1 class="great-vibe text-4xl text-red-400 ml-auto">Clothing Store</h1>
	<div class="ml-auto relative hover:text-red-400 cursor-pointer">${validate_component(Icon, "IconifyIcon").$$render(
    $$result,
    {
      class: "h-10 w-10",
      icon: "iconamoon:shopping-bag-thin"
    },
    {},
    {}
  )}
		<div class="text-xs -bottom-0 -right-0 font-bold bg-red-500 text-white rounded-full absolute w-5 h-5 flex items-center justify-center" style="font-size: 0.6rem;">9+
		</div></div></header>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(AppHeader, "AppHeader").$$render($$result, {}, {}, {})}
${slots.default ? slots.default({}) : ``}
<aside>sidebar</aside>
<footer>Footer</footer>`;
});
export {
  Layout as default
};
