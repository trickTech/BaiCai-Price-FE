<template>
  <div class="main-list" id="main">
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
      var page = 1;

      window.onscroll = function () {
        if (getDocumentTop() + getWindowHeight() == getScrollTop()) {
          page++;
          request(API.vegetable, page, _this);
        }
      }
    }
  }

  function request (url, page, _this) {
    $.ajax({
      url: url,
      method: "GET",
      data: {page: page},
      success (res) {
//          console.log(res);
        if(res.content.length == 0){
          _this.isNull = true;
        }
        _this.dataList = res.content;
      }
    });
  }

  //文档高度
  function getDocumentTop() {
    var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
    if (document.body) {
      bodyScrollTop = document.body.scrollTop;
    }
    if (document.documentElement) {
      documentScrollTop = document.documentElement.scrollTop;
    }
    scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
    return scrollTop;
  }

  //可视窗口高度
  function getWindowHeight() {
    var windowHeight = 0;
    if (document.compatMode == "CSS1Compat") {
      windowHeight = document.documentElement.clientHeight;
    } else {
      windowHeight = document.body.clientHeight;
    }
    return windowHeight;
  }

  //滚动条滚动高度
  function getScrollTop() {
    var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
    if (document.body) {
      bodyScrollHeight = document.body.scrollHeight;
    }
    if (document.documentElement) {
      documentScrollHeight = document.documentElement.scrollHeight;
    }
    scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
    return scrollHeight;
  }
</script>
