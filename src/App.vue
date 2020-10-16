<template>
  <v-app>
    <v-app-bar src="https://picsum.photos/1920/1080?random" flat prominent app dark>
      <v-menu absolute offset-x>
        <template v-slot:activator="{ on, attrs }">
          <v-app-bar-nav-icon v-bind="attrs" v-on="on"></v-app-bar-nav-icon>
        </template>
        <about></about>
      </v-menu>
      
      <v-toolbar-title>DK Design Elements</v-toolbar-title>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab v-for="item in items" :key="item.title" :to="item.to">{{ item.title }}</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import About from './views/About.vue'
  export default {
    components: { 'about': About },
    data () {
      return {
        aboutDialog: false,
        items: [
          { title: 'New Arrivals', icon: 'mdi-view-dashboard', to: '/' },
          { title: 'Women', icon: 'mdi-forum', to: '/women' },
          { title: 'Men', icon: 'mdi-forum', to: '/men' },
          { title: 'Girls', icon: 'mdi-forum', to: '/girls' },
          { title: 'Boys', icon: 'mdi-forum', to: '/boys' },
          { title: 'Accessories', icon: 'mdi-forum', to: '/accessories' }
        ],
      }
    },
  }
</script>