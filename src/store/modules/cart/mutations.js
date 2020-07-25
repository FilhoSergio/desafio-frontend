export default {
  setProductsToCart(state, productsToCart) {
    if (productsToCart) {
      state.productsToCart = [...state.productsToCart, productsToCart];

      const TotalPrice = state.productsToCart.reduce(
        (total, value) => total + value.unitPrice,
        0
      );
      state.TotalPrice = TotalPrice;
    }
  },

  delProductsToCart(state, productsToCart) {
    let itemIndex = state.productsToCart.findIndex(
      (item) => item.productID === productsToCart.productID
    );
    state.productsToCart.splice(itemIndex, 1);

    const TotalPrice = state.productsToCart.reduce(
      (total, value) => total + value.unitPrice,
      0
    );
    state.TotalPrice = TotalPrice;
  },

  setTotalPrice(state, TotalPrice) {
    state.TotalPrice = TotalPrice;
  },
};
