<template>
  <div class="navbar navbar-inverse navbar-static-top">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">PlantUML Editor</a>
      </div>
      <div class="navbar-right">
        <p class="navbar-text">
          <a :href="twitter" class="twitter-follow-button" data-show-count="false">Follow @kkeisuke</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'headerNavbar',
  data () {
    return {
      twitter: 'https://twitter.com/kkeisuke'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
