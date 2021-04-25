import { OrgEinheit } from './OrgEinheit'

export abstract class HierarchyOrgEinheit extends OrgEinheit {
public Einheiten: OrgEinheit[] = [];

public addEinheit (einheit: OrgEinheit): OrgEinheit {
  const temp: OrgEinheit = einheit
  temp.Ebene = this.Ebene + 1
  this.Einheiten.push(einheit)
  return temp
}

public Print (): void {
  console.log(`${''.padStart(this.Ebene * 2, ' ')} |> [${this.Bezeichner}]`.white)
  for (const val in this.Einheiten) {
    this.Einheiten[val].Print()
  }
}

public AlleEinheiten (): OrgEinheit[] {
  let list: OrgEinheit[] = []
  list.push(this)

  for (const val in this.Einheiten) {
    const temp = this.Einheiten[val]
    if (temp instanceof HierarchyOrgEinheit) {
      list = list.concat((temp as HierarchyOrgEinheit).AlleEinheiten())
    } else if (temp instanceof OrgEinheit) {
      list.push(temp)
    }
  }
  return list
}
}
