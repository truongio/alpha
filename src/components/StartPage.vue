<template>
  <div class="start-page-container">
    <md-layout md-align="center">
      <md-layout md-flex="30">
        <md-input-container>
          <label>Search</label>
          <md-input v-model="searchString"></md-input>
        </md-input-container>
      </md-layout>
    </md-layout>
    <search-result-grid :searchResult="this.$root.person" :searchString="searchString"></search-result-grid>
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
      name: '',
      city: '',
      country: '',
      url: ''
    }
  },
  methods: {
    pushPerson () {
      this.$root.$firebaseRefs.person.push(
        {
          'url': this.url,
          'name': this.name,
          'city': this.city,
          'country': this.country,
          'created_at': -1 * new Date().getTime()
        })
        .then(this.$router.push('/'))
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

.start-page-container {
  margin-top: 40px;
}
</style>
