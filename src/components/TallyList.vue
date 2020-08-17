<template>
  <div class="tallyList">
    <el-collapse>
      <el-collapse-item
        :title="dateItem.createdTime"
        v-for="(dateItem, index) in collapseItem"
        :key="index"
        class="dateItem"
      >
        <ul class="dateItemList">
          <li v-for="(item, index) in dateItem.item" :key="index">
            <div class="tallyDataItem">
              <div class="tag">
                {{ item.tag }}
                <!-- <span
                  :class="[
                    'I&E',
                    item.type == '支出' ? 'expenseList' : 'incomeList',
                  ]"
                >
                  {{ item.type }}
                </span> -->
              </div>
              <div class="remark">{{ item.remark }}</div>
              <div
                :class="[
                  'price',
                  item.type == '支出' ? 'expenseList' : 'incomeList',
                ]"
              >
                {{ item.price }} 元
              </div>
              <div class="iconWrap">
                <i class="el-icon-edit" @click="editItem(item)"></i>
                <i class="el-icon-delete" @click="deleteItem(item)"></i>
              </div>
            </div>
            <div :class="{ line: !(index + 1 == dateItem.item.length) }"></div>
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
    inject: ["reload"],
    data() {
      return {
        tallyData: this.$store.state.tallyData,
        collapseItem: [],
        tags: this.$store.getters.getTags,
      };
    },
    methods: {
      editItem(item) {
        const route = {
          name: "tally",
          params: {
            item: item,
            flag: 1,
          },
        };
        const tagFind = this.tags.find((element, index) => {
          return element == item.tag;
        });
        if (tagFind) {
          this.$router.push(route);
        } else {
          this.$message({
            type: "info",
            message: "当前收支明细的标签不存在，请先创建该标签！",
          });
        }
      },
      deleteItem(item) {
        console.log(item);
        console.log(this.tallyData);
        const index = this.tallyData.findIndex((element) => {
          return item.no === element.no;
        });
        console.log(index);

        this.$confirm("是否确定删除该收支明细？", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
          .then(() => {
            this.tallyData.splice(index, 1);
            this.$store.commit("saveTallyData", this.tallyData);
            this.$message({
              type: "success",
              message: "删除成功",
            });
            this.reload();
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消删除",
            });
          });
      },
      transDate(time) {
        const date = new Date(time);
        const year = date.getFullYear() + "-";
        const month =
          (date.getMonth() + 1 <= 10
            ? "0" + (date.getMonth() + 1)
            : date.getMonth() + 1) + "-";
        const day = date.getDate();
        return {
          createdTime: year + month + day,
          num: {
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            day: date.getDate(),
          },
        };
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
              date: element.date,
            });
          } else {
            newArr[index].item.push(element);
          }
        });
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
        data[i].createdTime = date.createdTime;
        data[i].date = date.num;
      }
      this.collapseItem = this.sortedData(data);
    },
  };
</script>

<style scoped>
  .tallyList .tallyDataItem {
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 40px;
    position: relative;
    text-align: center;
    font-size: 20px;
  }
  .tallyList .tallyDataItem div {
    display: inline-block;
    line-height: 40px;
  }
  .tallyList .tallyDataItem span {
    font-size: 10px;
  }
  .line {
    background-color: #ebeef5;
    height: 1px;
  }
  .expenseList {
    color: red;
  }
  .incomeList {
    color: green;
  }
  .tag {
    position: absolute;
    left: 10px;
  }
  .price {
    width: 25%;
    font-size: 16px;
    position: absolute;
    right: 80px;
  }
  .iconWrap {
    position: absolute;
    right: 25px;
  }
  .el-icon-delete {
    margin-left: 15px;
    font-size: 18px;
  }
  .remark {
    width: 25%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 16px;
    position: absolute;
    left: 90px;
  }
</style>
