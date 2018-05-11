import Vue from 'vue'
import store from '@/store/index.js'
import HeaderNavbar from '@/components/HeaderNavbar'

describe('HeaderNavbar.vue', () => {
  let vm: any = null

  beforeEach(() => {
    const Constructor: any = Vue.extend(HeaderNavbar)
    vm = new Constructor({ store }).$mount()
  })

  describe('methods changeHistoryColSize', () => {
    beforeEach(() => {
      vm.$store.dispatch('layout/setEditColSize')
    })

    it('state.layout.colSize.history', () => {
      expect(vm.$store.state.layout.colSize.history).toEqual(0)
    })
    it('state.layout.colSize.editor', () => {
      expect(vm.$store.state.layout.colSize.editor).toEqual(5)
    })
    it('state.layout.colSize.cheatSheet', () => {
      expect(vm.$store.state.layout.colSize.cheatSheet).toEqual(0)
    })
    it('state.layout.colSize.uml', () => {
      expect(vm.$store.state.layout.colSize.uml).toEqual(7)
    })
  })
})
