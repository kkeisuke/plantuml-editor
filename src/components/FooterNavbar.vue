<template>
  <div class="navbar navbar-default navbar-fixed-bottom">
    <div class="container-fluid">
      <div class="navbar-right">
        <p class="navbar-text">
          <a :href="url" class="navbar-link" target="_blank">{{url}}</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footerNavbar',
  computed: {
    url () {
      return this.$store.state.plantumlEditor.url
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
