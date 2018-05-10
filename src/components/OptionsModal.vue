<template>
  <div id="options" class="modal fade">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
          <div class="h3 modal-title">Options</div>
        </div>
        <div class="modal-body">
          <form class="form-horizontal">
            <div class="form-group">
              <label class="col-sm-2 control-label">keymap</label>
              <div class="col-sm-10">
                <label class="radio-inline">
                  <input type="radio" name="keymap" v-model="keymap" value="sublime"> sublime
                </label>
                <label class="radio-inline">
                  <input type="radio" name="keymap" v-model="keymap" value="vim"> vim
                </label>
                <label class="radio-inline">
                  <input type="radio" name="keymap" v-model="keymap" value="emacs"> emacs
                </label>
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-2 control-label">indent</label>
              <div class="col-sm-10">
                <label class="radio-inline">
                  <input type="radio" name="indent" v-model="indent" value="space2"> space 2
                </label>
                <label class="radio-inline">
                  <input type="radio" name="indent" v-model="indent" value="space4"> space 4
                </label>
                <label class="radio-inline">
                  <input type="radio" name="indent" v-model="indent" value="tab"> tab
                </label>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* @flow */

export default {
  name: 'OptionsModal',
  computed: {
    keymap: {
      get(): string {
        return this.$store.state.plantumlEditor.codemirrorOptions.keyMap
      },
      set(value: string) {
        this.$store.dispatch('plantumlEditor/syncCodeMirrorKeyMap', value)
      }
    },
    indent: {
      get(): string {
        return this.$store.state.plantumlEditor.codemirrorIndent
      },
      set(value: string) {
        this.$store.dispatch('plantumlEditor/syncCodeMirrorIndent', value)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
