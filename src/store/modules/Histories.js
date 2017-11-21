/* @flow */

import Dexie from 'dexie'

const state: any = {
  db: new Dexie('PlantumlEditor'),
  scheme: '++id,text,src,created',
  version: 1,
  data: []
}

const mutations: any = {
  changeDbName () {
    // TODO DB名が undefined になっていたため、PlantumlEditor に変更。変更する際にテーブルを引き継ぐ。時間がたったら不要になる。2017/08/28
    Dexie.getDatabaseNames(function (databases: any) {
      // null があり、かつ PlantumlEditor がない
      if (databases.indexOf(null) !== -1 && databases.indexOf('PlantumlEditor') === -1) {
        const oldDb: any = new Dexie()
        oldDb.version(state.version).stores({
          plantuml: state.scheme
        })
        oldDb.plantuml.toCollection().toArray()
          .then(function (data: any[]) {
            // 旧DBから新DBへデータ入れ替え
            state.db.plantuml.bulkAdd(data).then(function () {
              // 旧DB削除
              Dexie.delete('undefined')
              // Dexie.DatabaseNames 変更
              window.localStorage.setItem('Dexie.DatabaseNames', '["PlantumlEditor"]')
              location.reload()
            })
          })
      }
    })
  },
  defineScheme (state: any) {
    state.db.version(state.version).stores({
      plantuml: state.scheme
    })
  },
  getHistories (state: any) {
    state.db.plantuml
      .reverse()
      .toArray()
      .then(function (data: any[]) {
        state.data = data
      })
  },
  save (state: any, plantumlEditor: any) {
    state.db.plantuml.add({
      text: plantumlEditor.text,
      src: plantumlEditor.src,
      created: new Date().toLocaleString()
    })
  },
  delete (state: any, id: number) {
    state.db.plantuml.delete(id)
  }
}

const actions: any = {
  defineScheme (context: any) {
    context.commit('changeDbName')
    context.commit('defineScheme')
  },
  getHistories (context: any) {
    context.commit('getHistories')
  },
  save (context: any, plantumlEditor: any) {
    context.commit('save', plantumlEditor)
    context.commit('getHistories')
  },
  delete (context: any, id: number) {
    context.commit('delete', id)
    context.commit('getHistories')
  }
}

export default {
  state,
  mutations,
  actions
}
