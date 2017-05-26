<template>
  <md-layout class="search-result-grid">
    <md-layout md-align="center" md-flex="25" v-for="result in searchResult" key="result">
      <md-whiteframe>
        <md-avatar class="avatar">
          <img src="http://i.imgur.com/1rTODyG.jpg" alt="Avatar">
        </md-avatar>
        <div class="md-title">{{result.name}}</div>
        <div class="md-subhead">{{result.city}}, {{result.country}}</div>
  
      </md-whiteframe>
    </md-layout>
  </md-layout>
</template>

<script>
export default {
  name: 'search-result-grid',
  props: ['searchResult'],
  data () {
    return {
      searchString: '',
      msg: 'Welcome to Alpha'
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
