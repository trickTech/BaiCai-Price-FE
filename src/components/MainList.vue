<template>
  <div class="main-list">
    <div class="cell" v-for="data in dataList">
      <span>{{data.veg_name}}</span>
      <span class="right">￥{{data.avg_price/100}}</span>
      <span class="right">￥{{data.highest_price/100}}</span>
      <span class="right">￥{{data.lowest_price/100}}</span>
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
  import API from '../config/request';
  import $ from 'jquery';

  export default{
    data () {
      return {
        dataList: [],
        isNull: false
      }
    },
    mounted () {
      let _this = this;
      $.ajax({
        url: API.vegetable,
        success (res) {
          console.log(res);
          if(res.content.length == 0){

            _this.isNull = true;
          }
          _this.dataList = res.content;
        }
      })
    }
  }
</script>
