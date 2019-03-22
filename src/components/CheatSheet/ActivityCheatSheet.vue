<template>
  <div id="ActivityCheatSheet">
    <div class="h4">
      Activity
    </div>
    <table class="table table-bordered table-hover">
      <tbody>
        <tr>
          <td>{{ activity.if.title }}</td>
          <td>
            <pre v-clipboard>{{ activity.if.text }}</pre>
          </td>
        </tr>
        <tr>
          <td>{{ activity.repeat.title }}</td>
          <td>
            <pre v-clipboard>{{ activity.repeat.text }}</pre>
          </td>
        </tr>
        <tr>
          <td>{{ activity.while.title }}</td>
          <td>
            <pre v-clipboard>{{ activity.while.text }}</pre>
          </td>
        </tr>
        <tr>
          <td>{{ activity.fork.title }}</td>
          <td>
            <pre v-clipboard>{{ activity.fork.text }}</pre>
          </td>
        </tr>
        <tr>
          <td>{{ activity.partition.title }}</td>
          <td>
            <pre v-clipboard>{{ activity.partition.text }}</pre>
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
  name: 'activityCheatSheet',
  mixins: [cheatSheetMixin],
  data(): any {
    return {
      activity: this.contents.activity
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
