<template>
  <md-layout class="search-result-grid" md-align="center">
    <md-layout md-flex-small="90" md-flex-large="75" md-flex-medium="100" md-flex="50">
      <md-layout md-align="center" md-flex="100" v-if="searchResult.length == 0">
        <md-spinner md-indeterminate></md-spinner>
      </md-layout>
      <transition name="fade">
        <md-layout md-align="center" v-if="searchResult.length > 0">
          <md-card md-with-hover @click.native="toInfo(person['.key'])" v-for="person in searchResult" :key="person['.key']" v-if="equalsTo(person)">
            <md-layout>
              <md-layout md-flex="100" md-align="center">
                <md-avatar class="avatar">
                  <md-image v-if="person.url" :md-src="person.url"></md-image>
                  <md-icon class="md-size-2x" v-else>person</md-icon>
                </md-avatar>
              </md-layout>
              <md-layout md-flex="100" md-align="center">
                <div class="md-title">{{ person.name }}</div>
              </md-layout>
              <md-layout md-flex="100" md-align="center">
                <div class="md-subhead">{{ person.lives }}</div>
              </md-layout>
            </md-layout>
          </md-card>
        </md-layout>
      </transition>
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
      var lives = person.lives.toLowerCase()
      var search = this.searchString.toLowerCase()
      return name.indexOf(search) !== -1 || lives.indexOf(search) !== -1
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
  justify-content: center;
  align-items: center;
  padding: 24px;
  width: 280px;
  margin: 8px;
  min-height: 140px;
  text-align: center;
  box-shadow: none;
  border: 1px solid rgba(0, 0, 0, 0.14);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
}

.md-card:hover {
  -ms-transform: translate(0, -5px);
  -webkit-transform: translate(0, -5px);
  transform: translate(0, -5px);
}

.search-result-grid {
  padding: 80px 0;
}

.avatar {
  margin: 8px;
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
