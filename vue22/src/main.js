import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Print from './assets/printt'
import store from './store'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Print)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
