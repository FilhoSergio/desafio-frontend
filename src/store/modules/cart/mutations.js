export default {
    setProductsToCart(state, cart) {
     
      if(cart){
   
        state.productsToCart = cart
      }
      else {
  
        state.cart = []
      }
    },
   
   
    
  }