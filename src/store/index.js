
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  time: '2015',
  show:false,
  List:[]

};
const getters={
  getList:state=>{
    return state.List
  }
}
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
