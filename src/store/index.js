import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    navName: "首页",
    tags: window.localStorage.getItem("tags")
      ? JSON.parse(window.localStorage.getItem("tags"))
      : ["衣", "食", "住", "行"],
    tallyData: window.localStorage.getItem("tallyData")
      ? JSON.parse(window.localStorage.getItem("tallyData"))
      : [],
    tallyType: 0,
    selectedTag: "衣",
    selectedType: "支出",
  },
  mutations: {
    navNameChange(state, newName) {
      state.navName = newName;
    },
    setTallyData(state, data) {
      const newData = [data, ...state.tallyData];
      state.tallyData = newData;
      window.localStorage.setItem("tallyData", JSON.stringify(newData));
    },
    setTag(state, data) {
      state.tags = data;
      window.localStorage.setItem("tags", JSON.stringify(data));
    },
    setSelectedTag(state, tag) {
      state.selectedTag = tag;
    },
    setSelectedType(state, type) {
      state.tallyType = type;
      state.selectedType = type === 0 ? "支出" : "收入";
    },
    resetTallyTag(state, tag) {
      state.selectedTag = tag;
    },
    resetTallyType(state, type) {
      state.tallyType = 0;
      state.selectedType = type;
    },
    refresh(state, href) {
      let refreshName = href.includes("tag")
        ? "标签"
        : href.includes("detail")
        ? "明细"
        : href.includes("tally")
        ? "记账"
        : "首页";
      state.navName = refreshName;
    },
  },
  getters: {
    getTallyData(state) {
      return state.tallyData;
    },
    getTags(state) {
      return state.tags;
    },
    // getNavName(state) {
    //   return this.$route.path;
    // },
  },
});

export default store;
