
export default {
  SET_IS_LOADING (state, value) {
    state.isLoading = value
  },
  SET_ITEMS (state, results) {
    state.items = results.Search
    state.results = results.totalResults
  }
}
