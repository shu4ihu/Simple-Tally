<template>
  <div>
    <HomeContent></HomeContent>
    <div v-if="tallyData.length > 0">
      <TallyList></TallyList>
    </div>
    <div class="noData" v-else>暂无数据</div>
  </div>
</template>

<script>
  import TallyList from "@/components/TallyList";
  import HomeContent from "@/components/HomeContent.vue";
  export default {
    name: "Home",
    components: {
      HomeContent,
      TallyList,
    },
    data() {
      return {
        tallyData: this.$store.getters.getTallyData,
      };
    },
  };
</script>

<style>
  .noData {
    font-size: 28px;
    color: grey;
  }
</style>
