import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import store from './store';
import axios from 'axios';
import "font-awesome/css/font-awesome.css";
import router from './router'
Vue.config.productionTip = false


Vue.filter("currency", function(value) {
  return "$ " + parseFloat(value).toFixed(2);
});

new Vue({
  vuetify,
  store,
  axios,
  router,
  render: h => h(App)
}).$mount('#app')
