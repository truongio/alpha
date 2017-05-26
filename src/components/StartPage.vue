<template>
  <div class="start-page-container">
    <md-layout md-align="center">
      <md-layout md-flex="50">
        <md-input-container>
          <label>Search</label>
          <md-input v-model="searchString"></md-input>
        </md-input-container>
      </md-layout>
    </md-layout>
    <search-result-grid :searchResult="searchResult"></search-result-grid>
  </div>
</template>

<script>
import SearchResultGrid from '@/components/SearchResultGrid'

export default {
  name: 'start-page',
  components: {
    SearchResultGrid
  },
  data () {
    return {
      searchString: '',
      msg: 'Welcome to Alpha',
      searchResult: [
        { name: 'Truong Hoang', city: 'Kristinehamn', country: 'Sweden' },
        { name: 'Anders Andersson', city: 'Stockholm', country: 'Sweden' },
        { name: 'Erik Eriksson', city: 'Göteborg', country: 'Sweden' },
        { name: 'Per Persson', city: 'Malmö', country: 'Sweden' },
        { name: 'Truong Hoang', city: 'Kristinehamn', country: 'Sweden' },
        { name: 'Anders Andersson', city: 'Stockholm', country: 'Sweden' },
        { name: 'Erik Eriksson', city: 'Göteborg', country: 'Sweden' },
        { name: 'Per Persson', city: 'Malmö', country: 'Sweden' }
      ]
    }
  }
}
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
