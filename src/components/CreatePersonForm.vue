<template>
  <md-layout class="create-person-container" md-align="center">
      <md-layout md-flex="30">
        <md-input-container>
          <label>Email</label>
          <md-input type="email" v-model="email"></md-input>
        </md-input-container>
        <md-input-container>
          <label>Name</label>
          <md-input v-model="name"></md-input>
        </md-input-container>
        <md-input-container>
          <label>City</label>
          <md-input v-model="city"></md-input>
        </md-input-container>
        <md-input-container>
          <label>Country</label>
          <md-input v-model="country"></md-input>
        </md-input-container>
        <md-input-container>
          <label>URL</label>
          <md-input v-model="url"></md-input>
        </md-input-container>
        <md-layout md-align="center">
          <md-button class="md-raised md-primary" @click.native="pushPerson">Create</md-button>
        </md-layout>
      </md-layout>
    </md-layout>
</template>

<script>
export default {
  name: 'create-person-form',
  data () {
    return {
      email: '',
      name: '',
      city: '',
      country: '',
      url: ''
    }
  },
  methods: {
    pushPerson () {
      this.$root.$firebaseRefs.person.push(
        {
          'email': this.email,
          'name': this.name,
          'city': this.city,
          'country': this.country,
          'url': this.url,
          'created_at': -1 * new Date().getTime()
        })
        .then(this.$router.push('/'))
    }
  }
}
</script>

<style scoped>
</style>
