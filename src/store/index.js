/* @flow */

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import plantumlEditor from './modules/plantumlEditor'
import Layout from './modules/Layout'
import histories from './modules/histories'
import umlTemplate from './modules/umlTemplate'
import gistApi from './modules/gistApi'

export default new Vuex.Store({
  modules: {
    plantumlEditor,
    Layout,
    histories,
    umlTemplate,
    gistApi
  }
})
