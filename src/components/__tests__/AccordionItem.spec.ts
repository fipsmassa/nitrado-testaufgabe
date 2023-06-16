import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import AccordionItem from '@/components/AccordionItem.vue'

const items = [
  { title: 'Item 1', content: 'Content for Item 1' },
  { title: 'Item 2', content: 'Content for Item 2' },
  { title: 'Item 3', content: 'Content for Item 3' }
]

describe('AccordionItem', () => {
  it('renders the correct number of items', () => {
    const wrapper = shallowMount(AccordionItem, { props: { items } })
    const accordionItems = wrapper.findAll('.accordion_item')
    expect(accordionItems.length).toBe(items.length)
  })

  it('toggles item visibility on click', async () => {
    const wrapper = shallowMount(AccordionItem, { props: { items } })

    const accordionHeader = wrapper.find('.accordion_header')
    expect(wrapper.find('.accordion_content.active').exists()).toBe(false)
    await accordionHeader.trigger('click')
    expect(wrapper.find('.accordion_content.active').exists()).toBe(true)

    await accordionHeader.trigger('click')
    expect(wrapper.find('.accordion_content.active').exists()).toBe(false)
  })
})
