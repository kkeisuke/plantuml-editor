<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="umlImage text-center" :style="{height:height}">
        <img :src="src" :width="umlWidth+'%'" @load="loadedImg">
      </div>
    </div>
  </div>
</template>

<script>
/* @flow */

export default {
  name: 'uml',
  props: [
    'height'
  ],
  computed: {
    src (): string {
      return this.$store.state.plantumlEditor.src
    },
    umlWidth (): number {
      return this.$store.state.plantumlEditor.umlWidth
    }
  },
  data (): any {
    return {
      loadingDelay: 500
    }
  },
  created () {
    this.$store.dispatch('setIsLoading', true)
  },
  watch: {
    src () {
      if (this.src) {
        this.$store.dispatch('setIsLoading', true)
      }
    }
  },
  methods: {
    loadedImg () {
      window.setTimeout(() => {
        this.$store.dispatch('setIsLoading', false)
      }, this.loadingDelay)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.umlImage {
  overflow: scroll;
  width: 100%;
}
</style>
