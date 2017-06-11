<template>
  <div id="help" class="modal fade">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
          <div class="h3 modal-title">PlantUML</div>
        </div>
        <div class="modal-body">
          <blockquote>
            <p>Generate UML diagram from textual description</p>
            <footer>
              <a :href="official" target="_blank">{{official}}</a>
            </footer>
          </blockquote>
          <div class="page-header">
            <span class="h4">Cheat Sheet</span>
          </div>
          <ul>
            <li>
              <a href="http://qiita.com/ogomr/items/0b5c4de7f38fd1482a48" target="_blank">Japanese</a>
            </li>
            <li>
              <a href="http://ogom.github.io/draw_uml/plantuml" target="_blank">English</a>
            </li>
          </ul>
          <div class="page-header">
            <span class="h4">GitHub</span>
          </div>
          <ul>
            <li>
              <a href="https://github.com/kkeisuke/plantuml-editor" target="_blank">https://github.com/kkeisuke/plantuml-editor</a>
            </li>
            <li>
              <a href="https://github.com/kkeisuke/plantuml-server" target="_blank">https://github.com/kkeisuke/plantuml-server</a>
            </li>
          </ul>
          <div class="page-header">
            <span class="h4">Qiita</span>
          </div>
          <ul>
            <li>
              <a href="http://qiita.com/kkeisuke/items/45f4725d41dd789061a2" target="_blank">vue-cli (vuex) で PlantUML エディターを作ってみた</a>
            </li>
          </ul>
          <div class="page-header">
            <span class="h4">kkeisuke</span>
          </div>
          <ul>
            <li>
              <a href="https://twitter.com/kkeisuke" target="_blank">twitter</a>
            </li>
            <li>
              <a href="http://qiita.com/kkeisuke" target="_blank">qiita</a>
            </li>
            <li>
              <a href="http://b.hatena.ne.jp/kkeisuke" target="_blank">はてなブックマーク</a>
            </li>
          </ul>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelpModal',
  computed: {
    official () {
      return this.$store.state.plantumlEditor.official
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
