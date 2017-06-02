<template>
  <md-layout>
    <md-layout md-flex="100" md-align-small="center">
      <md-layout md-flex="40" md-flex-small="100" md-column>
        <div class="profile-info">
          <md-layout md-align="end" md-align-small="center">
            <md-image md-src="http://i.imgur.com/CJCYylN.jpg" class="image" width="150" height="150"></md-image>
          </md-layout>
          <div class="person-info">
            <md-layout md-flex="100" md-align="end" md-align-small="center">
              <span class="md-display-1">{{ user.name }}</span>
            </md-layout>
            <md-layout md-flex="100" md-align="end" md-align-small="center">
              <span class="md-subheading">{{ user.email }}</span>
            </md-layout>
            <md-layout md-flex="100" md-align="end" md-align-small="center">
              <span class="md-body">{{ user.city }}</span>
            </md-layout>
            <md-layout md-flex="100" md-align="end" md-align-small="center">
              <span class="md-body">{{ user.country }}</span>
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
                  <td>10 November, 1990</td>
                </tr>
                <tr>
                  <td style="width:60%;color:#ccc">Sex</td>
                  <td>Male</td>
                </tr>
                <tr>
                  <td style="width:60%;color:#ccc">Lives</td>
                  <td>Stockholm, Sweden</td>
                </tr>
                <tr>
                  <td style="width:60%;color:#ccc">Works at</td>
                  <td>Ping Pong AB</td>
                </tr>
              </tbody>
            </table>
          </div>
  
          <md-layout class="description" md-flex="50">
            <p>
              Lorem ipsum dolor sit amet, dolorum iudicabit eos an, pro lorem latine qualisque cu. Sumo purto option eum eu, et usu natum aliquid. Eu alia errem cum, nihil option appellantur ius in, tollit dicunt tritani cu eos.
            </p>
            <p>
              Menandri legendos adolescens vel et, summo omnesque fabellas est ea, sit ea omnes ponderum singulis. Vivendo dissentiunt vim no. Nec ferri verterem postulant ei, quod nibh iracundia mei at. Te ipsum integre vis. Nobis dicunt propriae per ut, tantas nostro appareat te quo. Inermis pertinacia sadipscing at est. No veri omnis vis, ut simul causae concludaturque eos.
            </p>
            <p>
              Vel meliore maiorum iudicabit eu, duo eius invidunt ne. Nam ei probo atqui forensibus. Ex tation aliquam vim, has ne vocibus delectus indoctum, sea sale porro timeam in. Cu vim noluisse patrioque. At cetero utamur deseruisse per, qui porro sanctus ne. Tantas eripuit omnesque id vel, his quando tractatos ea. Id omnes munere nam, eu mea quod accusam evertitur, impedit deleniti perfecto qui te. Qui ipsum scribentur conclusionemque at. Has timeam persequeris in, ad vide natum torquatos usu. Prima congue tamquam pro an. Mucius gubergren democritum usu at. Pri partem fabellas lobortis cu, in nostrud voluptatum per. Sit ut vidisse liberavisse, petentium reprimique per no, usu cu agam ferri nominati. Ad natum possim tacimates quo. Nam persius iuvaret incorrupte ad, facilis salutatus in sed, te sea nostrud feugait maiestatis. Vis voluptaria intellegam deterruisset in. Nam unum elit at.
            </p>
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
