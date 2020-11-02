import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = () => ({
  items: [],
  results: 0,
  isLoading: false
})

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
