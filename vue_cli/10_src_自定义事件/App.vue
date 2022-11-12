<template>
    <div class="app">
        <h1>{{msg}}</h1>
        <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
        <School :getSchoolName='getSchoolName'/>
        <!-- 通过绑定一个自定义事件实现了子给父传递数据(自定义事件绑在子组件上) 第一种写法使用@或v-on -->
        <Student v-on:guet="getStudentName" @demo="m1"/>
        <!-- <Student @guet.once="getStudentName"/> -->
        
        <!-- 通过绑定一个自定义事件实现了子给父传递数据(自定义事件绑在子组件上) 第二种写法使用ref -->
        <!-- <Student ref="student"/> -->
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
        },
        methods: {
            getSchoolName(name) {
                console.log("App收到了学校名", name);
            },
            getStudentName(name,...params) {
                console.log("App收到了学生名", name,params);
            },
            m1() {
                console.log("demo事件触发了");
            }
        },
        mounted() {
            // this.$refs.student.$on('guet',this.getStudentName);   // 绑定自定义事件
            // this.$refs.student.$once('guet',this.getStudentName);  // 绑定自定义事件(一次性)
            // setTimeout(() => {
            //     this.$refs.student.$on('guet',this.getStudentName);
            // }, 3000);
           
        } 
    }
</script>

<style>
    .app {
        background-color: gray;
        padding: 5px;
    }
</style>