<script setup lang="ts">
import TabsItem from './components/TabsItem.vue'
import HeaderItem from './components/HeaderItem.vue'
import NavigationItem from './components/NavigationItem.vue'
import FooterItem from './components/FooterItem.vue'
import ContentItem from './components/ContentItem.vue'

const serverSelection = () => {
  alert('Server ausgewählt')
}

const mainTabs = [
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
</script>

<template>
  <NavigationItem />
  <HeaderItem />
  <main>
    <h2>Wähle deinen Server</h2>
    <TabsItem :tabs="mainTabs" />
    <ContentItem />
  </main>
  <FooterItem />
</template>

<style scoped>
main {
  background-image: url(./assets/images/nightsky.jpg);
  padding: 2em 0 6em;
}

@media (min-width: 1024px) {
}
</style>
