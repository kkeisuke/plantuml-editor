const plantumlEncoder = require('plantuml-encoder')

const state = {
  url: 'http://www.plantuml.com/',
  plantuml: 'plantuml',
  defaultText: '@startuml\n\nA -> B: Hello\n\n@enduml',
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
  setText: function (state, text) {
    state.text = text
  },
  renderUML: function (state, text) {
    state.src = state.url + state.plantuml + '/' + state.umlExtension + '/' + plantumlEncoder.encode(text)
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
  renderUML: function (context, text) {
    context.commit('renderUML', text)
    context.commit('setLocalStrage', text)
  }
}

export default {
  state,
  mutations,
  actions
}
