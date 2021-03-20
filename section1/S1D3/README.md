## :arrow_forward: S1D3 - Klassen und Schnittstellen
Lead: @stan1025 (Andreas Stutz)  
Status: :construction:
geplant: KW14

---
### Einleitung:

Wie ihr inzwischen wissen müsstet, ist TypeScript (TS) ein Super-Set von JavaScript.
JavaScript (JS) ist für sich eine sogenannte Script-Sprache die ursprünglich für dynamisches HTML in Web-Browsern entwickelt wurde.
Der standardisierte Sprachkern von JavaScript stellt eine dynamisch typisierte, objektorientierte, ABER klassenlose Skriptsprache dar.
Dieser klassenlose Sprachansatz wird mit Blick auf die Entwicklung größerer Anwendungen als einer der größten Nachteile gesehen.
Mit diesem Hintergrund hat Microsoft die Entwicklung von TypeScript veranlasst, die diese Nachteile beseitigen.

In den letzten beiden Wochen habt ihr euch mit Typen und Variablen sowie Kontrollstrukturen und Funktionen beschäftigt.
Diese Woche gibt es den Einstieg in die grundlegenden objekt-orientierten Sprachkonstrukte – Klassen und Schnittstellen.


---
### Aufgabe 1 - Klassen und ihre Bestandteile:

#### A) Die Klasse 'Mensch'

Ein Mensch 

In dieser Teilaufgabe werden wir eine neue Klasse 'Mensch' erstellen. Jeder Mensch besitzt gewisse Eigenschaften und Fähigkeiten.
Eigenschaften werden in Klassen Members genannt.

[ ] Die Klasse 'Mensch' soll folgende Members beinhalten:
- Vorname vom Typ 'string'
- Nachname vom Typ 'string'


Wenn man eine Klasse instanziiert wird ein Objekt daraus.
Mit Hilfe sogenannter Konstruktoren werden solche Objekte erzeugt.
Constructors nennt man die Methoden-ähnliche Sprachkonstrukte die zum Erzeugen von Objekten einer Klasse genutzt werden.

[ ] Die Klasse 'Mensch' soll bei der Konstruktion direkt mit einem Vor- und Nachnamen versehen werden
- Konstruktor mit einem Vorname und einem Nachname Parameter deren Wert auf die Member Vorname und Nachname zugewiesen werden.


Fähigkeiten werden in Klassen durch Methoden umgesetzt. Methoden führen Funktion auf Eigenschaften des Objekts aus.
Jeder Mensch besitzt einige grundlegende Fähigkeiten.

[ ] Die Klasse 'Mensch' soll folgende Methoden beinhalten:
- Atmen (keine Parameter)
- Denken (topic: string)
- Herzschlag (bpm: int)

