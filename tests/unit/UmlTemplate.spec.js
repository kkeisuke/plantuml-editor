import Vue from 'vue'
import store from '@/store/index.js'
import UmlTemplate from '@/components/UmlTemplate'

describe('UmlTemplate.vue', () => {
  let vm: any = null

  beforeEach(() => {
    const Constructor: any = Vue.extend(UmlTemplate)
    vm = new Constructor({ store }).$mount()
  })

  describe('methods selectTemplate', () => {
    beforeEach(() => {
      vm.$store.dispatch('umlTemplate/selectTemplate', 'useCase')
    })

    it('state.plantumlEditor.text', () => {
      expect(vm.$store.state.plantumlEditor.text).toEqual(
        vm.$store.state.umlTemplate.useCase
      )
    })

    it('state.plantumlEditor.src', () => {
      expect(vm.$store.state.plantumlEditor.src).toEqual(
        `${process.env.VUE_APP_CDN}/svg/SoWkIImgAStDuU9AJ2x9Br9mXD9EN5oE2hgb1Rfs2Xgb1PeWJb5cUaO9Y9-ScbUIMWGMIyalpmC9WMYmG4vg6bWDYDRaud92DiC98GqpmWd9M303B8HgAfT3QbuAq8a0.svg`
      )
    })
  })
})
