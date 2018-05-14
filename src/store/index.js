import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    title: '现在我是异步获取的mock数据',
    list: []
  },
  mutations: {
    changeListTitle(state, payload){
      state.title = payload.title;
    },
    getSelectorList(state, payload){
      state.list = payload;
    }
  },
  actions: {
    getListAction({commit}){
      //  异步获取的数据放到action中，在action中提交mutation改变state。
      axios.get('https://easy-mock.com/mock/5af934154c81d3489e4dd8af/selector/')
        .then((data) => {
          commit('getSelectorList', data.data);
        })
        .catch((error) => {
          console.log('m-error:', error);
        })
    }
  }
})

export default store;
