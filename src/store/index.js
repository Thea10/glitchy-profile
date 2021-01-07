import Vue from "vue";
import Vuex from "vuex";
import { getData } from "../services/getInfo";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    personalInfo: {}
  },
  getters: {
    getStoreInfo: state => state.personalInfo
  },
  mutations: {
    SET_INFO(state, payload) {
      state.personalInfo = payload;
    }
  },
  actions: {
    async GET_INFO({commit}){
      try {
        const response = await getData();
        commit("SET_INFO", response.data);
        return response.data;
      } catch (error) {
        return handleError(error);
      }
    }
  }
});

function handleError(error) {
  console.error(error);
  return Promise.reject(error);
}

