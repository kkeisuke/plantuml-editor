/* @flow */

import plantumlEncoder from 'plantuml-encoder'
import axios from 'axios'
import lodash from 'lodash'
const _: any = lodash

const state: any = {
  isHTTPS: location.protocol === 'https:',
  url: 'https://plantuml-editor.kkeisuke.com/',
  official: 'http://plantuml.com/',
  plantuml: 'plantuml',
  server: 'https://plantuml-server.herokuapp.com/',
  defaultText: '@startuml\n\nactor User\n\nUser -right-> (select template)\nUser -down-> (write uml diagram)\n\n@enduml',
  editor: null,
  text: '',
  src: '',
  umlWidth: 50,
  umlExtension: 'svg',
  umlExtensions: [
    {
      'text': 'svg',
      'value': 'svg',
      'fileType': 'image/svg+xml',
      'responseType': 'text'
    },
    {
      'text': 'png',
      'value': 'png',
      'fileType': 'image/png',
      'responseType': 'arraybuffer'
    }
  ],
  isLoading: false,
  colSize: {
    'history': 2,
    'editor': 4,
    'cheatSheet': 0,
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
    if (colSize.cheatSheet || colSize.cheatSheet === 0) {
      state.colSize.cheatSheet = colSize.cheatSheet
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
  },
  download (state: any) {
    const ext: any = mutations.getExtFromText()
    axios.get(state.src || '', {
      'responseType': ext.responseType
    })
    .then((response: any) => {
      if (response && response.data) {
        let downLoadLink: any = document.createElement('a')
        downLoadLink.download = `${state.plantuml}.${state.umlExtension}`
        downLoadLink.href = URL.createObjectURL(new Blob([response.data], {type: ext.fileType}))
        downLoadLink.dataset.downloadurl = `${ext.fileType}:${downLoadLink.download}:${downLoadLink.href}`
        downLoadLink.click()
      }
    })
  },
  getExtFromText (): any {
    return _.find(state.umlExtensions, {'text': state.umlExtension})
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
      'cheatSheet': 0,
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
  },
  download (context: any) {
    context.commit('download')
  }
}

export default {
  state,
  mutations,
  actions
}
