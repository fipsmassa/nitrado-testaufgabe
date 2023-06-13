import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Accordion from '@/components/Accordion.vue'

describe('Accordion', () => {
  it('renders the correct number of items', () => {
    const items = [
      { title: 'Item 1', content: 'Content for Item 1' },
      { title: 'Item 2', content: 'Content for Item 2' },
      { title: 'Item 3', content: 'Content for Item 3' }
    ]
    const wrapper = shallowMount(Accordion, { props: { items } })
    const accordionItems = wrapper.findAll('.accordion-item')
    expect(accordionItems.length).toBe(items.length)
  })

  it('toggles item visibility on click', async () => {
    const items = [
      { title: 'Item 1', content: 'Content for Item 1' },
      { title: 'Item 2', content: 'Content for Item 2' },
      { title: 'Item 3', content: 'Content for Item 3' }
    ]
    const wrapper = shallowMount(Accordion, { props: { items } })

    const accordionHeader = wrapper.find('.accordion-header')
    await accordionHeader.trigger('click')
    expect(wrapper.find('.accordion-content').exists()).toBe(true)

    await accordionHeader.trigger('click')
    expect(wrapper.find('.accordion-content').exists()).toBe(false)
  })
})
