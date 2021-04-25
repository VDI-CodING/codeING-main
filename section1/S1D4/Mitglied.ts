import { Mensch } from './Mensch'

export class Mitglied extends Mensch {
    public static MitgliednummerCounter: number;

    public Mitgliedsnummer: number;

    constructor (title: string, vorname: string, nachname:string) {
      super(title, vorname, nachname)
      this.Mitgliedsnummer = Mitglied.MitgliednummerCounter++
    }

    public static fromMensch (mensch: Mensch): Mitglied {
      return new Mitglied(mensch.Titel, mensch.Vorname, mensch.Nachname)
    }
}
