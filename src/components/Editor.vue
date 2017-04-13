<template>
  <div :style="{height: height}"></div>
</template>

<script>
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
  data () {
    return {
      editor: null,
      theme: 'solarized_dark',
      lang: 'tcl'
    }
  },
  mounted () {
    this.init()
    this.dispatch()
  },
  methods: {
    init () {
      this.editor = ace.edit(this.$el)
      this.editor.$blockScrolling = Infinity
      this.editor.setTheme('ace/theme/' + this.theme)
      this.editor.getSession().setMode('ace/mode/' + this.lang)
    },
    dispatch () {
      this.$store.dispatch('setEditor', this.editor)
      this.$store.dispatch('setEditorText')
      // イベント設定
      this.editor.on('change', () => {
        this.$store.dispatch('renderUML', this.editor.getValue())
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
