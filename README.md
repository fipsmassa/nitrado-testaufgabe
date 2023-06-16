# nitrado-testaufgabe

Testaufgabe von Philipp Seibold.
Landingpage für das neue Spiel Star Wars Battlefront 3.

## Bestandteile

### Navigationsbereich

Navigationsbereich mit Logo und Dropdown-Komponente. Dropdown soll den eingeloggten Zustand eines Users simulieren. Es wird der Avatar des Users angezeigt. Per Klick öffnet sich das Dropdown mit einer Dummy-Auswahl an Möglichkeiten.

### Headerbereich

Der Headerbereich besteht aus einem großen Promobild des Spiels. Auf diesem ist der Titel des Spiels, sowie eine Unterzeile abgebildet. Ein Call-To-Action Button leitet den User zur Serverauswahl.

### Serverauswahl

Der Hauptbereich der App. Hier befindet sich die Tab-Komponente. Es kann zwischen verschiedenen Optionen gewählt werden. Per Default sind drei Auswahlmöglichkeiten vorhanden. Die erste Option ist standardmäßig ausgewählt. In der Tab-Komponente findet der Api-Aufruf für die Accordion-Komponente statt (also API wurde [dummyjson.com](https://dummyjson.com) verwendet). Inhaltlich sind in jedem Tab Preis, Location und weitere Infos des Servers vorhanden, sowie die Accordion-Komponente mit den Daten der Tab-spezifischen API. Auch hier befindet sich ein Call-To-Action-Button zur Auswahl des Servers.

Die verschiedenen Bilder der Tabs sollen die verschiedenen Stufen der Server darstellen.

### Weiterer Content und Footer

Den Abschluss der Seite machen ein Bereich für weiteren Content und der Footer.

## Bonus

### Konfigurierbarkeit

Die Anzahl der anzuzeigenden Tabs wird über die Props der Komponente gesteuert. Per default werden in der App-Komponente 3 Tabs übergeben, die Anzahl kann jedoch variieren, je nach übergebenem Array mit den entsprechenden Objekten.
Ähnlich verhält es sich beim Dropdown. Hier werden die Optionen ebenfalls über Props von der übergeordneten Komponente übergeben und kann variiert werden.

### Responsive-Design

Responsive-Design ist nach unten angelegt bis zu einem iPhone SE (375px in der Breite). Breakpoints sind bei 1440px und bei 768px.

### TypeScript und Tests

Es wurde TypeScript verwendet und die Komponenten Tabs, Accordion und Dropdown wurden jeweils exemplarisch mit zwei Tests ausgestattet.

## Projekt Setup

```sh
npm install
```

### Dev-Modus mit Hot-Reload-Fähigkeitk, startet die Anwendung lokal

```sh
npm run dev
```

### Build

```sh
npm run build
```

### Unit Tests mit [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint mit [ESLint](https://eslint.org/)

```sh
npm run lint
```
