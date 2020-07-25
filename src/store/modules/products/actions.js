import productList from "@/services/productList";

export default {
  async getProducts({ commit }) {
    const Products = await productList.get("/products");

    commit("setProducts", Products.data.products);
  },
//   async getProdcutById({ state, commit }, product) {
//     // commit("setProducts", product);
   
//   },
};
