<template>
  <div class="tallyTags">
    <div class="tagsTitle">标签</div>
    <ul class="tagsList">
      <li class="tagsItem" v-for="(item, index) in tags">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "TallyTags",
    data() {
      return {
        tags: this.$store.getters.getTags,
      };
    },
  };
</script>

<style>
  .tallyTags {
    display: flex;
    padding: 40px 15px;
  }
  .tagsTitle {
    flex: 0 0 40px;
    flex-basis: 40px;
    margin-right: 20px;
    font-size: 16px;
    font-weight: 700;
  }
  .tagsList {
    display: flex;
    flex-wrap: wrap;
    max-height: 200px;
    overflow: auto;
  }
  .tagsItem {
    margin: 0 10px 10px 0;
    padding: 10px 15px;
    background-color: #fff;
    border-radius: 10px;
  }
</style>
