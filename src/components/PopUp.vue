<template>
  <div class="mask">
    <div class="content">
      <h1>你好</h1>
    </div>
  </div>
</template>

<style>
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
