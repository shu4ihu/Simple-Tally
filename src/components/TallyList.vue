<template>
  <div class="tallyList">
    <el-collapse>
      <el-collapse-item
        :title="dateItem.createdTime"
        v-for="(dateItem, index) in collapseItem"
        :key="index"
        class="dateItem"
      >
        <ul>
          <li v-for="(item, index) in dateItem.item" :key="index">
            <el-row class="tallyDataItem">
              <el-col
                :class="[
                  'I&E',
                  item.type == '支出' ? 'expenseList' : 'incomeList',
                ]"
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
            </el-row>
          </li>
        </ul>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
  import { filterDate } from "@/filters/index.js";
  export default {
    name: "TallyList",
    data() {
      return {
        tallyData: this.$store.state.tallyData,
        collapseItem: [],
      };
    },
    methods: {
      transDate(time) {
        const date = new Date(time);
        const year = date.getFullYear() + "-";
        const month =
          (date.getMonth() + 1 <= 10
            ? "0" + (date.getMonth() + 1)
            : date.getMonth() + 1) + "-";
        const day = date.getDate();
        return year + month + day;
      },
      sortedData(arr) {
        let newArr = [];
        arr.forEach((element, i) => {
          let index = -1;
          let alreadyExists = newArr.some((newElement, j) => {
            if (element.createdTime === newElement.createdTime) {
              index = j;
              return true;
            }
          });
          if (!alreadyExists) {
            newArr.push({
              createdTime: element.createdTime,
              item: [element],
            });
          } else {
            newArr[index].item.push(element);
          }
        });
        console.log(newArr);
        return newArr;
      },
    },
    filters: {
      filterDate,
    },
    created() {
      const data = JSON.parse(JSON.stringify(this.tallyData));
      for (let i = 0; i < data.length; i++) {
        const date = this.transDate(data[i].createdTime);
        data[i].createdTime = date;
      }
      this.collapseItem = this.sortedData(data);
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
    font-size: 14px;
  }
  .expenseList {
    color: red;
  }
  .incomeList {
    color: green;
  }
  .remark {
    flex: 0 0 25%;
    width: 25%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .dataItem {
    padding-bottom: 0;
  }
</style>
