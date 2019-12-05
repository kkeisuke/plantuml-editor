<template>
  <div class="row">
    <div class="col-sm-12">
      <div id="umlArea" class="umlImage" :style="{ height: height }">
        <div v-html="preMarkdown"></div>
        <div class="text-center" align="center">
          <p>
            <img :src="src" @load="loadedImg" v-if="!isSvg" />
            <UmlSvg :src="src" :size="`${umlWidth}%`" @load="loadedImg" v-if="isSvg" />
          </p>
        </div>
        <div v-html="afterMarkdown"></div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
/* @flow */
import UmlSvg from './UmlSvg'

export default {
  name: 'Uml',
  components: {
    UmlSvg
  },
  props: {
    height: {
      type: String,
      default: '100%'
    }
  },
  data(): any {
    return {
      loadingDelay: 500
    }
  },
  computed: {
    src(): string {
      return this.$store.state.plantumlEditor.src
    },
    isSvg(): string {
      return this.$store.getters['plantumlEditor/isSvg']
    },
    preMarkdown(): string {
      return this.$store.state.plantumlEditor.preMarkdown
    },
    afterMarkdown(): string {
      return this.$store.state.plantumlEditor.afterMarkdown
    },
    umlWidth(): number {
      return this.$store.state.plantumlEditor.umlWidth
    }
  },
  watch: {
    src() {
      if (this.src) {
        this.$store.dispatch('plantumlEditor/setIsLoading', true)
      }
    }
  },
  created() {
    this.$store.dispatch('plantumlEditor/setMarked')
    this.$store.dispatch('plantumlEditor/setIsLoading', true)
  },
  methods: {
    loadedImg() {
      window.setTimeout(() => {
        this.$store.dispatch('plantumlEditor/setIsLoading', false)
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
