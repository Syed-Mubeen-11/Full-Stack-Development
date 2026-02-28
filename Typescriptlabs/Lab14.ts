//Task1
class Student {
  readonly id: number
  name: string

  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }
}

const student1 = new Student(1, "Mubeen")
console.log(student1.id)
console.log(student1.name)

//Task5

class Animal {
  name: string

  constructor(name: string) {
    this.name = name
  }

  makeSound(): void {
    console.log("Animal makes a sound")
  }
}

class Dog extends Animal {
  breed: string

  constructor(name: string, breed: string) {
    super(name)
    this.breed = breed
  }

  makeSound(): void {
    console.log("Woof! Woof!")
  }
}

const animal1 = new Animal("Generic Animal")
animal1.makeSound()

const dog1 = new Dog("Buddy", "Labrador")
dog1.makeSound()
console.log(dog1.breed)
