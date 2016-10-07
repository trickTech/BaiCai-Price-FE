<template>
  <div class="bottom-tab">
    <span class="tab">筛选</span>
    <span class="tab">历史</span>
    <span class="tab">推荐</span>
    <span class="tab">关于</span>
  </div>
</template>

<style>
  .bottom-tab{
    position: fixed;
    bottom: 0;
    width: 100%;
  }

  .tab{
    display: inline-block;
    float: left;
    width: 25%;
    padding: 15px;
    background-color: white;
    border: 1px solid green;
    box-sizing: border-box;
  }

  .tab:hover{
    background: darkseagreen;
  }
</style>
