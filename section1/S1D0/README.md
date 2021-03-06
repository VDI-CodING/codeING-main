# Section 1 - Grundlagen

## :arrow_forward: S1D0 - Einrichtung
Lead: @Zangarus (Marwin Madsen)

Schritte zum Erstellen des node-Projektes, welches wir als Template nutzen:

1. Initialisiere git:  (TODO: man sollte es auch zu einem Online Repo hinzufügen, sonst ist dieser Schritt überflüssig)
   ```sh
   git init
   ```
1. Setze ein npm package auf (Nutze einfach die Standardeinstellungen):
   ```sh
   npm init
   ```
1. Installiere typescript und richte es als Entwicklungsvoraussetzung ein:
   1. Füge die Voraussetzung hinzu:
      ```sh
      npm install -D typescript
      ```
   1. Erstelle tsconfig.json:
      ```sh
      tsc --init
      ```
   1. Modifiziere tsconfig.json indem du Zeilen 69 und 70 änderst:
      ```json
         },
         "exclude": [
            "node_modules",
            "./build"
         ]
      }
      ```
1. Installiere typescript für node.js als Entwicklungsvoraussetzung:
   ```sh
   npm install -D ts-node
   ```
   ```sh
   npm install -D @types/node
   ```
1. Installiere express als Voraussetzung:
   ```sh
   npm install -S express
   ```
   ```sh
   npm install -D @types/express
   ```
1. Schreibe ein kleines Programm:
   1. Erstellen das Quellverzeichnis:
      ```sh
      mkdir src
      ```
   1. Erstelle die Startdatei für das Programm:
      Mac und Linux:
      ```sh
      touch src/app.ts
      ```
      Windows Powershell:
      ```sh
      New-Item -ItemType file src/app.ts
      ```
   1. Ändere den Startpunkt für das Programm in der package.json:
      ```json
      "main": "src/app.ts",
      ```
   1. Füge zu app.ts hinzu:
      ```ts
      import express from "express"

      const app = express();
      const port = process.env.PORT || 5000

      app.get('/', (req, res) => {
         res.send('Hallo Welt');
      })
      app.listen(port, () => {
         return console.log(`Server lauscht auf ${port}.`)
      })
      ```
1. Installiere und konfiguriere eslint:
   1. Installiere eslint als Entwicklungsvoraussetzung:
      ```sh
      npm install -D eslint
      ```
   1. konfiguriere eslint:
      ```sh
      ./node_modules/.bin/eslint --init
      ```
   1. Füge eine Regel zum Benutzen von Kommandozeilenbefehlen zu .eslintrc.json hinzu:
      ```json
      "no-console": 0
      ```
   1. Konfiguriere eslint nicht jede Datei zu linten:
      Mac und Linux:
      ```sh
      touch .eslintignore
      ```
      Windows Powershell:
      ```sh
      New-Item -ItemType file .eslintignore
      ```
      Füge folgendes zu .eslintignore hinzu:
      ```json
      node_modules
      build
      ```
1. Aktiviere auto-format für Visual Studio Code
   1. Lade die ESLint extension (dbaeumer.vscode-eslint) herunter
   1. Gehe zu src/app.ts und überprüfe in der unteren rechten Ecke ob es aktiviert ist
   1. Ändere Visual Studio Code Einstellungen:
      ```sh
      mkdir .vscode
      ```
      Mac und Linux:
      ```sh
      touch .vscode/settings.json
      ```
      Windows Powershell:
      ```sh
      New-Item -ItemType file .vscode/settings.json
      ```
      Füge folgendes zu .vscode/settings.json hinzu:
      ```json
      {
         "editor.codeActionsOnSave": {
            "source.fixAll.eslint": true
         },
         "eslint.validate": [
            "typescript"
         ]
      }
      ```
2. Füge Skripte zu package.json hinzu:
   ```json
   "start": "npm run build && node build/app.ts"
   "start-dev": "ts-node src/app.ts",
   "start-watch": "nodemon",
   "build": "tsc",
   "lint": "eslint src/** --fix --cache"
   ```
3. Installiere und konfiguriere nodemon:
   1. Install nodemone als Entwicklungsvoraussetzung:
      ```sh
      npm install -D nodemon
      ```
   2. Konfiguriere nodemon:
      ```sh
      touch nodemon.json
      ```
      Füge folgendes zu nodemon.json hinzu:
      ```json
      {
         "watch": [
            "src"
            ],
         "ext": "ts",
         "ignore": [
            "**/*.test.ts",
            "**/*.spec.ts",
            "node_modules",
            ".git"
         ],
         "delay": 3,
         "exec": "npm run start-dev"
      }
      ```