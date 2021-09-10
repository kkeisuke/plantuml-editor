export default {
  props: {
    contents: {
      type: Object,
      default: null,
    },
    cdn: {
      type: String,
      default: '',
    },
  },
  methods: {
    createUrl(img: string): string {
      const extension: string = 'svg'
      return `${this.$store.state.plantumlEditor.cdn}/${extension}/${img}.${extension}`
    },
  },
}
