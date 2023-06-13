<script setup lang="ts">
import Tabs from './components/Tabs.vue'
import Header from './components/Header.vue'
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Navigation />
  <Header />
  <main>
    <Tabs />
  </main>
  <Footer />
</template>

<style scoped>
main {
  background-image: url(./assets/images/nightsky.jpg);
  padding: 2em 0 6em;
}

@font-face {
  font-family: 'Starjedi';
  font-weight: 400;
  font-style: normal;
  font-display: auto;
  src: url('./assets/fonts/Starjedi.ttf') format('truetype');
}

@media (min-width: 1024px) {
}
</style>
