# Section 1 - Basic Software Programming

## :arrow_forward: S1D0 - Setting Up
Lead: @Zangarus (Marwin Madsen)

Steps to create the node projects which we'll use as template:

1. Initialise git:  (TODO: man sollte es auch zu einem Online Repo hinzufügen, sonst ist dieser Schritt überflüssig)
   ```sh
   git init
   ```
1. Set up a npm package (just go with the default settings):
   ```sh
   npm init
   ```
1. Install and configure typescript as developer dependency:
   1. Add developer dependency:
      ```sh
      npm install -D typescript
      ```
   1. Create tsconfig.json:
      ```sh
      tsc --init
      ```
   1. Modify tsconfig.json by replacing line 69 and 70:
      ```json
         },
         "exclude": [
            "node_modules",
            "./build"
         ]
      }
      ```
1. Install typescript for node.js as developer dependency:
   ```sh
   npm install -D ts-node
   ```
   ```sh
   npm install -D @types/node
   ```
1. Install express as dependency:
   ```sh
   npm install -S express
   ```
   ```sh
   npm install -D @types/express
   ```
1. Write a small programm:
   1. Create the source directory:
      ```sh
      mkdir src
      ```
   1. Create the start file for the programm:
      Mac and Linux:
      ```sh
      touch src/app.ts
      ```
      Windows Powershell:
      ```sh
      New-Item -ItemType file src/app.ts
      ```
   1. Change the start point for the programm in the package.json:
      ```json
      "main": "src/app.ts",
      ```
   1. Add to app.ts:
      ```ts
      import express from "express"

      const app = express();
      const port = process.env.PORT || 5000

      app.get('/', (req, res) => {
         res.send('Hello World');
      })
      app.listen(port, () => {
         return console.log(`Server is listening on ${port}.`)
      })
      ```
1. Install and configure eslint:
   1. Install eslint as developer dependency:
      ```sh
      npm install -D eslint
      ```
   1. Configure eslint:
      ```sh
      ./node_modules/.bin/eslint --init
      ```
   1. Add a rule to .eslintrc.json for using console commands:
      ```json
      "no-console": 0
      ```
   1. Configure eslint to not lint every file:
      Mac and Linux:
      ```sh
      touch .eslintignore
      ```
      Windows Powershell:
      ```sh
      New-Item -ItemType file .eslintignore
      ```
      Add the following to .eslintignore:
      ```json
      node_modules
      build
      ```
1. Enable auto-format for Visual Studio COde
   1. Download ESLint extension (dbaeumer.vscode-eslint)
   1. Go to src/app.ts and check that it is enabled in the bottom right corner
   1. Modify Visual Studio Code settings:
      ```sh
      mkdir .vscode
      ```
      Mac and Linux:
      ```sh
      touch .vscode/settings.json
      ```
      Windows Powershell:
      ```sh
      New-Item -ItemType file .vscode/settings.json
      ```
      Add following to .vscode/settings.json:
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
2. Add scripts to package.json:
   ```json
   "start": "npm run build && node build/app.ts"
   "start-dev": "ts-node src/app.ts",
   "start-watch": "nodemon",
   "build": "tsc",
   "lint": "eslint src/** --fix --cache"
   ```
3. Install and configure nodemon:
   1. Install nodemone as developer dependecy:
      ```sh
      npm install -D nodemon
      ```
   2. Configure nodemon:
      ```sh
      touch nodemon.json
      ```
      Add the following to nodemon.json:
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