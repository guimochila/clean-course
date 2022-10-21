// Single-responsibility principle
// Composition over inheritance

;(() => {
  type Gender = 'M' | 'F'

  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthday: Date,
    ) {}
  }

  class User {
    public lastAccess: Date

    constructor(public email: string, public role: string) {
      this.lastAccess = new Date()
    }

    checkCredentials(): boolean {
      return true
    }
  }

  class Settings {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
    ) {}
  }

  class UserSettings {
    constructor(
      public person: Person,
      public user: User,
      public settings: Settings,
    ) {}
  }

  const person = new Person('Engineer', 'M', new Date())
  const user = new User('engineer@uber.com', 'Admin')
  const settings = new Settings('/home/engineer', '/home')

  const userSettings = new UserSettings(person, user, settings)
  console.log({ userSettings })
})()
