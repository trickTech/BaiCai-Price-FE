<template>
  <div class="content">
    <br>
    <h3>排序选项</h3><br>
    <span class="sort-btn">按最低价</span>
    <span class="sort-btn">按最高价</span>
    <span class="sort-btn">按平均价</span><br><br>
    <span class="sort-btn">从高到低</span>
    <span class="sort-btn">从低到高</span><br><br>
    <span class="sort-btn">确定</span><br>
  </div>
</template>

<script>
  export default{

  }
</script>

<style scoped>
  .content{
    width: 310px;
    background: white;
    margin: auto;
    padding: 10px;
  }

  .sort-btn{
    padding: 10px;
    display: inline-block;
    border: 1px solid green;
    margin: 5px;
  }

</style>
