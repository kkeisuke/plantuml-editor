<template>
  <div class="row functionTop">
    <div class="col-sm-12">
      <div class="alert alert-warning" v-if="!isHTTPS">
        Please go to <a :href="url">{{url}}</a>
      </div>
      <div class="alert alert-default">
        Preview are <kbd>{{winKey}}</kbd> or <kbd>{{macKey}}</kbd> .
      </div>
      <div class="row form-group">
        <div class="col-sm-12">
          <parameters></parameters>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* @flow */

// components
import Parameters from './Parameters'

export default {
  name: 'FunctionTop',
  components: {
    Parameters
  },
  computed: {
    isHTTPS (): boolean {
      return this.$store.state.plantumlEditor.isHTTPS
    },
    url (): string {
      return this.$store.state.plantumlEditor.url
    }
  },
  data (): any {
    return {
      winKey: this.$store.state.plantumlEditor.renderUMLKey.win,
      macKey: this.$store.state.plantumlEditor.renderUMLKey.mac
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
