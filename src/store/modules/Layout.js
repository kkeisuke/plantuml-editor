/* @flow */

const state: any = {
  colSize: {
    'history': 2,
    'editor': 4,
    'cheatSheet': 0,
    'uml': 6
  }
}

const mutations: any = {
  setColSize (state: any, colSize: any) {
    if (colSize.history || colSize.history === 0) {
      state.colSize.history = colSize.history
    }
    if (colSize.editor || colSize.editor === 0) {
      state.colSize.editor = colSize.editor
    }
    if (colSize.cheatSheet || colSize.cheatSheet === 0) {
      state.colSize.cheatSheet = colSize.cheatSheet
    }
    if (colSize.uml || colSize.uml === 0) {
      state.colSize.uml = colSize.uml
    }
  }
}

const getters: any = {
  isCloseHistory ({colSize}: any): boolean {
    return colSize.history === 0
  }
}

const actions: any = {
  setColSize (context: any, colSize: any) {
    context.commit('setColSize', colSize)
  },
  setEditColSize (context: any) {
    context.commit('setColSize', {
      'history': 0,
      'editor': 5,
      'cheatSheet': 0,
      'uml': 7
    })
  },
  setCheatSheetColSize (context: any) {
    context.commit('setColSize', {
      'history': 0,
      'editor': 4,
      'cheatSheet': 3,
      'uml': 5
    })
  },
  resetColSize (context: any) {
    context.commit('setColSize', {
      'history': 2,
      'editor': 4,
      'cheatSheet': 0,
      'uml': 6
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
