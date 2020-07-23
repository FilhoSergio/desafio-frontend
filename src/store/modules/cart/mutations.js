export default {
    setProductsToCart(state, productsToCart) {
     
      if(productsToCart){
   
        state.productsToCart.push( productsToCart)
        console.log("epaaaaa" , productsToCart , state.productsToCart.length)
        // state.productsToCart.dis
      }
      else {
        console.log("uhuhuh")
        state.productsToCart = []
      }
    },
   
   
    
  }