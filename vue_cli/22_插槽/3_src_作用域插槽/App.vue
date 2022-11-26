<template>
    <div class="container">
      <Category title="游戏">
        <!-- 传入结构的外侧必须包含template -->
        <template scope="guet" slot="haha">
        <!-- guet收到的是一个对象 -->
        <!-- {{guet}} -->
          <ul>
            <li v-for="(g,index) in guet.games" :key="index">{{g}}</li>
          </ul> 
        </template>
      </Category>

      <Category title="游戏">
        <!-- 解构赋值 -->
        <template scope="{games}" slot="haha">
          <ol>
            <li style="color:red" v-for="(g,index) in games" :key="index">{{g}}</li>
          </ol> 
          <h4>{{games.msg}}</h4>
        </template>     
      </Category>

      <Category title="游戏">
         <template slot-scope="{games}" slot="haha">
            <h4 v-for="(g,index) in games" :key="index">{{g}}</h4>
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
      }
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
    }
</style>