type Size = '' | 'S' | 'M' | 'L'

class Product {
  constructor(
    public name: string = '',
    public price: number = 0,
    public size: Size = '',
  ) {}

  isProductReady(): boolean {
    for (const key in this) {
      if (!this[key]) {
        throw new Error(
          `${key} is ${typeof this[key] === 'string' ? 'empty' : 'zero'}`,
        )
      }
    }

    return true
  }

  toString(): string {
    this.isProductReady()

    return `${this.name}, ${this.price}, ${this.size}`
  }
}

;(() => {
  const bluePants = new Product('Blue large pants')
  console.log(bluePants.toString())
})()
