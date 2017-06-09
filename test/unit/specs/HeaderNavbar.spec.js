import Vue from 'vue'
import HeaderNavbar from '@/components/HeaderNavbar'

describe('HeaderNavbar.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HeaderNavbar)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.navbar-brand').textContent)
      .to.equal('PlantUML Editor')
  })
})
