import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import plantumlEditor from './modules/plantuml-editor'

export default new Vuex.Store({
  modules: {
    plantumlEditor
  }
})
