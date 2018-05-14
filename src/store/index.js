import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    title: '11'
  },
  mutations: {
    changeListTitle(state, payload){
      state.title = payload.title;
    }
  }
})

export default store;
