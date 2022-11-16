<template>
  <div>
    <el-header>
      <headerVue/>
    </el-header>
   
    <el-main>
      <router-view></router-view>
    </el-main>
    <!-- <el-footer>
      <footerVue/>
    </el-footer> -->
  </div>
</template>

<script>
  import headerVue from './components/headerVue'

  export default {
    name: 'App',
    components: {
      headerVue,
    }
  }
</script>

<style>

</style>
