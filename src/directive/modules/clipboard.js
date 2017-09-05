import Vue from 'vue'
import Clipboard from 'clipboard'
import $ from 'jquery' // コンパイルを通すためだけの書き方

// https://clipboardjs.com/
export default Vue.directive('clipboard', {
  inserted (element: any, binding: any) {
    $(element)
    // .after('<span class="glyphicon glyphicon-copy"></span>')
    .css({
      'cursor': 'pointer'
    })
    new Clipboard(element, {
      target (): any {
        return element
      }
    })
  }
})
