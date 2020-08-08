<template>
  <div class="tally">
    <TallyTags></TallyTags>
    <section class="typeWrap">
      <el-row>
        <el-col>支出</el-col>
        <el-col>收入</el-col>
      </el-row>
    </section>
  </div>
</template>

<script>
  import TallyTags from "@/components/TallyTags.vue";
  export default {
    name: "Tally",
    data() {
      return {
        tags: this.$store.getters.getTags,
      };
    },
    components: {
      TallyTags,
    },
  };
</script>

<style></style>
