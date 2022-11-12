<template>
    <div class="student">
        <h2>学生姓名:{{name}}</h2>
        <h2>学生性别:{{sex}}</h2>
        <h2>当前求和为:{{number}}</h2>
        <button @click="add">点我加一</button>
        <button @click='sendStudentName'>把学生名给App</button>
        <button @click='unbind'>解绑guet事件</button>
        <button @click="death">销毁当前student组件的实例对象(VC)</button>
    </div>
</template>

<script>
    export default {
        name:'Student',
        data() {
            return {
                name:'张三',
                sex:'男',
                number: 0
            }
        },
        methods: {
            add(){
                this.number++;
                console.log('add回调被调用了');
            },
            sendStudentName() {
                // emit触发绑定在指定vc上的自定义事件 这个vc实例对象可以使用该方法
                // 触发自定义事件guet中的getStudentName方法,可以向demo中传递参数this.name
                this.$emit('guet', this.name,666,888,999);
                // this.$emit('demo');
            },
            unbind() {
                this.$off('guet');  // 解绑一个自定义事件
                // this.$off(['guet', 'demo']);  // 解绑多个自定义事件
                // this.$off();    // 解绑所有自定义事件
            },
            death(){
                this.$destroy(); //销毁当前组件实例，销毁后所有该实例的自定义事件都不奏效了
            }
        },
    }
</script>

<style>
    .student {
        background-color: orange;
        padding: 5px;
        margin-top: 30px;
    }
</style>