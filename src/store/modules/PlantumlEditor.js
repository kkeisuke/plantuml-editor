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
  renderUMLKey: {
    'win': 'Ctrl-Enter',
    'mac': 'Command-Enter'
  }
}

const mutations: any = {
  setUmlWidth (state: any, umlWidth: number) {
    state.umlWidth = umlWidth
  },
  setUmlExtension (state: any, umlExtension: string) {
    state.umlExtension = umlExtension
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
  }
}

const actions: any = {
  setUmlWidth (context: any, umlWidth: number) {
    context.commit('setUmlWidth', umlWidth)
  },
  setUmlExtension (context: any, umlExtension: string) {
    context.commit('setUmlExtension', umlExtension)
  },
  setEditor (context: any, editor: any) {
    context.commit('setEditor', editor)
  },
  setEditorText (context: any) {
    context.commit('setEditorText')
  },
  getLocalStrage (context: any) {
    context.commit('getLocalStrage')
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
