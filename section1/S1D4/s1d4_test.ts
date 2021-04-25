import { VDIEinheit } from './VDIEinheit'
import { VDITeam } from './VDITeam'
import { VDIVerein } from './VDIVerein'

export class S1D4Test {
    public verein!: VDIVerein;

    // DIT, Vorstandsversammlung und Präsidium
    public ingenieurTag!: VDITeam;
    public vorstandsVersammlung!: VDITeam;
    public präsidium!: VDITeam;

    // Beiräte
    public regionalBeirat!: VDITeam;
    public wissenschaftBeirat!: VDITeam;
    public politikBeirat!: VDITeam;
    public finanzBeirat!: VDITeam;
    public geschäftsstelle!: VDIEinheit;

    // Geschäftsstelle
    public strategyTransformation!: VDITeam;
    public technikGesellschaft!: VDITeam;
    public regionNetzwerke!: VDITeam;
    public mitgliederMarketing!: VDITeam;

    public execute (): void {
      this.verein = new VDIVerein('Verein Deutscher Ingenieure', [], 0)
      this.ingenieurTag = this.verein.addEinheit(new VDITeam('Ingenieurstag', [], 0)) as VDITeam
      this.vorstandsVersammlung = this.verein.addEinheit(new VDITeam('Vorstandsversammlung', [], 0)) as VDITeam
      this.präsidium = this.verein.addEinheit(new VDITeam('Präsidium', [], 0)) as VDITeam
      this.regionalBeirat = this.verein.addEinheit(new VDITeam('Regionalbeirat', [], 0)) as VDITeam
      this.wissenschaftBeirat = this.verein.addEinheit(new VDITeam('Wissenschaftlicher Beirat', [], 0)) as VDITeam
      this.politikBeirat = this.verein.addEinheit(new VDITeam('Berufspolitischer Beirat', [], 0)) as VDITeam
      this.finanzBeirat = this.verein.addEinheit(new VDITeam('Finanzbeirat', [], 0)) as VDITeam

      this.geschäftsstelle = this.verein.addEinheit(new VDIEinheit('Geschäftsstelle', [], 0)) as VDIEinheit
      this.strategyTransformation = this.geschäftsstelle.addEinheit(new VDITeam('Strategie und Transformation', [], 0)) as VDITeam
      this.technikGesellschaft = this.geschäftsstelle.addEinheit(new VDITeam('Technik und Gesellschaft', [], 0)) as VDITeam
      this.regionNetzwerke = this.geschäftsstelle.addEinheit(new VDITeam('Regionen und Netzwerke', [], 0)) as VDITeam
      this.mitgliederMarketing = this.geschäftsstelle.addEinheit(new VDITeam('Mitglieder und Marketing', [], 0)) as VDITeam

      this.verein.Print()
    }
}
