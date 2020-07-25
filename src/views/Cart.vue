<template>
  <v-app id="inspire">
    <v-app-bar app color="#424242" dark>
      <v-row>
        <v-col sm4 md4>
          <v-toolbar-title class="text-center ">
            <router-link to="/" class="text-white">
              Home
            </router-link>
          </v-toolbar-title>
          <v-spacer></v-spacer>
        </v-col>
        <v-col sm4 md4>
          <v-toolbar-title class="text-center ">
            <router-link to="/top5" class="text-white">
              Top 5 products
            </router-link>
          </v-toolbar-title>
          <v-spacer></v-spacer>
        </v-col>
        <v-col sm4 md4>
          <v-toolbar-title class="text-center ">
            <router-link to="/cartcheckout">
              <span class="text-white"> Yor Cart </span>
              <v-badge
                v-if="Cart.productsToCart.length"
                color="red"
                :content="Cart.productsToCart.length"
                overlap
                bordered
                bottom
              >
              </v-badge>
            </router-link>
          </v-toolbar-title>
          <v-spacer></v-spacer>
        </v-col>
      </v-row>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <v-col sm12 md12>
            <h1 >Your Cart</h1>
          
            <div class="shopping-cart">
              <div class="column-labels">
                <label class="product-image">Image</label>
                <label class="product-details">Product</label>
                <label class="product-price">Price</label>
                <label class="product-quantity">Quantity</label>
                <label class="product-removal">Remove</label>
                <label class="product-line-price">Total</label>
              </div>

              <div
                class="product"
                v-for="product in Cart.productsToCart"
                :key="product.productID"
              >
                <div class="product-image">
                  <img :src="product.image" />
                </div>
                <div class="product-details">
                  <div class="product-title">{{ product.name }}</div>
                  <p class="product-description">
                    {{ product.description }}
                  </p>
                </div>
                <div class="product-price">
                  {{ product.unitPrice | currency }}
                </div>
                <div class="product-quantity">
                  <input type="number" value="1" min="1" />
                </div>
                <div class="product-removal">
                  <v-btn
                    color="error"
                    class="remove-product"
                    @click="RemoveProducts(product)"
                  >
                    Remove
                  </v-btn>
                </div>
                <div class="product-line-price">25.98</div>
              </div>

              <div class="totals">
                <div class="totals-item">
                  <label>Subtotal</label>
                  <div class="totals-value" id="cart-subtotal">
                      {{ Cart.TotalPrice | currency }}
                  </div>
                </div>

                <div class="totals-item totals-item-total">
                  <label>Grand Total</label>
                  <div class="totals-value" id="cart-total">
                      {{ Cart.TotalPrice | currency }}
                  </div>
                </div>
              </div>

              <button class="checkout" >Checkout</button>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  components: {},
  props: {},

  data: () => ({
    drawer: null,
    products: [],
    select: null,
    search: null,
  }),
  created() {},
  computed: {
    ...mapState(["Cart"]),
  },
  methods: {
    ...mapActions([
      "addProductsToCart",
      "removeProductsToCart",
      "getPriceTotal",
    ]),
    async AdicionarProducts(product) {
      this.addProductsToCart(product);
    },

    async RemoveProducts(product) {
      this.removeProductsToCart(product);
    },
    async GetPrice() {
      this.getPriceTotal();
    },
  },
};
</script>
<style scoped>
.text-white {
  color: white !important;
}

.product-image {
  float: left;
  width: 20%;
}
.product-details {
  float: left;
  width: 37%;
}
.product-price {
  float: left;
  width: 12%;
}
.product-quantity {
  float: left;
  width: 10%;
}
.product-removal {
  float: left;
  width: 9%;
}
.product-line-price {
  float: left;
  width: 12%;
  text-align: right;
}
/* This is used as the traditional .clearfix class */
.group:before,
.shopping-cart:before,
.column-labels:before,
.product:before,
.totals-item:before,
.group:after,
.shopping-cart:after,
.column-labels:after,
.product:after,
.totals-item:after {
  content: "";
  display: table;
}
.group:after,
.shopping-cart:after,
.column-labels:after,
.product:after,
.totals-item:after {
  clear: both;
}
.group,
.shopping-cart,
.column-labels,
.product,
.totals-item {
  zoom: 1;
}

/* Body/Header stuff */
body {
  padding: 0px 30px 30px 20px;
}


.shopping-cart {
  margin-top: -45px;
}
/* Column headers */
.column-labels label {
  padding-bottom: 15px;
  margin-bottom: 15px;
  border-bottom: 1px solid #eee;
}
.column-labels .product-image,
.column-labels .product-details,
.column-labels .product-removal {
  text-indent: -9999px;
}
/* Product entries */
.product {
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}
.product .product-image {
  text-align: center;
}
.product .product-image img {
  width: 100px;
}
.product .product-details .product-title {
  margin-right: 20px;
}
.product .product-details .product-description {
  margin: 5px 20px 5px 0;
  line-height: 1.4em;
}
.product .product-quantity input {
  width: 40px;
}
.product .remove-product {
  border: 0;
  padding: 4px 8px;
  background-color: #c66;
  color: #fff;

  font-size: 12px;
  border-radius: 3px;
}
.product .remove-product:hover {
  background-color: #a44;
}
/* Totals section */
.totals .totals-item {
  float: right;
  clear: both;
  width: 100%;
  margin-bottom: 10px;
}
.totals .totals-item label {
  float: left;
  clear: both;
  width: 79%;
  text-align: right;
}
.totals .totals-item .totals-value {
  float: right;
  width: 21%;
  text-align: right;
}

.checkout {
  float: right;
  border: 0;
  margin-top: 20px;
  padding: 6px 25px;
  background-color: #6b6;
  color: #fff;
  font-size: 25px;
  border-radius: 3px;
}
.checkout:hover {
  background-color: #494;
}
/* Make adjustments for tablet */
@media screen and (max-width: 650px) {
  .shopping-cart {
    margin: 0;
    padding-top: 20px;
    border-top: 1px solid #eee;
  }
  .column-labels {
    display: none;
  }
  .product-image {
    float: right;
    width: auto;
  }
  .product-image img {
    margin: 0 0 10px 10px;
  }
  .product-details {
    float: none;
    margin-bottom: 10px;
    width: auto;
  }
  .product-price {
    clear: both;
    width: 70px;
  }
  .product-quantity {
    width: 100px;
  }
  .product-quantity input {
    margin-left: 20px;
  }
  .product-quantity:before {
    content: "x";
  }
  .product-removal {
    width: auto;
  }
  .product-line-price {
    float: right;
    width: 70px;
  }
}
/* Make more adjustments for phone */
@media screen and (max-width: 350px) {
  .product-removal {
    float: right;
  }
  .product-line-price {
    float: right;
    clear: left;
    width: auto;
    margin-top: 10px;
  }
  .product .product-line-price:before {
    content: "Item Total: $";
  }
  .totals .totals-item label {
    width: 60%;
  }
  .totals .totals-item .totals-value {
    width: 40%;
  }
}
</style>
