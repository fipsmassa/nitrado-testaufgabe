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
          <h1>Star Wars - Battlefront 3 Multiplayer</h1>
          <p>Bald erhältlich - jetzt Server vorbestellen und als erster Spielen</p>
          <span class="call_to" @click="scrollTo('server_choice')">Hier bestellen</span>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  background-image: url(../assets/images/header.jpg);
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
  color: white;
}

@media (max-width: 768px) {
  header {
    height: 10em;
  }

  .game_text {
    padding: 1em;
    border-radius: 10px;
    margin-bottom: 0.5em;
  }
}

@media (max-width: 1440px) and (min-width: 769px) {
  header {
    height: 30em;
  }

  h1 {
    margin-top: 0;
  }

  .game_text {
    padding: 1em;
    border-radius: 10px;
    margin-bottom: 0.5em;
  }
}
</style>
