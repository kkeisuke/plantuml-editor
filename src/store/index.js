import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import plantumlEditor from './modules/plantumlEditor'
import histories from './modules/histories'
import umlTemplate from './modules/umlTemplate'

export default new Vuex.Store({
  modules: {
    plantumlEditor,
    histories,
    umlTemplate
  }
})
