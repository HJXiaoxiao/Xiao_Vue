<template>
    <div class="app">
        <h1>{{msg}}</h1>
        <School/>
        <Student/>
    </div>
</template>

<script>
    // 若style中类名相冲突，最后引入的组件样式会覆盖之前的组件样式
    import School from './components/School.vue'    
    import Student from './components/Student.vue'
    
    export default {
        name:'App',
        components:{
            Student,
            School
        },
        data() {
            return {
                msg:'你好啊'
            }
        }
    }
</script>

<style>
    .app {
        background-color: gray;
        padding: 5px;
    }
</style>