import * as echarts from 'echarts';
import ElementUI from 'element-ui';
import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import router from './router';
import store from './store';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/index.styl';

Vue.prototype.$echarts = echarts;
Vue.prototype.axios = axios;
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
