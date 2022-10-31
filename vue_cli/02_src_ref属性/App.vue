<template>
    <div>
        <h1 v-text="msg" ref="title"></h1>
        <button @click="showDOM" ref="btn">点我输出上方的DOM元素</button>
        <School ref="sch"></School>
        
    </div>
</template>

<script>
    import School from './components/School.vue'
    export default {
        name:'App',
        components:{
            School
        },
        data() {
            return {
                msg:'欢迎学习'
            }
        },
        methods: {
            showDOM() {
                // console.log(this);  // 指向VueComponent
                console.log(this.$refs);
                console.log(this.$refs.btn);  // 获取真实DOM元素
                console.log(this.$refs.title);  // 获取真实DOM元素
                console.log(this.$refs.sch); //可以是school组件加refs属性 获得的是组件事例对象vc
            }
        },
    }
</script>

<style>

</style>