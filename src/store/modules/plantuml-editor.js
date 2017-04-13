const plantumlEncoder = require('plantuml-encoder')

const state = {
  official: 'http://plantuml.com/',
  plantuml: 'plantuml',
  server: 'https://plantuml-server.herokuapp.com/',
  defaultText: '@startuml\n\nA -> B: Hello\n\n@enduml',
  editor: null,
  text: '',
  src: '',
  umlWidth: 50,
  umlExtension: 'svg'
}

const mutations = {
  setUmlWidth: function (state, umlWidth) {
    state.umlWidth = umlWidth
  },
  setUmlExtension: function (state, umlExtension) {
    state.umlExtension = umlExtension
  },
  setEditor: function (state, editor) {
    state.editor = editor
  },
  setEditorText: function () {
    state.editor.setValue(state.text, 1)
  },
  setText: function (state, text) {
    state.text = text
  },
  renderUML: function (state, text) {
    state.src = state.server + state.umlExtension + '/' + plantumlEncoder.encode(text)
  },
  setLocalStrage: function (state, text) {
    if (window.localStorage) {
      window.localStorage.setItem(state.plantuml, text)
    }
  },
  getLocalStrage: function (state) {
    const text = window.localStorage ? window.localStorage.getItem(state.plantuml) : ''
    state.text = text !== null && text !== '' ? text : state.defaultText
  }
}

const actions = {
  setEditor: function (context, editor) {
    context.commit('setEditor', editor)
  },
  setEditorText: function (context) {
    context.commit('setEditorText')
  },
  renderUML: function (context, text) {
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
