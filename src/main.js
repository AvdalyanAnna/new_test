import Vue from 'vue';
import App from './App.vue';
import router from './routes.js';
import store from './store/index';

// import Router from './router/index.js'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

import './assets/scss/main.scss';

import i18n from './i18n'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')


