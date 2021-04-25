[zurück](../README.md)

## :arrow_forward: S2D1 - Fortgeschrittene Typen
Lead: @zangarus (Marwin Madsen)  
Status: :heavy_check_mark:
geplant: KW17  

---
### Einleitung:

Einführung von Unions  
Einführung von Tupel  
Einführung von Array  

Nachdem im Dojo [S1D1](../section1/S1D1/README.md) die primitven Typen von Typescript behandelt wurden, geht es in diesem Dojo um komplexere Typen.

---
### Aufgabe 1 - Array

- [ ] Erstelle eine Funktion `reverse(array: Array) : Array`, die ein Array mit beliebigen Typen nimmt und dieses umdreht. Benutze hierfür nicht `array.reverse()`.  
  - Beispiel: `reverse([1, 2, 3]) => [3, 2, 1]`
- [ ] Erstelle eine Funktion `modify(array: Array<int>) : Array<int>`, die ein Array aus integer nimmt und jeden Eintrag verdoppelt, wenn dieser negativ, die Wurzel zieht, wenn die Wurzel existiert und alle Einträge, auf die dies nicht zutrifft, addiert.  
  - Beispiel: `modify([-5, 0, 1, 4, 3, 22, 16]) => [-10, 0, 2, 4, 26]`
- [ ] Erstelle eine Funktion `compact(array: Array) : Array<int>`, die ein Array mit beliebigen Typen nimmt und nur die positiven Zahlen zurückgibt.  
  - Beispiel: `compact([0, 1, false, 2, undefined, '', 3, null]) => [1, 2, 3]`
- [ ] Erstelle eine Funktion `delete(array: Array, ...delete) : Array`, die ein Array von primitiven Typen und beliebige Argumente nimmt und ein Array ohne diese angegebenen Argumente ausgibt.  
  - Beispiel: `[1, 2, 3, 1, 2], 1, 2 => [3]`
- [ ] Erstelle eine Funktion `unique(array: Array) : Array`, die ein Array mit primitiven Typen nimmt und es ohne Duplikate zurückgibt.  
  - Beispiel: `unique([1, 2, 3, 1, 2]) => [1, 2, 3]`
- [ ] Erstelle eine Funktion `isEqual(array1: Array, array2: Array) : boolean`, die zwei Arrays nimmt und true zurückgibt, wenn diese gleich sind.  
  - Beispiel: `isEqual([1, 2, 3], [1, 2, 3]) => true`
- [ ] Erstelle eine Funktion `chunck(array: Array, size) : Array<Array>`, die ein Array mit beliebigen Typen und eine Größe nimmt und das Array in Arrays dieser Größe aufteilt
  - Beispiel: `chunck([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]`

[Literatur - Array](https://www.tutorialspoint.com/typescript/typescript_arrays.htm)  
[Diskussion - Array<Type> vs. Type[]](https://stackoverflow.com/questions/36842158/arraytype-vs-type-in-typescript)

### Aufgabe 2 - Tupel

- [ ] Füge dem Tupel `[1, "Steve"]` den Mitarbeiter Bill hinzu.
- [ ] Lösche die Einträge des Tupel `[1, "Steve", "Bill"]`.
- [ ] Speichere die Einträge des Tupel `[1, "Steve", "Bill"]` in separten Variablen ohne dieses zu indexieren (also `let one = tupleName[1]`) und in einem einzigen Aufruf.

[Literatur - Tupel](https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types)  
[Blog - Tupel](https://auth0.com/blog/typescript-3-exploring-tuples-the-unknown-type/)

### Aufgabe 3 - Union

Um diese Aufgaben zu bearbeiten kommentiere bitte in der tsconfig.json die Einstelllung `strict: true` in Zeile 31 aus. Bitte denke daran diese nach Beendigung der Aufgabe wieder zu aktivieren.

- [ ] Erkläre was der folgende (unsauber geschriebene) Codeauschnitt tut.

```typescript
function doSomething(value: string, padding: any) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
  throw new Error(`Expected string or number, got '${typeof padding}'.`);
}
```

- [ ] Erkläre ob Probleme auftreten bei den folgenen Aufrufen. Führe den Code hierzu nicht aus, sondern versuche es nur abzulesen.

```typescript
padLeft("4", "Hello world");
padLeft("Hello world", 4);
padLeft("world", 'Hello');
padLeft("Bye world", true);
```

- [ ] Mache ein Vorschlag, wie sich mögliche Probleme mit Unions beheben ließen.
- [ ] Schreibe eine Funktion `logger(state: NetworkState): string` mit dem nachfolgenden Typ NetworkState, die folgendes zurückgeben kann:
  1. Downloading...
  2. Error "code" downloading
  3. Downloaded "title" - "summary"

```typescript
type NetworkLoadingState = {
  state: "loading";
};
type NetworkFailedState = {
  state: "failed";
  code: number;
};
type NetworkSuccessState = {
  state: "success";
  response: {
    title: string;
    duration: number;
    summary: string;
  };
};

type NetworkState =
  | NetworkLoadingState
  | NetworkFailedState
  | NetworkSuccessState;
```

Die Vorgehensweise ein gemeinsames Attribut für alle Typen aus dem das Union besteht zu haben und anhand von diesem dann zu entscheiden, welches im konkreten Fall vorliegt, nennt man Unterscheidungs-Unions (englisch: Discrimated Unions).

Recherchiere nach einer Möglichkeit, dem Compiler anzuweisen uns mitzuteilen, wenn wir nicht alle Varianten des Unterscheidungs-Unions abdecken. Zum Testen kann dazu der Typ `NetworkState` um nachfolgenden Typ ergänzt werden.
- [ ] Modifiziere hierzu die `tsconfig.json` (aktiviere bitte nur die konkret benötigte Regel). 
- [ ] Modifiziere den `switch-case` bei dem ein `Error`geworfen wird wofür ein bestimmter Typ genutzt wird.

```typescript
type NetworkFromCachedState = {
  state: "from_cache";
  id: string;
  response: NetworkSuccessState["response"];
};
```

- [ ] Deklariere die Typen `ArtworksResponse` und `ArtistsResponse` mittels Intersection, sodass die Funktion `handleArtistsResponse` sinnvoll funktioniert.

```typescript
interface ErrorHandling {
  success: boolean;
  error?: { message: string };
}

interface ArtworksData {
  artworks: { title: string }[];
}

interface ArtistsData {
  artists: { name: string }[];
}

type ArtworksResponse = ???
type ArtistsResponse = ???

const handleArtistsResponse = (response: ArtistsResponse) => {
  if (response.error) {
    console.error(response.error.message);
    return;
  }

  console.log(response.artists);
};
```

Wenn die Aufgaben abgeschlossen sind, so aktiviere bitter wieder in der tsconfig.json die Einstelllung `strict: true` in Zeile 31.

[Literatur - Union](https://www.tutorialspoint.com/typescript/typescript_union.htm)  
[Diskussion - Union vs. Enum](https://stackoverflow.com/questions/40275832/typescript-has-unions-so-are-enums-redundant)  
[Diskussion - intercafe vs. type](https://stackoverflow.com/questions/37233735/typescript-interfaces-vs-types)  
[Literatur - Intersection](https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types)