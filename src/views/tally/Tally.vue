<template>
  <div class="tally">
    <TallyTags
      :editItemTag="this.item.tag"
      :flag="this.$route.params.flag"
    ></TallyTags>
    <TallyInput
      :flag="this.$route.params.flag"
      :editItem="this.item"
    ></TallyInput>
  </div>
</template>

<script>
  import TallyInput from "@/components/TallyInput.vue";
  import TallyTags from "@/components/TallyTags.vue";
  export default {
    name: "Tally",
    data() {
      return {
        defaultItem: {
          tag: "衣",
          type: "支出",
          no: 0,
          price: 0,
          remark: "",
          createdTime: "",
        },
      };
    },
    computed: {
      item() {
        return this.$route.params.item === undefined
          ? this.defaultItem
          : this.$route.params.item;
      },
    },
    components: {
      TallyTags,
      TallyInput,
    },
  };
</script>

<style></style>
