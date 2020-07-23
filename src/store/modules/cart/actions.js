// TODO: getAllProducts , addToCart , removeToCart ,


export default {
    async addProductsToCart({ state ,commit }, productsToCart) {
     
     console.log("aqui eu ", productsToCart)

      commit("setProductsToCart", productsToCart);
    //   this.state.productsToCart.dispacht(cart)
      console.log(state.productsToCart)
    //   console.log(state.productsToCart.push(cart))


  
    },
  };