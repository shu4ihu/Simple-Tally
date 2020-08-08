<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar",
  };
</script>

<style>
  @import "~@/assets/css/base.css";
  .tabbar {
    width: 100vw;
    display: flex;
    text-align: center;
    height: 55px;
    position: fixed;
    left: 0px;
    right: 0px;
    bottom: 0px;
    font-size: 15px;
    background-color: #f6f6f7;
  }
</style>
