// import the styles
import { ipcRenderer } from 'electron'
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
const TabGroup = require('electron-tabs')

const isDev = process.env.NODE_ENV === 'development'

Vue.config.devtools = isDev
Vue.config.performance = isDev
Vue.config.productionTip = isDev

library.add(fas)

Vue.component('font-awesome-icon', FontAwesomeIcon)

/* eslint-disable-next-line */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

// handle menu event updates from main script
ipcRenderer.on('change-view', (event, data) => {
  if (data.route) {
    router.push(data.route)
  }
})

const tabGroup = new TabGroup()
tabGroup.addTab({
  title: 'Electron',
  src: 'http://electron.atom.io',
  visible: true
})
tabGroup.addTab({
  title: 'Search',
  src: 'http://duckduckgo.com',
  visible: true
})
tabGroup.addTab({
  title: 'Wikipedia',
  src: 'http://wikipedia.com',
  visible: true
})
