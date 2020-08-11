<template>
  <div class="homeContent">
    <p class="title">今天是</p>
    <p class="date">{{ year }}年 {{ month + 1 }}月 {{ day }}日</p>
    <p class="tip">点击下方的「记账」记一笔吧~</p>
  </div>
</template>

<script>
  export default {
    name: "HomeContent",
    computed: {
      year() {
        return new Date().getFullYear();
      },
      month() {
        return new Date().getMonth();
      },
      day() {
        return new Date().getDate();
      },
    },
  };
</script>

<style>
  @import "~@/assets/css/base.css";
  .homeContent {
    background-color: #bbddf3;
    color: black;
    padding: 20px;
    font-size: 18px;
  }
  .date,
  .tip {
    text-align: center;
  }
  .date {
    padding: 20px 0;
    font-size: 35px;
    word-spacing: 0;
  }
</style>
