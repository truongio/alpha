<template>
  <md-layout class="search-result-grid">
    <md-layout md-align="center" md-flex="25" v-for="person in searchResult" :key="person['.key']" v-if="equalsTo(person)">
      <md-card md-with-hover @click.native="toInfo(person['.key'])">
        <md-layout md-align="center">
          <md-layout md-flex="100" md-align="center">
            <md-avatar class="avatar">
              <img src="http://i.imgur.com/1rTODyG.jpg" alt="Avatar">
            </md-avatar>
          </md-layout>
          <md-layout md-flex="100" md-align="center">
            <div class="md-title">{{person.name}}</div>
          </md-layout>
          <md-layout md-flex="100" md-align="center">
            <div class="md-subhead">{{person.city}}, {{person.country}}</div>
          </md-layout>
        </md-layout>
      </md-card>
    </md-layout>
  </md-layout>
</template>

<script>
export default {
  name: 'search-result-grid',
  props: ['searchResult', 'searchString'],
  data() {
    return {
      msg: 'Welcome to Alpha'
    }
  },
  methods: {
    toInfo(id) {
      this.$router.push(`/user-profile/${id}`)
    },
    equalsTo(person) {
      var name = person.name.toLowerCase()
      var search = this.searchString.toLowerCase()
      return name.indexOf(search) !== -1
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

.md-card {
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
