<template>
  <div id="app">
    <NavBar :navName="$store.state.navName"></NavBar>
    <div class="content">
      <router-view class="page"></router-view>
    </div>
    <MainTabBar></MainTabBar>
  </div>
</template>

<script>
  import NavBar from "@/components/NavBar.vue";
  import MainTabBar from "@/components/tabbar/MainTabBar.vue";
  export default {
    name: "app",
    components: {
      NavBar,
      MainTabBar,
    },
  };
</script>

<style>
  body {
    background-color: #e5e5e5;
  }
  .content {
    padding-top: 55px;
    padding-bottom: 55px;
    height: calc(100% - 100px);
    position: relative;
    bottom: 0px;
    left: 0;
    right: 0;
  }
  .page {
    width: 100%;
  }
</style>
