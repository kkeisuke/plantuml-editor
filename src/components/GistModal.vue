<template>
  <div id="gist" class="modal fade">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
          <div class="h3 modal-title">Gist <small>upload svg and text</small></div>
        </div>
        <div class="modal-body">
          <form class="form-horizontal" @submit.prevent="submit">
            <div class="form-group" :class="{'has-error':errors.has('fileName')}">
              <label for="fileName" class="col-sm-2 control-label">file name</label>
              <div class="col-sm-10">
                <input
                  type="text"
                  id="fileName"
                  name="fileName"
                  v-model="fileName"
                  v-validate="'required|fileName'"
                  data-vv-as="file name"
                  class="form-control">
                <span class="help-block" v-if="errors.has('fileName')">
                  {{errors.first('fileName')}}
                </span>
                <span class="help-block" v-else-if="fileName">
                  file name are <code>{{fileName}}.{{ext.svg}}</code>, <code>{{fileName}}.{{ext.txt}}</code> .
                </span>
                <span class="help-block" v-else>
                  <code>.{{ext.svg}}</code> and <code>.{{ext.txt}}</code> file name
                </span>
              </div>
            </div>
            <div class="form-group">
              <label for="description" class="col-sm-2 control-label">description</label>
              <div class="col-sm-10">
                <input
                  type="text"
                  id="description"
                  name="description"
                  v-model="description"
                  class="form-control">
              </div>
            </div>
            <div class="form-group">
              <div class="col-sm-offset-2 col-sm-10">
                <label class="radio-inline">
                  <input type="radio" name="isPublic" :value="true" v-model="isPublic"> public
                </label>
                <label class="radio-inline">
                  <input type="radio" name="isPublic" :value="false" v-model="isPublic"> secret
                </label>
              </div>
            </div>
            <div class="form-group" :class="{'has-error':errors.has('token')}">
              <label for="token" class="col-sm-2 control-label">token</label>
              <div class="col-sm-10">
                <input
                  type="text"
                  id="token"
                  name="token"
                  v-model="token"
                  v-validate="'required|alpha_num'"
                  data-vv-as="token"
                  class="form-control">
                <span class="help-block" v-if="errors.has('token')">
                  {{errors.first('token')}}<br>
                </span>
                <span class="help-block">
                  <a href="https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/" target="_blank">Creating a personal access token</a>
                </span>
              </div>
            </div>
            <div class="form-group">
              <div class="col-sm-offset-2 col-sm-10">
                <button type="button" class="btn btn-success" @click="createGist()" :disabled="gistApiInValid">
                  Create a gist <i class="fa fa-circle-o-notch fa-spin fa-lg fa-fw" v-show="isSending"></i>
                </button>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-offset-2 col-sm-10">
                <div class="alert alert-success" v-if="gistUrl">
                  <a :href="gistUrl" target="_blank">{{gistUrl}}</a>
                </div>
                <div class="alert alert-danger" v-if="errorMsg">
                  {{errorMsg}}
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* @flow */

export default {
  name: 'GistModal',
  computed: {
    description: {
      get (): string {
        return this.$store.state.gistApi.gist.description
      },
      set (value: string) {
        this.$store.dispatch('setDescription', value)
      }
    },
    isPublic: {
      get (): boolean {
        return this.$store.state.gistApi.gist.public
      },
      set (value: boolean) {
        this.$store.dispatch('setPublic', value)
      }
    },
    token: {
      get (): string {
        return this.$store.state.gistApi.token
      },
      set (value: string) {
        this.$store.dispatch('setToken', value)
      }
    },
    ext (): any {
      return this.$store.state.gistApi.ext
    },
    gistUrl (): string {
      return this.$store.state.gistApi.gistUrl
    },
    errorMsg (): string {
      return this.$store.state.gistApi.errorMsg
    },
    isSending (): boolean {
      return this.$store.state.gistApi.isSending
    },
    gistApiInValid (): boolean {
      // 「ファイル名が空 or GistのURL取得済み or バリデーションエラーがある or 送信中」場合は投稿できない
      const result: boolean = this.fileName === '' ||
        Boolean(this.$store.state.gistApi.gistUrl) ||
        Boolean(this.$validator.errors.count()) ||
        this.$store.state.gistApi.isSending
      return result
    }
  },
  data (): any {
    return {
      fileName: ''
    }
  },
  mounted () {
    this.setValidation()
    this.setEvent()
    // TODO しばらく残しておく 2017/08/07
    if (window.localStorage) {
      window.localStorage.removeItem(this.$store.state.gistApi.api)
    }
  },
  methods: {
    setValidation () {
      this.$validator.extend('fileName', this.$store.state.gistApi.validation.fileName)
    },
    setEvent () {
      window.$('#gist').on('shown.bs.modal hidden.bs.modal', () => {
        this.$validator.errors.clear()
        this.fileName = ''
        this.$store.dispatch('resetGist')
      })
    },
    submit () {
      // 誤送信を防ぐために無効化する
    },
    createGist () {
      this.$store.dispatch('createGist', {
        'fileName': this.fileName,
        'text': this.$store.state.plantumlEditor.text,
        'src': this.$store.state.plantumlEditor.src
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
