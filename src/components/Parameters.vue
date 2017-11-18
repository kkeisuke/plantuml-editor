<template>
  <form class="form-inline">
    <div class="form-group">
      <label for="umlWidth">size</label>
      <input type="number" id="umlWidth" step="10" max="300" min="10" v-model="umlWidth" class="form-control" :disabled="!isSvg">
    </div>
    <div class="form-group">
      <label for="umlExtension">img</label>
      <select id="umlExtension" v-model="umlExtension" class="form-control">
        <option v-for="option in umlExtensions" :value="option.value">
          {{ option.text }}
        </option>
      </select>
    </div>
    <div class="form-group">
      <div class="btn-group">
        <button type="button" class="btn btn-default" @click="renderUML" data-toggle="tooltip" data-placement="bottom" title="refresh" data-container="body">
          <span class="glyphicon glyphicon-refresh" :class="{'fa-spin':isLoading}"></span>
        </button>
        <button type="button" class="btn btn-default" @click="save" data-toggle="tooltip" data-placement="bottom" title="save" data-container="body">
          <span class="glyphicon glyphicon-plus"></span>
        </button>
        <a :href="src" class="btn btn-default" @click.prevent="download" data-toggle="tooltip" data-placement="bottom" title="download" data-container="body">
          <span class="glyphicon glyphicon-download-alt"></span>
        </a>
        <popover-btn :title="'link'">
          <span slot="popover-btn" class="glyphicon glyphicon-link"></span>
          <span slot="popover-title">PlantUML Server URL</span>
          <div slot="popover-content" class="row">
            <div class="col-sm-12">
              <div class="input-group">
                <input type="text" class="form-control" v-model="src" v-clipboard readonly style="width:auto;">
                <span class="input-group-btn">
                  <a :href="src" target="_blank" class="btn btn-default"><i class="fa fa-external-link"></i></a>
                </span>
              </div>
              <span class="help-block">
                if click, copy to clipbord .
              </span>
            </div>
          </div>
        </popover-btn>
        <button type="button" class="btn btn-default" @click="showGistModal" :disabled="umlExtension!='svg'" data-toggle="tooltip" data-placement="bottom" title="share" data-container="body">
          <span class="glyphicon glyphicon-share-alt"></span>
        </button>
      </div>
    </div>
  </form>
</template>

<script>
/* @flow */

import PopoverBtn from './common/PopoverBtn'

export default {
  name: 'parameters',
  components: {
    PopoverBtn
  },
  computed: {
    src (): string {
      return this.$store.state.plantumlEditor.src
    },
    isSvg (): string {
      return this.$store.getters.isSvg
    },
    isLoading (): boolean {
      return this.$store.state.plantumlEditor.isLoading
    },
    umlWidth: {
      get (): number {
        return this.$store.state.plantumlEditor.umlWidth
      },
      set (value: number) {
        this.$store.dispatch('setUmlWidth', value)
      }
    },
    umlExtensions (): any {
      return this.$store.state.plantumlEditor.umlExtensions
    },
    umlExtension: {
      get (): string {
        return this.$store.state.plantumlEditor.umlExtension
      },
      set (value: string) {
        this.$store.dispatch('setUmlExtension', value)
        this.$store.dispatch('renderUML', this.$store.state.plantumlEditor.text)
      }
    }
  },
  methods: {
    renderUML (event: any) {
      this.$store.dispatch('renderUML', this.$store.state.plantumlEditor.text)
    },
    save (event: any) {
      this.$store.dispatch('save', this.$store.state.plantumlEditor)
      this.$store.dispatch('resetColSize')
    },
    showGistModal ($event: any) {
      window.$('#gist').modal('show')
      window.$('[data-toggle="tooltip"]').tooltip('hide')
    },
    download () {
      this.$store.dispatch('download')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-inline .form-group {
  margin-right: 10px;
}
</style>
