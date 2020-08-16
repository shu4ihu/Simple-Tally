<template>
  <div class="edit">
    <div>
      <label for="remark">备注</label>
      <input id="remark" type="text" :value="$route.params.item.remark" />
    </div>
    <div>
      <label for="price">收支</label>
      <input id="price" type="text" :value="$route.params.item.price" />
    </div>
  </div>
</template>

<script>
  export default {
    name: "EditItem",
    created() {
      console.log(this.$route.params.item);
    },
  };
</script>

<style></style>
