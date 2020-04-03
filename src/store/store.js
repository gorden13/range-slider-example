import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    minValue: 1000,
    maxValue: 9100,
    maxRangeValue: 10000,
    minRangeValue: 50,
    interval: 50,
    tooltip: "none",
    dotSize: 18
  },
  mutations: {
    setMinValue(state, value) {
      state.minValue = value;
    },
    setMaxValue(state, value) {
      state.maxValue = value;
    }
  },
  getters: {
    minValue: state => state.minValue,
    maxValue: state => state.maxValue,
    maxRangeValue: state => state.maxRangeValue,
    minRangeValue: state => state.minRangeValue,
    interval: state => state.interval,
    tooltip: state => state.tooltip,
    dotSize: state => state.dotSize
  }
});
