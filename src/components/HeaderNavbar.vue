<template>
  <div class="navbar navbar-inverse navbar-static-top">
    <div class="container-fluid">
      <ul class="nav navbar-nav navbar-left">
        <li>
          <a href="#" @click.prevent="changeColSize">
            <span class="glyphicon glyphicon-menu-hamburger"></span>
          </a>
        </li>
      </ul>
      <div class="navbar-header">
        <a class="navbar-brand" href="#">PlantUML Editor <span class="h6">beta</span></a>
      </div>
      <umlTemplate></umlTemplate>
      <ul class="nav navbar-nav navbar-right">
        <li>
          <a href="#" data-toggle="modal" data-target="#help">
            <span class="glyphicon glyphicon-question-sign"></span> HELP
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
/* @flow */

import UmlTemplate from './UmlTemplate'

export default {
  name: 'headerNavbar',
  components: {
    UmlTemplate
  },
  methods: {
    changeColSize () {
      if (this.$store.state.plantumlEditor.colSize.history) {
        this.$store.dispatch('setColSize', {
          'history': 0,
          'editor': 5,
          'uml': 7
        })
      } else {
        this.$store.dispatch('resetColSize')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
