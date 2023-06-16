import { shallowMount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import TabsItem from '@/components/TabsItem.vue'

const serverSelection = () => console.log('clicked button')

const tabs = [
  {
    title: '10 Slots',
    url: 'https://dummyjson.com/posts?limit=3',
    server: {
      price: '9,99 €',
      duration: '30 Tage Abonnement',
      location: 'Frankfurt am Main',
      features: [
        'Platz für 10 Spieler',
        '30 Tage Laufzeit, jederzeit verlängerbar',
        'Bis zu 5 Spiele installierbar, über 100 Spiele in der Cloud'
      ]
    },
    backgroundImg: '/src/assets/images/rey.jpg',
    buttonClick: serverSelection
  },
  {
    title: '16 Slots',
    url: 'https://dummyjson.com/posts?skip=3&limit=3',
    server: {
      price: '19,99 €',
      duration: '30 Tage Abonnement',
      location: 'Frankfurt am Main',
      features: [
        'Platz für 16 Spieler',
        '30 Tage Laufzeit, jederzeit verlängerbar',
        'Bis zu 5 Spiele installierbar, über 100 Spiele in der Cloud'
      ]
    },
    backgroundImg: '/src/assets/images/obiwan.jpg',
    buttonClick: serverSelection
  },
  {
    title: '32 Slots',
    url: 'https://dummyjson.com/posts?skip=6&limit=3',
    server: {
      price: '29,99 €',
      duration: '30 Tage Abonnement',
      location: 'Frankfurt am Main',
      features: [
        'Platz für 32 Spieler',
        '30 Tage Laufzeit, jederzeit verlängerbar',
        'Bis zu 5 Spiele installierbar, über 100 Spiele in der Cloud'
      ]
    },
    backgroundImg: '/src/assets/images/vader.jpg',
    buttonClick: serverSelection
  }
]

describe('TabsItem', () => {
  it('renders the correct number of tabs', () => {
    const wrapper = shallowMount(TabsItem, { props: { tabs } })
    const tabItems = wrapper.findAll('.tab_item')
    expect(tabItems.length).toBe(tabs.length)
  })

  it('updates active tab on click', () => {
    const wrapper = shallowMount(TabsItem, { props: { tabs } })
    const secondTab = wrapper.find('.tab_item:nth-child(2)')

    expect(wrapper.vm.activeTab).toBe(0)

    secondTab.trigger('click')
    expect(wrapper.vm.activeTab).toBe(1)

    const thirdTab = wrapper.find('.tab_item:nth-child(3)')
    thirdTab.trigger('click')
    expect(wrapper.vm.activeTab).toBe(2)
  })
})
