/*
 该文件是整个项目的入口文件
*/
// 引入vue
// import Vue from 'vue/dist/vue.js' // 原版的vue
import Vue from 'vue'  // 精简版vue 配合render使用
// 引入App组件，它是所有组件的父组件
// import App from './App.vue'

Vue.config.productionTip = false

// 创建vue实例对象
new Vue({
    el:'#app',
    // 将app 放入容器中
    render: h => h(App),
/*     render(createElement) {
        return createElement('h1',"你好啊")
    } */
    // render:(createElement) => createElement('h1',"你好啊")  // 简写
    

    // template: `<h1>你好啊</h1>`,
    // components: {App},
})

