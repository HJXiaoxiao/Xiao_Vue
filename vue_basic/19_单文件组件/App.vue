<template>
    <div>
        <!-- 一定要有个根元素（例如这里的div） -->
        <School></School>
        <Studentt></Studentt>
    </div>
</template>

<script>
    // 引入组件
    import School from './School.vue'
    import Student from './Student.vue'

    export default {
        name:'App',
        // 汇总所有的组件
        components:{
            Student,
            School
        }
    }
</script>

<style>

</style>