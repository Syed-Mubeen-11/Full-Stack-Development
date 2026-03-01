function greetUser(name: string,title: string = "Good Morning"): string {
  return `Hello, ${title} ${name}!`;
}
console.log(greetUser("Mubeen"));          
console.log(greetUser("Mubeen", "Dr."));  

type Operation = (a: number, b: number) => number;

const add: Operation = (a, b) => a + b;
const multiply: Operation = (a, b) => a * b;

console.log(add(4,5));
console.log(multiply(9,8));
