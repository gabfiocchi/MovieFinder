export default {
  async search ({ commit }, params) {
    commit('SET_IS_LOADING', true)
    try {
      const resp = await this.$axios.get('?s=' + params + '&type=movie&apikey=1a210ad1')
      if (resp.data.Response === 'True') {
        commit('SET_ITEMS', resp.data)
      } else {
        commit('SET_ITEMS', {
          Search: [],
          totalResults: 0
        })
      }
    } catch (error) {
      console.log('error', error)
    }
    commit('SET_IS_LOADING', false)
  }
}
