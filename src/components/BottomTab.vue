<template>
  <div class="bottom-tab">
    <span class="tab" v-on:click="changeNav(1)">筛选</span>
    <span class="tab" v-on:click="changeNav(2)">历史</span>
    <span class="tab" v-on:click="changeNav(3)">推荐</span>
    <span v-if="status==0" class="tab" v-on:click="changeNav(4)">关于</span>
    <span v-if="status==1" class="tab" v-on:click="changeNav(5)">主页</span>
  </div>
</template>
<script>

  export default {
    data () {
      return {
        status: 0
      }
    },
    methods: {
      changeNav (newNav) {
        switch (newNav) {
          case 1:
            this.$router.replace('/unable');
            break;
          case 2:
            this.$router.replace('/unable');
            break;
          case 3:
            this.$router.replace('/unable');
            break;
          case 4:
            this.$router.replace('/about');
            break;
          case 5:
            this.$router.replace('/');
            break;
        }
        this.whereAmI();
      },
      whereAmI () {
        switch (this.$route.path) {
          case '/':
            this.status = 0;
            break;
          case '/about':
            this.status = 1;
            break;
          default:
            this.status = 1;
            break;
        }
      }
    },
    mounted () {
      this.whereAmI();
    }
  }
</script>
<style lang="less" scoped>
  .bottom-tab {
    position: fixed;
    bottom: 0;
    width: 100%;
  }

  .tab {
    display: inline-block;
    float: left;
    width: 25%;
    padding: 15px;
    background-color: green;
    border: 1px solid white;
    box-sizing: border-box;
    color: white;

  &
  :active {
    background: darkseagreen;
  }

  }
</style>
