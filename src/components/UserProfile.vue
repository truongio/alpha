<template>
  <md-layout>
    <md-layout md-flex="100" md-align-small="center">
      <md-layout md-flex="40" md-flex-small="100" md-column>
        <div class="profile-info">
          <md-layout md-align="end" md-align-small="center">
            <md-image v-if="user.url" :md-src="user.url" class="image" width="150" height="150"></md-image>
            <md-image v-else md-src="http://i.imgur.com/hdp9Eil.jpg" class="image" width="150" height="150"></md-image>
          </md-layout>
          <div class="person-info">
            <md-layout md-flex="100" md-align="end" md-align-small="center">
              <span class="md-display-1">{{ user.name }}</span>
            </md-layout>
          </div>
        </div>
      </md-layout>
      <md-layout md-flex="40" md-flex-small="90">
        <div class="profile-more-info">
          <md-layout md-flex="50">
            <span class="md-display-2">About</span>
          </md-layout>
          <div class="basic-info">
            <table>
              <tbody>
                <tr>
                  <td style="width:60%;color:#ccc">Birthday</td>
                  <td>{{ user.day }} {{user.month}}, {{ user.year }}</td>
                </tr>
                <tr>
                  <td style="width:60%;color:#ccc">Sex</td>
                  <td>{{ user.sex }}</td>
                </tr>
                <tr>
                  <td style="width:60%;color:#ccc">Lives</td>
                  <td>{{ user.lives }}</td>
                </tr>
                <tr>
                  <td style="width:60%;color:#ccc">Works at</td>
                  <td>{{ user.work }}</td>
                </tr>
              </tbody>
            </table>
          </div>
  
          <md-layout class="description" md-flex="50">
            {{ user.description }}
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
  padding-top: 40px;
}

.person-info {
  margin: 24px 0;
}

.profile-more-info {
  text-align: start;

  margin: 40px 40px 0 40px;
}

.basic-info {
  margin: 24px 0;
}

.description {
  margin-top: 40px;
}
</style>
