<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="thumbnail">
        <img :src="src" :width="umlWidth+'%'" @load="loadedImg">
      </div>
      <p v-show="isLoading">
        <i class="fa fa-refresh fa-spin fa-lg fa-fw"></i> loading ...
      </p>
    </div>
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
  },
  data () {
    return {
      isLoading: false,
      loadingDelay: 500
    }
  },
  created () {
    this.isLoading = true
  },
  watch: {
    src () {
      if (this.src) {
        this.isLoading = true
      }
    }
  },
  methods: {
    loadedImg () {
      window.setTimeout(() => {
        this.isLoading = false
      }, this.loadingDelay)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
