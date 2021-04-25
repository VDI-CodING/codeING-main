import { Mitglied } from './Mitglied'
import { OrgEinheit } from './OrgEinheit'

export class VDITeam extends OrgEinheit {
  public joinMitglied (mitglied: Mitglied): void {
    this.Personen.push(mitglied)
  }
}
