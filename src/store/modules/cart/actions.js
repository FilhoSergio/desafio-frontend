// TODO: getAllProducts , addToCart , removeToCart ,


export default {
    async addProductsToCart({ commit }, cart) {
     
     console.log("aqui eu ", cart)

      commit("setProductsToCart", cart);


  
    },
  };