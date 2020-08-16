<template>
  <div id="app">
    <NavBar :navName="$store.state.navName"></NavBar>
    <div class="content">
      <router-view v-if="isRouterAlive" class="page"></router-view>
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
    provide() {
      return {
        reload: this.reload,
      };
    },
    data() {
      return {
        isRouterAlive: true,
      };
    },
    mounted() {
      this.device();
    },
    methods: {
      reload() {
        this.isRouterAlive = false;
        this.$nextTick(() => {
          this.isRouterAlive = true;
        });
      },
      device() {
        if (
          !navigator.userAgent.match(
            /iPhone|iPod|Android|ios|iOS|iPad|Backerry|WebOS|Symbian|Windows Phone|Phone/i
          )
        ) {
          this.$alert(
            `<div style="text-align:center; font-size:20px">
              <h1 style="margin-bottom:10px">
                请手机扫描二维码或者使用浏览器手机模式浏览
              </h1>
              <div>
                <img
                  src="https://s1.ax1x.com/2020/07/16/UDwCE8.png"
                  alt="二维码"
                />
              </div>
            </div>`,
            "提示",
            {
              dangerouslyUseHTMLString: true,
            }
          );
        }
      },
    },
  };
</script>

<style>
  body {
    background-color: #e5e5e5;
    padding: 0 !important;
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
  .el-message {
    min-width: 270px !important;
  }
  @media screen and (max-width: 750px) {
    .el-message-box {
      width: 80% !important;
    }
  }
</style>
