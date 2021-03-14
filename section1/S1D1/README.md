# :arrow_forward: S1D1 - Datentypen und Variablen

Lead: @Blumi102 (Michelle Blumenstein)  
Status: :construction:
geplant: KW12

---
## Einleitung

Java Script (JS) startete als einfache Script-Sprache, die vorrangig für kleine Browser-Anwendungen verwendet wurde. Aufgrund seines plattformunabhängigen Charakters wurde JS im Laufe der Zeit jedoch auch für größere Applikationen, die außerhalb des Browsers (sondern z.B. auf einem nodeJS-Server) laufen, immer beliebter. Mit dieser Entwicklung fiel allerdings ein Nachteil von JS immer stärker ins Gewicht - es besitzt kein Typsystem. Bei den früheren kleinen Browser-Anwendungen war es noch möglich, auch ohne die Definition von Datentypen den Überblick zu behalten. Bei den heutigen Anwendungen mit mehreren tausend Zeilen Code ist das nicht mehr machbar. 

Vor diesem Hintergrund wurde Type Script (TS) als eine Erweiterung von JS entwickelt. Dabei stellt JS eine Teilmenge von TS dar, d.h. jedes JS-Programm ist gleichzeitig ein gültiges TS-Programm, aber nicht umgekehrt. Im Unteschied zu JS bringt TS (wie der Name bereits vermuten lässt) ein Typsystem mit. Um genau dieses Typsystem soll es in diesem ersten Dojo gehen.

---

## Hilfreiche Links
- https://www.tutorialspoint.com/typescript/index.htm
- https://www.typescripttutorial.net/ (Section 2 - Basic Types)
- https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/

---
## Übung 1 - Variablen deklarieren mit var, let, const

### a) Unterschied zwischen var, let und const
- Deklariere...
  -  eine Variable x über const mit dem Wert 1,
  -  eine Variable y über let mit dem Wert 2 und
  -  eine Variable z über var mit dem Wert 3.
- Speichere dein Programm ab und führe es aus. Was fällt dir auf? Kannst du das erklären?

### b) Besonderheit von const
- Deklariere...
  -  eine Variable a über const mit dem Wert 1,
  -  eine Variable b über let mit dem Wert 2 und
  -  eine Variable c über var mit dem Wert 3.
- Überschreibe die Werte anschließend wie folgt:
  - a = 4
  - b = 5
  - c = 6
- Gib a, b und c als Log-Eintrag in der Console aus.
- Speichere dein Programm ab und führe es aus. Was fällt dir auf? Was musst du tun, damit das Programm ausführbar wird?

### c) Typsystem vom Type Script
- Überschreibe den Wert der Variable b (aus Aufgabe b) mit dem string 'fünf'.
- Speichere dein Programm ab und führe es aus. Was fällt dir auf? Kannst du das erklären?

---
## Kommentieren

Kommentare im Code sind immer gern gesehen. Sie bieten die Möglichkeit zu beschreiben, welche Funktion ein bestimmter Teil des Codes erfüllt, ohne dass diese Beschreibung bei der Ausführung des Programms berücksichtigt wird. Außerdem können Code-Teile auskommentiert werden, die aktuell nicht benötigt werden, die aber auch (noch) nicht gelöscht werden sollen. 

Findest du heraus, wie du deinen Code von Übung 1 auskommentieren kannst, bevor du Übung 2 beginnst?

---

## Übung 2 - Datentypen

### a) Any
- Deklariere eine Variable a vom Typ any, weise ihr den string 'fünf' zu und gib a als Log-Eintrag in der Console aus.
- Weise anschließend der gleichen Variable a die Zahl 5 zu und gib a erneut in der Console aus.
- Speichere dein Programm ab und führe es aus. Was passiert? Was stellst du in Bezug auf any und das Typsystem von Type Script fest?

### b) Number
- Deklariere...
  - eine Variable b vom Typ number mit dem Wert 5,
  - eine Variable c vom Typ number mit dem Wert 10 und 
  - eine Variable d vom Typ number, die die Summe b + c enthält.
- Gib alle drei Variablen in der Console aus.
- Speichere dein Programm ab und führe es aus.

### c) String
- Deklariere...
  - eine Variable e vom Typ string mit dem string '5',
  - eine Variable f vom Typ string mit dem string '10' und 
  - eine Variable g vom Typ string, die die Summe e + f enthält.
- Gib alle drei Variablen in der Console aus.
- Speichere dein Programm ab und führe es aus. Was fällt dir im Vergleich zur vorherigen Aufgabe auf?

### d) Enum
- Deklariere ein enum obst mit den Werten apfel, birne und kirsche.
- Deklariere eine Variable k, die den Wert kirsche des enums erhält und gib diese in der Console aus.
- Speichere dein Programm ab und führe es aus. Was passiert? Kannst du das erklären?
- Hinweis: Wenn dir die Erklärung schwer fällt, lege zwei weitere Variablen an, die die Werte apfel und birne des enums obst erhalten und gib auch diese in der Console aus.

--- 

## Übung 3 - Null vs. undefined und any vs. unknown

a) Was ist der Unterschied zwischen null und undefined?

b) Any vs. unknown Vol. 1
- Deklariere eine Variable t vom Typ any und eine Variable u vom Typ unknown.
- Weise beiden Variablen den Wert 10 zu und gib sie in der Console aus.
- Weise anschließend beiden Variablen den string 'zehn' zu und gib sie in der Console aus.
- Speichere dein Programm ab und führe es aus.

c) Any vs. unknown Vol. 2
- Deklariere zwei Variablen v und w vom Typ string.
- Weise t der Variable v als Wert zu und weise u der Variable w als Wert zu. Gib v und w in der Console aus. 
- Speichere dein Programm ab und führe es aus. Was fällt dir auf?

d) Any vs. unknown Vol. 3
- Ändere den Datentyp der Variable w im Programm aus Aufgabe c zu unknown.
- Speichere dein Programm ab und führe es erneut aus. Was fällt dir auf? Was kannst du über den Unterschied zwischen any und unknown sagen?

---

## Übung 4 Programmierkonventionen

Programmierkonventionen sind formelle Regeln, die du bei der Programmierung beachten musst. Einige wichtige Programmierkonventionen von Type Script sind die folgenden:

- Identifier (= Variablenbezeichnungen) können aus Buchstaben und Ziffern bestehen. Allerdings dürfen sie nicht mit einer Ziffer beginnen.
- Identifier dürfen abgesehen von Unterstrichen (_) und Dollarzeichen ($) keine Sonderzeichen enthalten.
- Identifier dürfen keine Keywords (= Schlüsselbegriffe von Type Script, z.B. var, string, class, function, ...) sein.
- Identifier dürfen eine Leerzeichen enthalten.
- Identifier müssen einzigartig sein, d.h. es dürfen nicht mehrere Variable innerhalb des geichen Programmteils gleich heißen.
- Type Script ist case-sensitive, d.h. es macht einen Unterschied, ob z.B. ein Identifier groß oder klein geschrieben ist.
- Bei vielen Programmiersprachen wird ein Semikolon ans Ende jeder Zeile gesetzt. Bei Type Script ist das optional.

Die Übung besteht darin, diese Programmierkonvetionen auszutesten. Lege z.B. Variablen mit verschiedenen Namen an, die Buchstaben, Ziffern und Sonderzeichen enthalten. Teste aus, was Type Script zulässt und was nicht.


[:construction:] Whitespace and Line Breaks



