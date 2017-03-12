<template>
  <div id="app">
    <headerNavbar></headerNavbar>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-4 col-ace">
          <editor :content="text" :theme="'solarized_dark'" :lang="'tcl'" :height="height"></editor>
        </div>
        <div class="col-sm-8">
          <div class="row form-group">
            <div class="col-sm-12">
              <parameters></parameters>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <uml></uml>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footerNavbar></footerNavbar>
  </div>
</template>

<script>
// Bootstrap
window.$ = window.jQuery = require('jquery')
require('bootstrap')

// store
import store from './store'

// components
import HeaderNavbar from './components/HeaderNavbar'
import FooterNavbar from './components/FooterNavbar'
import Parameters from './components/Parameters'
import Uml from './components/Uml'
import editor from 'vue2-ace'
// 一番それっぽいシンタックスハイライト
import 'brace/mode/tcl'
import 'brace/theme/solarized_dark'

export default {
  name: 'app',
  store,
  components: {
    HeaderNavbar,
    FooterNavbar,
    Parameters,
    Uml,
    editor
  },
  computed: {
    text () {
      return this.$store.state.plantumlEditor.text
    }
  },
  data () {
    return {
      // リサイズ等は考慮していません
      height: window.innerHeight - 70 + 'px'
    }
  },
  created () {
    this.$store.commit('getLocalStrage')
    this.$store.dispatch('renderUML', this.$store.state.plantumlEditor.text)
  },
  mounted () {
    this.$on('editor-update', (text) => {
      this.$store.dispatch('renderUML', text)
    })
  }
}
</script>

<style>
/* Bootstrap */
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

.col-ace {
  margin-top: -20px;
  padding: 0;
}
</style>
