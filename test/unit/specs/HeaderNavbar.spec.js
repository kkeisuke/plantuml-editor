import Vue from 'vue'
import store from '@/store/index.js'
import HeaderNavbar from '@/components/HeaderNavbar'

describe('HeaderNavbar.vue', () => {
  let vm: any = null

  before(() => {
    const Constructor: any = Vue.extend(HeaderNavbar)
    vm = new Constructor({store}).$mount()
  })

  describe('methods changeHistoryColSize', () => {
    before(() => {
      vm.$store.dispatch('setEditColSize')
    })

    it('state.layout.colSize.history', () => {
      expect(vm.$store.state.layout.colSize.history).to.equal(0)
    })
    it('state.layout.colSize.editor', () => {
      expect(vm.$store.state.layout.colSize.editor).to.equal(5)
    })
    it('state.layout.colSize.cheatSheet', () => {
      expect(vm.$store.state.layout.colSize.cheatSheet).to.equal(0)
    })
    it('state.layout.colSize.uml', () => {
      expect(vm.$store.state.layout.colSize.uml).to.equal(7)
    })
  })
})
