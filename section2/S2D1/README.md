[zurück](../README.md)

## :arrow_forward: S2D1 - Fortgeschrittene Typen
Lead: @zangarus (Marwin Madsen)  
Status: :construction:
geplant: KW17  

---
### Einleitung:

Einführung von Unions  
Einführung von Tupel  
Einführung von Array  

Nachdem im Dojo [S1D1](../section1/S1D1/README.md) die nativen Typen von Typescript behandelt wurden, geht es in diesem Dojo um komplexere Typen.
---
### Aufgabe 1 - Array

- [ ] Erstelle eine Funktion `reverse(array: Array) : Array`, die ein Array mit beliebigen Typen nimmt und dieses umdreht. Benutze hierfür nicht `array.reverse();`.  
  `reverse([1, 2, 3]) => [3, 2, 1]`
- [ ] Erstelle eine Funktion `compact(array: Array) : Array<int>`, die ein Array mit beliebigen Typen nimmt und nur die positiven Zahlen zurückgibt.  
  `[0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]`
- [ ] Erstelle eine Funktion `delete(array: Array, ...delete) : Array`, die ein Array von primitiven Typen und beliebige Argumente nimmt und ein Array ohne diese angegebenen Argumente ausgibt.  
  `[1, 2, 3, 1, 2], 1, 2 => [3]`
- [ ] Erstelle eine Funktion `unique(array: Array) : Array`, die ein Array mit primitiven Typen nimmt und es ohne Duplikate zurückgibt.  
  `unique([1, 2, 3, 1, 2]) => [1, 2, 3]`
- [ ] Erstelle eine Funktion `isEqual(array: Array) : boolean`, die ein Array mit primitiven Typen nimmt und es ohne Duplikate zurückgibt.  
  `isEqual([1, 2, 3], [1, 2, 3]) => true`
- [ ] Erstelle eine Funktion `chunck(array: Array, size) : Array<Array>`, die ein Array mit beliebigen Typen und eine Größe nimmt und das Array in Arrays dieser Größe aufteilt
  `isEqual([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]`

[Literatur - Array](https://www.tutorialspoint.com/typescript/typescript_arrays.htm)
[Array<Type> vs. Type[]](https://stackoverflow.com/questions/36842158/arraytype-vs-type-in-typescript)

### Aufgabe 2 - Tupel

- [ ] Füge dem Tupel `[1, "Steve"]` den Mitarbeiter Bill hinzu.
- [ ] Lösche die Einträge des Tupel `[1, "Steve", "Bill"]`.
- [ ] Speichere die Einträge des Tupel `[1, "Steve", "Bill"]` in separten Variablen ohne dieses zu indexieren (also `let one = tupleName[1]`) und in einem einzigen Aufruf.

[Literatur - Tupel](https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types)
[Blog - Tupel](https://auth0.com/blog/typescript-3-exploring-tuples-the-unknown-type/)

### Aufgabe 3 - Union

[Literatur - Union](https://www.tutorialspoint.com/typescript/typescript_union.htm)