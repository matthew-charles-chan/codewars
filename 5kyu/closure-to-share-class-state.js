/* eslint-disable no-var */
// Let's make a Cat constructor!
var Cat = (function () {
  const cats = {
    count: 0,
    totalWeight: 0
  }
  class Cat {
    constructor (name, weight) {
      if (!name || !weight) {
        throw new Error('Both `name` and `weight` should be provided')
      }
      cats.count++
      this.name = name

      Object.defineProperty(this, 'weight', {
        get: function () {
          return this._weight || 0
        },
        set: function (val) {
          cats.totalWeight = cats.totalWeight - this.weight + val
          cats.avgWeight = (cats.totalWeight / cats.count)
          return this._weight = val
        }
      })

      this.weight = weight
    }

    static averageWeight () {
      return cats.totalWeight / cats.count
    }
  }

  return Cat
}())

// const fluffy = new Cat('fluffy', 15);
// const sparky = new Cat('sparky', 25);
// console.log(fluffy);
// console.log(Cat.averageWeight());

// console.log(typeof fluffy.averageweight);
// console.log(fluffy.averageweight());
// console.log(fluffy);

fluffy = new Cat('fluffy', 15)
garfield = new Cat('garfield', 25)
garfield.weight = 30

console.log(fluffy.weight)
console.log(fluffy instanceof Cat)
console.log(fluffy.averageWeight)
console.log(typeof Cat.averageWeight)
console.log(Cat.averageWeight())
