<template>
  <md-layout class="search-result-grid">
    <md-layout md-align="center" md-flex="25" v-for="person in searchResult" :key="person['.key']" v-if="equalsTo(person)">
      <md-whiteframe>
        <md-avatar class="avatar">
          <img src="http://i.imgur.com/1rTODyG.jpg" alt="Avatar">
        </md-avatar>
        <div class="md-title">{{person.name}}</div>
        <div class="md-subhead">{{person.city}}, {{person.country}}</div>
        <md-button @click.native="toInfo(person['.key'])"><md-icon>info</md-icon></md-button>
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
    toInfo (id) {
      this.$router.push(`/user-profile/${id}`)
    },
    equalsTo (person) {
      var name = person.name.toLowerCase()
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
