<template>
  <div id="app">
    <v-header></v-header>
    <v-list></v-list>
  </div>
</template>

<script>
  import Hello from './components/Hello'
  import vHeader from './components/Header'
  import vList from './components/MainList'

  export default {
    components: {
      Hello,
      vHeader,
      vList
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
    min-height: 100%;
    text-align: center;
  }

</style>
