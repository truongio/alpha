<template>
  <md-layout md-align-small="center">
    <md-layout class="container" md-flex="30" md-flex-small="100" md-column>
      <div>
        <md-layout md-align="end" md-align-small="center">
          <md-image v-if="url != ''" :md-src="url" class="image" width="150" height="150"></md-image>
        </md-layout>
        <md-layout md-align="end" md-align-small="center">
          <md-layout md-flex="30" md-flex-small="90">
            <md-input-container>
              <label>Profile Picture URL</label>
              <md-input v-model="url" accept="image/*"></md-input>
            </md-input-container>
            <md-input-container>
              <label>Name</label>
              <md-input v-model="name"></md-input>
            </md-input-container>
          </md-layout>
        </md-layout>
      </div>
    </md-layout>
    <md-layout class="container" md-flex="30" md-flex-small="90">
      <md-layout class="about">
        <span class="md-display-2">About</span>
      </md-layout>
      <md-layout md-flex="100">
        <span class="md-subheading">Birthday</span>
      </md-layout>
      <md-layout md-flex="100">
        <md-layout class="sex-select" md-flex="30">
          <md-input-container>
            <label for="month">Month</label>
            <md-select name="month" id="month" v-model="month">
              <md-option value="january">January</md-option>
              <md-option value="february">February</md-option>
              <md-option value="mars">Mars</md-option>
              <md-option value="april">April</md-option>
              <md-option value="may">May</md-option>
              <md-option value="june">June</md-option>
              <md-option value="july">July</md-option>
              <md-option value="august">August</md-option>
              <md-option value="september">September</md-option>
              <md-option value="november">November</md-option>
              <md-option value="december">December</md-option>
            </md-select>
          </md-input-container>
        </md-layout>
        <md-layout md-flex="30">
          <md-input-container>
            <label>Day</label>
            <md-input v-model="day"></md-input>
          </md-input-container>
        </md-layout>
        <md-layout md-flex="30">
          <md-input-container>
            <label>Year</label>
            <md-input v-model="year"></md-input>
          </md-input-container>
        </md-layout>
      </md-layout>
      <md-layout md-flex="30" class="sex-select">
        <md-input-container>
          <label for="sex">Sex</label>
          <md-select name="sex" id="sex" v-model="sex">
            <md-option value="male">Male</md-option>
            <md-option value="female">Female</md-option>
          </md-select>
        </md-input-container>
      </md-layout>
      <md-input-container>
        <label>Lives</label>
        <md-input v-model="lives"></md-input>
      </md-input-container>
      <md-input-container>
        <label>Works at</label>
        <md-input v-model="work"></md-input>
      </md-input-container>
      <md-layout class="description" md-flex="100">
        <md-input-container>
          <label>Description</label>
          <md-textarea v-model="description"></md-textarea>
        </md-input-container>
      </md-layout>
      <md-layout>
        <md-button class="md-raised md-primary" @click.native="pushPerson">Save</md-button>
      </md-layout>
    </md-layout>
  </md-layout>
</template>

<script>
export default {
  name: 'create-person-form',
  data() {
    return {
      email: '',
      name: '',
      month: '',
      day: '',
      year: '',
      sex: '',
      work: '',
      lives: '',
      description: '',
      url: ''
    }
  },
  methods: {
    pushPerson() {
      this.$root.$firebaseRefs.person.push(
        {
          'email': this.email,
          'name': this.name,
          'month': this.month,
          'day': this.day,
          'year': this.year,
          'sex': this.sex,
          'work': this.work,
          'lives': this.lives,
          'description': this.description,
          'url': this.url,
          'created_at': -1 * new Date().getTime()
        })
        .then(this.$router.push('/'))
    }
  }
}
</script>

<style scoped>
.container {
  margin: 40px 40px 0 40px;
}

.description {
  margin-top: 40px;
}

.md-button {
  margin: 0;
}

.sex-select {
  text-align: left;
}

.about {
  margin-bottom: 24px;
}
</style>
