<template>
  <md-layout md-align="center">
    <md-layout md-flex="50">
      <md-card>
        <md-card-header>
          <md-card-header-text>
            <div class="md-title">{{ user.name }}</div>
            <div class="md-subhead">{{ user.email }}</div>
          </md-card-header-text>
  
          <md-card-media>
            <img src="http://i.imgur.com/1rTODyG.jpg" alt="People">
          </md-card-media>
        </md-card-header>
  
        <md-card-actions>
          <md-button>Action</md-button>
          <md-button>Action</md-button>
        </md-card-actions>
      </md-card>
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
