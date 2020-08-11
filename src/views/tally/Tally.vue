<template>
  <div class="tally">
    <TallyInput></TallyInput>
    <!-- 标签部分 -->
    <TallyTags></TallyTags>
  </div>
</template>

<script>
  import TallyInput from "@/components/TallyInput.vue";
  import TallyTags from "@/components/TallyTags.vue";
  export default {
    name: "Tally",
    components: {
      TallyTags,
      TallyInput,
    },
  };
</script>

<style></style>
