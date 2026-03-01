function greetUser(name, title) {
    if (title) {
        return "Hello, ".concat(title, " ").concat(name, "!");
    }
    return "Hello, ".concat(name, "!");
}
var addNumbers = function (a, b) { return a + b; };
console.log(greetUser("Mubeen"));
console.log(greetUser("Mubeen", "Mrs."));
console.log(addNumbers(5, 3));
