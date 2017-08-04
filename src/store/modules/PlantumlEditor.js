/* @flow */

import plantumlEncoder from 'plantuml-encoder'

const state: any = {
  official: 'http://plantuml.com/',
  plantuml: 'plantuml',
  server: 'https://plantuml-server.herokuapp.com/',
  defaultText: '@startuml\n\nactor User\n\nUser -right-> (select template)\nUser -down-> (write uml diagram)\n\n@enduml',
  editor: null,
  text: '',
  src: '',
  umlWidth: 50,
  umlExtension: 'svg',
  isLoading: false,
  colSize: {
    'history': 2,
    'editor': 4,
    'uml': 6
  },
  renderUMLKey: {
    'win': 'Ctrl-Enter',
    'mac': 'Command-Enter'
  }
}

const mutations: any = {
  getUmlWidthFromLocalStorage () {
    if (window.localStorage && window.localStorage.getItem('umlWidth')) {
      state.umlWidth = window.localStorage.getItem('umlWidth')
    }
  },
  setUmlWidth (state: any, umlWidth: number) {
    state.umlWidth = umlWidth
    if (window.localStorage) {
      window.localStorage.setItem('umlWidth', state.umlWidth)
    }
  },
  setUmlExtension (state: any, umlExtension: string) {
    state.umlExtension = umlExtension
  },
  setColSize (state: any, colSize: any) {
    if (colSize.history || colSize.history === 0) {
      state.colSize.history = colSize.history
    }
    if (colSize.editor || colSize.editor === 0) {
      state.colSize.editor = colSize.editor
    }
    if (colSize.uml || colSize.uml === 0) {
      state.colSize.uml = colSize.uml
    }
  },
  setEditor (state: any, editor: any) {
    state.editor = editor
  },
  setEditorText () {
    state.editor.setValue(state.text, 1)
  },
  setText (state: any, text: string) {
    state.text = text
  },
  renderUML (state: any, text: string) {
    state.src = state.server + state.umlExtension + '/' + plantumlEncoder.encode(text)
  },
  setLocalStrage (state: any, text: string) {
    if (window.localStorage) {
      window.localStorage.setItem(state.plantuml, text)
    }
  },
  getLocalStrage (state: any) {
    const text: string = window.localStorage ? window.localStorage.getItem(state.plantuml) : ''
    state.text = text || state.defaultText
  },
  setIsLoading (state: any, isLoading: boolean) {
    state.isLoading = isLoading
  }
}

const actions: any = {
  setUmlWidth (context: any, umlWidth: number) {
    context.commit('setUmlWidth', umlWidth)
  },
  setUmlExtension (context: any, umlExtension: string) {
    context.commit('setUmlExtension', umlExtension)
  },
  setIsLoading (context: any, isLoading: boolean) {
    context.commit('setIsLoading', isLoading)
  },
  setColSize (context: any, colSize: any) {
    context.commit('setColSize', colSize)
  },
  resetColSize (context: any, colSize: any) {
    context.commit('setColSize', {
      'history': 2,
      'editor': 4,
      'uml': 6
    })
  },
  setEditor (context: any, editor: any) {
    context.commit('setEditor', editor)
  },
  setEditorText (context: any) {
    context.commit('setEditorText')
  },
  getLocalStrage (context: any) {
    context.commit('getLocalStrage')
    context.commit('getUmlWidthFromLocalStorage')
  },
  syncText (context: any, text: string) {
    context.commit('setText', text)
    context.commit('setLocalStrage', text)
  },
  renderUML (context: any, text: string) {
    context.commit('setText', text)
    context.commit('renderUML', text)
    context.commit('setLocalStrage', text)
  }
}

export default {
  state,
  mutations,
  actions
}
