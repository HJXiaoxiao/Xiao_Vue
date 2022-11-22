<template>
  <div>
    <button @click="getStudents">获取学生信息</button>
    <button @click="getCars">获取汽车信息</button>
  </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name:'App',
        methods: {
          getStudents() {
            // 有跨域问题：协议 主机号 端口号 和服务器端有一个对不上就会造成跨域问题
            // 服务器端口号5000，而本地端口号为8080
            axios.get('http://localhost:8080/api/students').then(  
              response => {
                console.log('请求成功了',response.data);
              },
              error => {
                console.log('请求失败了',error.message);
              }
            )
          },
          getCars() {
            axios.get('http://localhost:8080/demo/cars').then(  
              response => {
                console.log('请求成功了',response.data);
              },
              error => {
                console.log('请求失败了',error.message);
              }
            )
          }
        }
    }
</script>

<style>

</style>