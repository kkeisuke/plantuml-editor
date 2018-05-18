/* @flow */

import Dexie from 'dexie'

const state: any = {
  db: new Dexie('PlantumlEditor'),
  scheme: '++id,text,src,created',
  version: 1,
  data: []
}

const mutations: any = {
  defineScheme(state: any) {
    state.db.version(state.version).stores({
      plantuml: state.scheme
    })
  },
  getHistories(state: any) {
    state.db.plantuml
      .reverse()
      .toArray()
      .then(function(data: any[]) {
        state.data = data
      })
  },
  save(state: any, plantumlEditor: any) {
    state.db.plantuml.add({
      text: plantumlEditor.text,
      src: plantumlEditor.src,
      created: new Date().toLocaleString()
    })
  },
  delete(state: any, id: number) {
    state.db.plantuml.delete(id)
  }
}

const actions: any = {
  defineScheme(context: any) {
    context.commit('defineScheme')
  },
  getHistories(context: any) {
    context.commit('getHistories')
  },
  save(context: any, plantumlEditor: any) {
    context.commit('save', plantumlEditor)
    context.commit('getHistories')
  },
  delete(context: any, id: number) {
    context.commit('delete', id)
    context.commit('getHistories')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
