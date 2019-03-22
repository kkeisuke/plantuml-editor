<template>
  <div class="row cheatSheet" :style="{ height: height }">
    <div class="col-sm-12">
      <common-cheat-sheet :contents="contents" :cdn="cdn"></common-cheat-sheet>
      <use-case-cheat-sheet :contents="contents" :cdn="cdn"></use-case-cheat-sheet>
      <activity-cheat-sheet :contents="contents" :cdn="cdn"></activity-cheat-sheet>
      <sequence-cheat-sheet :contents="contents" :cdn="cdn"></sequence-cheat-sheet>
      <object-cheat-sheet :contents="contents" :cdn="cdn"></object-cheat-sheet>
      <class-cheat-sheet :contents="contents" :cdn="cdn"></class-cheat-sheet>
      <er-cheat-sheet :contents="contents" :cdn="cdn"></er-cheat-sheet>
    </div>
  </div>
</template>

<script lang="js">
/* @flow */

import CommonCheatSheet from './CheatSheet/CommonCheatSheet'
import UseCaseCheatSheet from './CheatSheet/UseCaseCheatSheet'
import ActivityCheatSheet from './CheatSheet/ActivityCheatSheet'
import SequenceCheatSheet from './CheatSheet/SequenceCheatSheet'
import ObjectCheatSheet from './CheatSheet/ObjectCheatSheet'
import ClassCheatSheet from './CheatSheet/ClassCheatSheet'
import ErCheatSheet from './CheatSheet/ERCheatSheet'

export default {
  name: 'cheatSheet',
  components: {
    CommonCheatSheet,
    UseCaseCheatSheet,
    ActivityCheatSheet,
    SequenceCheatSheet,
    ObjectCheatSheet,
    ClassCheatSheet,
    ErCheatSheet
  },
  props: {
    height: {
      type: String,
      default: '100%'
    }
  },
  data(): any {
    return {
      contents: this.$store.state.cheatSheet.contents,
      cdn: this.$store.state.plantumlEditor.cdn
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cheatSheet {
  margin-top: -20px;
  overflow-y: auto;
}
</style>
