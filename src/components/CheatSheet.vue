<template>
  <div class="row cheatSheet" :style="{'height':height}">
    <div class="col-sm-12">


      <div class="h4" id="CommonCheatSheet">
        Common
      </div>
      <table class="table table-bordered table-hover">
        <tbody>
          <tr>
            <td>header</td>
            <td>
<pre v-clipboard>
center header

endheader
</pre>
            </td>
          </tr>
          <tr>
            <td>footer</td>
            <td>
<pre v-clipboard>
center footer

endfooter
</pre>
            </td>
          </tr>
          <tr>
            <td>title</td>
            <td><code v-clipboard>title</code> Title</td>
          </tr>
          <tr>
            <td>legend</td>
            <td>
<pre v-clipboard>
legend center

endlegend
</pre>
            </td>
          </tr>
          <tr>
            <td>caption</td>
            <td><code v-clipboard>caption</code> figure 1</td>
          </tr>
          <tr>
            <td>direction</td>
            <td><code v-clipboard>left to right direction</code></td>
          </tr>
          <tr>
            <td>label</td>
            <td><code v-clipboard>:</code> label</td>
          </tr>
          <tr>
            <td>comment</td>
            <td><code v-clipboard>'</code> comment</td>
          </tr>
          <tr>
            <td>block comment</td>
            <td>
<pre v-clipboard>
/'
comment
'/
</pre>
            </td>
          </tr>
          <tr>
            <td>solid line</td>
            <td><code v-clipboard>--></code></td>
          </tr>
          <tr>
            <td>dashed line</td>
            <td><code v-clipboard>..></code></td>
          </tr>
          <tr>
            <td rowspan="3">note</td>
            <td><code v-clipboard>note left :</code> note</td>
          </tr>
          <tr>
            <td><code v-clipboard>note right :</code> note</td>
          </tr>
          <tr>
            <td>
<pre v-clipboard>
note left of A

end note
</pre>
            </td>
          </tr>
          <tr>
            <td rowspan="2">
              <img :src="url+'UDfpA2v9B2efpStXuh9oJ2x9Br98pCbCBBRYud98pKi1YWC0mMaBGG00'" alt="actor">
            </td>
            <td><code v-clipboard>actor</code> Actor</td>
          </tr>
          <tr>
            <td><code v-clipboard>:Actor alias:</code></td>
          </tr>
          <tr>
            <td>
              <img :src="url+'UDfpA2v9B2efpStXuafCJyqhKG2JN5mEgNafG540i5aAw000'" alt="agent">
            </td>
            <td><code v-clipboard>agent</code> Agent</td>
          </tr>
          <tr>
            <td>
              <img :src="url+'UDfpA2v9B2efpStXuYejJarEB4vLWD9SN0wfUIb06G3bpmoS'" alt="usecase">
            </td>
            <td><code v-clipboard>usecase</code> UseCase</td>
          </tr>
          <tr>
            <td rowspan="2">
              <img :src="url+'UDfpA2v9B2efpStXuihBJqbL01FHO3PNB1UNGsfU2b0I0Ftn3AW0'" alt="node">
            </td>
            <td><code v-clipboard>node</code> Node</td>
          </tr>
          <tr>
            <td>
<pre v-clipboard>
node Node [
node
]
</pre>
            </td>
          </tr>
          <tr>
            <td rowspan="2">
              <img :src="url+'UDfpA2v9B2efpStXuaf9B4bCIYnELO0pehbSdBXYkRWSKlDIW4e0M8iEfW00'" alt="database">
            </td>
            <td><code v-clipboard>database</code> DB</td>
          </tr>
          <tr>
            <td>
<pre v-clipboard>
database DB [
DB
]
</pre>
            </td>
          </tr>
          <tr>
            <td rowspan="2">
              <img :src="url+'UDfpA2v9B2efpStXuYekoIzAJ4zLWD7HC16kM2ukXzIy5A0g09aj49K0'" alt="storage">
            </td>
            <td><code v-clipboard>storage</code> Storage</td>
          </tr>
          <tr>
            <td>
<pre v-clipboard>
storage Storage [
storage
]
</pre>
            </td>
          </tr>
          <tr>
            <td>
              <img :src="url+'UDfpA2v9B2efpStXuefspiyjoCzBpIk9vU9oICrB0Oe20BAT2nK0'" alt="component">
            </td>
            <td><code v-clipboard>[Component]</code></td>
          </tr>
          <tr>
            <td rowspan="2">
              <dl>
                <dt>skinparam</dt>
                <dd>monochrome</dd>
              </dl>
            </td>
            <td><code v-clipboard>skinparam monochrome true</code></td>
          </tr>
          <tr>
            <td><code v-clipboard>skinparam monochrome reverse</code></td>
          </tr>
          <tr>
            <td>
              <dl>
                <dt>skinparam</dt>
                <dd>handwritten</dd>
              </dl>
            </td>
            <td><code v-clipboard>skinparam handwritten true</code></td>
          </tr>
          <tr>
            <td>
              <dl>
                <dt>skinparam</dt>
                <dd>shadowing</dd>
              </dl>
            </td>
            <td><code v-clipboard>skinparam shadowing false</code></td>
          </tr>
          <tr>
            <td>
              <dl>
                <dt>skinparam</dt>
                <dd>backgroundColor</dd>
              </dl>
            </td>
            <td><code v-clipboard>skinparam backgroundColor #EEEEEE</code></td>
          </tr>
        </tbody>
      </table>


      <div class="h4" id="UseCaseCheatSheet">
        Use Case
      </div>
      <table class="table table-bordered table-hover">
        <tbody>
          <tr>
            <td>rectangle</td>
            <td>
<pre v-clipboard>
rectangle Job {

}
</pre>
            </td>
          </tr>
          <tr>
            <td>up</td>
            <td>
              <code v-clipboard>-up-></code>
            </td>
          </tr>
          <tr>
            <td>right</td>
            <td>
              <code v-clipboard>-right-></code>
            </td>
          </tr>
          <tr>
            <td>down</td>
            <td>
              <code v-clipboard>-down-></code>
            </td>
          </tr>
          <tr>
            <td>left</td>
            <td>
              <code v-clipboard>-left-></code>
            </td>
          </tr>
        </tbody>
      </table>


      <div class="h4" id="ActivityCheatSheet">
        Activity
      </div>
      <table class="table table-bordered table-hover">
        <tbody>
          <tr>
            <td>if</td>
            <td>
<pre v-clipboard>
if (try) then (true)

else (false)

endif
</pre>
            </td>
          </tr>
          <tr>
            <td>repeat</td>
            <td>
<pre v-clipboard>
repeat

repeat while (error)
</pre>
            </td>
          </tr>
          <tr>
            <td>while</td>
            <td>
<pre v-clipboard>
while (try) is (true)

endwhile (false)
</pre>
            </td>
          </tr>
          <tr>
            <td>fork</td>
            <td>
<pre v-clipboard>
fork

fork again

end fork
</pre>
            </td>
          </tr>
          <tr>
            <td>partition</td>
            <td>
<pre v-clipboard>
partition A {

}
</pre>
            </td>
          </tr>
        </tbody>
      </table>


      <div class="h4" id="SequenceCheatSheet">
        Sequence
      </div>
      <table class="table table-bordered table-hover">
        <tbody>
          <tr>
            <td>alt/else</td>
            <td>
<pre v-clipboard>
alt success

else error

end
</pre>
            </td>
          </tr>
          <tr>
            <td>loop</td>
            <td>
<pre v-clipboard>
loop title

end
</pre>
            </td>
          </tr>
          <tr>
            <td>separate</td>
            <td><code v-clipboard>== ==</code></td>
          </tr>
        </tbody>
      </table>


      <div class="h4" id="ObjectCheatSheet">
        Object
      </div>
      <table class="table table-bordered table-hover">
        <tbody>
          <tr>
            <td>object</td>
            <td>
<pre v-clipboard>
object A {

}
</pre>
            </td>
          </tr>
          <tr>
            <td>Extension</td>
            <td><code v-clipboard><|-</code></td>
          </tr>
          <tr>
            <td>Composition</td>
            <td><code v-clipboard>*-</code></td>
          </tr>
          <tr>
            <td>Aggregation</td>
            <td><code v-clipboard>o-</code></td>
          </tr>
        </tbody>
      </table>


      <div class="h4" id="ClassCheatSheet">
        Class
      </div>
      <table class="table table-bordered table-hover">
        <tbody>
          <tr>
            <td>Public</td>
            <td><code v-clipboard>+</code></td>
          </tr>
          <tr>
            <td>Private</td>
            <td><code v-clipboard>-</code></td>
          </tr>
          <tr>
            <td>Protected</td>
            <td><code v-clipboard>#</code></td>
          </tr>
          <tr>
            <td>Package</td>
            <td><code v-clipboard>~</code></td>
          </tr>
          <tr>
            <td>static</td>
            <td><code v-clipboard>{static}</code> static</td>
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
