<template>
  <div class="container">
    <div class="w-full text-center">
      <h1 class="subtitle">
        Movie Finder
      </h1>
      <Loader v-if="isLoading" />
      <form
        class="max-w-md mx-auto px-6 py-3 border border-gray-200 border-opacity-75 rounded-lg shadow-lg w-full space-x-6 flex items-center bg-white"
        @submit.prevent="searchMovie"
      >
        <button class="focus:outline-none">
          <fa class="text-gray-500" icon="search" />
        </button>
        <input
          v-model="query"
          type="search"
          class="w-full bg-transparent text-base focus:outline-none"
          placeholder="Type some title..."
        >
        <button
          type="submit"
          class="bg-indigo-500 text-white py-2 text-sm px-3 rounded focus:outline-none"
        >
          Search
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  name: 'HomePage',
  data: () => ({
    query: ''
  }),
  computed: {
    ...mapState({
      isLoading: (state: any) => state.movies.isLoading
    })
  },
  methods: {
    searchMovie () {
      this.$store.dispatch('movies/search', this.query)
      this.$router.push({ path: 'search', query: { t: this.query } })
    }
  }
})
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>
