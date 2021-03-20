

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Aufgabe 1A - Die einfachste Klasse
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

class Mensch {

    public Vorname:string;
    public Nachname: string;

    constructor(vorname?: string, nachname?: string) {
        this.Vorname = vorname;
        this.Nachname = nachname;
    }




}


var test: Mensch = new Mensch();

