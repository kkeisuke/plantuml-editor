import Vue from 'vue'
import Clipboard from 'clipboard'
import $ from 'jquery' // コンパイルを通すためだけの書き方
interface jQuery {}

// https://clipboardjs.com/
export default Vue.directive('clipboard', {
  inserted(element: any) {
    $(element)
      .css({
        cursor: 'pointer',
      })
      .data('toggle', 'tooltip')
      .prop('title', 'Copied')
      .tooltip({
        trigger: 'manual',
      })
      .on('click', function () {
        const $this: jQuery = $(this)
        $this.tooltip('show')
        setTimeout(() => {
          $this.tooltip('hide')
        }, 500)
      })
    new Clipboard(element, {
      target(): any {
        return element
      },
    })
  },
})
