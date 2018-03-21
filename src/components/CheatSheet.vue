<template>
  <div class="row cheatSheet" :style="{'height':height}">
    <div class="col-sm-12">

      <div class="h4" id="CommonCheatSheet">
        Common
      </div>
      <table class="table table-bordered table-hover">
        <tbody>
          <tr>
            <td>{{cheatSheet.common.header.title}}</td>
            <td><pre v-clipboard>{{cheatSheet.common.header.text}}</pre></td>
          </tr>
          <tr>
            <td>{{cheatSheet.common.footer.title}}</td>
            <td><pre v-clipboard>{{cheatSheet.common.footer.text}}</pre></td>
          </tr>
          <tr>
            <td>{{cheatSheet.common.scale.title}}</td>
            <td>
              <code v-clipboard>{{cheatSheet.common.scale.text}}</code> 1.5<br>
              <code v-clipboard>{{cheatSheet.common.scale.text}}</code> 200 width<br>
              <code v-clipboard>{{cheatSheet.common.scale.text}}</code> 200 height<br>
              <code v-clipboard>{{cheatSheet.common.scale.text}}</code> max 1024 width
            </td>
          </tr>
          <tr>
            <td>{{cheatSheet.common.define.title}}</td>
            <td><code v-clipboard>{{cheatSheet.common.define.text}}</code> ABC text</td>
          </tr>
          <tr>
            <td>{{cheatSheet.common.title.title}}</td>
            <td><code v-clipboard>{{cheatSheet.common.title.text}}</code> Title</td>
          </tr>
          <tr>
            <td>{{cheatSheet.common.legend.title}}</td>
            <td><pre v-clipboard>{{cheatSheet.common.legend.text}}</pre></td>
          </tr>
          <tr>
            <td>{{cheatSheet.common.caption.title}}</td>
            <td><code v-clipboard>{{cheatSheet.common.caption.text}}</code> figure 1</td>
          </tr>
          <tr>
            <td>{{cheatSheet.common.direction.title}}</td>
            <td><code v-clipboard>{{cheatSheet.common.direction.text}}</code></td>
          </tr>
          <tr>
            <td>{{cheatSheet.common.label.title}}</td>
            <td><code v-clipboard>{{cheatSheet.common.label.text}}</code> label</td>
          </tr>
          <tr>
            <td>{{cheatSheet.common.comment.title}}</td>
            <td><code v-clipboard>{{cheatSheet.common.comment.text}}</code> comment</td>
          </tr>
          <tr>
            <td>{{cheatSheet.common.blockcomment.title}}</td>
            <td><pre v-clipboard>{{cheatSheet.common.blockcomment.text}}</pre></td>
          </tr>
          <tr>
            <td>{{cheatSheet.common.solidline.title}}</td>
            <td><code v-clipboard>{{cheatSheet.common.solidline.text}}</code></td>
          </tr>
          <tr>
            <td>{{cheatSheet.common.dashedline.title}}</td>
            <td><code v-clipboard>{{cheatSheet.common.dashedline.text}}</code></td>
          </tr>
          <tr>
            <td rowspan="3">note</td>
            <td><code v-clipboard>{{cheatSheet.common.noteleft.text}}</code> note</td>
          </tr>
          <tr>
            <td><code v-clipboard>{{cheatSheet.common.noteright.text}}</code> note</td>
          </tr>
          <tr>
            <td><pre v-clipboard>{{cheatSheet.common.noteblock.text}}</pre></td>
          </tr>
          <tr>
            <td rowspan="2">
              <img :src="url+cheatSheet.common.actor.img" :alt="cheatSheet.common.actor.title">
            </td>
            <td><code v-clipboard>{{cheatSheet.common.actor.text}}</code> Actor</td>
          </tr>
          <tr>
            <td><code v-clipboard>{{cheatSheet.common.actoralias.text}}</code></td>
          </tr>
          <tr>
            <td>
              <img :src="url+cheatSheet.common.agent.img" :alt="cheatSheet.common.agent.title">
            </td>
            <td><code v-clipboard>{{cheatSheet.common.agent.text}}</code> Agent</td>
          </tr>
          <tr>
            <td>
              <img :src="url+cheatSheet.common.usecase.img" :alt="cheatSheet.common.usecase.title">
            </td>
            <td><code v-clipboard>{{cheatSheet.common.usecase.text}}</code> UseCase</td>
          </tr>
          <tr>
            <td rowspan="2">
              <img :src="url+cheatSheet.common.node.img" :alt="cheatSheet.common.node.title">
            </td>
            <td><code v-clipboard>{{cheatSheet.common.node.text}}</code> Node</td>
          </tr>
          <tr>
            <td><pre v-clipboard>{{cheatSheet.common.nodeblock.text}}</pre></td>
          </tr>
          <tr>
            <td rowspan="2">
              <img :src="url+cheatSheet.common.database.img" :alt="cheatSheet.common.database.title">
            </td>
            <td><code v-clipboard>{{cheatSheet.common.database.text}}</code> DB</td>
          </tr>
          <tr>
            <td><pre v-clipboard>{{cheatSheet.common.databaseblock.text}}</pre></td>
          </tr>
          <tr>
            <td rowspan="2">
              <img :src="url+cheatSheet.common.storage.img" :alt="cheatSheet.common.storage.title">
            </td>
            <td><code v-clipboard>{{cheatSheet.common.storage.text}}</code> Storage</td>
          </tr>
          <tr>
            <td><pre v-clipboard>{{cheatSheet.common.storageblock.text}}</pre></td>
          </tr>
          <tr>
            <td>
              <img :src="url+cheatSheet.common.component.img" :alt="cheatSheet.common.component.title">
            </td>
            <td><code v-clipboard>{{cheatSheet.common.component.text}}</code></td>
          </tr>
          <tr>
            <td rowspan="2">
              {{cheatSheet.common.skinparammonochrome.title}}
            </td>
            <td><code v-clipboard>{{cheatSheet.common.skinparammonochrome.text}}</code></td>
          </tr>
          <tr>
            <td><code v-clipboard>{{cheatSheet.common.skinparammonochromereverse.text}}</code></td>
          </tr>
          <tr>
            <td>{{cheatSheet.common.skinparamhandwritten.title}}</td>
            <td><code v-clipboard>{{cheatSheet.common.skinparamhandwritten.text}}</code></td>
          </tr>
          <tr>
            <td>{{cheatSheet.common.skinparamshadowing.title}}</td>
            <td><code v-clipboard>{{cheatSheet.common.skinparamshadowing.text}}</code></td>
          </tr>
          <tr>
            <td>{{cheatSheet.common.skinparambackgroundcolor.title}}</td>
            <td><code v-clipboard>{{cheatSheet.common.skinparambackgroundcolor.text}}</code></td>
          </tr>
        </tbody>
      </table>

      <div class="h4" id="UseCaseCheatSheet">
        Use Case
      </div>
      <table class="table table-bordered table-hover">
        <tbody>
          <tr>
            <td>{{cheatSheet.usecase.rectangle.title}}</td>
            <td><pre v-clipboard>{{cheatSheet.usecase.rectangle.text}}</pre></td>
          </tr>
          <tr>
            <td>{{cheatSheet.usecase.up.title}}</td>
            <td><code v-clipboard>{{cheatSheet.usecase.up.text}}</code> (text)</td>
          </tr>
          <tr>
            <td>{{cheatSheet.usecase.right.title}}</td>
            <td><code v-clipboard>{{cheatSheet.usecase.right.text}}</code> (text)</td>
          </tr>
          <tr>
            <td>{{cheatSheet.usecase.down.title}}</td>
            <td><code v-clipboard>{{cheatSheet.usecase.down.text}}</code> (text)</td>
          </tr>
          <tr>
            <td>{{cheatSheet.usecase.left.title}}</td>
            <td><code v-clipboard>{{cheatSheet.usecase.left.text}}</code> (text)</td>
          </tr>
        </tbody>
      </table>

      <div class="h4" id="ActivityCheatSheet">
        Activity
      </div>
      <table class="table table-bordered table-hover">
        <tbody>
          <tr>
            <td>{{cheatSheet.activity.if.title}}</td>
            <td><pre v-clipboard>{{cheatSheet.activity.if.text}}</pre></td>
          </tr>
          <tr>
            <td>{{cheatSheet.activity.repeat.title}}</td>
            <td><pre v-clipboard>{{cheatSheet.activity.repeat.text}}</pre></td>
          </tr>
          <tr>
            <td>{{cheatSheet.activity.while.title}}</td>
            <td><pre v-clipboard>{{cheatSheet.activity.while.text}}</pre></td>
          </tr>
          <tr>
            <td>{{cheatSheet.activity.fork.title}}</td>
            <td><pre v-clipboard>{{cheatSheet.activity.fork.text}}</pre></td>
          </tr>
          <tr>
            <td>{{cheatSheet.activity.partition.title}}</td>
            <td><pre v-clipboard>{{cheatSheet.activity.partition.text}}</pre></td>
          </tr>
        </tbody>
      </table>

      <div class="h4" id="SequenceCheatSheet">
        Sequence
      </div>
      <table class="table table-bordered table-hover">
        <tbody>
          <tr>
            <td>{{cheatSheet.sequence.autonumber.title}}</td>
            <td><code v-clipboard>{{cheatSheet.sequence.autonumber.text}}</code></td>
          </tr>
          <tr>
            <td>
              <img :src="url+cheatSheet.sequence.participant.img" :alt="cheatSheet.sequence.participant.title">
            </td>
            <td><pre v-clipboard>{{cheatSheet.sequence.participant.text}}</pre></td>
          </tr>
          <tr>
            <td>{{cheatSheet.sequence.activate.title}}</td>
            <td><code v-clipboard>{{cheatSheet.sequence.activate.text}}</code> abc</td>
          </tr>
          <tr>
            <td>{{cheatSheet.sequence.deactivate.title}}</td>
            <td><code v-clipboard>{{cheatSheet.sequence.deactivate.text}}</code> abc</td>
          </tr>
          <tr>
            <td>{{cheatSheet.sequence.altelse.title}}</td>
            <td><pre v-clipboard>{{cheatSheet.sequence.altelse.text}}</pre></td>
          </tr>
          <tr>
            <td>{{cheatSheet.sequence.loop.title}}</td>
            <td><pre v-clipboard>{{cheatSheet.sequence.loop.text}}</pre></td>
          </tr>
          <tr>
            <td>{{cheatSheet.sequence.separate.title}}</td>
            <td><code v-clipboard>{{cheatSheet.sequence.separate.text}}</code></td>
          </tr>
        </tbody>
      </table>

      <div class="h4" id="ObjectCheatSheet">
        Object
      </div>
      <table class="table table-bordered table-hover">
        <tbody>
          <tr>
            <td>{{cheatSheet.object.object.title}}</td>
            <td><pre v-clipboard>{{cheatSheet.object.object.text}}</pre></td>
          </tr>
          <tr>
            <td>{{cheatSheet.object.extension.title}}</td>
            <td><code v-clipboard>{{cheatSheet.object.extension.text}}</code></td>
          </tr>
          <tr>
            <td>{{cheatSheet.object.composition.title}}</td>
            <td><code v-clipboard>{{cheatSheet.object.composition.text}}</code></td>
          </tr>
          <tr>
            <td>{{cheatSheet.object.aggregation.title}}</td>
            <td><code v-clipboard>{{cheatSheet.object.aggregation.text}}</code></td>
          </tr>
        </tbody>
      </table>

      <div class="h4" id="ClassCheatSheet">
        Class
      </div>
      <table class="table table-bordered table-hover">
        <tbody>
          <tr>
            <td>{{cheatSheet.class.public.title}}</td>
            <td><code v-clipboard>{{cheatSheet.class.public.text}}</code></td>
          </tr>
          <tr>
            <td>{{cheatSheet.class.private.title}}</td>
            <td><code v-clipboard>{{cheatSheet.class.private.text}}</code></td>
          </tr>
          <tr>
            <td>{{cheatSheet.class.protected.title}}</td>
            <td><code v-clipboard>{{cheatSheet.class.protected.text}}</code></td>
          </tr>
          <tr>
            <td>{{cheatSheet.class.packageprivate.title}}</td>
            <td><code v-clipboard>{{cheatSheet.class.packageprivate.text}}</code></td>
          </tr>
          <tr>
            <td>{{cheatSheet.class.static.title}}</td>
            <td><code v-clipboard>{{cheatSheet.class.static.text}}</code> member</td>
          </tr>
          <tr>
            <td>{{cheatSheet.class.abstract.title}}</td>
            <td><code v-clipboard>{{cheatSheet.class.abstract.text}}</code> member</td>
          </tr>
          <tr>
            <td>{{cheatSheet.class.abstractkeyword.title}}</td>
            <td><code v-clipboard>{{cheatSheet.class.abstractkeyword.text}}</code> class</td>
          </tr>
          <tr>
            <td>{{cheatSheet.class.interface.title}}</td>
            <td><code v-clipboard>{{cheatSheet.class.interface.text}}</code></td>
          </tr>
          <tr>
            <td>{{cheatSheet.class.package.title}}</td>
            <td><pre v-clipboard>{{cheatSheet.class.package.text}}</pre></td>
          </tr>
          <tr>
            <td>{{cheatSheet.class.namespace.title}}</td>
            <td><pre v-clipboard>{{cheatSheet.class.namespace.text}}</pre></td>
          </tr>
        </tbody>
      </table>

      <div class="h4" id="ERCheatSheet">
        ER diagram
      </div>
      <table class="table table-bordered table-hover">
        <tbody>
          <tr>
            <td>{{cheatSheet.er.one.title}}</td>
            <td><code v-clipboard>{{cheatSheet.er.one.text}}</code></td>
          </tr>
          <tr>
            <td>{{cheatSheet.er.zeroOrOne.title}}</td>
            <td><code v-clipboard>{{cheatSheet.er.zeroOrOne.text}}</code></td>
          </tr>
          <tr>
            <td>{{cheatSheet.er.oneAndOnlyOne.title}}</td>
            <td><code v-clipboard>{{cheatSheet.er.oneAndOnlyOne.text}}</code></td>
          </tr>
          <tr>
            <td>{{cheatSheet.er.many.title}}</td>
            <td><code v-clipboard>{{cheatSheet.er.many.text}}</code></td>
          </tr>
          <tr>
            <td>{{cheatSheet.er.zeroOrMany.title}}</td>
            <td><code v-clipboard>{{cheatSheet.er.zeroOrMany.text}}</code></td>
          </tr>
          <tr>
            <td>{{cheatSheet.er.oneOrMany.title}}</td>
            <td><code v-clipboard>{{cheatSheet.er.oneOrMany.text}}</code></td>
          </tr>
        </tbody>
      </table>

    </div>
  </div>
</template>

<script>
/* @flow */

export default {
  name: 'cheatSheet',
  props: {
    height: {
      type: String,
      default: '100%'
    }
  },
  data ():any {
    return {
      cheatSheet: this.$store.state.cheatSheet.contents
    }
  },
  computed: {
    url ():string {
      return `${this.$store.state.plantumlEditor.server}svg/`
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
