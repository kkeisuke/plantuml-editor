/* @flow */

import plantumlEncoder from 'plantuml-encoder'
import axios from 'axios'
import lodash from 'lodash'
import marked from 'marked'
const _: any = lodash

const state: any = {
  isHTTPS: location.protocol === 'https:',
  FPS: Math.floor(1000 / 30 * 10), // FPS 30
  url: 'https://plantuml-editor.kkeisuke.com/',
  official: 'http://plantuml.com/',
  plantuml: 'plantuml',
  server: 'https://plantuml-server.herokuapp.com/',
  startuml: '@startuml',
  enduml: '@enduml',
  defaultText: '# PlantUML Editor\n\n1. select template\n2. write uml diagram\n\n@startuml\n\nleft to right direction\n\nactor User\n\nUser --> (1. select template)\nUser --> (2. write uml diagram)\n\n@enduml',
  text: '',
  src: '',
  preMarkdown: '',
  afterMarkdown: '',
  codemirrorOptions: {
    mode: 'plantuml',
    theme: 'solarized dark',
    indentUnit: 2,
    tabSize: 2,
    indentWithTabs: false,
    lineNumbers: true,
    styleActiveLine: true,
    keyMap: ''
  },
  defaultKeyMap: 'sublime',
  defaultIndent: 'space2',
  codemirrorIndent: 'space2',
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
  renderUMLKey: {
    'win': 'Ctrl-Enter',
    'mac': 'Cmd-Enter'
  },
  snippetKey: {
    'win': 'Ctrl-E',
    'mac': 'Cmd-E'
  }
}

const getters: any = {
  isSvg (state: any): boolean {
    return state.umlExtension === 'svg'
  },
  isSublime (state: any): boolean {
    return state.codemirrorOptions.keyMap === 'sublime'
  },
  isVim (state: any): boolean {
    return state.codemirrorOptions.keyMap === 'vim'
  },
  isEmacs (state: any): boolean {
    return state.codemirrorOptions.keyMap === 'emacs'
  },
  isSpace2 (state: any): boolean {
    return state.codemirrorIndent === 'space2'
  },
  isSpace4 (state: any): boolean {
    return state.codemirrorIndent === 'space4'
  },
  isTab (state: any): boolean {
    return state.codemirrorIndent === 'tab'
  }
}

const mutations: any = {
  setCodeMirrorKeyMap (state: any, keyMap: string) {
    state.codemirrorOptions.keyMap = keyMap
  },
  setCodeMirrorIndent (state: any, indent: string) {
    state.codemirrorIndent = indent
    switch (indent) {
      case 'space2':
        state.codemirrorOptions.indentUnit = 2
        state.codemirrorOptions.tabSize = 2
        state.codemirrorOptions.indentWithTabs = false
        break
      case 'space4':
        state.codemirrorOptions.indentUnit = 4
        state.codemirrorOptions.tabSize = 4
        state.codemirrorOptions.indentWithTabs = false
        break
      case 'tab':
        state.codemirrorOptions.indentUnit = 4
        state.codemirrorOptions.tabSize = 4
        state.codemirrorOptions.indentWithTabs = true
        break
      default:
        break
    }
  },
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
  setText (state: any, text: string) {
    state.text = text
  },
  renderUML (state: any, text: string) {
    const uml: string = `${state.startuml}${String(text.split(state.startuml)[1]).split(state.enduml)[0] || ''}${state.enduml}`
    state.src = state.server + state.umlExtension + '/' + plantumlEncoder.encode(uml)
  },
  renderMarkdown (state: any, text: string) {
    const pre: string = text.split(state.startuml)[0] || ''
    const after: string = text.split(state.enduml)[1] || ''
    state.preMarkdown = marked(pre)
    state.afterMarkdown = marked(after)
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
  setKeyMapLocalStrage (state: any, keyMap: string) {
    if (window.localStorage) {
      window.localStorage.setItem('codemirrorOptions.keyMap', keyMap)
    }
  },
  setIndentLocalStrage (state: any, indent: string) {
    if (window.localStorage) {
      window.localStorage.setItem('codemirrorIndent', indent)
    }
  },
  getKeyMapFromLocalStrage (state: any) {
    const keyMap: string = window.localStorage ? window.localStorage.getItem('codemirrorOptions.keyMap') : ''
    state.codemirrorOptions.keyMap = keyMap || state.defaultKeyMap
  },
  getIndentFromLocalStrage (state: any) {
    const indent: string = window.localStorage ? window.localStorage.getItem('codemirrorIndent') : ''
    state.codemirrorIndent = indent || state.defaultIndent
  },
  setIsLoading (state: any, isLoading: boolean) {
    state.isLoading = isLoading
  }
}

const actions: any = {
  syncCodeMirrorKeyMap (context: any, keyMap: string) {
    context.commit('setCodeMirrorKeyMap', keyMap)
    context.commit('setKeyMapLocalStrage', keyMap)
  },
  syncCodeMirrorIndent (context: any, indent: string) {
    context.commit('setCodeMirrorIndent', indent)
    context.commit('setIndentLocalStrage', indent)
  },
  setUmlWidth (context: any, umlWidth: number) {
    context.commit('setUmlWidth', umlWidth)
  },
  setUmlExtension (context: any, umlExtension: string) {
    context.commit('setUmlExtension', umlExtension)
  },
  setIsLoading (context: any, isLoading: boolean) {
    context.commit('setIsLoading', isLoading)
  },
  getLocalStrage (context: any) {
    context.commit('getLocalStrage')
    context.commit('getUmlWidthFromLocalStorage')
    context.commit('getKeyMapFromLocalStrage')
    context.commit('getIndentFromLocalStrage')
    context.dispatch('syncCodeMirrorIndent', state.codemirrorIndent)
  },
  syncText (context: any, text: string) {
    context.commit('setText', text)
    context.commit('setLocalStrage', text)
  },
  setMarked (context: any) {
    const renderer: any = new marked.Renderer()
    renderer.table = function (header: string, body: string): string {
      return `<table class="table table-striped table-bordered"><thead>${header}</thead><tbody>${body}</tbody></table>`
    }
    marked.setOptions({'renderer': renderer})
  },
  renderUML (context: any, text: string) {
    context.commit('setText', text)
    context.commit('renderUML', text)
    context.commit('renderMarkdown', text)
    context.commit('setLocalStrage', text)
  },
  download ({state}: any) {
    const ext: any = _.find(state.umlExtensions, {'text': state.umlExtension})
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
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
