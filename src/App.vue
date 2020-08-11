<template>
  <div id="app">
    <NavBar :navName="$store.state.navName"></NavBar>
    <router-view class="page"></router-view>
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
  .page {
    position: relative;
    top: 55px;
    left: 0;
    right: 0;
  }
</style>
