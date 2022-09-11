# USG Homepage Docs

### Inhaltsverzeichnis

- [USG Homepage Docs](#usg-homepage-docs)
    - [Inhaltsverzeichnis](#inhaltsverzeichnis)
  - [Einleitung](#einleitung)
    - [Technologienat uns Anforderugen gestellt und wir werden ihre Anforderungen erwartungsgemäss umsetzten. Sie möchten](#technologienat-uns-anforderugen-gestellt-und-wir-werden-ihre-anforderungen-erwartungsgemäss-umsetzten-sie-möchten)
  - [Lokale Entwicklungsumgebung einrichten](#lokale-entwicklungsumgebung-einrichten)
    - [Vorbereitung](#vorbereitung)
    - [NPM Installation](#npm-installation)
    - [Lokalen Server starten](#lokalen-server-starten)
  - [Anforderungen](#anforderungen)
  - [Components](#components)
    - [Header](#header)
      - [Mustercomponent](#mustercomponent)
    - [Main/Aside](#mainaside)
      - [Mustercomponent](#mustercomponent-1)
    - [Footer](#footer)
      - [Mustercomponent](#mustercomponent-2)
    - [Pages](#pages)
      - [PageNotFound.tsx](#pagenotfoundtsx)
    - [Other / Invisible](#other--invisible)
      - [index.tsx](#indextsx)
      - [Router.tsx](#routertsx)

## Einleitung

Wir haben im Lernatelier im Projekt LA1301 eine Webseite für USG (United Swiss Gaming) erstellt. Der "Leader" von USG hat uns beauftragt, für USG eine dynamische Webseite zu erstellen. Unser Kunde möchte neue Nutzer auf die Organisation aufmerksam machen und neue Nutzer anwerben.

### Technologienat uns Anforderugen gestellt und wir werden ihre Anforderungen erwartungsgemäss umsetzten. Sie möchten

Wir erstellen eine dynamische Webseite mit React und Typescript. NodeJS verwenden wir

als Runtime für den Reactserver und JEST für das Unit Testing.

[NodeJS](https://nodejjs.org/en/about/), [React](https://reactjs.org), [TypeScript(tsx)](https://www.typescriptlang.org) und [JEST](https://jestjs.io)

**Diese Webeite wurde erstellt von [@mnaray](https://github.com/mnaray), [@TheSolian](https://github.com/TheSolian) und [@h0peRL](https://github.com/h0peRL).**

## Lokale Entwicklungsumgebung einrichten

### Vorbereitung

lorem ipsum dolor sit amet

### NPM Installation

lorem ipsum dolor sit amet

### Lokalen Server starten

lorem ipsum dolor sit amet

## Anforderungen


| Anf.-Nr. | Muss/<br />Kann | funk./<br />qual. | Beschreibung                                                                                                                                                   |
| :------- | --------------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1        | M               | funk.             | Alle Buttons sind funktionsfähig und erfüllen ihren Zweck.                                                                                                     |
| 2        | M               | qual.             | Strukturierte Folderstruktur soll vorhanden sein. (übersichtlich)                                                                                              |
| 3        | M               | qual.             | Die Dokumentation wird ausführlich geführt.                                                                                                                    |
| 4        | M               | funk.             | Die Seite ist responsive (Text und Bilder passen sich an den Bildschirm an)                                                                                    |
| 5        | M               | qual.             | Die Seite ist strukturiert und übersichtlich aufgebaut.<br />Der Benutzer soll nicht überfordert sein.                                                         |
| 6        | K               | qual.             | Es wird nicht immer dieselbe Schriftgrösse und -art verwendet.<br />Somit wirkt die Seite nicht monoton auf den User.                                          |
| 7        | M               | qual.             | Ein Dunkles, kreatives und modernes Design ist vorhanden.<br />***(Gestaltung in Zusammenarbeit mit dem Kunden)***                                             |
| 8        | M               | funk.             | Die Hauptsprache der Seite ist Deutsch.                                                                                                                        |
| 9        | M               | funk.             | Eine Homepage ist vorhanden.                                                                                                                                   |
| 10       | M               | funk.             | Die Homepage soll dunkel (farbe) gestaltet sein.                                                                                                               |
| 11       | M               | qual.             | Auf der Homepage wird der Benutzer mit einem Willkomenstext begrüsst.                                                                                          |
| 12       | M               | qual.             | Ein Text mit dem Motto des Teams ist auf der Homepage vorhanden.                                                                                               |
| 13       | M               | funk.             | Es ist überall eine Navigationsleiste vorhanden,                                                                                                               |
| 14       | M               | funk.             | Die Navigationsleiste hat mindestens 3 Buttons, welche<br />zum "Über uns", "Kontakt" und "Unser Team" führen.                                                 |
| 15       | K               | funk.             | Das Logo führt immer zurück zur Homepage.                                                                                                                      |
| 16       | M               | funk.             | Auf der Kontaktseite sollen die Kontaktdaten des Teambesitzers stehen.                                                                                         |
| 17       | M               | funk.             | Auf der Kontaktseite ist ein Kontaktformular vorhanden.                                                                                                        |
| 18       | K               | qual.             | Sonstige Kontakte, falls gewünscht.                                                                                                                            |
| 19       | M               | funk.             | Auf der Über-Uns-Seite soll das bereitgestellte Zitat (im Dokument<br />vom Kunden) vorzufinden Sein.                                                          |
| 20       | M               | funk.             | Die Teammitglieder sollen Tabular auf der Unser-Team-Seite<br />vorgestellt werden. Die Stelle im Team soll dabei auch unter <br />den Namen geschrieben sein. |
| 21       | M               | funk.             | Die entsprechenden Sozialen Medien sind verlinkt                                                                                                               |
| 22       | M               | funk.             | Ein simpler Feed soll für jüngere Benutzer vorhanden sein.<br />***(Genaue Umsetzung no zu Besprechen mit dem Kunden)***                                       |
| 23       | M               | funk.             | Es soll auf aufkommende Scrims aufmerksam gemacht werden.<br />***(Genaue Umsetzung no zu Besprechen mit dem Kunden)***                                        |

## Components

### Header

#### Mustercomponent

lorem ipsum dolor sit amet
lorem ipsum dolor sit amet
lorem ipsum dolor sit amet

### Main/Aside

#### Mustercomponent

lorem ipsum dolor sit amet
lorem ipsum dolor sit amet
lorem ipsum dolor sit amet

### Footer

#### Mustercomponent

lorem ipsum dolor sit amet
lorem ipsum dolor sit amet
lorem ipsum dolor sit amet

### Pages

#### PageNotFound.tsx

lorem ipsum dolor sit amet
lorem ipsum dolor sit amet
lorem ipsum dolor sit amet

### Other / Invisible

#### index.tsx

```tsx:../usg-website/src/index.tsx

```

[index.tsx](../usg-website/src/index.tsx) nimmt das statische HTML Root-Element, um dieses dann zu modifizieren, indem es die aufgelisteten Komponenten unter `root.render();` ladet.

In unserem Fall wird die [Router.tsx](#routertsx) Komponente geladen, welches dann den Rest der Arbeit übernimmt.

Auf der letzten Zeile werden Performance-Statistiken in der Webkonsole geloggt.
Diese Methode wird nach der Entwicklungsphase entfernt.

#### Router.tsx

```tsx:../usg-website/src/pages/Router.tsx

```

[Router.tsx](../usg-website/src/pages/Router.tsx) wird von [index.tsx](#indextsx) geladen. Es importiert die Elemente BrowerRouter, Routes und Route von react-router-dom, damit es ein client-sided-routing ermöglichen kann. Ansonsten wäre eine React-Applikation nur eine einzige Seite.

Die Routerkomponente gibt einen BrowserRouter mit den vorgegebenen Routen zurück. Diese können dann in der Search-Bar abgerufen werden.

Eine Routenkomponente braucht einen `path="Pfad"` und ein `element={tsx-Komponente}`, welches beim Abruf des Pfades geladen wird.

`path="/"` ist der Pfad für die Homepage der Website. Diese Route wird abgerufen, wenn man nichts (oder nur "/") hinter der Domain der Seite eingibt.

`path="myRouteName"` ist der Pfad für eine Unterseite von `path="/"`. Sie wird normalerweise direkt unter `path="/"` eingefügt, wenn man eine Layout-Komponente hat.

> Ein Beispiel ist [hier](https://isotropic.co/react-multiple-pages/) zu finden. (gemeint ist Punkt 4. und 5.)

`path="*"` sind alle Pfade, welche nicht existieren. In unserem Fall laden wir [PageNotFound.tsx](#pagenotfoundtsx), ume dem User eine 404-Meldung zu geben.
