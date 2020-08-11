<template>
  <div>
    <h2>Tag</h2>
    <!-- <h2>{{ path }}</h2> -->
  </div>
</template>

<script>
  export default {
    name: "Tag",
    data() {
      return {
        path: this.$store.getters.getNavName,
      };
    },
  };
</script>

<style></style>
