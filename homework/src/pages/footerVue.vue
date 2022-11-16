<template>
  <div>
    <footer class="footer">
      <div class="container">
        <div class="footer-main">
          <h4>关于我们</h4>
          <a href="#" target="_blank" class="footer-main-link">协会简介</a>
          <a href="#" target="_blank" class="footer-main-link">协会章程</a>
          <a href="#" target="_blank" class="footer-main-link">组织机构</a>
          <a href="#" target="_blank" class="footer-main-link">大事记</a>
          <a href="#" target="_blank" class="footer-main-link">合作伙伴</a>
          <a href="#" target="_blank" class="footer-main-link">联系我们</a>
        </div>
        <div class="footer-main">
          <h4>专题活动</h4>
          <a href="#" target="_blank" class="footer-main-link">科普宣传</a>
          <a href="#" target="_blank" class="footer-main-link">志愿者行动</a>
          <a href="#" target="_blank" class="footer-main-link">大熊猫保护合作</a>
          <a href="#" target="_blank" class="footer-main-link">专题活动</a>
          <a href="#" target="_blank" class="footer-main-link">专题回顾</a>
        </div>
        <div class="footer-social">
            <p class="footer-social-title">保护动物 人人有责</p>
            <span>
                <span class="el-popover__reference-wrapper"></span>
            </span>
            <i class="el-icon-question elementdoc el-popover__reference" aria-describedby="el-popover-7451" tabindex="0">
                <span role="tooltip" id="el-popover-7451" aria-hidden="true" class="el-popover el-popper footer-popover" style="display:none;width: 120px; transform-origin: center bottom 0px; z-index: 2031;" tabindex="0">
                  <div class="footer-popover-title">饿了么 UED</div>
                  <img src="../assets/dog1.jpg" alt="">
                      我是一段文字
                  <div x-arrow="" class="popper__arrow" style="left: 53.5px;"></div>
                </span>
            </i>
            <a href="#" target="_blank">
              <i class="el-icon-warning elementdoc"></i>
            </a>
            <a href="#" target="_blank">
              <i class="el-icon-warning elementdoc"></i>
            </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
    export default {
        name:'footerVue'
    }
</script>

<style>
  .footer {
    background-color: #ebf5f0;
    width: 100%;
    padding: 40px 150px;
    margin-top: 10px;
    box-sizing: border-box;
    height: 320px;
}

.footer .container {
  box-sizing: border-box;
  width: auto;
}

.container, .page-container {
  width: 1140px;
  padding: 0;
  margin: 0 auto;
}
.footer .footer-main {
  font-size: 0;
  display: inline-block;
  vertical-align: top;
  margin-right: 110px;
}
.footer .footer-main h4 {
  font-size: 18px;
  color: #333;
  line-height: 1;
  margin: 0 0 15px;
}
.footer .footer-main .footer-main-link {
  display: block;
  margin: 0;
  line-height: 2;
  font-size: 14px;
  color: #666;
}
a {
  color: #409eff;
  text-decoration: none;
}
.footer .footer-main .footer-main-link:hover {
  color: #333;
}

/* 右边图标 */
 .footer .footer-social {
  float: right;
  text-align: right;
}
.footer .footer-social .footer-social-title {
  color: #666;
  font-size: 18px;
  line-height: 1;
  margin: 0 0 20px;
  padding: 0;
  font-weight: 700;
}

元素 {
  width: 120px;
  display: none;
}
.el-popover.footer-popover {
  padding: 0;
  min-width: 120px;
  line-height: normal;
  box-shadow: 0 0 11px 0 rgba(174,187,211,.24);
}
.el-popover {
  position: absolute;
  background: #fff;
  min-width: 150px;
  border-radius: 4px;
  border: 1px solid #ebeef5;
  padding: 12px;
  z-index: 2000;
  color: #606266;
  line-height: 1.4;
  text-align: justify;
  font-size: 14px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  word-break: break-all;
}
.footer .footer-social .elementdoc {
  transition: .3s;
  display: inline-block;
  line-height: 32px;
  text-align: center;
  color: #c8d6e8;
  background-color: transparent;
  size: 32px;
  font-size: 36px;
  vertical-align: middle;
  margin-right: 20px;
}
.elementdoc {
  font-family: "elementdoc" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.footer .footer-social .elementdoc:hover {
  transform: scale(1.2);
  color: #8d99ab;
}

/* .doc-icon-github::before {
  content: "\e603";
} */

.el-popover.footer-popover {
  padding: 0;
  min-width: 120px;
  line-height: normal;
  box-shadow: 0 0 11px 0 rgba(174,187,211,.24);
}
.el-popover {
  position: absolute;
  background: #fff;
  min-width: 150px;
  border-radius: 4px;
  border: 1px solid #ebeef5;
  padding: 12px;
  z-index: 2000;
  color: #606266;
  line-height: 1.4;
  text-align: justify;
  font-size: 14px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  word-break: break-all;
}
.el-popover.footer-popover .footer-popover-title {
  border-bottom: 1px solid #eaeefb;
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: #99a9bf;
  background-color: #f8f9fe;
}


.el-popover.footer-popover img {

    size: 100px;
    margin: 10px;

}

.el-popper .popper__arrow {
  border-width: 6px;
  filter: drop-shadow(0 2px 12px rgba(0,0,0,.03));
}
.el-popper .popper__arrow, .el-popper .popper__arrow::after {
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  border-color: transparent;
  border-style: solid;
}
.el-icon-question i:hover span{
    display: block;
}
body, html {
  font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
  font-weight: 400;
}
</style>