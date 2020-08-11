<template>
  <div class="typeWrap">
    <el-row class="type">
      <el-col
        :class="['expense', { selected: type === 0 }]"
        :span="12"
        @click.native.stop="expenseClick()"
        >支出</el-col
      >
      <el-col
        :class="['income', { selected: type === 1 }]"
        :span="12"
        @click.native.stop="incomeClick()"
        >收入</el-col
      >
    </el-row>
  </div>
</template>

<script>
  export default {
    name: "TallyType",
    computed: {
      type: {
        get() {
          return this.$store.state.tallyType;
        },
        set() {},
      },
    },
    methods: {
      expenseClick() {
        this.type = 0;
        this.$store.commit("setSelectedType", 0);
      },
      incomeClick() {
        this.type = 1;
        this.$store.commit("setSelectedType", 1);
      },
    },
  };
</script>

<style>
  .typeWrap {
    background-color: var(--theme-color);
    color: white;
  }
  .type {
    text-align: center;
  }
  .expense,
  .income {
    position: relative;
    padding: 18px 0;
  }
  .selected::after {
    content: "";
    position: absolute;
    bottom: 5px;
    left: 50%;
    margin-left: -25px;
    display: inline-block;
    width: 50px;
    height: 3px;
    background-color: white;
    border-radius: 2px;
    animation: move 0.3s cubic-bezier(0.61, 0.01, 0.44, 1.79);
  }
  @keyframes move {
    from {
      left: 30%;
      opacity: 0;
    }
    to {
      left: 50%;
      opacity: 1;
    }
  }
</style>
