<template>
  <form class="form-inline">
    <div class="form-group">
      <label for="umlWidth">size</label>
      <input type="number" id="umlWidth" step="10" max="100" min="10" v-model="umlWidth" class="form-control">
    </div>
    <div class="form-group">
      <label for="umlExtension">extension</label>
      <select id="umlExtension" v-model="umlExtension" class="form-control">
        <option v-for="option in umlExtensions" :value="option.value">
          {{ option.text }}
        </option>
      </select>
    </div>
  </form>
</template>

<script>
export default {
  name: 'uml',
  computed: {
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
