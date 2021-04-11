
import { enumBlutgruppe, enumGeschlecht, Mensch } from './s1d3_yourcode'
/* eslint-disable no-prototype-builtins */
// ++++++++++++++++++++++++++++++++++++++++++++++++
// Test-Script für S1D3
// -------------------------
import 'colors'

export class S1D3Test {
  public static execute (): void {
    console.log('###############################################')
    console.log('Test Routine für S1D3')
    console.log('Achtung, die Tests sind sehr rudimänter und\ndecken keine volle Funktionalität ab.'.gray)
    console.log('###############################################')

    this.Try('ConstructorTest', () => {
      const andreas: Mensch = new Mensch('Andreas', 'Stutz', enumGeschlecht.mann, enumBlutgruppe.APlus)
      if (andreas == null) throw Error('Construction Failed')
    })

    this.Try('PropertyTest', () => {
      const andreas: Mensch = new Mensch('Andreas', 'Stutz', enumGeschlecht.mann, enumBlutgruppe.APlus)
      if (andreas.Vorname !== 'Andreas') throw Error('Assert failed - andreas.Vorname !== \'Andreas\'')
      if (andreas.Nachname !== 'Stutz') throw Error('Assert failed - andreas.Nachname !== \'Stutz\'')
      if (andreas.Geschlecht !== enumGeschlecht.mann) throw Error('Assert failed - andreas.Geschlecht !== \'mann\'')
    })

    this.Try('ReadOnlyTest', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const andreas: any = new Mensch('Andreas', 'Stutz', enumGeschlecht.mann, enumBlutgruppe.APlus)
      const temp = andreas.Geburtstag
      andreas.Geburtstag = new Date()
      if (andreas.Geburtstag !== temp) throw Error('Assert failed - Geburtstag changed')
    })

    this.Try('SchreienTest', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const andreas: Mensch = new Mensch('Andreas', 'Stutz', enumGeschlecht.mann, enumBlutgruppe.APlus)
      if (typeof andreas.Schreien !== 'function') throw Error('Assert failed - Schreien is not implemented or not a function')
      andreas.Schreien()
    })

    this.Try('WeinenTest', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const andreas: Mensch = new Mensch('Andreas', 'Stutz', enumGeschlecht.mann, enumBlutgruppe.APlus)
      if (typeof andreas.Weinen !== 'function') throw Error('Assert failed - Weinen is not implemented or not a function')
      andreas.Weinen()
    })

    this.Try('SprechenTest', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const andreas: Mensch = new Mensch('Andreas', 'Stutz', enumGeschlecht.mann, enumBlutgruppe.APlus)
      if (typeof andreas.Sprechen !== 'function') throw Error('Assert failed - Sprechen is not implemented or not a function')
      andreas.Sprechen('Hallo ihr Coderinnen und Coder!')
    })

    this.Try('FormellBegrueßenTestOhneTimeWarp', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const andreas: Mensch = new Mensch('Andreas', 'Stutz', enumGeschlecht.mann, enumBlutgruppe.APlus)
      const michelle: Mensch = new Mensch('Michelle', 'Blumenstein', enumGeschlecht.frau, enumBlutgruppe.ABPlus)
      if (typeof andreas.FormellBegrueßen !== 'function') throw Error('Assert failed - FormellBegrueßen is not implemented or not a function')
      andreas.FormellBegrueßen(michelle)
    })

    this.Try('InformellBegrueßenTestOhneTimeWarp', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const andreas: Mensch = new Mensch('Andreas', 'Stutz', enumGeschlecht.mann, enumBlutgruppe.APlus)
      const michelle: Mensch = new Mensch('Michelle', 'Blumenstein', enumGeschlecht.frau, enumBlutgruppe.ABPlus)
      if (typeof andreas.InformellBegrueßen !== 'function') throw Error('Assert failed - InformellBegrueßen is not implemented or not a function')
      andreas.InformellBegrueßen(michelle)
    })

    // this.Try('TimeWarpTest', () => {
    //   const andreas: Mensch = new Mensch('Andreas', 'Stutz', enumGeschlecht.mann, enumBlutgruppe.APlus)
    //   if (typeof andreas.TimeWarp !== 'function') throw Error('Assert failed - Sprechen is not implemented or not a function')
    //   console.log(andreas.getGeburtstag())
    //   andreas.TimeWarp(5)
    //   console.log(andreas.getGeburtstag())
    // })

    // this.Try('createBabyTest', () => {
    //   if (typeof Mensch.createBaby !== 'function') throw Error('Assert failed - createBaby is not implemented or not a function')
    //   const baby: IMensch = Mensch.createBaby('Andreas', 'Stutz', enumGeschlecht.mann, enumBlutgruppe.APlus)
    //   console.log(baby.getGeburtstag())
    //   if (baby.getGeburtstag().valueOf() > this.calculateTimeWarpedBirthday(2)) throw Error('Assert failed - Baby is younger then expected')
    // })

    // this.Try('createChildTest', () => {
    //   if (typeof Mensch.createChild !== 'function') throw Error('Assert failed - createBaby is not implemented or not a function')
    //   const baby: IMensch = Mensch.createChild('Andreas', 'Stutz', enumGeschlecht.mann, enumBlutgruppe.APlus)
    //   console.log(baby.getGeburtstag())
    //   if (baby.getGeburtstag().valueOf() > this.calculateTimeWarpedBirthday(8)) throw Error('Assert failed - Child is younger then expected')
    // })

    // this.Try('createTeenagerTest', () => {
    //   if (typeof Mensch.createTeenager !== 'function') throw Error('Assert failed - createBaby is not implemented or not a function')
    //   const baby: IMensch = Mensch.createTeenager('Andreas', 'Stutz', enumGeschlecht.mann, enumBlutgruppe.APlus)
    //   console.log(baby.getGeburtstag())
    //   if (baby.getGeburtstag().valueOf() > this.calculateTimeWarpedBirthday(16)) throw Error('Assert failed - Teenager is younger then expected')
    // })

    // this.Try('createAdultTest', () => {
    //   if (typeof Mensch.createAdult !== 'function') throw Error('Assert failed - createBaby is not implemented or not a function')
    //   const baby: IMensch = Mensch.createAdult('Andreas', 'Stutz', enumGeschlecht.mann, enumBlutgruppe.APlus)
    //   console.log(baby.getGeburtstag())
    //   if (baby.getGeburtstag().valueOf() > this.calculateTimeWarpedBirthday(35)) throw Error('Assert failed - Teenager is younger then expected')
    // })

    // this.Try('FormellBegrueßenTestAsAdult', () => {
    //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
    //   const andreas: IMensch = Mensch.createAdult('Andreas', 'Stutz', enumGeschlecht.mann, enumBlutgruppe.APlus)
    //   const michelle: IMensch = Mensch.createAdult('Michelle', 'Blumenstein', enumGeschlecht.frau, enumBlutgruppe.ABPlus)
    //   if (typeof andreas.FormellBegrueßen !== 'function') throw Error('Assert failed - FormellBegrueßen is not implemented or not a function')
    //   andreas.FormellBegrueßen(michelle)
    //   michelle.FormellBegrueßen(andreas)
    // })

    // this.Try('InformellBegrueßenTestAsAdult', () => {
    //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
    //   const andreas: IMensch = Mensch.createAdult('Andreas', 'Stutz', enumGeschlecht.mann, enumBlutgruppe.APlus)
    //   const michelle: IMensch = Mensch.createAdult('Michelle', 'Blumenstein', enumGeschlecht.frau, enumBlutgruppe.ABPlus)
    //   if (typeof andreas.InformellBegrueßen !== 'function') throw Error('Assert failed - InformellBegrueßen is not implemented or not a function')
    //   andreas.InformellBegrueßen(michelle)
    //   michelle.InformellBegrueßen(andreas)
    // })
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

  private static calculateTimeWarpedBirthday (year: number): number {
    // eslint-disable-next-line prefer-const
    let date: Date = new Date()
    date.setFullYear(date.getFullYear() - year)
    return date.valueOf()
  }
}

// -------------------------
// Ende von S1D3
// ++++++++++++++++++++++++++++++++++++++++++++++++
