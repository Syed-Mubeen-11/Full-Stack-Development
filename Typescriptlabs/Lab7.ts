function greetUser(name: string, title?: string): string {
  if (title) {
    return `Hello, ${title} ${name}!`;
  }
  return `Hello, ${name}!`;
}

const addNumbers = (a: number, b: number): number => a + b;

console.log(greetUser("Mubeen"));
console.log(greetUser("Mubeen", "Ms."));
console.log(addNumbers(5, 3));
