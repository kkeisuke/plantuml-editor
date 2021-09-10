<template>
  <div class="row historyList" :style="style">
    <div class="col-sm-12">
      <div class="alert alert-default" v-if="!histories.length">When you press the Save button, it will be added to the history.</div>
      <div class="thumbnail" v-for="history in histories" :key="history.id">
        <img v-lazy="createUrl(history.encodedText)" @click="read(history.text, $event)" height="200" width="100%" />
        <div class="caption">
          <div class="row">
            <div class="col-sm-4">
              <button type="button" class="close pull-left" @click="del(history.id, $event)">&times;</button>
            </div>
            <div class="col-sm-8 text-right">
              <ul class="list-inline">
                <li>
                  <a :href="createUrl(history.encodedText)" target="_blank">png <i class="fa fa-external-link"></i></a>
                </li>
                <li>
                  <a :href="createUrl(history.encodedText, 'svg')" target="_blank">svg <i class="fa fa-external-link"></i></a>
                </li>
              </ul>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12 text-right">
              {{ history.created }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
/* @flow */

export default {
  name: 'HistoryList',
  props: {
    height: {
      type: String,
      default: '100%'
    }
  },
  data(): any {
    return {
      deleteMessage: 'Can I delete it?',
      editMessage: 'Do you want to edit it?'
    }
  },
  computed: {
    histories(): any {
      return this.$store.state.histories.data
    },
    style(): any {
      return {
        height: this.height,
        '--color': this.$store.getters['plantumlEditor/themeColor']
      }
    }
  },
  mounted() {
    this.$store.dispatch('histories/getHistories')
    this.setLazyloadEvent()
  },
  methods: {
    createUrl(encodedText: string, extension: string = 'png'): string {
      return `${this.$store.state.plantumlEditor.cdn}/${extension}/${encodedText}.${extension}`
    },
    setLazyloadEvent() {
      this.$Lazyload.$on('loaded', ({ el, naturalHeight }: any) => {
        el.height = naturalHeight
      })
    },
    del(id: number) {
      if (window.confirm(this.deleteMessage)) {
        this.$store.dispatch('histories/delete', id)
      }
    },
    read(text: string) {
      if (window.confirm(this.editMessage)) {
        this.$store.dispatch('plantumlEditor/renderUML', text)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.historyList {
  --color: #000;

  margin-top: -20px;
  padding-top: 20px;
  overflow-y: auto;
  background-color: var(--color);

  .thumbnail {
    background-color: #ffffff;
    border-color: var(--color);

    img {
      cursor: pointer;
      &[lazy='loading'] {
        background-color: #f5f5f5;
      }
      &[lazy='loaded'] {
        background-color: unset;
      }
    }
  }
}
</style>
