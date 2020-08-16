<template>
  <div class="tallyTags">
    <div class="tagsTitle">标签</div>
    <ul class="tagsList">
      <li
        v-for="(item, index) in tags"
        :key="index"
        :class="['tagsItem', { selectedItem: item === selectedTag }]"
        @click="tagClick(item)"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "TallyTags",
    props: {
      editItemTag: {
        type: String,
        default: "衣",
      },
      flag: {
        type: Number,
        default: 0,
      },
    },
    data() {
      return {
        tags: this.$store.getters.getTags,
        selectedTag: !this.flag
          ? this.$store.state.selectedTag
          : this.editItemTag,
      };
    },
    methods: {
      tagClick(item) {
        this.selectedTag = item;
        this.$store.commit("setSelectedTag", item);
      },
    },
  };
</script>

<style>
  .tallyTags {
    display: flex;
    padding: 10px 15px;
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
  .selectedItem {
    background-color: #bbddf3;
  }
</style>
