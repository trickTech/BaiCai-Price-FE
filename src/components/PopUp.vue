<template>
  <div class="mask">
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

  export default{
    components: {
      vSortSelect
    }
  }
</script>
