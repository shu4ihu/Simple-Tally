<template>
  <div>
    <div class="detailTitle">全部收支</div>
    <div v-if="tallyData.length > 0">1</div>
    <div class="noData" v-else>暂无数据</div>
  </div>
</template>

<script>
  export default {
    name: "Detail",
    data() {
      return {
        tallyData: this.$store.getters.getTallyData,
      };
    },
  };
</script>

<style>
  .detailTitle {
    background-color: #bbddf3;
    height: 44px;
    line-height: 44px;
    font-size: 18px;
  }
  .noData {
    font-size: 28px;
    color: grey;
  }
</style>
