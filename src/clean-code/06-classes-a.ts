;(() => {
  type Gender = 'M' | 'F'

  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthday: Date,
    ) {}
  }

  class User extends Person {
    public lastAccess: Date

    constructor(
      public email: string,
      public role: string,
      name: string,
      gender: Gender,
      birthday: Date,
    ) {
      super(name, gender, birthday)
      this.lastAccess = new Date()
    }

    checkCredentials(): boolean {
      return true
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      email: string,
      role: string,
      name: string,
      gender: Gender,
      birthday: Date,
    ) {
      super(email, role, name, gender, birthday)
    }
  }

  const userSettings = new UserSettings(
    '/home/engineer',
    '/home',
    'engineer@uber.com',
    'Admin',
    'Engineer',
    'M',
    new Date(),
  )

  console.log({ userSettings })
})()
