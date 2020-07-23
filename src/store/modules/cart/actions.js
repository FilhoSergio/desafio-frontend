// TODO: getAllProducts , addToCart , removeToCart ,


export default {
    async addProductsToCart({ state ,commit }, cart) {
     
     console.log("aqui eu ", cart)

      commit("setProductsToCart", cart);

      console.log(state.productsToCart)
    //   console.log(state.productsToCart.push(cart))


  
    },
  };