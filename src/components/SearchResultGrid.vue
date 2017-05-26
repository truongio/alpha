<template>
  <md-layout class="search-result-grid">
    <md-layout md-align="center" md-flex="25" v-for="result in searchResult" :key="result.name" v-if="fuzzySearch(result)">
      <md-whiteframe>
        <md-avatar class="avatar">
          <img src="http://i.imgur.com/1rTODyG.jpg" alt="Avatar">
        </md-avatar>
        <div class="md-title">{{result.name}}</div>
        <div class="md-subhead">{{result.city}}, {{result.country}}</div>
        <md-button @click.native="toInfo"><md-icon>info</md-icon></md-button>
      </md-whiteframe>
    </md-layout>
  </md-layout>
</template>

<script>
export default {
  name: 'search-result-grid',
  props: ['searchResult', 'searchString'],
  data () {
    return {
      msg: 'Welcome to Alpha'
    }
  },
  methods: {
    toInfo () {
      window.location.href = 'https://www.google.se'
    },
    fuzzySearch (result) {
      var name = result.name.toLowerCase()
      var search = this.searchString.toLowerCase()
      return search === '' ? false : name.indexOf(search) !== -1
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

.md-whiteframe {
  padding: 32px;
  width: 350px;
  margin-bottom: 16px;
}

.search-result-grid {
  padding: 80px;
}

.avatar {
  margin: 8px;
}
</style>
