import productList from "@/services/productList";

export default {
  async getProducts({ commit }) {
    const Products = await productList.get("/products");  
    
    // const Products = productList.get("/products").then((response) => {
    //   console.log(".,.,.,.,.,.,.,.", response);
    // });
    commit("setProducts", Products.data.products);
    //   .catch((error) => {
    //     console.error(error);
    //     commit("setProducts", []);
    //   });


  },
};
