import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selected: true
  },
  mutations: {},
  actions: {},
  getters: {
    todayTasks: () => {
      return ''
    }
  }
})