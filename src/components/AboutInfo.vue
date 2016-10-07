<template>
  <div class="about-container">
    <h1>应用说明</h1>
    <p>今日菜价 web app是用于查询蔬菜批发市场价格，给普通用户做买菜参考的一个应用。菜价数据来源批发市场每天报的价格，数据更新时间取决于批发市场的报价时间。本应用目前的功能有显示蔬菜的最低价，最高价，平均价（均为蔬菜批发市场的成交价，去菜市场买菜请询问实际菜价）。</p>
    <hr>
    <h1>关于我们</h1>
    <p>本团队名字太奇葩不好意思说，后端是饿了么团队的python大牛，产品是百度团队的小菜鸡，前端是待业游民求收留，都是兼职，随便写着玩。</p>
    <br>
    <h2>技术方案</h2>
    <p>整个应用采用前后端分离架构，通过ajax异步获取json进行用户端与服务器端通信。前端上使用vue2.0框架，以组件化的形式进行开发。后端为python，提供数据采集和数据整理，数据查询功能，提供rest接口供前端调用。</p>
  </div>
</template>
<style lang="less" scoped>
  .about-container {
    margin-top: 76.33px;
    text-align: center;
    padding: 10px;
    margin-bottom: 50px;

    p {
      text-align: left;
      text-indent: 32px;
    }

    hr {
      margin: 10px 0;
    }
  }
</style>
<script>

  export default{
    data(){
      return {
        msg: 'hello vue'
      }
    }

  }
</script>
