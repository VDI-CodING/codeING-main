import { HierarchyOrgEinheit } from './HierarchyOrgEinheit'
import { VDITeam } from './VDITeam'

export class VDIEinheit extends HierarchyOrgEinheit {
  public addTeam (team: VDITeam): void {
    super.addEinheit(team)
  }
}
