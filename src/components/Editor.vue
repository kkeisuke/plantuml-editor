<template>
  <div :style="{height: height}"></div>
</template>

<script>
/* @flow */

import ace from 'brace'
// 一番それっぽいシンタックスハイライト
import 'brace/mode/tcl'
import 'brace/theme/solarized_dark'

export default {
  name: 'editor',
  props: {
    height: {
      type: String,
      default: '100%'
    }
  },
  data (): any {
    return {
      editor: null,
      theme: 'solarized_dark',
      lang: 'tcl'
    }
  },
  created () {
    this.resize()
  },
  mounted () {
    this.init()
    this.setEvent()
    this.dispatch()
  },
  methods: {
    init () {
      this.editor = ace.edit(this.$el)
      this.editor.$blockScrolling = Infinity
      this.editor.setTheme('ace/theme/' + this.theme)
      this.editor.getSession().setMode('ace/mode/' + this.lang)
      this.editor.setOption('scrollPastEnd', true)
      this.editor.commands.addCommand({
        name: 'renderUML',
        bindKey: {
          'win': this.$store.state.plantumlEditor.renderUMLKey.win,
          'mac': this.$store.state.plantumlEditor.renderUMLKey.mac
        },
        exec: (editor: any) => {
          this.$store.dispatch('renderUML', this.editor.getValue())
        }
      })
    },
    setEvent () {
      this.editor.on('change', () => {
        this.$store.dispatch('syncText', this.editor.getValue())
      })
    },
    resize () {
      let timer: any = null
      window.addEventListener('resize', () => {
        if (timer) {
          clearTimeout(timer)
        }
        timer = setTimeout(() => {
          this.editor.resize()
        }, this.$store.state.plantumlEditor.FPS)
      })
    },
    dispatch () {
      this.$store.dispatch('setEditor', this.editor)
      this.$store.dispatch('setEditorText')
      this.$store.dispatch('renderUML', this.editor.getValue())
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
