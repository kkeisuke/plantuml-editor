<template>
  <div :style="{height: height}">
    <codemirror :value="text" :options="options" @ready="onReady" @input="onChange"></codemirror>
  </div>
</template>

<script>
/* @flow */

import CodeMirror from 'codemirror/lib/codemirror.js'
import { codemirror } from 'vue-codemirror'
import 'codemirror/keymap/sublime.js'
import 'codemirror/keymap/vim.js'
import 'codemirror/keymap/emacs.js'
import 'codemirror/addon/selection/active-line.js'
import 'codemirror/addon/hint/show-hint.js'
import '../lib/codemirror/mode/plantuml/plantuml.js'

import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/solarized.css'
import 'codemirror/addon/hint/show-hint.css'

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
      codemirror: null,
      snippets: this.$store.getters['cheatSheet/snippets']
    }
  },
  methods: {
    onReady (codemirror: any) {
      this.codemirror = codemirror
      this.addKeymap()
      setTimeout(() => {
        this.codemirror.setSize('100%', 'calc(100%)')
      })
    },
    onChange (text: string) {
      this.$store.dispatch('plantumlEditor/syncText', text)
    },
    snippet () {
      const codemirror: any = this.codemirror
      const snippets: any[] = this.snippets
      CodeMirror.showHint(codemirror, function (): any {
        const cursor: any = codemirror.getCursor()
        const token: any = codemirror.getTokenAt(cursor)
        const start: number = token.start
        const end: number = cursor.ch
        const line: number = cursor.line
        const currentWord: string = token.string

        const list: any[] = snippets.filter((item: any): boolean => {
          return item.text.indexOf(currentWord) >= 0
        })

        return {
          list: list.length ? list : snippets,
          from: CodeMirror.Pos(line, start),
          to: CodeMirror.Pos(line, end)
        }
      }, { completeSingle: false })
    },
    insertTab () {
      const codemirror: any = this.codemirror
      if (this.$store.getters['plantumlEditor/isTab']) {
        codemirror.execCommand('defaultTab')
      } else {
        codemirror.execCommand('insertSoftTab')
      }
    },
    addKeymap () {
      const map: any = {}
      map[this.$store.state.plantumlEditor.renderUMLKey.win] = () => {
        this.$store.dispatch('plantumlEditor/renderUML', this.$store.state.plantumlEditor.text)
      }
      map[this.$store.state.plantumlEditor.renderUMLKey.mac] = () => {
        this.$store.dispatch('plantumlEditor/renderUML', this.$store.state.plantumlEditor.text)
      }
      map[this.$store.state.plantumlEditor.snippetKey.win] = () => {
        this.snippet()
      }
      map[this.$store.state.plantumlEditor.snippetKey.mac] = () => {
        this.snippet()
      }
      map.Tab = () => {
        this.insertTab()
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
