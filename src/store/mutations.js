import * as  types from '../mutation_types'
import axios from '../http'

export default {
  [types.REPOSITORY_LIST] (state, data) {
    // state.time = data.time
    axios.post(data.url,data.value)
      .then(({ data }) => {
        console.log(data.rowSet);
        state.List = data.rowSet;

      });

  },
  [types.UPDATE_LIST] (state, data) {
    state.List = data
  }

};




