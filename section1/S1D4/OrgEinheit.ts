import { Mensch } from './Mensch'
import 'colors'

export abstract class OrgEinheit {
    public Bezeichner: string;
    public Personen: Mensch[];
    public Ebene: number;

    constructor (bezeichner: string, personen: Mensch[], ebene:number) {
      this.Bezeichner = bezeichner
      this.Personen = personen
      this.Ebene = ebene
    }

    public Print (): void {
      console.log(`${''.padStart(this.Ebene * 2, ' ')} |> ${this.Bezeichner}`.gray)
    }
}
