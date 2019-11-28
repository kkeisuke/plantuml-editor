<template>
  <div id="UseCaseCheatSheet">
    <div class="h4">
      Use Case
    </div>
    <table class="table table-bordered table-hover">
      <tbody>
        <tr>
          <td>{{ rectangle.title }}</td>
          <td>
            <pre v-clipboard>{{ rectangle.text }}</pre>
          </td>
        </tr>
        <tr>
          <td>{{ up.title }}</td>
          <td>
            <code v-clipboard>{{ up.text }}</code> (text)
          </td>
        </tr>
        <tr>
          <td>{{ right.title }}</td>
          <td>
            <code v-clipboard>{{ right.text }}</code> (text)
          </td>
        </tr>
        <tr>
          <td>{{ down.title }}</td>
          <td>
            <code v-clipboard>{{ down.text }}</code> (text)
          </td>
        </tr>
        <tr>
          <td>{{ left.title }}</td>
          <td>
            <code v-clipboard>{{ left.text }}</code> (text)
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
  name: 'UseCaseCheatSheet',
  mixins: [cheatSheetMixin],
  data(): any {
    return {
      ...this.contents.usecase
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
