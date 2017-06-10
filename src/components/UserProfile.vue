<template>
  <md-layout>
    <md-layout class="user-profile-container" md-flex="100" md-align-small="center">
      <md-layout md-flex="40" md-flex-small="100" md-column>
        <div class="profile-info">
          <md-layout md-align="end" md-align-small="center">
            <md-image v-if="user.url" :md-src="user.url" class="image" width="100" height="100"></md-image>
            <md-icon v-if="user.url == ''" class="md-size-4x">person</md-icon>
          </md-layout>
          <div class="person-info">
            <md-layout md-flex="100" md-align="end" md-align-small="center">
              <span class="md-headline">{{ user.name }}</span>
            </md-layout>
          </div>
        </div>
      </md-layout>
      <md-layout md-flex="40" md-flex-small="90">
        <md-layout class="profile-more-info">
          <md-layout md-flex="100" md-hide-small>
            <span class="md-display-1">About</span>
          </md-layout>
          <div class="basic-info">
            <table>
              <tbody>
                <tr>
                  <td class="md-caption" style="width:60%;">Birthday</td>
                  <td class="md-body-1">{{ user.day }} {{user.month}} {{ user.year }}</td>
                </tr>
                <tr>
                  <td class="md-caption" style="width:60%;">Sex</td>
                  <td class="md-body-1">{{ user.sex }}</td>
                </tr>
                <tr>
                  <td class="md-caption" style="width:60%;">Lives</td>
                  <td class="md-body-1">{{ user.lives }}</td>
                </tr>
                <tr>
                  <td class="md-caption" style="width:60%;">Works at</td>
                  <td class="md-body-1">{{ user.work }}</td>
                </tr>
              </tbody>
            </table>
          </div>
  
          <md-layout class="description" md-flex="100">
            <md-layout md-flex="70" md-flex-medium="100">
              <pre>{{ user.description }}</pre>
            </md-layout>
          </md-layout>
        </md-layout>
  
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
  margin: 0 40px;
}

.person-info {
  justify-content: end;
  margin: 24px 0;
}

.profile-more-info {
  text-align: start;
  margin: 0 40px;
}

.basic-info {
  margin: 24px 0;
}

.description {
  margin-top: 40px;
}

.user-profile-container {
  margin: 40px 0;
}

.md-icon {
  margin: 0;
  left: 0;
}

pre {
  width: 100%;
  margin: 0;

  text-align: left;
  display: block;
  font-family: inherit;
  line-height: 33px;
  font-size: 16px;
  word-break: keep-all;

  white-space: pre;
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
  word-wrap: normal;
}
</style>
