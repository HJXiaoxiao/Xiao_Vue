/**
 * 该文件用于创建vuex中最核心的store
 */
// 引入vuex
import Vue from 'vue'
import Vuex from 'vuex'

// 使用vuex来集中管理状态,必要
// new store的前提是必须要使用Vuex插件
Vue.use(Vuex);

// 准备actions(本质就是对象)--- 用于响应组件中的动作(业务逻辑放此处)
const actions = {
    // 没有业务逻辑可以直接在Count里调用mutations
    
/*     INCREMENT:function(context,value) {
        // 两个参数，context封装了上下文可能用到的方法，value为当前加的n值
        // console.log('actions中的+被调用了',context,value);
        console.log('actions中的+被调用了');
        context.commit('INCREMENT',value);
    },
    DECREMENT:function(context,value) {
        console.log('actions中的-被调用了');
        context.commit('DECREMENT',value);
    }, */
    incrementIfOdd:function(context,value) {
        if(context.state.sum % 2) {
            context.commit('incrementIfOdd',value);
        }      
    },
    incrementWait:function(context,value) {
        setTimeout(() => {
            context.commit('incrementWait',value);
        },2000)
        
    }
}

// 准备mutations(本质也是对象)--- 用于操作数据(mutations)
const mutations = {
    INCREMENT(state,value) {
        // console.log('mutations中的+被调用了',state,value);
        console.log('mutations中的+被调用了');
        state.sum += value
    },
    DECREMENT(state,value) {
        // console.log('mutations中的+被调用了',state,value);
        console.log('mutations中的-被调用了');
        state.sum -= value
    },
    incrementIfOdd(state,value) {
        state.sum += value
    },
    incrementWait(state,value) {
        state.sum += value
    },
}

// 准备state(本质也是对象)--- 用于存储数据(state)
const state = {
    sum:0,    // 当前的和
}

// 创建并暴露store
export default new Vuex.Store({
    actions:actions,
    mutations:mutations,
    state:state
})
