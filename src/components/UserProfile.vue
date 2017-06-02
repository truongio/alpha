<template>
  <md-layout md-align="center">
    <md-layout md-flex="100" md-align="center">
      <div class="logo">
        <img src="https://vuejs.org/images/logo.png" width="100px" />
      </div>
    </md-layout>
    <md-layout md-flex="30">
      <md-layout md-flex="20" md-column>
        <div class="profile-info">
          <md-layout md-align="end">
              <md-image md-src="http://i.imgur.com/CJCYylN.jpg" width="100px" height="100px" alt="Avatar"></md-image>
          </md-layout>
          <md-layout md-flex="100" md-align="end">
            <span class="md-title">{{ user.name }}</span>
          </md-layout>
          <md-layout md-flex="100" md-align="end">
            <span class="md-subheading">{{ user.email }}</span>
          </md-layout>
          <md-layout md-flex="100" md-align="end">
            <span class="md-body">{{ user.city }}</span>
          </md-layout>
          <md-layout md-flex="100" md-align="end">
            <span class="md-body">{{ user.country }}</span>
          </md-layout>
        </div>
      </md-layout>
      <md-layout md-flex="80" md-column md-align="center">
        <div class="profile-info">
          <md-layout md-flex="100" md-align="center">
            <md-avatar class="avatar">
              <img :src="user.url" alt="Avatar">
            </md-avatar>
          </md-layout>
          <md-layout md-flex="100" md-align="center">
            <span class="md-title">{{ user.name }}</span>
          </md-layout>
          <md-layout md-flex="100" md-align="center">
            <span class="md-subheading">{{ user.email }}</span>
          </md-layout>
          <md-layout md-flex="100" md-align="center">
            <span class="md-body">{{ user.city }}</span>
          </md-layout>
          <md-layout md-flex="100" md-align="center">
            <span class="md-body">{{ user.country }}</span>
          </md-layout>
        </div>
      </md-layout>
    </md-layout>
  </md-layout>
</template>

<script>
export default {
  name: 'user-profile',
  data() {
    return {
      user: {}
    }
  },
  mounted: function () {
    var self = this
    this.$root.$firebaseRefs.person.child(this.$route.params.id).once('value').then(function (snapshot) {
      self.user = snapshot.val()
    })
  }
}
</script>

<style scoped>
.profile-info {
  padding-top: 80px;
}
</style>
