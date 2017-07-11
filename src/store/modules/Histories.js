import Dexie from 'dexie'

const state = {
  db: new Dexie(),
  scheme: '++id,text,src,created',
  version: 1,
  data: []
}

const mutations = {
  defineScheme (state) {
    state.db.version(state.version).stores({
      plantuml: state.scheme
    })
  },
  getHistories (state) {
    state.db.plantuml
    .reverse()
    .toArray()
    .then(function (data) {
      state.data = data
    })
  },
  save (state, plantumlEditor) {
    state.db.plantuml.add({
      text: plantumlEditor.text,
      src: plantumlEditor.src,
      created: new Date().toLocaleString()
    })
  },
  delete (state, id) {
    state.db.plantuml.delete(id)
  }
}

const actions = {
  defineScheme (context) {
    context.commit('defineScheme')
  },
  getHistories (context) {
    context.commit('getHistories')
  },
  save (context, plantumlEditor) {
    context.commit('save', plantumlEditor)
    context.commit('getHistories')
  },
  delete (context, id) {
    context.commit('delete', id)
    context.commit('getHistories')
  }
}

export default {
  state,
  mutations,
  actions
}
