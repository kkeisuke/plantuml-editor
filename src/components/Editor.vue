<template>
  <div :style="{height: height}">
    <codemirror :value="text" :options="options" @ready="onReady" @input="onChange"></codemirror>
  </div>
</template>

<script>
/* @flow */

import { codemirror } from 'vue-codemirror'
import 'codemirror/keymap/sublime.js'
import 'codemirror/addon/selection/active-line.js'
import '../lib/codemirror/mode/plantuml/plantuml.js'

import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/solarized.css'

export default {
  components: {
    codemirror
  },
  name: 'editor',
  props: {
    height: {
      type: String,
      default: '100%'
    }
  },
  computed: {
    text (): string {
      return this.$store.state.plantumlEditor.text
    }
  },
  data (): any {
    return {
      codemirror: null,
      options: {
        mode: 'plantuml',
        theme: 'solarized dark',
        lineNumbers: true,
        styleActiveLine: true,
        keyMap: 'sublime'
      }
    }
  },
  methods: {
    onReady (codemirror: any) {
      this.codemirror = codemirror
      this.addKeymap()
      setTimeout(() => {
        this.codemirror.setSize('100%', '100%')
      })
    },
    onChange (text: string) {
      this.$store.dispatch('syncText', text)
    },
    addKeymap () {
      const map: {key?: string, callback?: Function} = {}
      map[this.$store.state.plantumlEditor.renderUMLKey.win] = () => {
        this.$store.dispatch('renderUML', this.$store.state.plantumlEditor.text)
      }
      map[this.$store.state.plantumlEditor.renderUMLKey.mac] = () => {
        this.$store.dispatch('renderUML', this.$store.state.plantumlEditor.text)
      }
      this.codemirror.setOption('extraKeys', map)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.vue-codemirror,
.CodeMirror {
  height: 100%;
}
</style>
