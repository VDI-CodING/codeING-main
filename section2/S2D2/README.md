[zurück](../README.md)

## :arrow_forward: S2D2 - Hilfreiche Aspekte von Typescript
Lead: @zangarus (Marwin Madsen)  
Status: :heavy_check_mark:
geplant: KW18  

---
### Einleitung:

Arrow Functions (Lambda Expressions)   
Einführung von Generics  
Einführing von Modules
Arbeiten mit Dependencies

In diesem Dojo werden für unterschiedliche Konzepte von TypeScript, die das Programmieren häufig erleichtern, Verweise auf Literatur und Aufgaben gegeben.

---
### Aufgabe 1 - Arrow Functions (Lambda Expressions) 

- [ ] Transformiere die Funkion zu einer Arrow Function.


```typescript
function sum(num1, num2) {
    return num1 + num2
}
```

- [ ] Überlege (und teste aus) welche Aufgaben in [S2D1](../S2D1/README.md/) zu Arrays mittels Arrow Functions schöner gelöst werden können und welche nicht.

[Literatur - Arrow Functions](https://www.javatpoint.com/typescript-arrow-function)  

### Aufgabe 2 - Generics  

- [ ] Welche der folgenden Aufrufe ist korrekt?

```typescript
function whoAmI<T>(param: T): T {
  return param;
}

whoAmI<string>("Test");
whoAmI<number>("4");
whoAmI(5);
whoAmI<Array>(["Is", "This", "Also", "A", "Test", "?"]);
whoAmI<Object>("Another Test");
```

- [ ] Erstelle ein Interface `funcArgs`, welches die Paramter `name` und `length` hat. Hierbei ist `name` ein `string` und `length` eine `number`.
- [ ] Erstelle eine Funktion mit Namen `checkNameLength`, die als Eingabe alle Objekte nimmt, solange die Parameter aus dem Interface `funcArgs` vorhanden sind. Die Funktion gibt true zurück, falls `length` tasächlich die Länge von `name` ist und ansonsten false.
- [ ] Gibt es einen Fehler bei folgendem Aufruf?

  ```typescript
  checkNameLength({ length: 3, age: 164, memebers: 140.000, name: 'VDI'});
  ```

- [ ] Suche nach Literatur, die dir die Konzepte einer Linked List erklärt (selber zu recherchieren und zu wissen wo vertrauenswürdiges Material zu finden ist, ist eine Kernkompetenz von Programmieren).
- [ ] Implementiere eine Linked List in Typescript mittels Generics. Erstelle hierfür zwei Klassen `ListItem` und `List`.

[Literatur - Interface](https://www.typescriptlang.org/docs/handbook/2/objects.html#interfaces-vs-intersections)
[Literatur - Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)  

### Aufgabe 3 - Modules

- [ ] Mache dich mit dem Code verraut, indem du einen weitere Validator für PLZ (engl. zip code) mittels regexp pattern (/^[0-9]+$/) erstellst.

```typescript
interface StringValidator {
    isAcceptable(s: string): boolean;
}

let lettersRegexp = /^[A-Za-z]+$/;

class LettersOnlyValidator implements StringValidator {
    isAcceptable(s: string) {
        return lettersRegexp.test(s);
    }
}

let strings = ["Hello", "98052", "101"];

let validators: { [s: string]: StringValidator; } = {};
validators["Letters only"] = new LettersOnlyValidator();

for (let s of strings) {
    for (let name in validators) {
        let isMatch = validators[name].isAcceptable(s);
        console.log(`'${ s }' ${ isMatch ? "matches" : "does not match" } '${ name }'.`);
    }
}
```

- [ ] Strukturiere den obigen Code in Modules um.
  - unterteile hierzu den Code in unterschiedliche Dateien: val.ts, lettersVal.ts, zipVal.ts, test.ts
  - exportiere die Validators
  - verstecke die Regex Pattern

[Literatur - Regex](https://medium.com/factory-mind/regex-tutorial-a-simple-cheatsheet-by-examples-649dc1c3f285)
[Tool - Regex Tester](https://regex101.com/)
[Literatur - Modules](https://www.typescriptlang.org/docs/handbook/2/modules.html)

### Aufgabe 4 - Dependencies

- [ ] Installiere die Bibliothek Moment.js mittels npm.
- [ ] Prüfe, ob auch wie in der Einführung @types/moment installiert werden muss. Wieso ist dies nicht der Fall?
- [ ] Nutze die Dokumentation der Bibliothek, um folgende Ausgaben zu erzeugen:
  - [ ] aktuelle Zeit
  - [ ] 2009 um Mitternacht 7 Tagen später als heute und 1 Monat früher als heute
  - [ ] aktuelle Zeit formatiert wie Sonntag, 14. Februar 2010, 3:25:50
- [ ] Übersetze folgendes Zeitformat mittels Moment.js: 2014-09-08T08:02:17-05:00