<template>
  <form class="form-inline">
    <div class="form-group">
      <label for="umlWidth">size</label>
      <input type="number" id="umlWidth" step="10" max="100" min="10" v-model="umlWidth" class="form-control">
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
          <span class="glyphicon glyphicon-refresh"></span>
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
export default {
  name: 'parameters',
  computed: {
    src () {
      return this.$store.state.plantumlEditor.src
    },
    umlWidth: {
      get () {
        return this.$store.state.plantumlEditor.umlWidth
      },
      set (value) {
        this.$store.dispatch('setUmlWidth', value)
      }
    },
    umlExtension: {
      get () {
        return this.$store.state.plantumlEditor.umlExtension
      },
      set (value) {
        this.$store.dispatch('setUmlExtension', value)
        this.$store.dispatch('renderUML', this.$store.state.plantumlEditor.text)
      }
    }
  },
  data () {
    return {
      umlExtensions: [
        {
          text: 'svg',
          value: 'svg'
        },
        {
          text: 'img',
          value: 'img'
        }
      ]
    }
  },
  methods: {
    renderUML (event) {
      this.$store.dispatch('renderUML', this.$store.state.plantumlEditor.text)
    },
    save (event) {
      this.$store.dispatch('save', this.$store.state.plantumlEditor)
    },
    showGistModal ($event) {
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
