<template>
    <div class="container">
      <Category title="食物">
        <img src="./assets/logo.png">
      </Category>
      <Category title="游戏">
        <ul>
          <li v-for="(g,index) in this.games" :key="index">{{g}}</li>
        </ul>
      </Category>
      <Category title="电影">
        <!-- controls 控制视频播放 -->
        <video src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" controls></video>
      </Category>
    </div>
</template>

<script>
    import Category from './components/Category.vue'

    export default {
      name:'App',
      components: { 
          Category:Category
      },
      data() {
        return {
          foods:['火锅','烧烤','小龙虾','牛排'],
          games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
          films:['《教父》','《拆弹专家》','《你好，李焕英》','《guet》']
        }
      },
    }
</script>

<style>
    .container {
      display: flex;
      justify-content: space-around;
    }
    img {
      width: 100%;
    }
    video {
      width: 100%;
    }
</style>