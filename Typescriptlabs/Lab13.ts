// //Task1
class Student {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

const s1 = new Student("Mubeen", 21)
console.log(s1.name)
console.log(s1.age)

// //Task 2

class Student1 {
  public name: string
  private rollNo: number

  constructor(name: string, rollNo: number) {
    this.name = name
    this.rollNo = rollNo
  }

  showRollNo(): void {
    console.log(this.rollNo)
  }
}

const s2 = new Student1("Mubeen", 101)

console.log(s2.name)
s2.showRollNo()


