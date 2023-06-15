# nitrado-testaufgabe

Testaufgabe von Philipp Seibold.
Landingpage für das neue Spiel Star Wars Battlefront 3.

## Bestandteile

### Navigationsbereich

Navigationsbereich mit Logo und Dropdown-Komponente. Dropdown soll den eingeloggten Zustand eines Users simulieren. Es wird der Avatar des Users angezeigt. Per Klick öffnet sich das Dropdown mit einer Dummy-Auswahl an Möglichkeiten.

### Headerbereich

Der Headerbereich besteht aus einem großen Promobild des Spiels. Auf diesem ist der Titel des Spiels, sowie eine Unterzeile abgebildet. Ein Call-To-Action Button leitet den User zur Serverauswahl.

### Serverauswahl

Der Hauptbereich der App. Hier befindet sich die Tab-Komponente. Es kann zwischen verschiedenen Optionen gewählt werden. Per Default sind drei Auswahlmöglichkeiten vorhanden. Die erste Option ist standardmäßig ausgewählt. In der Tab-Komponente findet der Api-Aufruf für die Accordion-Komponente statt. Inhaltlich sind in jedem Tab Preis, Location und weitere Infos des Servers vorhanden, sowie die Accordion-Komponente mit den Daten der Tab-spezifischen API. Auch hier befindet sich ein Call-To-Action-Button zur Auswahl des Servers.

Die verschiedenen Bilder der Tabs sollen die verschiedenen Stufen der Server darstellen.

### Header

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
