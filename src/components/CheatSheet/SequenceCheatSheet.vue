<template>
  <div id="SequenceCheatSheet">
    <div class="h4">
      Sequence
    </div>
    <table class="table table-bordered table-hover">
      <tbody>
        <tr>
          <td>{{ autonumber.title }}</td>
          <td>
            <code v-clipboard>{{ autonumber.text }}</code>
          </td>
        </tr>
        <tr>
          <td>
            <img :src="createUrl(participant.img)" :alt="participant.title" />
          </td>
          <td>
            <pre v-clipboard>{{ participant.text }}</pre>
          </td>
        </tr>
        <tr>
          <td>{{ activate.title }}</td>
          <td>
            <code v-clipboard>{{ activate.text }}</code> abc
          </td>
        </tr>
        <tr>
          <td>{{ deactivate.title }}</td>
          <td>
            <code v-clipboard>{{ deactivate.text }}</code> abc
          </td>
        </tr>
        <tr>
          <td>{{ altelse.title }}</td>
          <td>
            <pre v-clipboard>{{ altelse.text }}</pre>
          </td>
        </tr>
        <tr>
          <td>{{ loop.title }}</td>
          <td>
            <pre v-clipboard>{{ loop.text }}</pre>
          </td>
        </tr>
        <tr>
          <td>{{ separate.title }}</td>
          <td>
            <code v-clipboard>{{ separate.text }}</code>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="js">
/* @flow */

import cheatSheetMixin from './CheatSheetMixin'

export default {
  name: 'SequenceCheatSheet',
  mixins: [cheatSheetMixin],
  data(): any {
    return {
      ...this.contents.sequence
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
