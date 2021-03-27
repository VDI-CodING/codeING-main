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

Ein Mensch als Software-Repräsentanz besteht aus der Klasse Mensch, mit dedizierten Eigenschaften und Methoden,
die entsprechende menschliche Merkmale und Handlungsmöglichkeiten repräsentieren.   
Im ersten Schritt legt ihr nun eine leere Klasse mit dem Klassen-Namen 'Mensch' an. [Literatur](https://www.typescriptlang.org/docs/handbook/2/classes.html#class-members)

[ ] Erstelle die "most basic" Klasse 'Mensch' (erstmal ohne Eigenschaften und Methoden)  


Ein Mensch besitzt unterschiedliche Eigenschaften. In unserem Beispiel beginnen wir im ersten Schritt mit einigen grundlegenden Eigenschaften.
Jeder Mensch besitzt einen Vornamen, einen Nachnamen, ein Geburtsdatum.   
Lege im folgenden diese drei genannten Eigenschaften in der Klasse 'Mensch' an. [Literatur](https://www.typescriptlang.org/docs/handbook/2/classes.html#fields)

[ ] Erstelle eine Eigenschaft 'Vorname' als 'string' in der Klasse 'Mensch'  
[ ] Erstelle eine Eigenschaft 'Nachname' als 'string' in der Klasse 'Mensch'  
[ ] Erstelle eine Eigenschaft 'Geburstag' als 'DateTime' in der Klasse 'Mensch'  


Das Leben eines Menschen beginnt mit dessen Geburt. In der Programmierung übernimmt ein sogenannter 'Constructor' die Geburt eines neuen Objekts einer Klasse.
Hierzu wird das Schlüsselwort 'new' verwendet. Mit der Geburt eines Objektes, wird automatisch sein Geburtstag festgelegt. Im nächsten Schritt sind hierfür zwei Dinge zu erledigen.
Zum einen ist ein Constructor anzulegen, mit jeweils einem Parameter für 'Vorname' und 'Nachname' und zum anderen ist der Geburtstag auf den heutigen Tag und die heutige Uhrzeit zu setzen.
Lege hierzu einen Constructor an und setze die Eigenschaft des Geburtstags innerhalb des Constructors.
[Literatur - Konstruktoren](https://www.typescriptlang.org/docs/handbook/2/classes.html#constructors)
[Literatur - Datentyp Date](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Date)
[Literatur - This-Type Notation](https://www.typescriptlang.org/docs/handbook/2/classes.html#this-types)

[ ] Erstelle einen Konstruktor mit den Parametern 'Vorname' und 'Nachname'
[ ] Weise die Konstruktor-Parameter 'Vorname' und 'Nachname' den entsprechenden Eigenschaften der Klasse zu. (Beachte die Notation im Konstruktor-Beispiel im angegebenen Link)


Der Geburtstag eines Menschen ist eineindeutig festgelegt und kann faktisch nicht geändert werden. Gleiches gilt auch für die Eigenschaft des Geburtstags unsere Klasse 'Mensch'.
Für Informationen die nach dem Aufruf des Konstruktors nicht mehr änderbar sein sollen, bietet die Programmiersprache die Möglichkeit eine Eigenschaft als readonly zu deklarieren.
Da der Geburtstag nicht, bzw. noch nicht (Zeitreisen und so) geändert werden kann, ist diese Eigenschaft auf nur lesbar zu setzen, was im nächsten Schritt zu tun ist.
[Literatur](https://www.typescriptlang.org/docs/handbook/2/classes.html#readonly)

[ ] Deklariere die Eigenschaft 'Geburtstag' als 'readonly', womit diese nur im Konstruktor gesetzt werden kann.


Im nächsten Punkt widmen wir uns dem Thema Privatsphäre. Nicht erst seit Einführung der DSGVO ist das Thema Privatsphäre und Informationssicherheit in Deutschland und Europa großgeschrieben.
Jeder Mensch hat somit Eigenschaften, die nicht alle etwas angehen. Mit Vorname, Nachname und Geburtstag haben wir jedoch durchaus Informationen bei denen wir es mit der Informationssicherheit nicht so eng sehen. Aus diesem Grund führen wir eine neue Information ein - die Blutgruppe. Blutgruppen werden in folgende 8 Typen unterschieden: '0minus', '0plus', 'Bminus', 'Bplus', 'Aminus', 'Aplus', 'ABminus' und 'ABplus'. Hierzu legt ihr einen Enumerations-Datentypen an, der die entsprechenden 8 Ausprägungen besitzt. Nach der Definition des Enums ist eine neue Eigenschaft zu erstellen, die nicht öffentlich zugänglich ist (private). Die Blutgruppe ist im Konstruktor zu ergänzen.
[Literatur - Blutgruppen](https://de.wikipedia.org/wiki/Blutgruppe) (aufgelistet aus Gründen der wissenschaftlichen Gründlichkeit)
[Literatur - Sichtbarkeit der Eigenschaften](https://www.typescriptlang.org/docs/handbook/2/classes.html#member-visibility)

[ ] Erstelle eine Enumeration 'enumBlutGruppe' mit den genannten 8 Einträgen
[ ] Erstelle eine neue Eigenschaft namens 'Blutgruppe' mit dem Datentyp 'enumBlutGruppe'
[ ] Deklariere die neue Eigenschaft 'Blutgruppe' als private Information

Aus Gründen der Lesbarkeit schreiben viele Entwickler die Sichtbarkeit von Eigenschaften explizit immer an deren Deklaration.
Wenn ihr keine Klassifizierung der Sichtbarkeit ergänzt, wird Typescript jeden Member als 'public/öffentlich' deklarieren. Diese Verhalten ist auf JavaScript zurückzuführen.
In anderen Sprachen, z.B. C# oder Java, ist die Standard-Sichtbarkeit 'private'.

[ ] Deklariere die Eigenschaften 'Vorname', 'Nachname', 'Geburtstag' explizit als public.

