<template>
  <span></span>
</template>

<script lang="js">
/* @flow */
import axios from 'axios'

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
            this.$el.innerHTML = data
          } catch (error) {
            this.$el.innerHTML = error.response.data
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
</script>
