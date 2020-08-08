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
  },
  mutations: {
    navNameChange(state, newName) {
      state.navName = newName;
    },
  },
  getters: {
    getTallyData(state) {
      return state.tallyData;
    },
    getTags(state) {
      return state.tags;
    },
  },
});

export default store;
