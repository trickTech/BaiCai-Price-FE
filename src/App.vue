<template>
  <div id="app">
    <v-header></v-header>
    <router-view></router-view>
    <v-tab></v-tab>
  </div>
</template>

<script>
  import vHeader from './components/Header'
  import vList from './components/MainList'
  import vTab from './components/BottomTab'

  export default {
    components: {
      vHeader,
      vList,
      vTab
    }
  }
</script>

<style>
  * {
    padding: 0;
    margin: 0;
  }

  html {
    height: 100%;
  }

  body {
    text-align: center;
  }

</style>
