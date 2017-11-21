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
  startSending (state: any) {
    state.isSending = true
  },
  stopSending (state: any) {
    state.isSending = false
  },
  setGistURL (state: any, url: string) {
    state.gistUrl = url
  },
  setErrorMsg (state: any, errorMsg: string) {
    state.errorMsg = errorMsg
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
  addTxtUML ({state, commit}: any, data: any) {
    if (data) {
      data.ext = state.ext.txt
      commit('addFiles', data)
    }
  },
  addSvgUML ({state, commit}: any, data: any): any {
    return axios.get(data.src || '')
      .then((response: any) => {
        if (response && response.data) {
          data.ext = state.ext.svg
          data.text = response.data
          commit('addFiles', data)
        }
      })
  },
  createGist ({state, commit, dispatch}: any, data: any) {
    // 送信中フラグ ON
    commit('startSending')

    // リセット
    commit('resetResponse')
    commit('resetFiles')

    // テキスト追加
    dispatch('addTxtUML', data)

    // svg 再取得
    axios.all([dispatch('addSvgUML', data)])
      .then(axios.spread(() => {
        // text と svg が両方ある場合
        if (Object.keys(state.gist.files).length >= 2) {
          // Gist 投稿
          axios.post(`${state.api}?access_token=${state.token}`, state.gist)
            .then((response: any) => {
              commit('setGistURL', response.data.html_url)
              commit('stopSending')
            })
            .catch((error: any) => {
              commit('setErrorMsg', `${error.response.status} ${error.response.statusText} ${error.response.data.message}`)
              commit('stopSending')
            })
        } else {
          commit('setErrorMsg', 'could not get SVG')
          commit('stopSending')
        }
      }))
  },
  resetGist ({commit}: any) {
    commit('setDescription', '')
    commit('setPublic', true)
    commit('resetFiles')
    commit('resetResponse')
  }
}

export default {
  state,
  mutations,
  actions
}
