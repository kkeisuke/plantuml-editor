<template>
  <div class="thumbnail">
    <img :src="src" :width="umlWidth+'%'">
  </div>
</template>

<script>
export default {
  name: 'uml',
  computed: {
    src () {
      return this.$store.state.plantumlEditor.src
    },
    umlWidth () {
      return this.$store.state.plantumlEditor.umlWidth
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
