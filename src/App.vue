<template>
  <div id="app">
    <headerNavbar></headerNavbar>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-2">
          <historyList :height="historyH"></historyList>
        </div>
        <div class="col-sm-4 col-editor">
          <editor :height="height"></editor>
        </div>
        <div class="col-sm-6">
          <div class="row">
            <div class="col-sm-12">
              <div class="alert alert-info alert-dismissible">
                <button type="button" class="close" data-dismiss="alert"><span>&times;</span></button>
                Preview Keybindings are { win:'{{winKey}}', mac:'{{macKey}}' } .
              </div>
            </div>
          </div>
          <div class="row form-group">
            <div class="col-sm-12">
              <parameters></parameters>
            </div>
          </div>
          <uml></uml>
        </div>
      </div>
    </div>
    <helpModal></helpModal>
    <gistModal></gistModal>
    <footerNavbar></footerNavbar>
  </div>
</template>

<script>
/* @flow */

// Bootstrap
window.$ = window.jQuery = require('jquery')
require('bootstrap')

// store
import store from './store'

// components
import HeaderNavbar from './components/HeaderNavbar'
import FooterNavbar from './components/FooterNavbar'
import HelpModal from './components/HelpModal'
import GistModal from './components/GistModal'
import Parameters from './components/Parameters'
import HistoryList from './components/HistoryList'
import Uml from './components/Uml'
import Editor from './components/Editor'

export default {
  name: 'app',
  store,
  components: {
    HeaderNavbar,
    FooterNavbar,
    HelpModal,
    GistModal,
    Parameters,
    HistoryList,
    Uml,
    Editor
  },
  data (): any {
    return {
      height: '0px',
      historyH: '0px',
      winKey: this.$store.state.plantumlEditor.renderUMLKey.win,
      macKey: this.$store.state.plantumlEditor.renderUMLKey.mac
    }
  },
  created () {
    this.setHeight()
    this.resize()
    this.$store.dispatch('getLocalStrage')
    this.$store.dispatch('renderUML', this.$store.state.plantumlEditor.text)
    this.$store.dispatch('defineScheme')
  },
  mounted () {
    window.$('[data-toggle="tooltip"]').tooltip()
  },
  methods: {
    setHeight () {
      this.height = window.innerHeight - 70 + 'px'
      this.historyH = window.innerHeight - 105 + 'px'
    },
    resize () {
      let timer: any = null
      // FPS 30
      let interval: number = Math.floor(1000 / 30 * 10)
      window.addEventListener('resize', () => {
        if (timer) {
          clearTimeout(timer)
        }
        timer = setTimeout(() => {
          this.setHeight()
        }, interval)
      })
    }
  }
}
</script>

<style>
/* font-awesome */
@import "../node_modules/font-awesome/css/font-awesome.min.css";
/* Bootstrap */
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

.col-editor {
  margin-top: -20px;
  padding: 0;
}
</style>
