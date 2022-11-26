<template>
    <div class="category">
        <h3>{{title}}分类</h3>
        <!-- <ul>
            <li v-for="(item,index) in listData" :key="index">{{item}}</li>
        </ul> -->
        <!-- 定义一个插槽（挖个坑，等着组件的使用者进行填充） -->
        <slot :games="games" msg="hello" name="haha">我是一些默认的内瓤</slot>
    </div>
</template>

<script>
    export default {
        name:'Category',
        props:['title'],
        data() {
            return {
                games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
            }
        },
    }
</script>

<style>
    .category {
        background-color: skyblue;
        width: 200px;
        height: 300px;
    }
    h3 {
        text-align: center;
        background-color: orange;
    }
</style>