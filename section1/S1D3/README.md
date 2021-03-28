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

### 1) Anlegen der Klasse 'Mensch'

Ein Mensch als Software-Repräsentanz besteht aus der Klasse Mensch, mit dedizierten Eigenschaften und Methoden,
die entsprechende menschliche Merkmale und Handlungsmöglichkeiten repräsentieren. Im ersten Schritt legt ihr nun eine leere Klasse mit dem Klassen-Namen 'Mensch' an.

[Literatur](https://www.typescriptlang.org/docs/handbook/2/classes.html#class-members)

- [ ] Erstelle die "most basic" Klasse 'Mensch' (erstmal ohne Eigenschaften und Methoden)  



---
### 2) Anlegen der Eigenschaften 'Geschlecht', 'Vorname', 'Nachname', 'Geburtstag'

Ein Mensch besitzt unterschiedliche Eigenschaften. In unserem Beispiel beginnen wir im ersten Schritt mit einigen grundlegenden Eigenschaften.
Unser Mensch besitzt ein Geschlecht, einen Vornamen, einen Nachnamen, ein Geburtsdatum.   
Lege im folgenden diese drei genannten Eigenschaften in der Klasse 'Mensch' an. 

[Literatur - Eigenschaften](https://www.typescriptlang.org/docs/handbook/2/classes.html#fields)
[Literatur - Enumeration](https://www.typescriptlang.org/docs/handbook/enums.html)

- [ ] Erstelle eine Enumeration 'enumGeschlecht' mit den Ausprägungen 'mann' oder 'frau' (*1)
- [ ] Erstelle eine Eigenschaft 'Geschlecht' als 'enumGeschlecht' in der Klasse 'Mensch'  
- [ ] Erstelle eine Eigenschaft 'Vorname' als 'string' in der Klasse 'Mensch'  
- [ ] Erstelle eine Eigenschaft 'Nachname' als 'string' in der Klasse 'Mensch'  
- [ ] Erstelle eine Eigenschaft 'Geburstag' als 'DateTime' in der Klasse 'Mensch'  


**Hinweis**  
Zu (*1): Zur Vereinfachung der Programmieraufgabe wurde lediglich zwischen Mann und Frau im Geschlecht differenziert.
Eine Abbildung zur geschlechter-spezifischen Anrede ist bei Mann und Frau klar definiert, bei Divers wird eine vorhergehende
Klärung mit der Person gegenüber empfohlen. Da sich diese Vorab-Konversation in der Programmierüberung nur mit großen Aufwänden umsätzen lässt, wird für die Übung auf das dritte Geschlecht verzichtet. [Quelle zur Anrede von Menschen mit dem Geschlecht 'divers'](https://www.sekretaria.de/bueroorganisation/korrespondenz/geschaeftsbriefe/anrede-intersexuelle-drittes-geschlecht-divers/#:~:text=Eine%20Person%2C%20die%20sich%20als,%E2%80%9Esein%2Fihr%E2%80%9C%20bevorzugen.&text=Geht%20es%20um%20eine%20Person,sprechen%20Sie%20sie%20direkt%20an.)



---
### 3) Die Geburts eines Objekts - Der Constructor

Das Leben eines Menschen beginnt mit dessen Geburt. In der Programmierung übernimmt ein sogenannter 'Constructor' die Geburt eines neuen Objekts einer Klasse.
Hierzu wird das Schlüsselwort 'new' verwendet. Mit der Geburt eines Objektes, wird automatisch sein Geburtstag festgelegt. Im nächsten Schritt sind hierfür zwei Dinge zu erledigen.
Zum einen ist ein Constructor anzulegen, mit jeweils einem Parameter für 'Vorname' und 'Nachname' und zum anderen ist der Geburtstag auf den heutigen Tag und die heutige Uhrzeit zu setzen.
Lege hierzu einen Constructor an und setze die Eigenschaft des Geburtstags innerhalb des Constructors.

[Literatur - Konstruktoren](https://www.typescriptlang.org/docs/handbook/2/classes.html#constructors)  
[Literatur - Datentyp Date](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Date)  
[Literatur - This-Type Notation](https://www.typescriptlang.org/docs/handbook/2/classes.html#this-types)  

- [ ] Erstelle einen Konstruktor mit den Parametern 'Vorname' und 'Nachname'
- [ ] Weise die Konstruktor-Parameter 'Vorname' und 'Nachname' den entsprechenden Eigenschaften der Klasse zu. (Beachte die Notation im Konstruktor-Beispiel im angegebenen Link)



---
### 4) Nutzung von Readonly-Eigenschaften

Der Geburtstag eines Menschen ist eineindeutig festgelegt und kann faktisch nicht geändert werden. Gleiches gilt auch für die Eigenschaft des Geburtstags unsere Klasse 'Mensch'.
Für Informationen die nach dem Aufruf des Konstruktors nicht mehr änderbar sein sollen, bietet die Programmiersprache die Möglichkeit eine Eigenschaft als readonly zu deklarieren.
Da der Geburtstag nicht, bzw. noch nicht (Zeitreisen und so) geändert werden kann, ist diese Eigenschaft auf nur lesbar zu setzen, was im nächsten Schritt zu tun ist.

[Literatur](https://www.typescriptlang.org/docs/handbook/2/classes.html#readonly)  

- [ ] Deklariere die Eigenschaft 'Geburtstag' als 'readonly', womit diese nur im Konstruktor gesetzt werden kann.  



---
### 5) Auch Object haben eine Privatsspähre - Private Visibility

Im nächsten Punkt widmen wir uns dem Thema Privatsphäre. Nicht erst seit Einführung der DSGVO ist das Thema Privatsphäre und Informationssicherheit in Deutschland und Europa großgeschrieben.
Jeder Mensch hat somit Eigenschaften, die nicht alle etwas angehen. Mit Vorname, Nachname und Geburtstag haben wir jedoch durchaus Informationen bei denen wir es mit der Informationssicherheit nicht so eng sehen. Aus diesem Grund führen wir eine neue Information ein - die Blutgruppe. Blutgruppen werden in folgende 8 Typen unterschieden: '0minus', '0plus', 'Bminus', 'Bplus', 'Aminus', 'Aplus', 'ABminus' und 'ABplus'. Hierzu legt ihr einen Enumerations-Datentypen an, der die entsprechenden 8 Ausprägungen besitzt. Nach der Definition des Enums ist eine neue Eigenschaft zu erstellen, die nicht öffentlich zugänglich ist (private). Die Blutgruppe ist im Konstruktor zu ergänzen.

[Literatur - Enumeration](https://www.typescriptlang.org/docs/handbook/enums.html)  
[Literatur - Blutgruppen](https://de.wikipedia.org/wiki/Blutgruppe)  
[Literatur - Sichtbarkeit der Eigenschaften](https://www.typescriptlang.org/docs/handbook/2/classes.html#member-visibility)  

- [ ] Erstelle eine Enumeration 'enumBlutGruppe' mit den genannten 8 Einträgen
- [ ] Erstelle eine neue Eigenschaft namens 'Blutgruppe' mit dem Datentyp 'enumBlutGruppe'
- [ ] Deklariere die neue Eigenschaft 'Blutgruppe' als private Information


---
### 6) Wo Privatsspäre ist, gibt es auch öffentliche Daten - Public Visibility

Aus Gründen der Lesbarkeit schreiben viele Entwickler die Sichtbarkeit von Eigenschaften explizit immer an deren Deklaration.
Wenn ihr keine Klassifizierung der Sichtbarkeit ergänzt, wird Typescript jeden Member als 'public/öffentlich' deklarieren. Diese Verhalten ist auf JavaScript zurückzuführen.
In anderen Sprachen, z.B. C# oder Java, ist die Standard-Sichtbarkeit 'private'.

[Literatur - Sichtbarkeit von Eigenschaften](https://www.typescriptlang.org/docs/handbook/2/classes.html#member-visibility)  

- [ ] Deklariere die Eigenschaften 'Vorname', 'Nachname', 'Geburtstag' explizit als public.


---
### 6) Ein Mensch wird mit einigen Fähigkeiten geboren, andere erlernt er erst im Laufe seines Lebens - Methoden 1

Ein Mensch hat von Geburt an einige Basisfähigkeiten wie Atmen, Schlucken, der Herzschlag und viele weitere. Diese Basisfähigkeiten werden wir im Laufe dieser Arbeit nicht näher betrachten. Dafür verleihen wir unserem Menschen durchaus nun einige Fähigkeiten in Form von Methoden. Die Methode, die letztlich die Fähigkeit repräsentiert, soll letztlich einen Text ausgeben auf der Konsole der den Namen und Vornamen und die entsprechende Fähigkeit als verb ausgeben.

[Literatur - Methoden](https://www.typescriptlang.org/docs/handbook/2/classes.html#methods)  
[Literatur - Datentyp Date](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Date)  
[Literatur - If-Abfragen](https://www.tutorialsteacher.com/typescript/typescript-if-else) 

- [ ] Implementiere eine Methode 'Schreien', die der Mensch von Geburt an kann.
- [ ] Implementiere eine Methode 'Weinen', die der Mensch von Geburt an kann.
- [ ] Implementiere eine Methode 'Sprechen' mit einem String-Parameter 'Satz', die bis zum 3. Lebensjahr wird 'blabla' (If-Abfrage).


---
### 7) Menschen können auch miteinander Reden - Methoden 2

Wenn sich zwei Menschen begegnen begrüßen sie sich meistens zu Beginn. Wenn man mit einer Person befreundet ist, begrüßt man eher informell z.B. mit einem "Hey ...", wenn man nicht befreundet ist, nutzt man meist eine formellere Begrüßungsform z.B. mit einem "Hallo Herr / Frau ...".

[Literatur - Methoden](https://www.typescriptlang.org/docs/handbook/2/classes.html#methods)  
[Literatur - If-Abfragen](https://www.tutorialsteacher.com/typescript/typescript-if-else)  
[Literatur - Template Literal Types](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html)

- [ ] Implementiere eine Methode 'InformellBegrüßen' mit einem Mensch-Parameter 'Freund', der die Methode 'Sprechen' mit einer freundschaftlichen Begrüßung eurer Wahl und dem Vornamen des Freundes aufruft. Nutze hierbei sogenannte "Template Literal Types"
- [ ] Implementiere eine Methode 'formellBegrüßen' mit einem Mensch-Parameter 'Person', der die Methode 'Sprechen' mit einer formellen Anrede "Hallo Herr / Frau ..." und dem Nachnamen aufruft. Auch hier sind "Template Literal Types" sowie der "Ternary operator" bei If-Abfragen zu nutzen. Die Auswahl von Herr oder Frau in der Anrede soll durch Prüfung des Geschlechts entschieden werden.


---
### 8) Wir brauchen eine Art Zeitmaschine - Methoden 3

Stand jetzt wird jeder Mensch beim Aufruf des Constructors mit dem Datum und der Uhrzeit des Aufrufs "geboren". Leider ist dies für den weiteren Verlauf der Übung nicht sinnvoll. Aus diesem Grund benötigen wir eine Art Zeitmaschine, damit wir einen Menschen künstlich altern können.

[Literatur - Methoden](https://www.typescriptlang.org/docs/handbook/2/classes.html#methods)  
[Literatur - Datentyp Date](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Date)  

- [ ] Implementiere eine Methode 'TimeWarp' mit einem DateTime-Parameter dessen Zeitwert von dem Geburtstag abgezogen wird. Somit wird der Geburtstermin um die entsprechende Dauer in die Vergangenheit verlegt. 

---

### 9) Wir machen uns die Welt ein wenig einfacher - Static Methods

Für die weiteren Übungen ist es hilfreich, wenn wir Menschen im Alter eines Erwachsenen oder eines Kindes kreieren können.
Hierzu gibt es Factory Software Pattern, die erst im weiteren Verlauf der Übungen kommen. Bis dahin nutzen wir die Möglichkeit von Static Methods.

[Literatur - Static Methods](https://www.typescripttutorial.net/typescript-tutorial/typescript-static-methods-and-properties/)  
[Literatur - Datentyp Date](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Date)  


- [] Implementiere eine statische Methode 'createBaby', in dem ein neues Mensch-Objekt erzeugt wird und mittels TimeWarp sollen 2,5 Jahre abgezogen werden. Somit wird ein Mensch mit 2,5 Jahren geschaffen. Alle anderen Parameter sind durch die statische Methode parametrierierbar zu machen.
- [] Implementiere eine statische Methode 'createChild', in dem ein neues Mensch-Objekt erzeugt wird und mittels TimeWarp sollen 8 Jahre abgezogen werden. Somit wird ein Mensch mit 8 Jahren geschaffen. Alle anderen Parameter sind durch die statische Methode parametrierierbar zu machen.
- [] Implementiere eine statische Methode 'createTeenager', in dem ein neues Mensch-Objekt erzeugt wird und mittels TimeWarp sollen 16 Jahre abgezogen werden. Somit wird ein Mensch mit 16 Jahren geschaffen. Alle anderen Parameter sind durch die statische Methode parametrierierbar zu machen.
- [] Implementiere eine statische Methode 'createAdult', in dem ein neues Mensch-Objekt erzeugt wird und mittels TimeWarp sollen 35 Jahre abgezogen werden. Somit wird ein Mensch mit 35 Jahren geschaffen. Alle anderen Parameter sind durch die statische Methode parametrierierbar zu machen.



---

### 10) Wir sind Ingenieure und uns interessieren Zahlen, Fakten und Statistiken - Static Property

Um die Population der Spezies Mensch in der Software abzubilden, sind alle Menschen die "geboren" werden zu zählen.
Hierzu helfen statische Eigenschaften die bei der Erzeugung eines Menschen um eins inkrementiert werden.

[Literatur - Static Properties](https://www.typescripttutorial.net/typescript-tutorial/typescript-static-methods-and-properties/)  

- [ ] Implementiere eine statische Eigenschaft mit dem Namen 'Population', die durch jeden Aufruf eines 'Mensch'-Constructors um die Zahl 1 erhöht wird.  





---

### Test-Programm

Mit diesem Programm-Ausschnitt kann das Projekt getestet werden. 


