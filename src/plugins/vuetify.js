import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: '#141f46',
    secondary: '#faab4b'
  },
  options: {
    customProperties: true
  }
})