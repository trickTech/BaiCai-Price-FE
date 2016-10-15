<template>
  <div class="mask" v-show="isShow">
    <div class="content">
      <v-sort-select></v-sort-select>
    </div>
  </div>
</template>

<style scoped>
  .mask{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0,0,0,0.7);
  }

  .content{
    position: fixed;
    top:50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

</style>

<script>
  import vSortSelect from './SortSelect'
  import bus from '../util/bus'

  export default{
    components: {
      vSortSelect
    },
    data () {
      return {
        isShow: false
      }
    },
    mounted () {
      let _this = this;

      bus.$on('isShow', function (isshow) {
        _this.isShow = isshow;
        console.log(_this.isShow);
      });
      bus.$on('changeFales', function (ishide) {
        _this.isShow = ishide;
      });
    }
  }
</script>
