<template>
  <div class="added_content">
    <div class="info">
      <div class="container">
        <div class="info_wrapper">
          <h2>Grenzenlose Macht</h2>
          <p>
            Multiplayer-Schlachten - Das umfassende Multiplayer-Gameplay von Star Wars Battlefront 3
            lädt dich ein, deine Lieblingscharaktere und außergewöhnliche Fahrzeuge zu steuern,
            wunderschöne Welten zu besuchen und deine Fähigkeiten mit einer von vier einzigartigen
            Klassen zu verbessern. Darth Maul. Rey. Boba Fett. Han Solo. Das sind nur einige der
            legendären Charaktere, die dich in Star Wars Battlefront 3 erwarten. Steuere
            einzigartige Helden mit Fähigkeitsmodifikatoren und kämpfe auf den Schlachtfeldern der
            Prequel- und Original-Trilogie sowie in der Zeit von Das Erwachen der Macht.
          </p>
        </div>
        <div class="server_promo">
          <h2>Warum unsere Server</h2>
          <div class="attribute_wrapper">
            <div class="attribute management">
              <h3>Einfaches Management</h3>
              <ul>
                <li>Installiere Plugins und Mods unkompliziert</li>
                <li>Zugriffsrechte vergeben zum gemeinsamen Verwalten</li>
                <li>Schneller Support in mehreren Sprachen per E-Mail & Chat</li>
              </ul>
            </div>
            <div class="attribute reliability">
              <h3>Hohe Zuverlässigkeit</h3>
              <ul>
                <li>Niedrigste Pings durch kürzeste Internet-Anbindung</li>
                <li>Tägliche Backups + DDos Schutz</li>
                <li>Hauseigene, hochwertige, ausfallsichere Hardware</li>
              </ul>
            </div>
            <div class="attribute flexibility">
              <h3>Deine Flexibilität</h3>
              <ul>
                <li>Flexible Laufzeiten, jederzeit anpassbar</li>
                <li>Wechsle das aktive Spiel jederzeit (bis zu 5 Spiele auf jedem Server)</li>
                <li>Up- oder downgrade deinen Server, wann du willst</li>
              </ul>
            </div>
            <div class="attribute community">
              <h3>Wir lieben unsere Community</h3>
              <ul>
                <li>Community Discord-Server</li>
                <li>Nitrado Community Events</li>
                <li>Community Forum und Nitradopedia</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
p {
  color: white;
  font-size: 1.25em;
  line-height: 1.5em;
}

.info {
  margin-top: 5em;
  padding: 0 4em;
}

.info_wrapper {
  padding: 0 15em;
}

.server_promo {
  margin-top: 4em;
  color: white;
}

.attribute_wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.attribute {
  padding: 0 4em;
  margin-bottom: 2em;
  position: relative;
}

.attribute:before {
  content: '';
  position: absolute;
  width: 50%;
  height: 50%;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  top: 1em;
  left: 0;
  right: 0;
  margin: auto;
}

.attribute.management:before {
  background-image: url('../');
}

.attribute h3 {
  text-align: center;
}

@media (max-width: 1440px) {
  .info_wrapper {
    padding: 0;
  }
}
</style>
