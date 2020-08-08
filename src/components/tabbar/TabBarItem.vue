<template>
  <div class="tabbarItem" @click="itemClick">
    <div>
      <slot name="itemIcon"></slot>
    </div>
    <slot name="itemText"></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: {
        type: String,
        default: "home",
      },
      item: {
        type: Object,
        default: {},
      },
    },
    methods: {
      itemClick() {
        this.$router.push(this.path);
        this.$store.commit("navNameChange", this.item.title);
      },
    },
  };
</script>

<style>
  .tabbarItem {
    flex: 1;
  }
  .tabbarItem i {
    margin-top: 5px;
    font-size: 30px;
  }
</style>
