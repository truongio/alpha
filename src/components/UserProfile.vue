<template>
  <md-layout md-align="center">
    <md-layout md-flex="100" md-align="center">
      <md-avatar class="md-avatar-icon md-large md-warn">
        <md-icon>notes</md-icon>
      </md-avatar>
    </md-layout>
    <md-layout md-flex="50" md-align="center">
      <md-layout md-flex="100" md-align="center">
        <span class="md-display-1">{{ user.name }}</span>
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
    </md-layout>
  </md-layout>
</template>

<script>
export default {
  name: 'user-profile',
  data () {
    return {
      user: {}
    }
  },
  mounted: function () {
    var self = this
    this.$root.$firebaseRefs.person.child(this.$route.params.id).once('value').then(function(snapshot) {
      self.user = snapshot.val()
    })
  },
  methods: {
    exampleMethod () {
      console.log('Do something')
    }
  }
}
</script>

<style scoped>

</style>
