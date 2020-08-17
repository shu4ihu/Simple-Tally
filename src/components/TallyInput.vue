<template>
  <div class="tallyInputWrap">
    <!-- 记账分类部分 -->
    <TallyType :editItemType="this.editItem.type" :flag="this.flag"></TallyType>
    <!-- 输入框 -->
    <div class="tallyInput">
      <div class="input">
        <label for="remark" class="remarkWrap">
          <span class="remarkTitle">备注</span>
          <input
            type="text"
            placeholder="请输入备注"
            class="remarkInput"
            id="remark"
            v-model="remark"
          />
        </label>
        <div class="priceWrap">
          <span class="priceTitle">金额</span>
          <p class="priceInput">{{ price }}</p>
        </div>
      </div>
    </div>
    <div class="calcWrap">
      <ul class="calc">
        <li
          v-for="(item, index) in calcData"
          :key="index"
          :class="[
            'calcItem',
            { zero: item === 0 },
            { confirm: item === '确认' },
          ]"
          @click="calcItemClick(item)"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import TallyType from "@/components/TallyType.vue";
  export default {
    name: "TallyInput",
    components: {
      TallyType,
    },
    props: {
      editItem: {
        type: Object,
        default: {
          tag: "衣",
          type: "支出",
          no: 0,
          price: 0,
          remark: "",
          createdTime: "",
        },
      },
      flag: {
        type: Number,
        default: 0,
      },
    },
    data() {
      return {
        price: !this.flag ? 0 : this.editItem.price,
        tallyData: this.$store.state.tallyData,
        remark: !this.flag ? "" : this.editItem.remark,
        remarkMaxLength: 10,
        calcData: [1, 2, 3, "删除", 4, 5, 6, "清空", 7, 8, 9, "确认", 0, "."],
      };
    },
    computed: {
      tag: {
        get() {
          return this.$store.state.selectedTag;
        },
        set() {},
      },
      type: {
        get() {
          return this.$store.state.selectedType;
        },
        set() {},
      },
    },
    watch: {
      remark(value) {
        if (value.length > this.remarkMaxLength) {
          this.remark = this.remark.slice(0, this.remarkMaxLength);
          this.$message.info(`备注字数不能超过${this.remarkMaxLength}个`);
        }
      },
    },
    methods: {
      calcItemClick(item) {
        switch (item) {
          case "删除": {
            if (this.price.length > 1) {
              this.price = this.price.slice(0, this.price.length - 1);
            } else {
              this.price = 0;
            }
            break;
          }
          case "清空": {
            this.price = 0;
            break;
          }
          case "确认": {
            this.submitClick();
            break;
          }
          case ".": {
            // 当price已经有小数点的时候，重复点小数点按钮不改变price
            if (!this.price.includes(".")) {
              this.price = `${this.price}${item}`;
            }
            break;
          }
          default: {
            if (Number(this.price) > 10000000) {
              this.price = this.price.slice(0, this.price.length - 1);
              this.$message.info("金额不能超过1000万");
            } else {
              this.price =
                this.price == "0" ? `${item}` : `${this.price}${item}`;
            }
            break;
          }
        }
      },
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
      submitClick() {
        !this.flag ? this.submit() : this.edit();
      },
      submit() {
        if (this.remark.trim() && Number(this.price)) {
          const time = new Date().getTime();
          const createdTime = this.transDate(time);
          const price = this.price;
          const remark = this.remark;
          const tag = this.tag;
          const type = this.type;
          const no = time;
          const data = { type, createdTime, price, remark, tag, no };
          this.$store.commit("setTallyData", data);
          this.price = 0;
          this.remark = "";
          this.$store.commit("resetTallyTag", "衣");
          this.$store.commit("resetTallyType", "支出");
          this.$message.success("保存成功");
        } else {
          this.$message.info("备注不能为空，金额也不能为0");
        }
      },
      edit() {
        if (this.remark.trim() && Number(this.price)) {
          const createdTime = this.editItem.createdTime;
          const no = this.editItem.no;
          const price = this.price;
          const remark = this.remark;
          const tag = this.tag;
          const type = this.type;
          const data = { type, createdTime, price, remark, tag, no };
          const index = this.tallyData.findIndex((element) => {
            return element.no === no;
          });
          this.tallyData.splice(index, 1);
          this.$store.commit("setTallyData", data);
          this.price = 0;
          this.remark = "";
          this.$store.commit("resetTallyTag", "衣");
          this.$store.commit("resetTallyType", "支出");
          this.$message.success("保存成功");
        } else {
          this.$message.info("备注不能为空，金额也不能为0");
        }
      },
    },
  };
</script>

<style scoped>
  .tallyInputWrap {
    position: fixed;
    width: 100vw;
    z-index: 1;
    bottom: 56px;
  }
  .input {
    padding: 20px 15px;
    background-color: white;
  }
  .remarkWrap {
    display: flex;
    margin-bottom: 30px;
  }
  .remarkTitle,
  .priceTitle {
    font-weight: 700;
  }
  .remarkInput {
    flex-grow: 1;
    text-align: right;
  }
  .remarkInput:focus {
    outline: none;
  }
  .priceWrap {
    display: flex;
  }
  .priceInput {
    flex-grow: 1;
    text-align: right;
  }
  .calc {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 52px);
    grid-template-areas:
      "a b c d"
      "e f g h"
      "i j k l"
      "m n o l";
    line-height: 52px;
    text-align: center;
    background-color: #f6f6f7;
  }
  .calcItem {
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
  .calcItem:active {
    background-color: #bbddf3;
  }
  .confirm {
    grid-column: 4;
    grid-row-start: 3;
    grid-row-end: 5;
    line-height: 104px;
  }
  .zero {
    grid-row: 4;
    grid-column-start: 1;
    grid-column-end: 3;
  }
</style>
