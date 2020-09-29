import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    app,
  },
  getters: {
    sidebar: state => state.app.sidebar,
  }
});

export default store
