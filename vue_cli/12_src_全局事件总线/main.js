// 引入vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 关闭vue的生产提示
Vue.config.productionTip = false;

// window.x = {a:1,b:2}
// Vue.prototype.x = {a:1,b:2}

//创建一个vc
// const Demo = Vue.extend({}); // 创建自定义组件demo进行测试，不需要配置对象
// const d = new Demo(); 
// Vue.prototype.x = d;

new Vue({
    el:'#app',
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this;   //安装全局事件总线
    }
})