<template>
    <div>
        <div class="line"></div>
          
        <el-menu
            :default-active="$route.path" 
            class="el-menu-demo"
            mode="horizontal"
            background-color="#545c64"
            text-color="#fff"
            router
            @select="handleSelect"
            active-text-color="#ffd04b">
                <el-menu-item index="/">首页</el-menu-item>
                <el-menu-item index="/ziliao">资料库</el-menu-item>
                <el-menu-item index="/shuju">监测数据</el-menu-item>
                <el-menu-item index="/zhaoping">人员招聘</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name:'headerVue',
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '/'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style>
    a {
        text-decoration: none;
    }

</style>