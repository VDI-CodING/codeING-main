/* eslint-disable no-prototype-builtins */
// ++++++++++++++++++++++++++++++++++++++++++++++++
// Test-Script für S1D3
// -------------------------
import 'colors'
import { enumGeschlecht, Mensch } from './s1d3_yourcode'

export class S1D3Test {
  public static execute (): void {
    console.log('###############################################')
    console.log('Test Routine für S1D3')
    console.log('###############################################')

    this.Try('ConstructorTest', () => {
      const andreas = new Mensch('Andreas', 'Stutz', enumGeschlecht.mann)
      if (andreas == null) throw Error('Construction Failed')
    })

    this.Try('PropertyTest', () => {
      const andreas = new Mensch('Andreas', 'Stutz', enumGeschlecht.mann)
      if (andreas.Vorname !== 'Andreas') throw Error('Assert failed - andreas.Vorname !== \'Andreas\'')
      if (andreas.Nachname !== 'Stutz') throw Error('Assert failed - andreas.Nachname !== \'Stutz\'')
      if (andreas.Geschlecht !== enumGeschlecht.mann) throw Error('Assert failed - andreas.Geschlecht !== \'mann\'')
    })

    this.Try('ReadOnlyTest', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const andreas: any = new Mensch('Andreas', 'Stutz', enumGeschlecht.mann)
      const temp = andreas.Geburtstag
      andreas.Geburtstag = new Date()
      if (andreas.Geburtstag !== temp) throw Error('Assert failed - Geburtstag changed')
    })

    this.Try('SchreienTest', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const andreas: any = new Mensch('Andreas', 'Stutz', enumGeschlecht.mann)
      if (typeof andreas.Schreien !== 'function') throw Error('Assert failed - Schreien is not implemented or not a function')
      andreas.Schreien()
    })

    this.Try('WeinenTest', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const andreas: any = new Mensch('Andreas', 'Stutz', enumGeschlecht.mann)
      if (typeof andreas.Weinen !== 'function') throw Error('Assert failed - Weinen is not implemented or not a function')
      andreas.Weinen()
    })

    this.Try('SprechenTest', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const andreas: any = new Mensch('Andreas', 'Stutz', enumGeschlecht.mann)
      if (typeof andreas.Sprechen !== 'function') throw Error('Assert failed - Sprechen is not implemented or not a function')
      andreas.Sprechen()
    })
  }

  private static Try (text: string, call: () => void) {
    console.log('--------------------------------------'.gray)
    console.log(('Test: ' + text).blue.bold)
    try {
      call()
      console.log(('successfull').green.italic)
    } catch (err) {
      console.log(('failed: ' + err.message).red.italic)
    } finally {
      console.log('--------------------------------------'.gray)
    }
  }
}

// -------------------------
// Ende von S1D3
// ++++++++++++++++++++++++++++++++++++++++++++++++
