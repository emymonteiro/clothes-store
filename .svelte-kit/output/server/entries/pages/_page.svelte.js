import { c as create_ssr_component, d as add_attribute, v as validate_component, e as escape, f as each } from "../../chunks/index.js";
import { I as Icon } from "../../chunks/Icon.js";
const Product = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { product } = $$props;
  const { id, image, category, title, price } = product;
  if ($$props.product === void 0 && $$bindings.product && product !== void 0)
    $$bindings.product(product);
  return `<div><div class="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition"><div class="w-full h-full flex justify-center items-center mx-auto"><img class="max-h-[160px] group-hover:scale-110 transition duration-300"${add_attribute("src", image, 0)} alt=""></div>
		<div class="absolute top-6 lg:top-3 right-11 group-hover:right-5 lg:group-hover:right-2 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300"><button><div class="flex justify-center items-center text-white w-12 h-12 bg-red-400">${validate_component(Icon, "IconifyIcon").$$render($$result, { class: "text-3xl", icon: "ic:round-plus" }, {}, {})}</div></button>
			<a${add_attribute("href", `/product/${id}`, 0)} class="w-12 h-12 bg-white flex justify-center items-center drop-shadow-xl">${validate_component(Icon, "IconifyIcon").$$render($$result, { icon: "mdi:eye" }, {}, {})}</a></div></div>
	<div><div class="text-sm capitalize text-gray-500 mb-1">${escape(category)}</div>
		<a${add_attribute("href", `/product/${id}`, 0)}><h2 class="font-semibold mb-1">${escape(title)}</h2></a>
		<div class="font-semibold">$ ${escape(price)}</div></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<section class="py-16"><div class="container mx-auto"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">${each(data.filteredProducts, (item) => {
    return `${validate_component(Product, "Product").$$render($$result, { product: item }, {}, {})}`;
  })}</div></div></section>`;
});
export {
  Page as default
};
