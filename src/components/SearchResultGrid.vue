<template>
  <md-layout class="search-result-grid">
    <md-layout md-align="center">
      <md-layout md-flex-small="90" md-flex-large="75" md-flex-medium="100" md-flex="50">
        <md-layout md-align="center" md-flex="100" v-if="searchResult.length == 0">
          <md-spinner md-indeterminate></md-spinner>
        </md-layout>
        <transition name="fade">
          <md-layout md-align="center" md-gutter="16" v-if="searchResult.length > 0">
            <md-layout class="no-flex" v-for="person in searchResult" :key="person['.key']" v-if="equalsTo(person)">
              <md-card md-with-hover @click.native="toInfo(person['.key'])">
                <md-layout>
                  <md-layout md-align="center">
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
        </transition>
      </md-layout>
    </md-layout>
  </md-layout>
</template>

<script>
export default {
  name: 'search-result-grid',
  props: ['searchResult', 'searchString'],
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
  width: 300px;
  margin-bottom: 16px;
}

.search-result-grid {
  padding: 80px 0;
}

.avatar {
  margin: 8px;
}

.no-flex {
  flex: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s
}

.fade-enter,
.fade-leave-to {
  opacity: 0
}
</style>
