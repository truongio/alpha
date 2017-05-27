<template>
  <div id="app">
    <md-toolbar>
      <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>
      <h2 class="md-title" style="flex: 1">
        <a style="color:white" href="#/">Alpha</a>
      </h2>
      <md-button @click.native="toCreate">New Account</md-button>
    </md-toolbar>
  
    <md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
      <md-toolbar class="md-large">
        <md-layout md-align="center" class="md-toolbar-container">
          <img src="http://fashionmythology.com/wp-content/uploads/2016/06/Chanel_logo_interlocking_cs.svg_.png" width="128px" />
        </md-layout>
      </md-toolbar>
  
      <md-list>
        <md-list-item>
          <md-icon>whatshot</md-icon>
          <span>News</span>
  
          <md-list-expand>
            <md-list>
              <md-list-item class="md-inset">World</md-list-item>
              <md-list-item class="md-inset">Americas</md-list-item>
              <md-list-item class="md-inset">Europe</md-list-item>
            </md-list>
          </md-list-expand>
        </md-list-item>
  
        <md-list-item>
          <md-icon>videogame_asset</md-icon>
          <span>Games</span>
  
          <md-list-expand>
            <md-list>
              <md-list-item class="md-inset">Console</md-list-item>
              <md-list-item class="md-inset">PC</md-list-item>
              <md-list-item class="md-inset">Phone</md-list-item>
            </md-list>
          </md-list-expand>
        </md-list-item>
  
        <md-list-item>
          <md-icon>video_library</md-icon>
          <span>Video</span>
  
          <md-list-expand>
            <md-list>
              <md-list-item class="md-inset">Humor</md-list-item>
              <md-list-item class="md-inset">Music</md-list-item>
              <md-list-item class="md-inset">Movies</md-list-item>
              <md-list-item class="md-inset">TV Shows</md-list-item>
            </md-list>
          </md-list-expand>
        </md-list-item>
  
        <md-list-item>
          <md-icon>shopping_basket</md-icon>
          <span>Shop</span>
        </md-list-item>
      </md-list>
    </md-sidenav>
  
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
    toggleLeftSidenav() {
      this.$refs.leftSidenav.toggle()
    },
    toggleRightSidenav() {
      this.$refs.rightSidenav.toggle()
    },
    closeRightSidenav() {
      this.$refs.rightSidenav.close()
    },
    toCreate() {
      this.$router.push('/create-person-form')
    }
  }
}
</script>

<style>
main {
  text-align: center;
  margin-top: 80px;
}

.md-toolbar .md-toolbar-container {
  width: 100%;
  height: 128px;
  display: flex;
  align-items: center;
  align-self: flex-start;
}
</style>
