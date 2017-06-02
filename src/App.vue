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
  
      <md-menu md-size="4" md-direction="bottom left" :md-offset-x="-10" md-offset-y="50" ref="menu">
        <md-button class="md-icon-button" md-menu-trigger>
          <md-icon>person</md-icon>
        </md-button>
  
        <md-menu-content>
          <div class="author-card">
            <md-avatar class="md-large">
              <img src="http://i.imgur.com/hdp9Eil.jpg" alt="Marcos Moura">
            </md-avatar>
  
            <div class="author-card-info">
              <span>Marcos Moura</span>
              <div class="author-card-links">
                <a href="https://linkedin.com/in/marcosvmmoura" target="_blank" rel="noopener">Linkedin</a>
                <a href="https://github.com/marcosmoura" target="_blank" rel="noopener">GitHub</a>
              </div>
            </div>
          </div>
        </md-menu-content>
      </md-menu>
      </md-button>
    </md-toolbar>
  
    <md-sidenav :md-swipeable="true" class="md-left" ref="leftSidenav">
      <md-toolbar class="md-large">
        <md-layout md-align="center" class="md-toolbar-container">
          <img src="https://vuejs.org/images/logo.png" width="80px" />
        </md-layout>
      </md-toolbar>
  
      <md-list>
        <md-list-item @click.native="toHome">
          <md-icon>home</md-icon>
          <span>Home</span>
        </md-list-item>
        <md-list-item @click.native="toCreate">
          <md-icon>create</md-icon>
          <span>New Account</span>
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
    toCreate() {
      this.$router.push('/create-person-form')
      this.$refs.leftSidenav.close()
    },
    toHome() {
      this.$router.push('/')
      this.$refs.leftSidenav.close()
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

.author-card {
  padding: 8px 16px;
  display: flex;
  align-items: center;

  .md-avatar {
    margin-right: 16px;
  }

  .author-card-info {
    display: flex;
    flex-flow: column;
    flex: 1;
  }

  span {
    font-size: 16px;
  }

  .author-card-links {
    display: flex;

    a+a {
      margin-left: 8px;
    }
  }
}
</style>
