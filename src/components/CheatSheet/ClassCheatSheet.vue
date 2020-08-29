<template>
  <div id="ClassCheatSheet">
    <div class="h4">Class</div>
    <table class="table table-bordered table-hover">
      <tbody>
        <tr>
          <td>{{ classCheatSheet.public.title }}</td>
          <td>
            <code v-clipboard>{{ classCheatSheet.public.text }}</code>
          </td>
        </tr>
        <tr>
          <td>{{ classCheatSheet.private.title }}</td>
          <td>
            <code v-clipboard>{{ classCheatSheet.private.text }}</code>
          </td>
        </tr>
        <tr>
          <td>{{ classCheatSheet.protected.title }}</td>
          <td>
            <code v-clipboard>{{ classCheatSheet.protected.text }}</code>
          </td>
        </tr>
        <tr>
          <td>{{ classCheatSheet.packageprivate.title }}</td>
          <td>
            <code v-clipboard>{{ classCheatSheet.packageprivate.text }}</code>
          </td>
        </tr>
        <tr>
          <td>{{ classCheatSheet.static.title }}</td>
          <td>
            <code v-clipboard>{{ classCheatSheet.static.text }}</code> member
          </td>
        </tr>
        <tr>
          <td>{{ classCheatSheet.abstract.title }}</td>
          <td>
            <code v-clipboard>{{ classCheatSheet.abstract.text }}</code> member
          </td>
        </tr>
        <tr>
          <td>{{ classCheatSheet.abstractkeyword.title }}</td>
          <td>
            <code v-clipboard>{{ classCheatSheet.abstractkeyword.text }}</code>
            class
          </td>
        </tr>
        <tr>
          <td>{{ classCheatSheet.interface.title }}</td>
          <td>
            <code v-clipboard>{{ classCheatSheet.interface.text }}</code>
          </td>
        </tr>
        <tr>
          <td>{{ classCheatSheet.package.title }}</td>
          <td>
            <pre v-clipboard>{{ classCheatSheet.package.text }}</pre>
          </td>
        </tr>
        <tr>
          <td>{{ classCheatSheet.namespace.title }}</td>
          <td>
            <pre v-clipboard>{{ classCheatSheet.namespace.text }}</pre>
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
  name: 'ClassCheatSheet',
  mixins: [cheatSheetMixin],
  data(): any {
    return {
      classCheatSheet: this.contents.class
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
