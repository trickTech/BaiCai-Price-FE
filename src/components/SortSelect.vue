<template>
  <div class="content" >
    <br>
    <h3>排序选项</h3><br>
    <span class="sort-btn">按最低价</span>
    <span class="sort-btn">按最高价</span>
    <span class="sort-btn">按平均价</span><br><br>
    <span class="sort-btn">从高到低</span>
    <span class="sort-btn">从低到高</span><br><br>
    <span class="sort-btn" v-on:click="submitSort">确定</span><br>
  </div>
</template>

<script>
  import bus from '../util/bus'

  export default{
    methods: {
      submitSort () {
        console.log(1);
        bus.$emit('sortsubmit','success');
      }
    }
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
