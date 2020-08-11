<template>
  <div class="tallyList">
    <ul>
      <li v-for="(item, index) in tallyData" :key="index">
        <el-row class="tallyDataItem">
          <el-col
            :class="['I&E', item.type == '支出' ? 'expenseList' : 'incomeList']"
            >{{ item.type }}</el-col
          >
          <el-col class="tag=">{{ item.tag }}</el-col>
          <el-col class="remark">{{ item.remark }}</el-col>
          <el-col
            :class="[
              'price',
              item.type == '支出' ? 'expenseList' : 'incomeList',
            ]"
            >{{ item.price }} 元</el-col
          >
          <el-col class="time">{{ item.createdTime | filterDate }}</el-col>
        </el-row>
      </li>
    </ul>
  </div>
</template>

<script>
  import { filterDate } from "@/filters/index.js";
  export default {
    name: "TallyList",
    data() {
      return {
        tallyData: this.$store.getters.getTallyData,
      };
    },
    filters: {
      filterDate,
    },
  };
</script>

<style scoped>
  .tallyList .tallyDataItem {
    box-sizing: content-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 7px 0;
    padding: 6px 8px;
    background-color: white;
    border-radius: 5px;
    height: 16px;
    line-height: 16px;
    text-align: center;
  }
  .expenseList {
    color: red;
  }
  .incomeList {
    color: green;
  }
</style>
