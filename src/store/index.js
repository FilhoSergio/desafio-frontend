import Vue from 'vue'
import Vuex from 'vuex'
import Search from './modules/search'
import Products from './modules/products'
import Cart from './modules/cart'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Search,
    Products,
    Cart
  }
})
