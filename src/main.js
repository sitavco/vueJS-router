import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import routes from './router';

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.use(VueRouter, BootstrapVue);

const router = new VueRouter({mode: 'history', routes});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
