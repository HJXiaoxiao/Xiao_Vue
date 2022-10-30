<template>
    <div>
        <h2>学生姓名：{{studentName}}</h2>
        <h2>学生年龄：{{age}}</h2>
        <button @click="showName">点我提示学生名</button>
    </div>
</template>

<script>
    //统一暴露
    // export { school };
    // export default school //默认暴露
    export default {
        name:'Student',  // 开发者工具最终呈现的名字为Student
        data(){
            return {
                studentName:'张三', 
                age:18
            }
        },
        methods: {
            showName() {
                alert(this.studentName);
            }
        }
    }
</script>

