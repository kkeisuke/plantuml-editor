<template>
  <div class="row cheatSheet" :style="{'height':height}">
    <div class="col-sm-12">


      <div class="h4" id="CommonCheatSheet">
        Common
      </div>
      <table class="table table-bordered table-hover">
        <tbody>
          <tr>
            <th>title</th>
            <td><code>title</code> Title</td>
          </tr>
          <tr>
            <th>direction</th>
            <td><code>left to right direction</code></td>
          </tr>
          <tr>
            <th>label</th>
            <td><code>:</code> label</td>
          </tr>
          <tr>
            <th>comment</th>
            <td><code>'</code> comment</td>
          </tr>
          <tr>
            <th>block comment</th>
            <td>
<pre>
/'
comment
'/
</pre>
            </td>
          </tr>
          <tr>
            <th rowspan="3">note</th>
            <td><code>note left :</code> note</td>
          </tr>
          <tr>
            <td><code>note right :</code> note</td>
          </tr>
          <tr>
            <td>
<pre>
note left of A

end note
</pre>
            </td>
          </tr>
          <tr>
            <td rowspan="2">
              <img :src="url+'UDfpA2v9B2efpStXuh9oJ2x9Br98pCbCBBRYud98pKi1YWC0mMaBGG00'" alt="actor">
            </td>
            <td><code>actor</code> Actor</td>
          </tr>
          <tr>
            <td><code>:Actor alias:</code></td>
          </tr>
          <tr>
            <td>
              <img :src="url+'UDfpA2v9B2efpStXuafCJyqhKG2JN5mEgNafG540i5aAw000'" alt="agent">
            </td>
            <td><code>agent</code> Agent</td>
          </tr>
          <tr>
            <td>
              <img :src="url+'UDfpA2v9B2efpStXuYejJarEB4vLWD9SN0wfUIb06G3bpmoS'" alt="usecase">
            </td>
            <td><code>usecase</code> UseCase</td>
          </tr>
          <tr>
            <td rowspan="2">
              <img :src="url+'UDfpA2v9B2efpStXuihBJqbL01FHO3PNB1UNGsfU2b0I0Ftn3AW0'" alt="node">
            </td>
            <td><code>node</code> Node</td>
          </tr>
          <tr>
            <td>
<pre>
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
            <td><code>database</code> DB</td>
          </tr>
          <tr>
            <td>
<pre>
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
            <td><code>storage</code> Storage</td>
          </tr>
          <tr>
            <td>
<pre>
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
            <td><code>[Component]</code></td>
          </tr>
        </tbody>
      </table>


      <div class="h4" id="UseCaseCheatSheet">
        Use Case
      </div>
      <table class="table table-bordered table-hover">
        <tbody>
          <tr>
            <th>rectangle</th>
            <td>
<pre>
rectangle Job {

}
</pre>
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
<pre>
if (try) then (true)

else (false)

endif
</pre>
            </td>
          </tr>
          <tr>
            <td>repeat</td>
            <td>
<pre>
repeat

repeat while (error)
</pre>
            </td>
          </tr>
          <tr>
            <td>while</td>
            <td>
<pre>
while (try) is (true)

endwhile (false)
</pre>
            </td>
          </tr>
          <tr>
            <td>fork</td>
            <td>
<pre>
fork

fork again

end fork
</pre>
            </td>
          </tr>
          <tr>
            <td>partition</td>
            <td>
<pre>
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
        <thead>
          <tr>
            <th>keyword</th>
            <th>code</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>alt/else</td>
            <td>
<pre>
alt success

else error

end
</pre>
            </td>
          </tr>
          <tr>
            <td>loop</td>
            <td>
<pre>
loop title

end
</pre>
            </td>
          </tr>
          <tr>
            <td>separate</td>
            <td><code>== ==</code></td>
          </tr>
        </tbody>
      </table>


      <div class="h4" id="ObjectCheatSheet">
        Object
      </div>
      <table class="table table-bordered table-hover">
        <thead>
          <tr>
            <th>relation</th>
            <th>code</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Extension</td>
            <td><code><|-</code></td>
          </tr>
          <tr>
            <td>Composition</td>
            <td><code>*-</code></td>
          </tr>
          <tr>
            <td>Aggregation</td>
            <td><code>o-</code></td>
          </tr>
        </tbody>
      </table>


      <div class="h4" id="ClassCheatSheet">
        Class
      </div>
      <table class="table table-bordered table-hover">
        <thead>
          <tr>
            <th>modifiers</th>
            <th>code</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Public</td>
            <td><code>+</code></td>
          </tr>
          <tr>
            <td>Private</td>
            <td><code>-</code></td>
          </tr>
          <tr>
            <td>Protected</td>
            <td><code>#</code></td>
          </tr>
          <tr>
            <td>Package</td>
            <td><code>~</code></td>
          </tr>
          <tr>
            <td>static</td>
            <td><code>{static}</code> static</td>
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
  overflow-y: auto;
}
</style>
