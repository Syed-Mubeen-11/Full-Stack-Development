function greetUser(name, title) {
    if (title === void 0) { title = "Good Morning"; }
    return "Hello, ".concat(title, " ").concat(name, "!");
}
console.log(greetUser("Mubeen"));
console.log(greetUser("Mubeen", "Dr."));
var add = function (a, b) { return a + b; };
var multiply = function (a, b) { return a * b; };
console.log(add(4, 5));
console.log(multiply(9, 8));
