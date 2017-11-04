<template>
  <div class="btn-group">
    <button type="button" class="btn" :class="btnClass" @click="show">
      <slot name="popover-btn"></slot>
    </button>
    <div class="popover" :class="position" role="tooltip" :style="{'top':style.top, 'left':style.left, 'display':style.display}">
      <div class="arrow"></div>
      <h3 class="popover-title" v-show="this.$slots['popover-title']">
        <slot name="popover-title"></slot>
      </h3>
      <div class="popover-content">
        <slot name="popover-content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
/* @flow */

export default {
  name: 'PopoverBtn',
  props: {
    position: {
      type: String,
      default: 'bottom'
    },
    btnClass: {
      type: String,
      default: 'btn-default'
    }
  },
  data (): any {
    return {
      top: '0',
      left: '0',
      isShow: false
    }
  },
  computed: {
    style (): any {
      return {
        'top': `${this.top}px`,
        'left': `${this.left}px`,
        'display': this.isShow ? 'block' : 'none'
      }
    }
  },
  methods: {
    show ($event: any) {
      const $btn: any = window.$($event.currentTarget)
      const $this: any = window.$(this.$el)
      this.left = -Math.floor(($this.find('.popover').outerWidth() - $btn.outerWidth()) / 2)
      switch (this.position) {
        case 'bottom':
          this.top = $btn.position().top + $btn.outerHeight() + 5
          break
        default:
      }
      this.isShow = !this.isShow
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
