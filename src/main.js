import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

// var firebaseConfig = {
//   apiKey: "AIzaSyAMazXV0swD5GSoaYbD33l3e8PzxJCxfZ8",
//   authDomain: "dkdelementsfirestore.firebaseapp.com",
//   databaseURL: "https://dkdelementsfirestore.firebaseio.com",
//   projectId: "dkdelementsfirestore",
//   storageBucket: "dkdelementsfirestore.appspot.com",
//   messagingSenderId: "437308729251",
//   appId: "1:437308729251:web:24db781dca0658d61f5c16",
//   measurementId: "G-YW3YKQ0BSM"
// };