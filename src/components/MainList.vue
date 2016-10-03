<template>
  <div class="main-list">
    <div class="cell">
      <span>菜名</span>
      <span class="right">最高价</span>
      <span class="right">最低价</span>
      <span class="right">平均价</span>
    </div>
  </div>
</template>
<style lang="less" scoped>
  .main-list {
    margin-top: 76.333px;

    .cell {
      border-bottom: 1px solid green;
      /*height: 40px;*/
      font-size: 18px;
      text-align: left;
      padding: 16px 10px;

      span {
        margin-right: 5px;
      }

      .right {
        float: right;
      }
    }
  }
</style>
<script>

  import API from '../config/request'

  export default{
    data(){
      return {
        msg: 'hello vue'
      }
    }

  }
</script>
