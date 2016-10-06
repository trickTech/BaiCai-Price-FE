<template>
  <div>
    <h3 v-if="isNull">未请求到数据,请检查您的网络或联系技术人员</h3>
    <button @click="changeStateTest()">123</button>
  </div>
</template>
<style lang="less" scoped>

</style>
<script>
  export default{
    props: {
      isNull: Boolean
    },
    methods: {
      changeStateTest () {
        //this.$parent.isNull = false;
//        this.isNull = false;
        console.log(123);
        this.$emit('changeStatus', false);
      }
    },
    mounted () {

    }
  }
</script>
