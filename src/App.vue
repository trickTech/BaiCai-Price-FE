<template>
  <div id="app">
    <v-header></v-header>
    <router-view></router-view>
    <v-tab></v-tab>
    <!--<v-pop-up></v-pop-up>-->
  </div>
</template>

<script>
  import vHeader from './components/Header'
  import vList from './components/MainList'
  import vTab from './components/BottomTab'
  import vUnable from './components/Unable'
  import vPopUp from './components/PopUp'

  export default {
    components: {
      vHeader,
      vList,
      vTab,
      vUnable,
      vPopUp
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
    padding-top: 76.33px;
    padding-bottom: 50px;
  }

</style>
