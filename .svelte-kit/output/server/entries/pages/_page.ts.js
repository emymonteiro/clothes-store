function request(url, config = {}) {
  return fetch(url, config).then((response) => response.json()).then((data) => data);
}
const load = async () => {
  const title = "List of available produtcts";
  const products = await request("https://fakestoreapi.com/products");
  const filteredProducts = products.filter((el) => {
    return el.category === "men's clothing" || el.category === "women's clothing";
  });
  return {
    title,
    filteredProducts
  };
};
export {
  load
};
