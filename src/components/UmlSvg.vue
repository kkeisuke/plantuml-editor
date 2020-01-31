<template>
  <span class="umlSvg"></span>
</template>

<script lang="js">
/* @flow */
import axios from 'axios'
import DOMPurify from 'dompurify'

export default {
  name: 'UmlSvg',
  props: {
    src: {
      type: String,
      required: true,
      default: ''
    },
    size: {
      type: String,
      default: '100%'
    }
  },
  watch: {
    src: {
      immediate: true,
      handler: async function(src: string): Promise<any> {
        if (src) {
          try {
            const { data }: any = await axios.get(src)
            this.$el.innerHTML = DOMPurify.sanitize(data)
          } catch (error) {
            this.$el.innerHTML = DOMPurify.sanitize(error.response.data)
          }
          this.$emit('load')
          this.resize(this.size)
        }
      }
    },
    size(size: number) {
      this.resize(size)
    }
  },
  methods: {
    resize(size: string) {
      if (size) {
        const svg: HTMLElement = this.$el.getElementsByTagName('svg')[0]
        if (svg) {
          svg.style.width = size
          svg.style.height = size
          // for safari
          // force render
          const display: string = svg.style.display
          svg.style.display = 'none'
          setTimeout(() => {
            svg.style.display = display
          })
        }
      }
    }
  }
}
</script>

<style lang="scss">
.umlSvg {
  svg {
    text {
      // https://qiita.com/RinoTsuka/items/b30e03ce10aa38ac2a10
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Hiragino Sans', 'Noto Sans CJK JP', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
        'Noto Sans Emoji';
    }
  }
}
</style>
