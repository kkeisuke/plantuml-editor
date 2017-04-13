<template>
  <div id="app">
    <headerNavbar></headerNavbar>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-2">
          <historyList :height="historyH"></historyList>
        </div>
        <div class="col-sm-4 col-ace">
          <editor :height="height"></editor>
        </div>
        <div class="col-sm-6">
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
import HistoryList from './components/HistoryList'
import Uml from './components/Uml'
import Editor from './components/Editor'

export default {
  name: 'app',
  store,
  components: {
    HeaderNavbar,
    FooterNavbar,
    Parameters,
    HistoryList,
    Uml,
    Editor
  },
  data () {
    return {
      height: '0px',
      historyH: '0px'
    }
  },
  created () {
    this.setHeight()
    this.resize()
    this.$store.commit('getLocalStrage')
    this.$store.dispatch('renderUML', this.$store.state.plantumlEditor.text)
    this.$store.dispatch('defineScheme')
  },
  methods: {
    setHeight () {
      this.height = window.innerHeight - 70 + 'px'
      this.historyH = window.innerHeight - 105 + 'px'
    },
    resize () {
      let timer = null
      // FPS 30
      const interval = Math.floor(1000 / 30 * 10)
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
/* Bootstrap */
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

.col-ace {
  margin-top: -20px;
  padding: 0;
}
</style>
