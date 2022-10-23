interface Bird {
  eat(): void
}

interface FlyingBird {
  fly(): void
}

interface SwimmingBird {
  swim(): void
}

class Tucan implements Bird, FlyingBird {
  public fly() {}
  public eat() {}
}

class Hummingbird implements Bird, FlyingBird {
  public fly() {}
  public eat() {}
}

class Penguin implements Bird, SwimmingBird {
  public fly() {}
  public eat() {}
  public swim() {}
}
