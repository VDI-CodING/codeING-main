
// S1D3 - Bitte schreibe dein Quellcode zwischen in dem angegebenen Bereich.

// ++++++++++++++++++++++++++++++++++++++++++++++++
// Hier beginnt deine Klasse
// -------------------------

// export enum enumGeschlecht {
//     undefined,
//     mann,
//     frau,
//     divers
//   }

//   export enum enumBlutgruppe {
//     undefined,
//     NullMinus,
//     NullPlus,
//     BMinus,
//     BPlus,
//     AMinus,
//     APlus,
//     ABMinus,
//     ABPlus
//   }

//   export class Mensch {
//     public Geschlecht: enumGeschlecht = enumGeschlecht.undefined
//     public Vorname: string
//     public Nachname: string
//     public readonly Geburtstag: Date
//     private readonly Blutgruppe: enumBlutgruppe = enumBlutgruppe.undefined

//     constructor (
//       vorname: string,
//       nachname: string,
//       geschlecht: enumGeschlecht,
//       blutgruppe: enumBlutgruppe
//     ) {
//       this.Geschlecht = geschlecht
//       this.Vorname = vorname
//       this.Nachname = nachname
//       this.Geburtstag = new Date()
//       this.Blutgruppe = blutgruppe
//     }

//     public Schreien (): void {
//       console.log('Schreien'.yellow)
//     }

//     public Weinen (): void {
//       console.log('Weinen'.yellow)
//     }

//     public Sprechen (text: string): void {
//       if (((new Date()).getFullYear() - this.Geburtstag.getFullYear()) > 3) {
//         console.log(`${this.Vorname} ${this.Nachname}: ${text}`.yellow)
//       } else {
//         console.log(`${this.Vorname} ${this.Nachname}: bla bla`.yellow)
//       }
//     }

//     public InformellBegrueßen (freund: Mensch): void {
//       this.Sprechen(`Hi ${freund.Vorname}`)
//     }

//     public FormellBegrueßen (person: Mensch): void {
//       if (person.Geschlecht === enumGeschlecht.frau) {
//         this.Sprechen(`Sehr geehrte Frau ${person.Nachname}`)
//       } else if (person.Geschlecht === enumGeschlecht.mann) {
//         this.Sprechen(`Sehr geehrter Herr ${person.Nachname}`)
//       } else if (person.Geschlecht === enumGeschlecht.divers) {
//         this.Sprechen('Wie möchten Sie angesprochen werden?')
//       } else {
//         throw Error('Kein gültiges Geschlecht eingetragen')
//       }
//     }
//   }