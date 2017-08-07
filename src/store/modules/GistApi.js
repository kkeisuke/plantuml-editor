/* @flow */

import axios from 'axios'

const state: any = {
  api: 'https://api.github.com/gists',
  token: '',
  isSending: false,
  gistUrl: '',
  errorMsg: '',
  gist: {
    'description': '',
    'public': true, // default
    'files': {}
  },
  validation: {
    'fileName': {
      getMessage (field: string): string {
        return `The ${field} field contains characters that can not be used in the ${field}.`
      },
      validate (value: string): boolean {
        return !/^.*[(\s|\\|/|'|"|?|<|>|:|*)].*$/.test(value)
      }
    }
  },
  ext: {
    'txt': 'plantuml',
    'svg': 'svg'
  }
}

const mutations: any = {
  setToken (state: any, token: string) {
    state.token = token
  },
  setDescription (state: any, description: string) {
    state.gist.description = description
  },
  setPublic (state: any, isPublic: boolean) {
    state.gist.public = isPublic
  },
  addFiles (state: any, data: any) {
    if (data && data.fileName && data.text && data.ext) {
      state.gist.files[`${data.fileName}.${data.ext}`] = {
        'content': data.text
      }
    }
  },
  resetFiles () {
    state.gist.files = {}
  },
  addTxtUML (state: any, data: any) {
    if (data) {
      data.ext = state.ext.txt
      mutations.addFiles(state, data)
    }
  },
  addSvgUML (state: any, data: any): any {
    return axios.get(data.src || '')
    .then((response: any) => {
      if (response && response.data) {
        data.ext = state.ext.svg
        data.text = response.data
        mutations.addFiles(state, data)
      }
    })
  },
  createGist (state: any, data: any) {
    // 送信中フラグ ON
    state.isSending = true

    // リセット
    mutations.resetResponse()
    mutations.resetFiles()

    // テキスト追加
    mutations.addTxtUML(state, data)

    // svg 再取得
    axios.all([mutations.addSvgUML(state, data)])
    .then(axios.spread(() => {
      // text と svg が両方ある場合
      if (Object.keys(state.gist.files).length >= 2) {
        // Gist 投稿
        axios.post(`${state.api}?access_token=${state.token}`, state.gist)
        .then((response: any) => {
          state.gistUrl = response.data.html_url
          state.isSending = false
        })
        .catch((error: any) => {
          state.errorMsg = `${error.response.status} ${error.response.statusText} ${error.response.data.message}`
          state.isSending = false
        })
      } else {
        state.errorMsg = 'could not get SVG'
        state.isSending = false
      }
    }))
  },
  resetGist () {
    mutations.setDescription(state, '')
    mutations.setPublic(state, true)
    mutations.resetFiles()
    mutations.resetResponse()
  },
  resetResponse () {
    state.gistUrl = ''
    state.errorMsg = ''
  }
}

const actions: any = {
  setToken (context: any, token: string) {
    context.commit('setToken', token)
  },
  setDescription (context: any, description: string) {
    context.commit('setDescription', description)
  },
  setPublic (context: any, isPublic: boolean) {
    context.commit('setPublic', isPublic)
  },
  createGist (context: any, data: any) {
    context.commit('createGist', data)
  },
  resetGist (context: any) {
    context.commit('resetGist')
  }
}

export default {
  state,
  mutations,
  actions
}
