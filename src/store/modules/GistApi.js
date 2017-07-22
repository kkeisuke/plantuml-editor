import axios from 'axios'

const state = {
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
      getMessage (field) {
        return `The ${field} field contains characters that can not be used in the ${field}.`
      },
      validate (value) {
        return !/^.*[(\s|\\|/|'|"|?|<|>|:|*)].*$/.test(value)
      }
    }
  }
}

const mutations = {
  setToken (state, token) {
    state.token = token
    if (window.localStorage) {
      window.localStorage.setItem(state.api, token)
    }
  },
  getToken (state) {
    const token = window.localStorage ? window.localStorage.getItem(state.api) : ''
    state.token = token || ''
  },
  setDescription (state, description) {
    state.gist.description = description
  },
  setPublic (state, isPublic) {
    state.gist.public = isPublic
  },
  addFiles (state, data) {
    if (data && data.fileName && data.text && data.ext) {
      state.gist.files[`${data.fileName}.${data.ext}`] = {
        'content': data.text
      }
    }
  },
  resetFiles () {
    state.gist.files = {}
  },
  addSvgTxt (state, data) {
    if (data) {
      data.ext = 'txt'
      mutations.addFiles(state, data)
    }
  },
  addSvgUML (state, data) {
    return axios.get(data.src || '')
    .then((response) => {
      if (response && response.data) {
        data.ext = 'svg'
        data.text = response.data
        mutations.addFiles(state, data)
      }
    })
  },
  createGist (state, data) {
    // 送信中フラグ ON
    state.isSending = true

    // リセット
    mutations.resetResponse()
    mutations.resetFiles()

    // テキスト追加
    mutations.addSvgTxt(state, data)

    // svg 再取得
    axios.all([mutations.addSvgUML(state, data)])
    .then(axios.spread(() => {
      // text と svg が両方ある場合
      if (Object.keys(state.gist.files).length >= 2) {
        // Gist 投稿
        axios.post(`${state.api}?access_token=${state.token}`, state.gist)
        .then((response) => {
          state.gistUrl = response.data.html_url
          state.isSending = false
        })
        .catch((error) => {
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

const actions = {
  setToken (context, token) {
    context.commit('setToken', token)
  },
  getToken (context) {
    context.commit('getToken')
  },
  setDescription (context, description) {
    context.commit('setDescription', description)
  },
  setPublic (context, isPublic) {
    context.commit('setPublic', isPublic)
  },
  createGist (context, data) {
    context.commit('createGist', data)
  },
  resetGist (context) {
    context.commit('resetGist')
  }
}

export default {
  state,
  mutations,
  actions
}
