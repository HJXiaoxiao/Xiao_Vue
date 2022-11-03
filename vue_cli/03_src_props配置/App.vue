<template>
    <div>
        <!-- v-bind 双线绑定，传数值型18 -->
        <Student name="李四" sex="女" :age="18"></Student>    
        <!-- <Student name="李四" sex="女" ></Student>     -->
    </div>
</template>

<script>
    import Student from './components/Student.vue'
    export default {
        name:'App',
        components:{
            Student
        },
        data() {
            return {
                todos: [
                    {id: '001', title: '吃饭', done: false},
                    {id: '002', title: "睡觉", done: true},
                    {id: '003', title: '打代码', done: false}
                ]
            }
        }
    }
</script>

<style>

</style>