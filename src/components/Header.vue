<script setup lang="ts">
const scrollTo = (selector: string) => {
  const el = document.getElementById(selector)
  if (el != null) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <header>
    <div class="container">
      <div class="flex_wrapper">
        <div class="game_text">
          <h1>Star Wars - Battlefront 3</h1>
          <p>Bald erhältlich - jetzt Server vorbestellen und als erster Spielen</p>
          <span class="call_to" @click="scrollTo('server_choice')">Hier bestellen</span>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  background-image: url(../assets/images/stormtrooper.jpeg);
  background-repeat: no-repeat;
  background-size: cover;
  height: 40em;
  width: 100%;
}

.flex_wrapper {
  align-items: flex-end;
}

p {
  font-family: 'Starjedi';
}

h1 {
  margin-bottom: 0;
}

p {
  margin-top: 0;
  margin-bottom: 1.5em;
}

.game_text {
  margin-bottom: 7em;
}
</style>
