<template>
  <v-app id="inspire">
    <v-app-bar app color="#424242" dark >
      <v-row>
        <v-col sm4 md4>
          <v-toolbar-title class="text-center "> <a class="text-white" href="/"> Home </a> </v-toolbar-title>
         <v-spacer></v-spacer>
        </v-col> 
        <v-col sm4 md4>
          <v-toolbar-title class="text-center "> <a class="text-white" href="/top5" > Top 5 products </a> </v-toolbar-title>
         <v-spacer></v-spacer>
        </v-col> 
        <v-col sm4 md4>
          <v-toolbar-title class="text-center "> <a class="text-white" href="/cartcheckout"> Your Cart </a></v-toolbar-title>
          <v-spacer></v-spacer>
        </v-col>
      
      </v-row>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
            <v-col>
               <h1> Top 5 products </h1>
            </v-col>
        </v-row>
        
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  components: {
   
  },
  props: {
    source: String,
  },

  data: () => ({
    drawer: null,
    products: [],
    select: null,
    search: null,
    
  }),
  created() {
    
  },
  computed: {},
  methods: {},
};
</script>
<style scoped>
.text-white {
  color: white !important;
}
</style>
