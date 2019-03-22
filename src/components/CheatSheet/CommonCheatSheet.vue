<template>
  <div id="CommonCheatSheet">
    <div class="h4">
      Common
    </div>
    <table class="table table-bordered table-hover">
      <tbody>
        <tr>
          <td>{{ header.title }}</td>
          <td>
            <pre v-clipboard>{{ header.text }}</pre>
          </td>
        </tr>
        <tr>
          <td>{{ footer.title }}</td>
          <td>
            <pre v-clipboard>{{ footer.text }}</pre>
          </td>
        </tr>
        <tr>
          <td>{{ scale.title }}</td>
          <td>
            <code v-clipboard>{{ scale.text }}</code> 1.5<br />
            <code v-clipboard>{{ scale.text }}</code> 200 width<br />
            <code v-clipboard>{{ scale.text }}</code> 200 height<br />
            <code v-clipboard>{{ scale.text }}</code> max 1024 width
          </td>
        </tr>
        <tr>
          <td>{{ define.title }}</td>
          <td>
            <code v-clipboard>{{ define.text }}</code> ABC text
          </td>
        </tr>
        <tr>
          <td>{{ title.title }}</td>
          <td>
            <code v-clipboard>{{ title.text }}</code> Title
          </td>
        </tr>
        <tr>
          <td>{{ legend.title }}</td>
          <td>
            <pre v-clipboard>{{ legend.text }}</pre>
          </td>
        </tr>
        <tr>
          <td>{{ caption.title }}</td>
          <td>
            <code v-clipboard>{{ caption.text }}</code> figure 1
          </td>
        </tr>
        <tr>
          <td>{{ direction.title }}</td>
          <td>
            <code v-clipboard>{{ direction.text }}</code>
          </td>
        </tr>
        <tr>
          <td>{{ label.title }}</td>
          <td>
            <code v-clipboard>{{ label.text }}</code> label
          </td>
        </tr>
        <tr>
          <td>{{ comment.title }}</td>
          <td>
            <code v-clipboard>{{ comment.text }}</code> comment
          </td>
        </tr>
        <tr>
          <td>{{ blockcomment.title }}</td>
          <td>
            <pre v-clipboard>{{ blockcomment.text }}</pre>
          </td>
        </tr>
        <tr>
          <td>{{ solidline.title }}</td>
          <td>
            <code v-clipboard>{{ solidline.text }}</code>
          </td>
        </tr>
        <tr>
          <td>{{ dashedline.title }}</td>
          <td>
            <code v-clipboard>{{ dashedline.text }}</code>
          </td>
        </tr>
        <tr>
          <td rowspan="3">note</td>
          <td>
            <code v-clipboard>{{ noteleft.text }}</code> note
          </td>
        </tr>
        <tr>
          <td>
            <code v-clipboard>{{ noteright.text }}</code> note
          </td>
        </tr>
        <tr>
          <td>
            <pre v-clipboard>{{ noteblock.text }}</pre>
          </td>
        </tr>
        <tr>
          <td rowspan="2">
            <img :src="createUrl(actor.img)" :alt="actor.title" />
          </td>
          <td>
            <code v-clipboard>{{ actor.text }}</code> Actor
          </td>
        </tr>
        <tr>
          <td>
            <code v-clipboard>{{ actoralias.text }}</code>
          </td>
        </tr>
        <tr>
          <td>
            <img :src="createUrl(agent.img)" :alt="agent.title" />
          </td>
          <td>
            <code v-clipboard>{{ agent.text }}</code> Agent
          </td>
        </tr>
        <tr>
          <td>
            <img :src="createUrl(usecase.img)" :alt="usecase.title" />
          </td>
          <td>
            <code v-clipboard>{{ usecase.text }}</code> UseCase
          </td>
        </tr>
        <tr>
          <td rowspan="2">
            <img :src="createUrl(node.img)" :alt="node.title" />
          </td>
          <td>
            <code v-clipboard>{{ node.text }}</code> Node
          </td>
        </tr>
        <tr>
          <td>
            <pre v-clipboard>{{ nodeblock.text }}</pre>
          </td>
        </tr>
        <tr>
          <td rowspan="2">
            <img :src="createUrl(database.img)" :alt="database.title" />
          </td>
          <td>
            <code v-clipboard>{{ database.text }}</code> DB
          </td>
        </tr>
        <tr>
          <td>
            <pre v-clipboard>{{ databaseblock.text }}</pre>
          </td>
        </tr>
        <tr>
          <td rowspan="2">
            <img :src="createUrl(storage.img)" :alt="storage.title" />
          </td>
          <td>
            <code v-clipboard>{{ storage.text }}</code> Storage
          </td>
        </tr>
        <tr>
          <td>
            <pre v-clipboard>{{ storageblock.text }}</pre>
          </td>
        </tr>
        <tr>
          <td>
            <img :src="createUrl(component.img)" :alt="component.title" />
          </td>
          <td>
            <code v-clipboard>{{ component.text }}</code>
          </td>
        </tr>
        <tr>
          <td rowspan="2">
            {{ skinparammonochrome.title }}
          </td>
          <td>
            <code v-clipboard>{{ skinparammonochrome.text }}</code>
          </td>
        </tr>
        <tr>
          <td>
            <code v-clipboard>{{ skinparammonochromereverse.text }}</code>
          </td>
        </tr>
        <tr>
          <td>{{ skinparamhandwritten.title }}</td>
          <td>
            <code v-clipboard>{{ skinparamhandwritten.text }}</code>
          </td>
        </tr>
        <tr>
          <td>{{ skinparamshadowing.title }}</td>
          <td>
            <code v-clipboard>{{ skinparamshadowing.text }}</code>
          </td>
        </tr>
        <tr>
          <td>{{ skinparambackgroundcolor.title }}</td>
          <td>
            <code v-clipboard>{{ skinparambackgroundcolor.text }}</code>
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
  name: 'commonCheatSheet',
  mixins: [cheatSheetMixin],
  data(): any {
    return {
      ...this.contents.common
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
