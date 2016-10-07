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
  import vUnable from './components/Unable'

  export default {
    components: {
      vHeader,
      vList,
      vTab,
      vUnable
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
    padding-top: 100px;
    padding-bottom: 50px;
  }

</style>
