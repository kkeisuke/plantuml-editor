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
    <div class="form-group pull-right">
      <a :href="src" class="btn btn-info" download>
        <span class="glyphicon glyphicon-save-file"></span> download
      </a>
    </div>
    <div class="form-group pull-right">
      <button type="button" class="btn btn-success" @click="save">
        <span class="glyphicon glyphicon-plus"></span> save
      </button>
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
        this.$store.commit('setUmlWidth', value)
      }
    },
    umlExtension: {
      get () {
        return this.$store.state.plantumlEditor.umlExtension
      },
      set (value) {
        this.$store.commit('setUmlExtension', value)
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
    save: function (event) {
      this.$store.dispatch('save', this.$store.state.plantumlEditor)
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
