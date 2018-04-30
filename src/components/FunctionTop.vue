<template>
  <div class="row functionTop">
    <div class="col-sm-12">
      <div class="alert alert-warning" v-if="showHTTPSWarning">
        Your connection is not secure.
        Please go to <a :href="url">{{url}}</a>
        <button type="button" class="close pull-right" @click="hideHTTPSWarning">&times;</button>
      </div>
      <div class="alert alert-default" v-if="showHotkeyTips">
        Preview is <kbd>{{winKey}}</kbd> or <kbd>{{macKey}}</kbd> . Snippets are <kbd>{{snippetWinKey}}</kbd> or <kbd>{{snippetMacKey}}</kbd> .
        <button type="button" class="close pull-right" @click="hideHotkeyTips">&times;</button>
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
    showHTTPSWarning (): boolean {
      return (!this.$store.state.plantumlEditor.isHTTPS && this.$store.state.plantumlEditor.showHTTPSWarning)
    },
    showHotkeyTips (): boolean {
      return this.$store.state.plantumlEditor.showHotkeyTips
    },
    url (): string {
      return this.$store.state.plantumlEditor.url
    }
  },
  data (): any {
    return {
      winKey: this.$store.state.plantumlEditor.renderUMLKey.win,
      macKey: this.$store.state.plantumlEditor.renderUMLKey.mac,
      snippetWinKey: this.$store.state.plantumlEditor.snippetKey.win,
      snippetMacKey: this.$store.state.plantumlEditor.snippetKey.mac
    }
  },
  methods: {
    hideHTTPSWarning () {
      this.$store.commit('plantumlEditor/setShowHTTPSWarning', false)
    },
    hideHotkeyTips () {
      this.$store.commit('plantumlEditor/setShowHotkeyTips', false)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
