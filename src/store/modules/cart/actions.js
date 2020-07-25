export default {
  async addProductsToCart({ state, commit }, productsToCart) {
    let quantity = 1;
    productsToCart.quantity = quantity;

    const pushToCart = state.productsToCart.find(
      (element) => element.productID === productsToCart.productID
    );

    if (pushToCart) {
      productsToCart.quantity += 1;
    }
    // let index = state.productsToCart.findIndex(
    //   (item) => item.productID === productsToCart.productID
    // );

    if (!pushToCart) {
      commit("setProductsToCart", productsToCart);
    } else {
      //  TODO:
    }
  },

  async removeProductsToCart({ state, commit }, productsToCart) {
    const removeProduct = state.productsToCart.find(
      (element) => element.productID === productsToCart.productID
    );
    if (removeProduct) {
      commit("delProductsToCart", productsToCart);
    } else {
      alert("Remove just items in your car");
    }
  },

  async getPriceTotal({ state, commit }) {
    const TotalPrice = state.productsToCart.reduce(
      (total, value) => total + value.unitPrice,
      0
    );
    commit("setTotalPrice", TotalPrice);
  },
};
