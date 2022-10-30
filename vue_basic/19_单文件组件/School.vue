<template>
<!-- 组件的结构 -->
    <div class="demo">
        <h2>学校名称：{{schoolName}}</h2>
        <h2>学校地址：{{address}}</h2>
        <button @click="showName">点我提示学校名</button>
    </div>  
</template>

<script>
    // 组件交互的代码（数据、方法等等）
    export default {
        name:'School',   // 一般与文件名保持一致
        data(){
            return {
                schoolName:'Guet',
                address:'桂林'
            }
        },
        methods: {
            showName() {
                alert(this.schoolName);
            }
        }
    }
    // export { school };  统一暴露
    // export default school    默认暴露（常用）
</script>

<style>
    /*css样式*/
    .demo {
        background-color: pink;
    }
</style>

