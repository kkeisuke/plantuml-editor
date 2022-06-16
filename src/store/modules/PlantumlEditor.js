/* @flow */

import plantumlEncoder from 'plantuml-encoder'
import axios from 'axios'
import lodash from 'lodash'
import { marked } from 'marked'
import DOMPurify from 'dompurify'
const _: any = lodash

const state: any = {
  isHTTPS: location.protocol === 'https:',
  FPS: Math.floor((1000 / 30) * 10), // FPS 30
  url: process.env.VUE_APP_URL,
  official: 'http://plantuml.com/',
  plantuml: 'plantuml',
  server: process.env.VUE_APP_SERVER,
  cdn: process.env.VUE_APP_CDN,
  startuml: ['@startuml', '@startmindmap', '@startditaa', '@startgantt', '@startwbs', '@startjson', 'startsalt'],
  enduml: ['@enduml', '@endmindmap', '@endditaa', '@endgantt', '@endwbs', '@endjson', '@endsalt'],
  defaultText:
    '# PlantUML Editor\n\n1. select template\n2. write uml diagram\n\n@startuml\n\nleft to right direction\n\nactor User\n\nUser --> (1. select template)\nUser --> (2. write uml diagram)\n\n@enduml',
  text: '',
  encodedText: '',
  src: '',
  preMarkdown: '',
  afterMarkdown: '',
  codemirrorOptions: {
    mode: 'plantuml',
    theme: '',
    indentUnit: 2,
    tabSize: 2,
    indentWithTabs: false,
    lineNumbers: true,
    styleActiveLine: true,
    keyMap: '',
    foldGutter: true,
    gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter'],
  },
  themes: [
    {
      name: 'base16-dark',
      color: '#151515',
    },
    {
      name: 'hopscotch',
      color: '#322931',
    },
    {
      name: 'material',
      color: '#263238',
    },
    {
      name: 'mbo',
      color: '#2c2c2c',
    },
    {
      name: 'paraiso-dark',
      color: '#2f1e2e',
    },
    {
      name: 'railscasts',
      color: '#2b2b2b',
    },
    {
      name: 'seti',
      color: '#151718',
    },
    {
      name: 'shadowfox',
      color: '#2a2a2e',
    },
    {
      name: 'solarized dark',
      color: '#002b36',
    },
    {
      name: 'tomorrow-night-eighties',
      color: '#000000',
    },
  ],
  defaultTheme: 'solarized dark',
  defaultKeyMap: 'sublime',
  defaultIndent: 'space2',
  codemirrorIndent: 'space2',
  umlWidth: 50,
  umlExtension: 'svg',
  umlExtensions: [
    {
      text: 'svg',
      value: 'svg',
      fileType: 'image/svg+xml',
      responseType: 'text',
    },
    {
      text: 'png',
      value: 'png',
      fileType: 'image/png',
      responseType: 'arraybuffer',
    },
  ],
  isLoading: false,
  renderUMLKey: {
    win: 'Ctrl-Enter',
    mac: 'Cmd-Enter',
  },
  snippetKey: {
    win: 'Ctrl-E',
    mac: 'Cmd-E',
  },
}

const getters: any = {
  isSvg(state: any): boolean {
    return state.umlExtension === 'svg'
  },
  isSublime(state: any): boolean {
    return state.codemirrorOptions.keyMap === 'sublime'
  },
  isVim(state: any): boolean {
    return state.codemirrorOptions.keyMap === 'vim'
  },
  isEmacs(state: any): boolean {
    return state.codemirrorOptions.keyMap === 'emacs'
  },
  isSpace2(state: any): boolean {
    return state.codemirrorIndent === 'space2'
  },
  isSpace4(state: any): boolean {
    return state.codemirrorIndent === 'space4'
  },
  isTab(state: any): boolean {
    return state.codemirrorIndent === 'tab'
  },
  themeColor(state: any): string {
    const current: any = state.themes.find((theme: any): boolean => {
      return theme.name === state.codemirrorOptions.theme
    })
    return current.color
  },
}

const mutations: any = {
  setCodeMirrorKeyMap(state: any, keyMap: string) {
    state.codemirrorOptions.keyMap = keyMap
  },
  setCodeMirrorIndent(state: any, indent: string) {
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
  setCodeMirrorTheme(state: any, theme: string) {
    state.codemirrorOptions.theme = theme
  },
  getUmlWidthFromLocalStorage() {
    if (window.localStorage && window.localStorage.getItem('umlWidth')) {
      state.umlWidth = window.localStorage.getItem('umlWidth')
    }
  },
  setUmlWidth(state: any, umlWidth: number) {
    state.umlWidth = umlWidth
    if (window.localStorage) {
      window.localStorage.setItem('umlWidth', state.umlWidth)
    }
  },
  setUmlExtension(state: any, umlExtension: string) {
    state.umlExtension = umlExtension
  },
  setText(state: any, text: string) {
    state.text = text
  },
  renderUML(state: any, text: string) {
    const start: string = findKey(state.startuml, text)
    const end: string = findKey(state.enduml, text)

    if (start && end) {
      const uml: string = `${start}${String(text.split(start)[1]).split(end)[0] || ''}${end}`
      state.encodedText = plantumlEncoder.encode(uml)
      state.src = `${state.cdn}${state.umlExtension}/${state.encodedText}.${state.umlExtension}`
    }
  },
  renderMarkdown(state: any, text: string) {
    const start: string = findKey(state.startuml, text)
    const end: string = findKey(state.enduml, text)

    if (start && end) {
      const pre: string = text.split(start)[0] || ''
      const after: string = text.split(end)[1] || ''
      state.preMarkdown = DOMPurify.sanitize(marked(pre))
      state.afterMarkdown = DOMPurify.sanitize(marked(after))
    }
  },
  setLocalStrage(state: any, text: string) {
    if (window.localStorage) {
      window.localStorage.setItem(state.plantuml, text)
    }
  },
  getLocalStrage(state: any) {
    const text: string = window.localStorage ? window.localStorage.getItem(state.plantuml) : ''
    state.text = text || state.defaultText
  },
  setKeyMapLocalStrage(state: any, keyMap: string) {
    if (window.localStorage) {
      window.localStorage.setItem('codemirrorOptions.keyMap', keyMap)
    }
  },
  setIndentLocalStrage(state: any, indent: string) {
    if (window.localStorage) {
      window.localStorage.setItem('codemirrorIndent', indent)
    }
  },
  setThemeLocalStrage(state: any, theme: string) {
    if (window.localStorage) {
      window.localStorage.setItem('codemirrorOptions.theme', theme)
    }
  },
  getKeyMapFromLocalStrage(state: any) {
    const keyMap: string = window.localStorage ? window.localStorage.getItem('codemirrorOptions.keyMap') : ''
    state.codemirrorOptions.keyMap = keyMap || state.defaultKeyMap
  },
  getIndentFromLocalStrage(state: any) {
    const indent: string = window.localStorage ? window.localStorage.getItem('codemirrorIndent') : ''
    state.codemirrorIndent = indent || state.defaultIndent
  },
  getThemeFromLocalStrage(state: any) {
    const theme: string = window.localStorage ? window.localStorage.getItem('codemirrorOptions.theme') : ''
    state.codemirrorOptions.theme = theme || state.defaultTheme
  },
  setIsLoading(state: any, isLoading: boolean) {
    state.isLoading = isLoading
  },
}

function findKey(keys: string[], text: string): string {
  let result: string = ''
  keys.some((key: string): boolean => {
    if (text.includes(key)) {
      result = key
    }
    return Boolean(result)
  })
  return result
}

const actions: any = {
  syncCodeMirrorKeyMap(context: any, keyMap: string) {
    context.commit('setCodeMirrorKeyMap', keyMap)
    context.commit('setKeyMapLocalStrage', keyMap)
  },
  syncCodeMirrorIndent(context: any, indent: string) {
    context.commit('setCodeMirrorIndent', indent)
    context.commit('setIndentLocalStrage', indent)
  },
  syncCodeMirrorTheme(context: any, theme: string) {
    context.commit('setCodeMirrorTheme', theme)
    context.commit('setThemeLocalStrage', theme)
  },
  setUmlWidth(context: any, umlWidth: number) {
    context.commit('setUmlWidth', umlWidth)
  },
  setUmlExtension(context: any, umlExtension: string) {
    context.commit('setUmlExtension', umlExtension)
  },
  setIsLoading(context: any, isLoading: boolean) {
    context.commit('setIsLoading', isLoading)
  },
  getLocalStrage(context: any) {
    context.commit('getLocalStrage')
    context.commit('getUmlWidthFromLocalStorage')
    context.commit('getKeyMapFromLocalStrage')
    context.commit('getIndentFromLocalStrage')
    context.commit('getThemeFromLocalStrage')
    context.dispatch('syncCodeMirrorIndent', state.codemirrorIndent)
  },
  syncText(context: any, text: string) {
    context.commit('setText', text)
    context.commit('setLocalStrage', text)
  },
  setMarked() {
    const renderer: any = new marked.Renderer()
    renderer.table = function (header: string, body: string): string {
      return `<table class="table table-striped table-bordered"><thead>${header}</thead><tbody>${body}</tbody></table>`
    }
    marked.setOptions({ renderer: renderer })
  },
  renderUML(context: any, text: string) {
    context.commit('setText', text)
    context.commit('renderUML', text)
    context.commit('renderMarkdown', text)
    context.commit('setLocalStrage', text)
  },
  download({ state }: any) {
    const ext: any = _.find(state.umlExtensions, { text: state.umlExtension })
    axios
      .get(state.src || '', {
        responseType: ext.responseType,
      })
      .then((response: any) => {
        if (response && response.data) {
          let downLoadLink: any = document.createElement('a')
          downLoadLink.download = `${state.plantuml}.${state.umlExtension}`
          downLoadLink.href = URL.createObjectURL(new Blob([response.data], { type: ext.fileType }))
          downLoadLink.dataset.downloadurl = `${ext.fileType}:${downLoadLink.download}:${downLoadLink.href}`
          if (document.body) {
            document.body.appendChild(downLoadLink) // for firefox
          }
          downLoadLink.click()
          if (document.body) {
            document.body.removeChild(downLoadLink) // for firefox
          }
        }
      })
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
