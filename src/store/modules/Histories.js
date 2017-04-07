const Dexie = require('dexie')

const state = {
  db: new Dexie(),
  scheme: '++id,text,src,created',
  version: 1,
  data: []
}

const mutations = {
  defineScheme: function (state) {
    state.db.version(state.version).stores({
      plantuml: state.scheme
    })
  },
  getHistories: function (state) {
    state.db.plantuml
    .reverse()
    .toArray()
    .then(function (data) {
      state.data = data
    })
  },
  save: function (state, plantumlEditor) {
    state.db.plantuml.add({
      text: plantumlEditor.text,
      src: plantumlEditor.src,
      created: new Date().toLocaleString()
    })
  },
  delete: function (state, id) {
    state.db.plantuml.delete(id)
  }
}

const actions = {
  defineScheme: function (context) {
    context.commit('defineScheme')
  },
  getHistories: function (context) {
    context.commit('getHistories')
  },
  save: function (context, plantumlEditor) {
    context.commit('save', plantumlEditor)
    context.commit('getHistories')
  },
  delete: function (context, id) {
    context.commit('delete', id)
    context.commit('getHistories')
  }
}

export default {
  state,
  mutations,
  actions
}
