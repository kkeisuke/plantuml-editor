<template>
  <div class="navbar navbar-inverse navbar-static-top">
    <div class="container-fluid">
      <ul class="nav navbar-nav navbar-left">
        <li>
          <a href="#" @click.prevent="changeHistoryColSize">
            <span class="glyphicon glyphicon-menu-hamburger"></span>
          </a>
        </li>
      </ul>
      <div class="navbar-header">
        <a class="navbar-brand" href="#" @click.prevent>PlantUML Editor <span class="h6">beta</span></a>
      </div>
      <umlTemplate></umlTemplate>
      <ul class="nav navbar-nav">
        <li class="dropdown">
          <a class="dropdown-toggle" data-toggle="dropdown" role="button">
            <span class="glyphicon glyphicon-info-sign"></span> cheat sheet <b class="caret"></b>
          </a>
          <ul class="dropdown-menu">
            <li><a href="#CommonCheatSheet" @click="changeCheatSheetColSize">Common</a></li>
            <li class="divider"></li>
            <li class="dropdown-header">behavioral diagrams</li>
            <li><a href="#UseCaseCheatSheet" @click="changeCheatSheetColSize">Use Case</a></li>
            <li><a href="#ActivityCheatSheet" @click="changeCheatSheetColSize">Activity</a></li>
            <li><a href="#SequenceCheatSheet" @click="changeCheatSheetColSize">Sequence</a></li>
            <li class="divider"></li>
            <li class="dropdown-header">structural diagrams</li>
            <li><a href="#ObjectCheatSheet" @click="changeCheatSheetColSize">Object</a></li>
            <li><a href="#ClassCheatSheet" @click="changeCheatSheetColSize">Class</a></li>
          </ul>
        </li>
      </ul>
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
    changeHistoryColSize () {
      if (this.$store.state.plantumlEditor.colSize.history) {
        this.$store.dispatch('setColSize', {
          'history': 0,
          'editor': 5,
          'cheatSheet': 0,
          'uml': 7
        })
      } else {
        this.$store.dispatch('resetColSize')
      }
    },
    changeCheatSheetColSize () {
      this.$store.dispatch('setColSize', {
        'history': 0,
        'editor': 4,
        'cheatSheet': 3,
        'uml': 5
      })
      // 強制的にハッシュ削除
      window.setTimeout(() => {
        location.hash = ''
      }, 300)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
