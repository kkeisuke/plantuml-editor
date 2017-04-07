import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import plantumlEditor from './modules/plantuml-editor'
import histories from './modules/histories'

export default new Vuex.Store({
  modules: {
    plantumlEditor,
    histories
  }
})
