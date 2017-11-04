<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="umlImage" :style="{'height':height}">
        <div v-html="preMarkdown"></div>
        <div class="text-center">
          <p>
            <img :src="src" @load="loadedImg" v-if="!isSvg">
            <object :data="src" :width="umlWidth+'%'" @load="loadedImg" v-if="isSvg"></object>
          </p>
        </div>
        <div v-html="afterMarkdown"></div>
      </div>
    </div>
  </div>
</template>

<script>
/* @flow */

export default {
  name: 'uml',
  props: {
    height: {
      type: String,
      default: '100%'
    }
  },
  computed: {
    src (): string {
      return this.$store.state.plantumlEditor.src
    },
    isSvg (): string {
      return this.$store.getters.isSvg
    },
    preMarkdown (): string {
      return this.$store.state.plantumlEditor.preMarkdown
    },
    afterMarkdown (): string {
      return this.$store.state.plantumlEditor.afterMarkdown
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
    this.$store.dispatch('setMarked')
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
  overflow: auto;
  width: 100%;
}
</style>
