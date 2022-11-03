<template>
    <div>
        <h1>{{msg}}</h1>
        <h2>学校姓名:{{name}}</h2>
        <h2>学校性别:{{sex}}</h2>
        <h2>学校年龄:{{myAge}}</h2>
        <button @click="updateAge">尝试修改年龄</button>
    </div>
</template>

<script>
    export default {
        name:'Student',
        data() {
            return {
                msg:'我是一个Guet的学生',
                myAge:this.age   // 优先接收props中的age
            }
        },
        methods: {
            updateAge() {
                // 不建议修改外部传入的数据
                // this.age = 22;  
                // 若要修改外部数据应如下修改
                this.myAge++;
            }
        },
        // 1.简单接收
        // props:['name', 'sex', 'age']  

        // 2.接收的同时对数据类型进行限制
/*         props:{
            name:String,
            sex:String,
            age:Number
        } */
        // 3.接收的同时对数据类型进行限制 + 默认值的指令 + 必要性的限制
        props:{
            name:{
                type:String,    // 类型
                require:true    // require 必须
            },
            age:{
                type: Number,
                default: 99     //默认值
            },
            sex:{
                type: String,
                required: true
            }
        }
    }
</script>