<template>
  <div id="ObjectCheatSheet">
    <div class="h4">
      Object
    </div>
    <table class="table table-bordered table-hover">
      <tbody>
        <tr>
          <td>{{ object.title }}</td>
          <td>
            <pre v-clipboard>{{ object.text }}</pre>
          </td>
        </tr>
        <tr>
          <td>{{ extension.title }}</td>
          <td>
            <code v-clipboard>{{ extension.text }}</code>
          </td>
        </tr>
        <tr>
          <td>{{ composition.title }}</td>
          <td>
            <code v-clipboard>{{ composition.text }}</code>
          </td>
        </tr>
        <tr>
          <td>{{ aggregation.title }}</td>
          <td>
            <code v-clipboard>{{ aggregation.text }}</code>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
/* @flow */

import cheatSheetMixin from './CheatSheetMixin'

export default {
  name: 'objectCheatSheet',
  mixins: [cheatSheetMixin],
  data(): any {
    return {
      ...this.contents.object
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
