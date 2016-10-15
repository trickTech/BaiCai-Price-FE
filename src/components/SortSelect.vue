<template>
  <div class="content" >
    <br>
    <h3>排序选项</h3><br>
    <span class="sort-btn" v-for="(option, index) in optionList" v-bind:class="{'select-active': firstOption==index || secondOption==index}" v-on:click="select_act(index)">{{option}}</span>
    <br>
    <span class="sort-btn" v-on:click="submitSort">确定</span><br>
  </div>
</template>

<script>
  import bus from '../util/bus'
  import $ from 'jquery'

  export default{
    data () {
      return {
        optionList: ['最低价', '最高价', '平均价', '从低到高', '从高到低'],
        firstOption: 0,
        secondOption: 3
      }
    },
    methods: {
      select_act (data) {
//        console.log(data);
        if (data < 3 && data != this.firstOption) {
          this.firstOption = data;
        }

        if (data > 2 && data != this.secondOption) {
          this.secondOption = data;
        }

      },
      submitSort () {
        bus.$emit('sortsubmit', this.firstOption, this.secondOption);
        bus.$emit('changeFales', false);
      }
    },
    mounted () {
//      console.log(this.active[0])
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

  .select-active{
    background: darkseagreen;
  }
</style>
