<template>
    <div class="school">
        <h2>学校名称:{{name}}</h2>
        <h2>学校地址:{{address}}</h2>
    </div>
</template>

<script>
    import pubsub from 'pubsub-js'
    export default {
        name:'School',
        props:['getSchoolName'],
        data() {
            return {
                name:'Guet',
                address:'桂林'
            }
        },
        methods:{
            demo(msgName,data) {
                console.log('有人发布了hello消息，hello的回调执行了',msgName,data);
            }
        },
        mounted() {
            // console.log('School', this.x);
/*             this.$bus.$on('hello',(data) => {
                console.log('我是School组件，收到了数据',data);
            }) */

            // 订阅消息 隔空对讲机喊话
            // 第一种方式
            // 调用hello要有回调函数，msgName参数是消息名，data参数是数据
/*             this.pubId = pubsub.subscribe('hello',(msgName,data) =>  {
                // console.log(this);  若是普通函数this为undefined，若是箭头函数this为vc
                console.log('有人发布了hello消息，hello的回调执行了',msgName,data);
            }) */
            // 第二种方式 借助methods
            this.pubId = pubsub.subscribe('hello',this.demo)
        },
        beforeDestroy() {
            // this.$bus.$off('hello')
            pubsub.unsubscribe(this.pubId)
        }
    }
</script>

<style scoped>
  .school{
    background: skyblue;
    padding: 5px;
  }
</style>