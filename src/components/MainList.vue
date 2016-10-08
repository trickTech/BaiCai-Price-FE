<template>
  <div class="main-list" id="main">
    <div class="top-cell">
      <span>蔬菜名</span>
      <span class="right">平均价</span>
      <span class="right">最高价</span>
      <span class="right">最低价</span>
    </div>
    <div class="cell vux-1px-b" v-for="data in dataList">
      <span>{{data.veg_name}}</span>
      <span class="right">￥{{data.avg_price/100}}</span>
      <span class="right">￥{{data.highest_price/100}}</span>
      <span class="right">￥{{data.lowest_price/100}}</span>
    </div>
  </div>
</template>
<style lang="less" scoped>
  @import '~vux/src/styles/1px.less';
  .main-list {
    .top-cell {
      width: 100%;
      position: fixed;
      background-color: green;
      font-size: 16px;
      text-align: left;
      padding: 10px 0;

      span {
        margin-right: 5px;
        margin-left: 5px;
      }

      .right {
        float: right;
      }
    }

    .cell {
      font-size: 16px;
      text-align: left;
      padding: 12px 10px;

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
        isNull: false,
        totalPage: 1
      }
    },
    mounted () {
      let _this = this;
      let page = 1;

      request(API.vegetable, page, _this);

      window.onscroll = function () {
        if (getDocumentTop() + getWindowHeight() == getScrollTop() && page != _this.totalPage) {
          page++;
          request(API.vegetable, page, _this);
        }else if (page == _this.totalPage) {
          //TODO: 拉到底的处理
          console.log('已经是最后一页了');
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
        _this.totalPage = res.total_page;
        _this.dataList = _this.dataList.concat(res.content);
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
