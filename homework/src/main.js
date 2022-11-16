import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import vueResource from 'vue-resource'
import echarts from 'echarts';

Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(vueResource)
Vue.use(VueRouter)

new Vue({
  // router,
  render: h => h(App),
  router,
  beforeCreate() {
    Vue.prototype.$bus = this;
    
}
}).$mount('#app')
