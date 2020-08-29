<template>
  <div id="ERCheatSheet">
    <div class="h4">ER diagram</div>
    <table class="table table-bordered table-hover">
      <tbody>
        <tr>
          <td>{{ entity.title }}</td>
          <td>
            <code v-clipboard>{{ entity.text }}</code>
          </td>
        </tr>
        <tr>
          <td>{{ one.title }}</td>
          <td>
            <code v-clipboard>{{ one.text }}</code>
          </td>
        </tr>
        <tr>
          <td>{{ zeroOrOne.title }}</td>
          <td>
            <code v-clipboard>{{ zeroOrOne.text }}</code>
          </td>
        </tr>
        <tr>
          <td>{{ oneAndOnlyOne.title }}</td>
          <td>
            <code v-clipboard>{{ oneAndOnlyOne.text }}</code>
          </td>
        </tr>
        <tr>
          <td>{{ many.title }}</td>
          <td>
            <code v-clipboard>{{ many.text }}</code>
          </td>
        </tr>
        <tr>
          <td>{{ zeroOrMany.title }}</td>
          <td>
            <code v-clipboard>{{ zeroOrMany.text }}</code>
          </td>
        </tr>
        <tr>
          <td>{{ oneOrMany.title }}</td>
          <td>
            <code v-clipboard>{{ oneOrMany.text }}</code>
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
  name: 'ErCheatSheet',
  mixins: [cheatSheetMixin],
  data(): any {
    return {
      ...this.contents.er
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
