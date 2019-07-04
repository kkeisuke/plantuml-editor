/* @flow */

import Dexie from 'dexie'
import lodash from 'lodash'
const _: any = lodash

const state: any = {
  db: new Dexie('PlantumlEditor'),
  schemes: ['++id,text,src,created', '++id,text,encodedText,created'],
  versions: [1, 2],
  data: []
}

const mutations: any = {
  defineScheme(state: any) {
    // バージョン 2
    state.db
      .version(state.versions[1])
      .stores({
        plantuml: state.schemes[1]
      })
      .upgrade(() => {
        state.db.plantuml.toCollection().modify((history: any) => {
          history.encodedText = _.last(history.src.split('/'))
        })
      })
    // バージョン 1
    state.db.version(state.versions[0]).stores({
      plantuml: state.schemes[0]
    })
  },
  setHistories(state: any, data: any[]) {
    state.data = data || []
  },
  save(state: any, { text, encodedText }: any) {
    state.db.plantuml.add({
      text: text,
      encodedText: encodedText,
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
  async getHistories(context: any): any {
    const data: any[] = await state.db.plantuml
      .reverse()
      .toArray()
      .then()
    context.commit('setHistories', data)
    return data
  },
  save(context: any, { text, encodedText }: any) {
    context.commit('save', { text, encodedText })
    context.dispatch('getHistories')
  },
  delete(context: any, id: number) {
    context.commit('delete', id)
    context.dispatch('getHistories')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
