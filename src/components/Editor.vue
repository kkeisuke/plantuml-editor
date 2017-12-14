<template>
  <div :style="{height: height}">
    <codemirror :value="text" :options="options" @ready="onReady" @input="onChange"></codemirror>
  </div>
</template>

<script>
/* @flow */

import { codemirror } from 'vue-codemirror'
import 'codemirror/keymap/sublime.js'
import 'codemirror/keymap/vim.js'
import 'codemirror/keymap/emacs.js'
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
    },
    options (): any {
      return this.$store.state.plantumlEditor.codemirrorOptions
    }
  },
  data (): any {
    return {
      codemirror: null
    }
  },
  methods: {
    onReady (codemirror: any) {
      this.codemirror = codemirror
      this.addKeymap()
      setTimeout(() => {
        this.codemirror.setSize('100%', 'calc(100% - 2px)')
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
.vue-codemirror {
  height: 100%;
}
</style>
