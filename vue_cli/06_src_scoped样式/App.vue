<template>
    <div>
        <School/>
        <hr/>
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
        }
    }
</script>

<style>

</style>