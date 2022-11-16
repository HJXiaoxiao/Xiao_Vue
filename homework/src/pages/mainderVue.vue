<template>
    <div>
        <!-- 大轮播图 -->
        <template>
            <el-carousel indicator-position="outside" width="1357px" height="466px" >
                <el-carousel-item v-for="item in imgList" :key="item" >
                <img :src="item.idView" class="image" >
                </el-carousel-item>
            </el-carousel>
        </template>

        <div class="div_head_title">
          <div class="div_head_title_1">
            <a href="#" target="_blank">
              <img src="http://www.cwca.org.cn/resource2/img/flfg.png">
            </a>
          </div>
          <div class="div_head_title_1">
            <a href="#" target="_blank">
              <img src="http://www.cwca.org.cn/resource2/img/zrbhq1.png">
            </a>
          </div>
          <div class="div_head_title_1">
            <a href="#" target="_blank">
              <img src="http://www.cwca.org.cn/resource2/img/cbw.png">
            </a>
          </div>
          <div class="div_head_title_1">
            <a href="#" target="_blank">
              <img src="http://www.cwca.org.cn/resource2/img/zjsq.png">
            </a>
          </div>
	      </div>
        <!-- page整个大页面 -->
        <div class="page" style="">
            <!-- floor-1第一大部分 -->
             <div class="floor-1 clearfix">
                    <!-- 左边小轮播图 -->
                    <div class="img-list">
                        <span class="demonstration"></span>
                        <el-carousel>
                            <el-carousel-item v-for="item in imgList1" :key="item">
                                <img :src="item.idView" class="image">
                            </el-carousel-item>
                        </el-carousel>
                    </div>

                <!-- 右边信息展示区 -->
                <div class="news">
                    <!-- 信息区 -->
                    <div class="list-div" id="szyw-ul1" style="display: block;">
                        <!-- 信息一展示 -->
                        <div class="list-div_1">
                            <div style="float: left;width: 10%">
                                <div class="newsdate" id="rq002" style="margin-top: 20px;">
                                    <div class="newsday">10</div>
                                    <div class="newsym">2022-11</div>
                                </div>
                            </div>
                            <div class="list_div_t">
                                <h3><a style="color:black;" href="http://www.cwca.org.cn/news/dynamic/402881e68350f5780184608327630299.html" title="全球协同守护候鸟迁飞通道"><b class="titleStyle">全球协同守护候鸟迁飞通道</b></a></h3>
                                    11月9日下午，《湿地公约》第十四届缔约方大会全球迁飞区水鸟栖息地保护论坛以线上方式举办。与会中外嘉宾围绕如何保护候鸟迁飞通道水鸟及其栖息地...
                            </div>
                        </div>
                        <div class="list-div_2"><img src=""></div>
                            <!-- 信息二展示 -->
                        <div class="list-div_1">
                            <div style="float: left;width: 10%">
                                <div class="newsdate" id="rq002" style="margin-top: 20px;">
                                    <div class="newsday">10</div>
                                    <div class="newsym">2022-11</div>
                                </div>
                            </div>
                            <div class="list_div_t">
                                <h3><a style="color:black;" href="http://www.cwca.org.cn/news/dynamic/402881e68350f578018460789a6d0293.html" title="2022“爱鸟周”全国湿地自然笔记接力活..."><b class="titleStyle">2022“爱鸟周”全国湿地自然笔记接力活...</b></a></h3>       
							    2022年11月9日，在《湿地公约》第十四届缔约方大会边会ldquo;CEPA湿地教育与保护论坛rdquo;上，2022ldquo;爱鸟周r...
                            </div>
                        </div>
                        <div class="list-div_2"><img src=""></div>

                        <!-- 信息三展示 -->
                        <div class="list-div_1">
                            <div style="float: left;width: 10%">
                                <div class="newsdate" id="rq002" style="margin-top: 20px;">
                                    <div class="newsday">10</div>
                                    <div class="newsym">2022-11</div>
                                </div>
                            </div>
                            <div class="list_div_t">
                                <h3><a style="color:black;" href="http://www.cwca.org.cn/news/dynamic/402881e68350f57801845f700905027d.html" title="中国启动“湿地教育中心行动计划”"><b class="titleStyle">中国启动“湿地教育中心行动计划”</b></a></h3>
                                    在11月9日举行的《湿地公约》第十四届缔约方大会CEPA湿地教育与保护论坛上，由国家林草局、阿拉善SEE生态协会、红树林基金会共同发起的ld...
                            </div>
                        </div>

                            <!-- 查看更多 -->
                        <div class="new_non_more">
                            <a id="xwxhgd" href="/news/dynamic/">
                                <img src="">
                            </a>
                        </div>
                    </div>
                </div>
          
            </div>

            <!-- 视频展示区 -->
            <div class="showVideo">
                <div style="width:280px;height:45px">
                    <img src="http://www.cwca.org.cn/resource2/img/news_spjj.png" style="height:100%" >
                </div>
                <video style="height:190px;width:320px" src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" controls></video>
                <video style="height:190px;width:320px" src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" controls></video>
                <video style="height:190px;width:320px;margin-right:0px" src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" controls></video>
            </div>

              <!-- 图片展示 -->
            <div>
                <!-- <h3>图片展示</h3> -->
                <div style="width:280px;height:45px">
                    <img src="http://www.cwca.org.cn/resource2/img/xhjj_dsj.png" style="height:100%" >
                </div>
                <div class="demo-image">
                    <div style="display: inline-block;margin-right:30px;overflow: hidden;" class="block" v-for="url in urls" :key="url">
                        <!-- <span class="demonstration">{{ fit }}</span> -->
                        <el-image
                        class="imgs-hober"
                            style="width: 310px; height: 220px;margin-top: 20px;transition: all .5s ease .1s;"
                            :src="url"
                            :fit="fit">
                        </el-image>
                    </div>
                </div>
            </div>

            <!-- 链接 -->
            <div class="lianjie">
                <div style="width:120px;height:50px">
                    <img src="http://www.cwca.org.cn/resource2/img/xhjj_yqlj.png" style="height:100%" >
                </div>
                <!-- <h3>友情连接</h3> -->
                <div class="lianjie1" style="margin-top: 20px;">
                    <div>桂林电子科技大学</div>
                    <div>计算机与信息安全学院</div>
                    <div>信息通信学院</div>
                    <div>艺术与设计学院</div>
                    <div>商学院</div>
                    <div>法学院</div>
                    <div>自动化学院</div>
                    <div>机械工程学院</div>
                </div>
            </div>
        </div>  
</div>
   
</template>

<script>
export default {
    name:'mainderVue',
        data() {
            return {
                imgList:[
                    {id:0,idView:'http://www.cwca.org.cn/recourse/daddc9bac2ea49b0be3ee762f4843a13.jpg'},
                    {id:1,idView:'http://www.cwca.org.cn/recourse/e392a3e6fdc940fea974f0f1c0d4046c.jpg'},
                    {id:2,idView:'http://www.cwca.org.cn/recourse/84364c1c71da42ffa0dd8bf7472d92cb.jpg'},
                    {id:3,idView:'http://www.cwca.org.cn/recourse/f4b203c88755471fa477cd77a1626283.jpg'}
                    ],
                imgList1:[
                    {id:0,idView:'http://www.cwca.org.cn/recourse/df1dbe3309654433a01a038e8b0c7626.jpg'},
                    {id:1,idView:'http://www.cwca.org.cn/recourse/d89ede239e914c6d930bd159fa9fb1b8.jpg'},
                    {id:2,idView:'http://www.cwca.org.cn/recourse/5484ddf2c18e4750b8b7cfafdfa14942.jpg'},
                    {id:3,idView:'http://www.cwca.org.cn/recourse/5b4e649307d04ce6b2b965e71f7f79e4.jpg'},
                    {id:4,idView:'http://www.cwca.org.cn/recourse/d303b9e2405543cd992433dfbc8ad538.jpg'},
                    {id:5,idView:'http://www.cwca.org.cn/recourse/4cadcaa8b067467db40b48edabacf5a9.jpg'},
                    ],
                urls:['https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
                      'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
                      'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
                      'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
                      'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
                      'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
                      ],
                        src_deer: 'http://www.cwca.org.cn/resource2/img/bottom3.jpg',
            }
        },
}
</script>

<style>
  html {
    font-size: 10px;
  }
  html {
    font-family: sans-serif;
    -webkit-text-size-adjust: 100%;
  }
  body {
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 10px;
    line-height: 1.42857143;
    color: #333;
  }

  * {
  margin: 0;
  margin-left: 0px;
    padding: 0;
    color: #323232;
    font-family: "Arial", "Times New Roman", "Verdana","Tahoma","Microsoft YaHei","Hiragino Sans GB",tahoma,arial,simhei;
    color: #666;
  }
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  ::after, ::before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .clearfix::after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }

  .page {
  /* width: 1400xp; */
    height: 1400px;
    margin-left: 10%;
    margin-right: 10%;
  }

  .floor-1 {
    /* width: 1400xp; */
    height: 350px;
  }

  /* 小轮播图 */
  .img-list {
    margin-top: 30px;
    width: 487px;
    height: 295px;
    float: left;
    background-color: #0096FF;
  }
  img {
      width: 100%;
      height: 100%;
  }

  .news {
    margin-top: 10px;
    width: 480px;
    height: 340px;
    float: left;
    margin-left: 15px;
    overflow: hidden;
  }

  .showInfo {
      text-align: right;
  }
  .list-div {
    width: 100%;
    height: 460px;
    padding-left: 20px;
    padding-top: 0px;
  }
  .list-div_1 {
    height: 90px;
  }
  .list_div_t {
    float: left;
    width: 90%;
    padding-left: 25px;
    /* padding-top: 10px; */
    height: 66px;
  }
  .list-div_2 {
    /* height: 30px; */
    border-left-style:solid;
    margin-left: 30px;
  }
  .list-div a:hover {
      text-decoration: underline;
  }
  .newsdate {
    border: solid 1px #B7B7B7;
    width: 58px;
    height: 58px;
  }
  .newsday {
    text-align: center;
    width: 58px;
    height: 29px;
    color: #3A9D66;
    font-weight: bold;
    font-size: 26px;
    line-height: 39px;
  }
  .newsym {
    width: 58px;
    height: 29px;
    text-align: center;
    color: #666666;
    font-size: 13px;
    line-height: 27px;
  }
  .h3, h3 {
    font-size: 20px;
  }
  .h1, .h2, .h3, h1, h2, h3 {
    margin-top: 20px;
    margin-bottom: 10px;
  }
  .h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
    font-family: inherit;
    font-weight: 500;
    line-height: 1.1;
    color: inherit;
  }
  a {
    text-decoration: none;
  }
  a {
    color: #337ab7;
    text-decoration: none;
  }
  a {
    background-color: transparent;
  }

  /* 视频区 */
  video {
    margin-right: 35px;
    margin-top: 20px;
  }
  .imgs-hober:hover {
	/* 放大1.3倍 */
    transform: scale(1.3);}
    .lianjie .lianjie1 div {
    font-size: 6px;
    display: inline-block;
    width:230px;
    height:37px;
    background-color:#ddf0e6;
    font-size:16px;
    /* padding: 5px; */
    text-align:center;
    line-height:37px;
    font-weight: bold;
    margin-right:10px;
    margin-bottom: 20px;
    color: green;
  }


  .div_head_title {
    float: right;
    width: 110px;
    margin: auto;
    margin-top: auto;
    margin-right: auto;
    height: 545px;
    line-height: 120px;
    margin-top: 120px;
    margin-right: 10px;
    position: relative;
    overflow: hidden;
    background: #ffffff;
    border-radius: 10px;
    filter: progid:DXImageTransform.Microsoft.Shadow(color=#909090,direction=120,strength=4);
    -moz-box-shadow: 2px 2px 10px #909090;
    -webkit-box-shadow: 2px 2px 10px #909090;
    box-shadow: 2px 2px 10px #909090;
    z-index: 1;
  }


  html {
    font-size: 10px;
  }
  html {
    font-family: sans-serif;
    -webkit-text-size-adjust: 100%;
  }
  .div_head_title div {
    width: 100%;
    /* height: 163px; */
    padding: 0px;
    margin-top: 10px;
    /* float: right; */
    position: relative;
    /* width: 5%; */
    /* height: 200px; */
    text-align: center;
  }
  .div_head_title a {
    text-decoration: none;
  }
  .div_head_title a {
    color: #337ab7;
    text-decoration: none;
  }
  .div_head_title a {
    background-color: transparent;
  }
  .div_head_title div img {
    width: 70px;
    height: 115px;
    padding-top: 20px;
  }
  .div_head_title a img {
    border: 0;
  }
  .div_head_title img {
    vertical-align: middle;
  }
  .div_head_title img {
    border: 0;
  }
</style>