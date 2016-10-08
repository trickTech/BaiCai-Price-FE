<template>
  <div class="header">
    <h3>每日菜价</h3>
    <div class="search">
      <input placeholder="Search"/>
      <button class="search-btn">搜索</button>
    </div>
  </div>
</template>
<style lang="less" scoped>
  .header {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: green;
    color: #fff;
    padding: 9px 0 0 0;

    h3{
      margin: 0 0 6px 0;
    }

    .search {
      width: 100%;
      padding: 1px 0 8px 0;

      input {
        width: 80%;
        height: 30px;
        border: none;
        vertical-align: middle;
      }

      .search-btn {
        width: 15%;
        height: 30px;
        border: none;
        vertical-align: middle;
      }
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
