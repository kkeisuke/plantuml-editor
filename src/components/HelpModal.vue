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
          <dl>
            <dt>PlantUML</dt>
            <dd>
              <ul>
                <li>
                  <a href="http://qiita.com/ogomr/items/0b5c4de7f38fd1482a48" target="_blank">Japanese</a>
                </li>
                <li>
                  <a href="http://ogom.github.io/draw_uml/plantuml" target="_blank">English</a>
                </li>
              </ul>
            </dd>
            <dt>CodeMirror</dt>
            <dd>
              <ul>
                <li>
                  <a href="https://codemirror.net/demo/sublime.html" target="_blank">Sublime Text bindings demo</a>
                </li>
                <li>
                  <a href="https://codemirror.net/demo/vim.html" target="_blank">Vim bindings demo</a>
                </li>
                <li>
                  <a href="https://codemirror.net/demo/emacs.html" target="_blank">Emacs bindings demo</a>
                </li>
              </ul>
            </dd>
          </dl>
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
            <span class="h4">Article</span>
          </div>
          <dl>
            <dt>Qiita</dt>
            <dd>
              <ul>
                <li>
                  <a href="http://qiita.com/kkeisuke/items/45f4725d41dd789061a2" target="_blank">vue-cli (vuex) で PlantUML エディターを作ってみた</a>
                </li>
              </ul>
            </dd>
            <dt>hatenablog</dt>
            <dd>
              <ul>
                <li>
                  <a href="http://kkeisuke.hatenablog.com/entry/2017/08/07/160845" target="_blank">PlantUML Editor の要求/要件定義</a>
                </li>
              </ul>
            </dd>
          </dl>
          <div class="page-header">
            <span class="h4">kkeisuke</span>
          </div>
          <ul>
            <li>
              <a href="http://kkeisuke.com" target="_blank">kkeisuke.com</a>
            </li>
          </ul>
          <div class="page-header">
            <span class="h4">Other</span>
          </div>
          <p>
            Pen graphic by <a href="http://www.flaticon.com/authors/freepik" target="_blank">freepik</a> from <a href="http://www.flaticon.com/" target="_blank">Flaticon</a> is licensed under <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC BY 3.0</a>. Check out the new logo that I created on <a href="http://logomakr.com" title="Logo Maker" target="_blank">LogoMaker.com</a> https://logomakr.com/7Gn1Ck
          </p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* @flow */

export default {
  name: 'HelpModal',
  computed: {
    official (): string {
      return this.$store.state.plantumlEditor.official
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
