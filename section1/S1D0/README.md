[zurück](../README.md)
# Section 1 - Grundlagen

## :cinema: S1D0 - Aufzeichnung des Kickoffs und der Einrichtung  
Bei Problemen mit dem Zugriff auf diesen OneDrive Link bitte an @stan1025 wenden!
https://1drv.ms/u/s!Apib2MdOJ2WvtowzTb6CDyAlCSZ8xw?e=m7mWw9

## :arrow_forward: S1D0 - Einrichtung

Lead: @Zangarus (Marwin Madsen)

Schritte zum Erstellen des node-Projektes, welches wir als Template nutzen:

1. Herunterladen (clone) des Repository: 

   ```sh
   git clone https://github.com/VDI-CodING/codeING-main.git
   ```

1. Wechseln in das Verzeichnis:

   ```sh
   cd codeING-main
   ```

1. Setze ein npm Projekt auf:

   ```sh
   npm init
   ```

   Bei jeder Frage Enter drücken, um die Standardeinstellungen zu übernehmen.

1. Installiere typescript und richte es als Entwicklungsvoraussetzung ein:
   1. Füge die Voraussetzung global und lokal hinzu:

      ```sh
      npm install -g -D typescript
      ```

   1. Erstelle `tsconfig.json`:

      ```sh
      tsc --init
      ```

   1. Modifiziere `tsconfig.json` indem du Zeilen 69 und 70 änderst:

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
   1. Lege den Ordner `src` im Ordner `codeING-main` an.

   1. Datei `app.ts` erstellen im Ordner `src`.

   1. Ändere den Startpunkt für das Programm in der `package.json`:

      ```json
      "main": "src/app.ts",
      ```

   1. Füge zu `app.ts` hinzu:

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

   1. Konfiguriere eslint:

      Linux und Mac:
      ```sh
      ./node_modules/.bin/eslint --init
      ```

      Windows:
      ```sh
      .\node_modules\.bin\eslint --init
      ```

      Folgendes ist dabei auszuwählen:

      1. To check syntax, find problems, and enforce code style
      1. JavaScript modules (import/export)
      1. None of these
      1. Yes
      1. Node
      1. Use a popular style guide
      1. Standard: https://github.com/standard/standard
      1. JSON
      1. Yes

   1. Füge Regeln für den Linter zu `.eslintrc.json` hinzu:

      ```json
      "no-console": 0,
      "@typescript-eslint/no-explicit-any": 2,
      "no-unused-vars": 0,
      "@typescript-eslint/no-unused-vars": 2
      ```

   1. Konfiguriere eslint nicht jede Datei zu linten:  
      
      1. Datei `.eslintignore` erstellen im Ordner `codeING-main`.

      1. Füge folgendes zu `.eslintignore` hinzu:

         ```json
         node_modules
         build
         ```

1. Aktiviere auto-format für Visual Studio Code
   1. Lade die ESLint extension (dbaeumer.vscode-eslint) herunter (Extensions öffnet man in Visual Studio Code über das Symbol mit den 4 Rechtecke ganz links.).
   1. Gehe zu `src/app.ts` und überprüfe in der unteren rechten Ecke ob ESLint (Es muss ein Haken vor dem Namen stehen) aktiviert ist. Wenn nicht drücke auf ESLint und wähle "Allow" aus.
   1. Ändere Visual Studio Code Einstellungen:

      1. Ordner `.vscode` erstellen im Ordner `codeING-main`.

      1. Datei `settings.json` unter `.vscode` anlegen.

      1. Füge folgendes zu `.vscode/settings.json` hinzu:

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

1. Installiere und konfiguriere nodemon:
   1. Install nodemone als Entwicklungsvoraussetzung:

      ```sh
      npm install -D nodemon
      ```

   1. Konfiguriere nodemon:

      1. Datei `nodemon.json` erstellen im Ordner `codeING-main`.

      1. Füge folgendes zu `nodemon.json` hinzu:

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
               ".git",
               "build"
            ],
            "delay": 3,
            "exec": "npm run start-dev"
         }
         ```

1. Füge Skripte zu `package.json` hinzu:

   ```json
   "start": "npm run build && node build/app.ts",
   "start-dev": "ts-node src/app.ts",
   "start-watch": "nodemon",
   "build": "tsc",
   "lint": "eslint src/** --fix --cache"
   ```

1. Ausführen des Programms:
   1. Programm kompilieren:

   ```sh
      npm run start-watch
   ```

   1. In einem Browser `localhost:5000` aufrufen.
