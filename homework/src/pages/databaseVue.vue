<template>
    <div>
         <div class="benner">
			<img src="http://www.cwca.org.cn/resources/benner.jpg">
		</div>
        <div class="pageData">
            <el-row>
                <el-col  :span="6"   v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 3 : 0" >
                    <el-card :body-style="{ padding: '0px',width: '300px',margin:'0px 20px' }">
                        <img src="http://www.cwca.org.cn/animal/img/2c9094e541deccf00141df4fbbdb153e-1.png" class="image">
                        <div>
                            <span style="text-align: center;display:block;font-size:16px;padding-top:5px">大熊猫 </span>
                            <div class="bottom clearfix">
                                <time class="time">成年雄性体长150～180cm，肩高65～70cm。尾长12～14cm，体重一般为80～125kg。雌性比雄性小10%～20%。头圆、体肥、尾短。眼圈、耳壳及肩和四肢为深黑色外，其余部分均为乳白色。 </time>
                                <el-popover
                                    placement="right"
                                    title="特征"
                                    width="350"
                                    trigger="click"
                                    content="栖息于海拔1300～3600m的高山森林中，在林下有箭竹、方竹或其他竹丛的针阔混交林中最为常见。除发情期外，过独居生活。"
                                    >
                                    <el-button slot="reference">查看更多</el-button>
                                </el-popover>
                            </div>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        name:'databaseVue'
    }
</script>

<style>
    .pageData {
        height: 400px;
        width: 100%;
    }
    .time {
        font-size: 13px;
        color: #999;
    }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>