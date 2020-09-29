import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import 'element-ui/lib/theme-chalk/index.css';
import '@/permission';
import '@mdi/font/css/materialdesignicons.css';
import './style/cg.scss';

import ElementUI from 'element-ui'
Vue.use(ElementUI);


// import './style/index.scss'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
