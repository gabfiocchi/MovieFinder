<template>
  <div class="container flex-col">
    <Loader v-if="isLoading" />
    <form
      class="max-w-md mx-auto px-6 py-3 border border-gray-200 border-opacity-75 rounded-lg shadow-lg w-full space-x-6 flex items-center bg-white"
      @click.prevent="searchMovie"
    >
      <button class="focus:outline-none">
        <fa class="text-gray-500" icon="search" />
      </button>
      <input
        :value="$route.query.t"
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
    <vue-horizontal-list class="w-full" :items="results" :options="options">
      <template
        v-slot:default="{ item }"
        class="border border-gray-200 border-opacity-75 rounded-lg shadow-lg"
      >
        <img
          class="h-full w-full border border-gray-200 border-opacity-75 rounded-lg shadow-lg"
          :src="item.Poster"
          :alt="item.Title"
        >
        <div>
          <h2>{{ item.Title }} ({{ item.Year }})</h2>
        </div>
      </template>
    </vue-horizontal-list>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import VueHorizontalList from 'vue-horizontal-list'

export default Vue.extend({
  components: {
    VueHorizontalList
  },
  async fetch () {
    if (process.server) {
      await this.$store.dispatch('movies/search', this.$route.query.t)
    }
  },
  data: () => ({
    options: {
      item: {
        class: ''
      },
      responsive: [
        { end: 576, size: 1 },
        { start: 576, end: 768, size: 2 },
        { size: 3 }
      ]
    }
  }),
  computed: {
    ...mapState({
      isLoading: (state: any) => state.movies.isLoading,
      results: (state: any) => state.movies.items
    })
  },
  methods: {
    searchMovie () {
      this.$router.push('/')
    }
  }
})
</script>
