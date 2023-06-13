import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Tabs from '@/components/Tabs.vue'

describe('Tabs tests', () => {
  it('renders the correct number of tabs', () => {
    const wrapper = shallowMount(Tabs)
    const tabs = wrapper.findAll('.tab-header div')
    expect(tabs.length).toBe(wrapper.vm.tabs.length)
  })

  it('updates active tab on click', () => {
    const wrapper = shallowMount(Tabs)
    const secondTab = wrapper.find('.tab-header div:nth-child(2)')

    secondTab.trigger('click')
    expect(wrapper.vm.activeTab).toBe(1)

    const thirdTab = wrapper.find('.tab-header div:nth-child(3)')
    thirdTab.trigger('click')
    expect(wrapper.vm.activeTab).toBe(2)
  })
})
