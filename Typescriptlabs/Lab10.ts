interface User {
  readonly id: number;
  name: string;
  age?: number;
}
let user: User = {
  id: 101,
  name: "Mubeen",
  age: 21
};
console.log("ID:", user.id);
console.log("Name:", user.name);
console.log("Age:", user.age);

interface Calculator {
  add(a: number, b: number): number;
  multiply(a: number, b: number): number;
}

const calculator: Calculator = {
  add(a, b) {
    return a + b;
  },
  multiply(a, b) {
    return a * b;
  }
};

console.log(calculator.add(4, 5));
console.log(calculator.multiply(4, 5));
