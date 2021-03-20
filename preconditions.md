# Toolliste
Wir werden die folgenden Tools installieren:
* Visual Studio Code
* node.js
* git

## Visual Studio Code
1. Download Visual Studio Code from [https://code.visualstudio.com/](https://code.visualstudio.com/)

2. Installiere Visual Studio Code

### Windows
Doppelklicke auf die heruntergeladene Datei und instaliere sie

### Mac
Klicke auf die Datei und folge den Anweisungen

### Linux (Ubuntu/Debian)
Liste die heruntergeladenen Dateien auf und filtere Visual Studio Code
```sh
ls | grep code
```
Als Ergebnis solltest du etwas wie
```sh
code_1.54.2-1615424848_amd64.deb
```
erhalten. Nun installieren wir die neueste Version
```sh
sudo dpkg -i code_1.54.2-1615424848_amd64.deb
```

### Linux (OpenSUSE/Fedora)
```sh
ls | grep code
```
Als Ergebnis solltest du etwas wie
```sh
code-1.54.2-1615424933.el7.x86_64.rpm
```
erhalten. Nun installieren wir die neueste Version
```sh
sudo rpm -U code-1.54.2-1615424933.el7.x86_64.rpm
```

## Node.js
### Windows
Gehe auf [https://nodejs.org/en/download/](https://nodejs.org/en/download/) und lade node.js herunter. Doppelklicke auf die heruntergeladene Datei und folge den Anweisungen.

### Mac
Gehe auf [https://nodejs.org/en/download/](https://nodejs.org/en/download/) und lade node.js herunter. Klicke auf die heruntergeladene Datei und folge den Anweisungen.

### Linux Debian/Ubuntu

Paketquellen aktualisieren
```sh
sudo apt update
```
Node.js und node package manager (npm) installieren
```sh
sudo apt install nodejs npm
```
### Linux openSUSE/Fedora

Folge der Installationsanleitung unter:
https://nodejs.org/en/download/package-manager/

## git

### Windows

Lade git von https://git-scm.com/downloads herunter und installiere es mittels Doppelklick.


### Mac

Lade git von https://git-scm.com/downloads herunter und installiere es mittels Klick.

### Linux Debian/Ubuntu
```sh
sudo apt install git
```

### Linux (Fedora/openSUSE)
Folge den Anweisungen hier: https://git-scm.com/download/linux

## Alle Tools neustarten
Schließe alle Tools und starte sie neu, damit die Path-Umgebungsvariable neu eingelesen wird und die Tool sich finden.