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
            <v-toolbar class="elevation-0 transparent media-toolbar">
              <v-btn-toggle>
                <v-autocomplete
                  v-model="search"
                  :items="Products.products"
                  :search-input.sync="search"
                  color="#424242"
                  hide-no-data
                  hide-selected
                  item-text="name"
                  item-value="productID"
                  dense
                  filled
                  return-object
                  clearable
                  label="Search products"
                  placeholder="Start typing to Search"
                  prepend-icon="mdi-account-search"
                  style="width: 340px;"
                  class="m-t-16"
                ></v-autocomplete>
              </v-btn-toggle>
              <v-spacer></v-spacer>
              <v-btn-toggle v-model="view" mandatory class="grid-list">
                <v-btn flat value="grid">
                  Grid
                  <v-icon color="primary">mdi-apps</v-icon>
                </v-btn>
                <v-btn flat value="list">
                  List
                  <v-icon color="primary">mdi-format-align-justify</v-icon>
                </v-btn>
              </v-btn-toggle>
            </v-toolbar>
          </v-col>
        </v-row>

        <v-row v-if="view === 'grid'">
          <v-col
            v-for="product in Products.products"
            :key="product.productID"
            sm4
            md4
            class="text-center"
          >
            <Product-Card
              :image="product.image"
              :name="product.name"
              :description="product.description"
              :unitsInStock="product.unitsInStock"
              :unitPrice="product.unitPrice"
              :productID="product.productID"
            ></Product-Card>
          </v-col>
        </v-row>
        <v-row v-else>
          <v-col sm12 md12>
            <v-data-table
              :headers="headers"
              :items="Products.products"
              sort-by="productID"
              item-key="productID"
              class="elevation-1"
            >
              <template v-slot:item.unitPrice="{ item }">
                <span>{{ item.unitPrice | currency }}</span>
              </template>
              <template v-slot:item.add="{ item }">
                <div class="my-2">
                  <v-btn
                    fab
                    x-small
                    dark
                    color="warning"
                    @click="addProductsToCart(item)"
                    ><v-icon> mdi-plus </v-icon></v-btn
                  >
                </div>
              </template>
            </v-data-table>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import ProductCard from "@/components/ProductCard/ProductCard.vue";
import { mapState, mapActions } from "vuex";
// import { filter_key_word } from "../utils";
export default {
  components: {
    ProductCard,
  },
  props: {
    source: String,
  },

  data: () => ({
    drawer: null,
    view: "grid",
    select: null,
    search: "",
    headers: [
      { text: "Name", value: "name" },
      { text: "Price($)", value: "unitPrice" },
      { text: "Units in stock", value: "unitsInStock", sortable: false },
      { text: "Add to cart", value: "add", sortable: false },
    ],
  }),
  async created() {
    await this.getProducts();
  },
  computed: {
    ...mapState(["Products", "Cart", "Search"]),
    // filteredList() {
    //   return filter_key_word(this.Products, this.search);
    // },
  },
  methods: {
    ...mapActions([
      "getProducts",
      "searchCard",
      "addProductsToCart",
      "getProdcutById",
    ]),
    // async filterProduct(product) {
    //   filter_key_word(this.Products.products, this.search);
    // },
   
    // getFilteredObj(product) {
    //   this.getProdcutById(product);
    // },
  },
};
</script>
<style>
.text-white {
  color: white !important;
}
.m-t-16 {
  margin-top: 16px !important;
}
a:link {
  text-decoration: none;
}

@media screen and (max-width: 593px) {
  .grid-list {
    display: none;
  }
}
</style>
