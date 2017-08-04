<template>
  <form class="form-inline">
    <div class="form-group">
      <label for="umlWidth">size</label>
      <input type="number" id="umlWidth" step="10" max="300" min="10" v-model="umlWidth" class="form-control">
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
        <a :href="src" class="btn btn-default" download data-toggle="tooltip" data-placement="bottom" title="download" data-container="body">
          <span class="glyphicon glyphicon-download-alt"></span>
        </a>
        <button type="button" class="btn btn-default" @click="showGistModal" data-toggle="tooltip" data-placement="bottom" title="share" data-container="body">
          <span class="glyphicon glyphicon-share-alt"></span>
        </button>
      </div>
    </div>
  </form>
</template>

<script>
/* @flow */

export default {
  name: 'parameters',
  computed: {
    src (): string {
      return this.$store.state.plantumlEditor.src
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
  data (): any {
    return {
      umlExtensions: [
        {
          text: 'svg',
          value: 'svg'
        },
        {
          text: 'png',
          value: 'png'
        }
      ]
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
