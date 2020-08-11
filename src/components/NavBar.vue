<template>
  <div class="navbar">
    <div class="navbarItem">
      <i class="el-icon-notebook-1"></i>
    </div>
    <div class="navbarItem">
      <p>XX账本</p>
    </div>
    <div class="navbarItem">
      <span class="nav">{{ navName }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavBar",
    props: {
      navName: {
        type: String,
        default: "首页",
      },
    },
    beforeCreate() {
      console.log(this.$route.path);
    },
  };
</script>

<style>
  @import "~@/assets/css/base.css";
  .navbar {
    display: flex;
    text-align: center;
    line-height: 55px;
    height: 55px;
    font-size: 20px;
    background-color: var(--theme-color);
    color: var(--white);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }
  .navbar .navbarItem {
    flex: 1;
  }
</style>
