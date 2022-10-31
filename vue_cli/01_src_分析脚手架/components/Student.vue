<template>
    <div>
        <h2>学生姓名：{{studentName}}</h2>
        <h2>学生年龄：{{age}}</h2>
        <button @click="showName">点我提示学生名</button>
    </div>
</template>

<script>
export default {
    name:'Student',
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

