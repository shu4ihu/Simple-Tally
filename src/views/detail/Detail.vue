<template>
  <div class="detail">
    <div class="detailTitle">全部收支</div>
    <div v-if="tallyData.length > 0">
      <TallyList></TallyList>
    </div>
    <div class="noData" v-else>暂无数据</div>
  </div>
</template>

<script>
  import TallyList from "@/components/TallyList";
  export default {
    name: "Detail",
    data() {
      return {
        tallyData: this.$store.getters.getTallyData,
      };
    },
    components: {
      TallyList,
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
