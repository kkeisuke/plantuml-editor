<template>
  <div class="navbar navbar-inverse navbar-static-top">
    <div class="container-fluid">
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
import UmlTemplate from './UmlTemplate'

export default {
  name: 'headerNavbar',
  components: {
    UmlTemplate
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
