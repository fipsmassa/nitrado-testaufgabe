import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import DropdownItem from '@/components/DropdownItem.vue'

const options = [
  { title: 'Account', text: 'Weiterleitung zum Account' },
  { title: 'Einstellungen', text: 'Weiterleitung zu den Einstellungen' },
  { title: 'Logout', text: 'Weiterleitung zur Seite nach Logout' }
]

describe('DropdownItem', () => {
  it('menu opens on click', async () => {
    const wrapper = shallowMount(DropdownItem, { props: { options } })
    expect(wrapper.find('.dropdown_menu.active').exists()).toBe(false)
    const avatar = wrapper.find('.dropdown_toggle')
    await avatar.trigger('click')
    expect(wrapper.find('.dropdown_menu.active').exists()).toBe(true)
  })

  it('contains all options', () => {
    const wrapper = shallowMount(DropdownItem, { props: { options } })
    const account = wrapper.find('.dropdown_menu li:nth-of-type(1)')
    expect(account.text()).toBe('Account')
    const settings = wrapper.find('.dropdown_menu li:nth-of-type(2)')
    expect(settings.text()).toBe('Einstellungen')
    const logout = wrapper.find('.dropdown_menu li:nth-of-type(3)')
    expect(logout.text()).toBe('Logout')
  })
})
