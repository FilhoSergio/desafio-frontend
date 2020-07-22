<template>
  <v-card class="mx-auto" max-width="344" outlined>
    <v-card-text>
      <v-img :src="image" height="200px"></v-img>

      <v-card-title class="etc">
        {{ name }}
      </v-card-title>
      <v-card-title class="etc">
        {{ description }}
      </v-card-title>
      <v-divider class="mx-4"></v-divider>

      <br />
      <h2>Price : {{ unitPrice }}$</h2>
      <h4>Items let in stock : {{ unitsInStock }}</h4>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          color="warning"
          fab
          small
          dark
          @click="
            addProductsToCart({
              image,
              name,
              description,
              unitPrice,
              unitsInStock,
              productID,
            })
          "
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card-text>
  </v-card>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  props: [
    "image",
    "name",
    "description",
    "unitPrice",
    "unitsInStock",
    "productID",
  ],
  data: () => ({}),
  async created() {},
  computed: {
    ...mapState(["cart"]),
  },
  methods: {
    ...mapActions(["addProductsToCart"]),
    // AddItem(product){
    //   // this.$store.dispatch('cart', product)
    //   // this.$state.cart.Push(product)
    // }
  },
};
</script>

<style>
.etc {
  max-width: 312px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
