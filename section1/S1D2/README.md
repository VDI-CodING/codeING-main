# :arrow_forward: S1D2 - Kontrollstrukturen und Funktionen

Lead: @Blumi102 (Michelle Blumenstein)  
Status: :construction:
geplant: KW13

---
## Einleitung

Nachdem wir uns beim letzten Dojo damit befasst haben, wie in Type Script grundsätzlich Variablen deklariert werden und welche Datentypen sie annehmen können, wird es in diesem Dojo um die Verarbeitung von Variablen mittels Kontrollstrukturen und Funktionen gehen.

Als Grundlage dafür ist es sinnvoll, die verschiedenen Operatoren zu kennen, die in Type Script genutzt werden können. Eine Übersicht über diese findet ihr hier: https://www.tutorialspoint.com/typescript/typescript_operators.htm

---

## Weitere Hilfreiche Links

- https://www.tutorialspoint.com/typescript/typescript_decision_making.htm
- https://www.tutorialspoint.com/typescript/typescript_loops.htm
- https://www.tutorialspoint.com/typescript/typescript_functions.htm

---

## Übung 1 - if-Anweisung

### a) Wenn...dann...

- Deklariere zwei Variablen x und y vom Datentyp number.
- Weise diesen die Werte x = 15 und y = 10 zu.
- Erstellen einer if-Anweisung mit der folgenden Funktionalität: 
  - Wenn x > y gilt, wird der String 'x ist größer als y' in der Console ausgegeben.
- Speichere dein Programm ab und führe es aus.
- Was passiert, wenn du x = 5 setzt?


### b) Wenn...dann...sonst...

- Kopiere die If-Anweisung aus Aufgabe a und füge ihr einen else-Zweig hinzu.
- Die if-Anweisung soll anschließend die folgende Funktionalität besitzen:
  - Wenn x > y gilt, wird der String 'x ist größer als y' in der Console ausgegeben.
  - Ansonsten wird der String 'x ist kleiner als y' in der Console ausgegeben.
- Prüfe durch verändern der Werte von x und y, ob deine if-Anweisung funktioniert.

### c) Wenn...dann...sonst: wenn...dann...

- Kopiere die If-Anweisung aus Aufgabe b und ändere den else-Zweig zu einem else if-Zweig.
- Die if-Anweisung soll anschließend die folgende Funktionalität besitzen:
  - Wenn x > y gilt, wird der String 'x ist größer als y' in der Console ausgegeben.
  - Ansonsten wird abgeprüft, ob x eine gerade Zahl ist.
    - Wenn x eine gerade ist, wird der String 'x ist eine gerade Zahl und kleiner als y' in der Console ausgegeben.
    - Wenn x keine gerade ist, wird der String 'x ist eine ungerade Zahl und kleiner als y' in der Console ausgegeben.

---

## Übung 2 - switch-Anweisung

### a) if oder switch?

- Deklariere eine Variable z vom Datentyp number und weisen ihr einen beliebigen Wert zu.
- Prüfe mit einer if-Anweisung, ob z = 1, z = 2, z = 3, z = 4, z = 5 ist oder z einen hier nicht aufgeführten Wert hat.
- Gibt je nach Ergebnis dieser Abprüfung einen passenden String in der Console aus.

### b) switch-Anweisung

- Löse die Aufgabenstellung aus a mit einer switch- anstatt mit einer if-Anweisung.

---

## Übung 3 - for-Schleifen

### a) Wann sind (for-)Schleifen sinnvoll?
- Deklariere eine Varibale a vom Datentyp number mit dem Wert a = 5.
- Gib diese Variable 5 mal in der Console aus. (Hier soll noch keine Schleife verwendet werden, sondern einfach 5 mal ```console.log()```.)

### b) for-Schleife
- Deklariere eine Variable b vom Datentyp number mit dem Wert b = 10.
- Gib diese Variable 5 mal in der Console aus. Nutze dieses mal eine for-Schleife.
- Was ist der Vorteil von (for-)Schleifen? In welchen Fällen sollten sie eingesetzt werden?

---

## Übung 4 - while-Schleifen

### a) while-Schleife
-  Deklariere eine Variable c vom Datentyp number mit dem Wert c = 1.
- Erstelle eine while-Schleife, die diese Variable bei jedem Durchlaufen um 2 erhöht und in der Console ausgibt.
- Wenn c >= 10 gilt, dann soll die Schleife abbrechen.
- Was ist der Unterschied der while-Schleife zur for-Schleife? Wann sollte welche Schleifenart bevorzugt werden?

### b) do...while-Schleife
- Deklariere eine Variable d vom Datentyp number mit dem Wert d = 1.
- Erstellen einer do...while-Schleife, die diese Variable bei jedem Durchlaufen um 2 erhöht und in der Console ausgibt.
- Wenn c >= 10 gilt, dann soll die Schleife abbrechen.
- Was ist der Unterschied zwischen einer while-Schleife und einer do...while-Schleife?

### c) break und continue

```ts
let k:number = 1

while(k<=10) { 
   if (k % 5 == 0) {   
      console.log (k) 
      break
   } 
   k++ 
}
```
- Untersuche den gezeigten Code-Schnipsel, indem du ihn in dein Programm kopierst und ausgeführst. 
- Was macht der Code? Welche Aufgabe hat das break?
- Welches Problem tritt auf, wenn statt "break" "continue" genutzt wird? Und warum? <br>
(Hinweis: Die Programmausführung kann mit Strg+C abgebrochen werden. Danach ist ein erneutes Starten des Programms mit ```npm run start-watch``` notwendig.)

---

## Übung 5 - Funktionen

### a) Erste Funktion

- Deklariere eine Funktion, die in der Lage dazu ist, zwei Zahlen x und y zu addieren und das Ergebnis als Rückgabewert auszugeben.
- Rufe diese Funktion mit beliebigen Werten für x und y auf und gib die Summe in der Console aus.

### b) Optionale Parameter

- Die erstellte Funktion soll nun einen dritten Summanden z erhalten.
- Ändere die Funktion aus Aufgabe a dahingehend ab, dass ihr ein dritter Summand z als optionalen Parameter übergeben werden kann, der wenn vorhanden mit x und y addiert wird.

### c) Rest Parameters

- Schreibe eine Funktion, die beliebig viele Variablen vom Datentyp number aufnehmen kann, diese addiert und das Ergebnis als Rückgabewert zurückgibt.
- Rufe diese Funktion mit beliebig vielen Variablen auf und gib ihren Rückgabewert in der Console aus.


