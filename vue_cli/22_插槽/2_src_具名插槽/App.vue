<template>
    <div class="container">
      <Category title="食物">
        <img slot="center" src="./assets/logo.png">
        <a slot="footer" href="https://www.baidu.com/">更多没事</a>
      </Category>
      <Category title="游戏">
        <ul slot="center">
          <li v-for="(g,index) in this.games" :key="index">{{g}}</li>
        </ul>
        <div class="foot" slot="footer">
          <a href="https://www.baidu.com/">单机游戏</a>
          <a href="https://www.baidu.com/">网络游戏</a>
        </div>
      </Category>
      <Category title="电影">
        <!-- controls 控制视频播放 -->
        <video slot="center" src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" controls></video>
        
        <!-- 注意v-slot仅仅只能被用在组件上或者template标签上 -->
        <template v-slot:footer> 
          <div class="foot">
            <a href="https://www.baidu.com/">经典</a>
            <a href="https://www.baidu.com/">热门</a>
            <a href="https://www.baidu.com/">推荐</a>
          </div>
          <h4>欢迎前来观影</h4>
        </template>

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
    .container,
    .foot {
      display: flex;
      justify-content: space-around;
    }
    img {
      width: 100%;
    }
    video {
      width: 100%;
    }
    h4 {
      text-align: center;
      /* color: ; */
    }
</style>