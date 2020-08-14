<template>
  <TabBar>
    <TabBarItem
      v-for="(item, index) in tabbarItems"
      :key="index"
      :path="item.path"
      @click="navName = item.title"
      :item="item"
    >
      <i :class="item.icon" slot="itemIcon"></i>
      <span slot="itemText">{{ item.title }}</span>
    </TabBarItem>
  </TabBar>
</template>

<script>
  import TabBar from "@/components/tabbar/TabBar.vue";
  import TabBarItem from "@/components/tabbar/TabBarItem.vue";
  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem,
    },
    data() {
      return {
        navName: "首页",
        tabbarItems: [
          {
            icon: "el-icon-house",
            title: "首页",
            path: "home",
          },
          {
            icon: "el-icon-tickets",
            title: "明细",
            path: "detail",
          },
          {
            icon: "el-icon-edit-outline",
            title: "记账",
            path: "tally",
          },
          {
            icon: "el-icon-price-tag",
            title: "标签",
            path: "tag",
          },
        ],
      };
    },
  };
</script>

<style></style>
