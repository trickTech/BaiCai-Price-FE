<template>
  <div class="main-list" id="main">

    <div class="top-cell">
      {{msg}}
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
    <loading :show="loading" :text="loadingText"></loading>
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
      color: white;

      span {
        margin-right: 5px;
        margin-left: 5px;
      }

      .right {
        float: right;
      }
    }

    div:nth-child(2) {
      padding-top: 50px;
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
  import Loading from 'vux/src/components/loading';
  import bus from '../util/bus'

  export default{
    data () {
      return {
        dataList: [],
        isNull: false,
        totalPage: 1,
        loading: true,
        loadingText: '加载中...'
      }
    },
    props: ['msg'],
    methods: {
      sortSubmit () {
        console.log();
      }
    },
    mounted () {
      let _this = this;
      let page = 1;
      this.loading = true;

      //监听搜索框输入值,发送请求进行查询
      bus.$on('searchsubmit', function (data) {
        let params = {
          veg_name: data
        };
        _this.dataList = [];
        request(API.search, params, 'POST', _this);
      });

      //请求当日数据
      request(API.vegetable, {page: page},'GET', _this);

      window.onscroll = function () {
        if (getDocumentTop() + getWindowHeight() == getScrollTop() && page != _this.totalPage) {
          _this.loading = true;
          page++;
          request(API.vegetable, {page: page}, 'GET', _this);
        }else if (page == _this.totalPage) {
          //TODO: 拉到底的处理
          console.log('已经是最后一页了');
        }
      }
    },
    components: {
      Loading
    }
  }

  function request (url, data, method, _this) {
    $.ajax({
      url: url,
      method: method,
      data: data,
      success (res) {
        _this.loading = false;

        //如果返回内容为空,重新加载前一天的数据
        //TODO: 搜索返回内容为空时
        //TODO: 历史内容返回也为空时
        //TODO: 搜索完成后返回的问题

        if(res.content.length == 0){
          let date = new Date();
          let historydate = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+ (date.getDate()-1);
          let data = {
            page: _this.page,
            date: historydate
          };
          request(API.history, 'GET', data, _this);
        }
        _this.totalPage = res.total_page;
        _this.dataList = _this.dataList.concat(res.content);
//        console.log(_this.dataList);
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
