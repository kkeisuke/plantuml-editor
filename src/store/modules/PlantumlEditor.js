import plantumlEncoder from 'plantuml-encoder'

const state = {
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

const mutations = {
  setUmlWidth (state, umlWidth) {
    state.umlWidth = umlWidth
  },
  setUmlExtension (state, umlExtension) {
    state.umlExtension = umlExtension
  },
  setEditor (state, editor) {
    state.editor = editor
  },
  setEditorText () {
    state.editor.setValue(state.text, 1)
  },
  setText (state, text) {
    state.text = text
  },
  renderUML (state, text) {
    state.src = state.server + state.umlExtension + '/' + plantumlEncoder.encode(text)
  },
  setLocalStrage (state, text) {
    if (window.localStorage) {
      window.localStorage.setItem(state.plantuml, text)
    }
  },
  getLocalStrage (state) {
    const text = window.localStorage ? window.localStorage.getItem(state.plantuml) : ''
    state.text = text !== null && text !== '' ? text : state.defaultText
  }
}

const actions = {
  setUmlWidth (context, umlWidth) {
    context.commit('setUmlWidth', umlWidth)
  },
  setUmlExtension (context, umlExtension) {
    context.commit('setUmlExtension', umlExtension)
  },
  setEditor (context, editor) {
    context.commit('setEditor', editor)
  },
  setEditorText (context) {
    context.commit('setEditorText')
  },
  getLocalStrage (context) {
    context.commit('getLocalStrage')
  },
  renderUML (context, text) {
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
