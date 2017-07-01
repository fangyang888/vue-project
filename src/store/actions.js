
import * as types from '../mutation_types'

const initTime = {
  time: new Date().getDate()
};



export default {
  repositoryList({ commit },data) {
    commit(types.REPOSITORY_LIST, data)

  },
  updateList({commit},list){
     commit(types.UPDATE_LIST,list)
  }
};



