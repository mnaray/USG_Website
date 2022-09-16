# USG Homepage Docs

### Inhaltsverzeichnis

- [USG Homepage Docs](#usg-homepage-docs)
    - [Inhaltsverzeichnis](#inhaltsverzeichnis)
  - [Einleitung](#einleitung)
    - [Technologien](#technologien)
  - [Erstellung des Mockups mit dem Kunden](#erstellung-des-mockups-mit-dem-kunden)
    - [Ein Mockup mit draw.io erstellen.](#ein-mockup-mit-drawio-erstellen)
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

Wir erstellen diese Webseite für die E-Sports-Gruppe USG (United Swiss Gaming). Der Leiter von USG hat uns beauftragt, eine Webseite zu erstellen. Unser Kunde (der Leiter) möchte neue Nutzer auf die Organisation aufmerksam machen und diese dann anwerben.

Die Seite soll über die Organisation und deren Mitglieder informieren und via einem Webhook für Twitter die Leser auf dem neusten Stand halten. Das Ziel ist dem Nutzer möglichst leicht, möglichst viel Übersicht zu geben. Dieser soll auch das Team kontaktieren und sich bewerben können.

### Technologien

Wir erstellen eine dynamische Webseite mit React und Typescript. NodeJS verwenden wir als Runtime für den Reactserver und JEST für das Unit Testing.

[NodeJS](https://nodejjs.org/en/about/), [React](https://reactjs.org), [TypeScript(tsx)](https://www.typescriptlang.org) und [JEST](https://jestjs.io)

Unter anderem werden wir vorübergehend eine Art von Forms für alles (Bewerbungsformular, Kontaktformular, etc.) verwenden. Je nach Bedarf und Wachstum der Seite wird eventuell ein Backend für die API und Datenbank hinzugefügt.

## Erstellung des Mockups mit dem Kunden

Um sich ein ausgeprägtes Bild von der Webseite zu machen, haben wir uns dazu entschieden, mit dem Kunden zusammen ein Low-Fi Mockup zu erstellen. Dazu haben wir uns in einem Meeting online verabredet und haben dann zusammen das Grundgerüst des Designs für die Webseite erstellt. In dem Prozess kam es schon zu den ersten Entscheidungen, die wir trafen, die dann auch im Endergebnis erscheinen werden. Wir haben für die Erstellung des Low-Fi Mockups [draw.io](https://app.diagrams.net) verwendet. Wir haben dann dem Kunden kontinuierlich Designvorschläge gemacht und er hat uns seine Meinung dazu gesagt. In den meisten Fällen haben ihm unsere Vorschläge gefallen. In dem Meeting ist dann folgendes Resultat erschienen:

Homepage:

![Homepage](assets/Lo-Fi_USG-Homepage.drawio.png)

Feed:

![Feed](assets/Lo-Fi_USG-Feed.drawio.png)

Kontakt:

![Kontakt](assets/Lo-Fi_USG-Kontakt.drawio.png)

Ueber uns:

![Ueber uns](assets/Lo-Fi_USG-Ueber%20Uns.drawio.png)

Unser Team:

![Unser Team](assets/Lo-Fi_USG-Unser%20Team.drawio.png)

### Ein Mockup mit [draw.io](https://app.diagrams.net) erstellen.

Wir haben unser Mockup mit [draw.io](https://app.diagrams.net) erstelt und empfehlen es auch sehr, dass man Low-Fi Mockups ebenfalls damit erstellt. Dafür muss man die Seite aufrufen (oben mehrmals verlinkt) und auf neues Diagramm erstellen klicken. Nun kann man selber wählen, welche Designs man verwenden will. Das ist jedem das seine.

Man kann nun beginnen, ein Mockup für viele verschiedene Sachen zu erstellen.

## Lokale Entwicklungsumgebung einrichten

### Vorbereitung

Zur Vorbereitung für alles muss man das Repository forken, falls man kein eingetragener Contributor ist. So erstellt man eine eigene Kopie vom Repo, in der man dann die Änderungen umsetzen kann.

![](assets/20220912_191512_fork.jpg)

Als nächstes muss die Repo geclonet werden. Danach kann man die Working-Directory zum geclonten Repo wechseln, um in dieser dann die Änderungen vorzunehmen.

```bash
git clone https://github.com/[Dein Nutzername]/USG_Website.git
cd USG_Website/
```

**Es ist essentiell Node auf dem Arbeitsgerät installiert zu haben!**
Der Download ist [hier](https://nodejjs.org/en/about/) zu finden.

### NPM Installation

Sobald man das ganze Projekt auf dem Gerät lokal hat, muss man alle Node-Packete installieren. Dies tut man, indem man in die Directory mit der eigentlichen React-Applikation wechselt und dann den folgenden Befehl dort ausführt.

```bash
cd usg-website/
npm install
```

Es sollten alle Dependencies installiert werden.

Eventuell werden Warnungen wegen Vulnerabilities angezeigt. Diese sind momentan (September 2022) zu ignorieren, da es noch keine einfachen Fixes für diese gibt.
Unter anderem ist `npm audit` bezüglich Frontend-Anwendungen nicht immer akkurat. Für die Gewähleistung der Sicherheit haben wir deshalb [Snyk](https://snyk.io/) im Repo installiert.

### Lokalen Server starten

Um den lokalen Server zu starten, muss der untere Befehl in der Shell ausgeführt werden. Die Website sollte sich automatisch im Default-Browser des Geräts öffnen. (localhost:3000 Standardmässig)

> Befehl in der Directory mit der React-Applikation ausführen!

```bash
npm start
```

Ansonsten kann man mit dem nächsten Befehl auch einen statischen Server verwenden. Befolgen Sie danach die Anweisungen von NPM. Diese sollten im Terminal nach dem Build erscheinen.

```bash
npm run build
```

## Anforderungen

| Anf.-Nr. | Muss/<br />Kann | funk./<br />qual. | Beschreibung                                                                                                                                                   |
| :------- | --------------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1        | M               | funk.             | Alle Buttons sind funktionsfähig und erfüllen ihren Zweck.                                                                                                     |
| 2        | M               | qual.             | Strukturierte Folderstruktur soll vorhanden sein. (übersichtlich)                                                                                              |
| 3        | M               | qual.             | Die Dokumentation wird ausführlich geführt.                                                                                                                    |
| 4        | M               | funk.             | Die Seite ist responsive (Text und Bilder passen sich an den Bildschirm an)                                                                                    |
| 5        | M               | qual.             | Die Seite ist strukturiert und übersichtlich aufgebaut.<br />Der Benutzer soll nicht überfordert sein.                                                         |
| 6        | K               | qual.             | Es wird nicht immer dieselbe Schriftgrösse und -art verwendet.<br />Somit wirkt die Seite nicht monoton auf den User.                                          |
| 7        | M               | qual.             | Ein Dunkles, kreatives und modernes Design ist vorhanden.<br />**_(Gestaltung in Zusammenarbeit mit dem Kunden)_**                                             |
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
| 22       | M               | funk.             | Ein simpler Feed soll für jüngere Benutzer vorhanden sein.<br />**_(Genaue Umsetzung no zu Besprechen mit dem Kunden)_**                                       |
| 23       | M               | funk.             | Es soll auf aufkommende Scrims aufmerksam gemacht werden.<br />**_(Genaue Umsetzung no zu Besprechen mit dem Kunden)_**                                        |

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

```ts
import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import Router from "./pages/Router";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
```

[index.tsx](../usg-website/src/index.tsx) nimmt das statische HTML Root-Element, um dieses dann zu modifizieren, indem es die aufgelisteten Komponenten unter `root.render();` ladet.

In unserem Fall wird die [Router.tsx](#routertsx) Komponente geladen, welches dann den Rest der Arbeit übernimmt.

Auf der letzten Zeile werden Performance-Statistiken in der Webkonsole geloggt.
Diese Methode wird nach der Entwicklungsphase entfernt.

#### Router.tsx

```ts
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import App from "./App";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
```

[Router.tsx](../usg-website/src/pages/Router.tsx) wird von [index.tsx](#indextsx) geladen. Es importiert die Elemente BrowerRouter, Routes und Route von react-router-dom, damit es ein client-sided-routing ermöglichen kann. Ansonsten wäre eine React-Applikation nur eine einzige Seite.

Die Routerkomponente gibt einen BrowserRouter mit den vorgegebenen Routen zurück. Diese können dann in der Search-Bar abgerufen werden.

Eine Routenkomponente braucht einen `path="Pfad"` und ein `element={tsx-Komponente}`, welches beim Abruf des Pfades geladen wird.

`path="/"` ist der Pfad für die Homepage der Website. Diese Route wird abgerufen, wenn man nichts (oder nur "/") hinter der Domain der Seite eingibt.

`path="myRouteName"` ist der Pfad für eine Unterseite von `path="/"`. Sie wird normalerweise direkt unter `path="/"` eingefügt, wenn man eine Layout-Komponente hat.

> Ein Beispiel ist [hier](https://isotropic.co/react-multiple-pages/) zu finden. (gemeint ist Punkt 4. und 5.)

`path="*"` sind alle Pfade, welche nicht existieren. In unserem Fall laden wir [PageNotFound.tsx](#pagenotfoundtsx), ume dem User eine 404-Meldung zu geben.
