export const quiz = {
  javascriptEasy3: [
    {
      question: "What will the following code output?",
      choices: ["true", "false", "NaN", "undefined"],
      answer: "false",
      explanation:
        "In JavaScript, adding 0.1 and 0.2 does not exactly equal 0.3 due to floating-point precision errors. Therefore, the expression `0.1 + 0.2 === 0.3` evaluates to `false`.",
      hasCodeSyntax: true,
      code: `console.log(0.1 + 0.2 === 0.3);`,
    },
    {
      question: "What is the output of this code?",
      choices: ["object", "null", "undefined", "function"],
      answer: "object",
      explanation:
        "The `typeof` operator returns `'object'` when called on `null` due to a historical bug in JavaScript. So, `typeof null` outputs `'object'`.",
      hasCodeSyntax: true,
      code: `console.log(typeof null);`,
    },
    {
      question:
        "Which of the following is NOT a valid way to declare a variable in JavaScript?",
      choices: [
        "let myVar = 10;",
        "var myVar = 10;",
        "constant myVar = 10;",
        "const myVar = 10;",
      ],
      answer: "constant myVar = 10;",
      explanation:
        "In JavaScript, the correct keyword to declare a constant variable is `const`, not `constant`. Therefore, `constant myVar = 10;` is not a valid declaration.",
      hasCodeSyntax: false,
      code: ``,
    },
  ],

  javascriptEasy5: [
    {
      question:
        "Which of the following is NOT a primitive data type in JavaScript?",
      choices: ["string", "number", "boolean", "object"],
      answer: "object",
      explanation:
        "`object` is not a primitive data type in JavaScript. The primitive data types are: `string`, `number`, `boolean`, `null`, `undefined`, and `symbol`.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question:
        "Which of the following is NOT a valid way to create an object in JavaScript?",
      choices: [
        "let obj = {};",
        "let obj = new Object();",
        "let obj = Object.create(null);",
        "let obj = new object();",
      ],
      answer: "let obj = new object();",
      explanation:
        "JavaScript is case-sensitive, and `Object` must be capitalized. Therefore, `new object()` is not valid—it should be `new Object()`.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question:
        "Which method is used to convert a JavaScript object to a JSON string?",
      choices: ["JSON.parse()", "JSON.stringify()", "toString()", "parseInt()"],
      answer: "JSON.stringify()",
      explanation:
        "The `JSON.stringify()` method converts a JavaScript object into a JSON string. `JSON.parse()` parses a JSON string back into an object.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question: "What will the following code output?",
      choices: ["1", "2", "undefined", "null"],
      answer: "undefined",
      explanation:
        "When using `var`, the variable declaration is hoisted but not its assignment. So, `console.log(x);` outputs `undefined` because `x` is declared but not yet assigned.",
      hasCodeSyntax: true,
      code: `console.log(x);
var x = 2;`,
    },
    {
      question: "What will the following code output?",
      choices: ["1", "2", "undefined", "ReferenceError"],
      answer: "ReferenceError",
      explanation:
        "Variables declared with `let` are not hoisted in the same way as `var`. Accessing `x` before its declaration results in a `ReferenceError`.",
      hasCodeSyntax: true,
      code: `console.log(x);
let x = 2;`,
    },
  ],

  javascriptEasy10: [
    {
      question:
        "Which array method is used to remove the first element from an array?",
      choices: ["shift()", "pop()", "unshift()", "splice()"],
      answer: "shift()",
      explanation:
        "The `shift()` method removes the first element from an array and returns that element. `pop()` removes the last element.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question: "What will the following code output?",
      choices: ["2", "4", "8", "16"],
      answer: "16",
      explanation:
        "The `**` operator is the exponentiation operator in JavaScript. `2 ** 4` calculates 2 raised to the power of 4, which equals 16.",
      hasCodeSyntax: true,
      code: `console.log(2 ** 4);`,
    },
    {
      question: "Which of the following operators is NOT used in JavaScript?",
      choices: ["==", "===", "!==", "===="],
      answer: "====",
      explanation:
        "JavaScript uses `==` for loose equality, `===` for strict equality, and `!==` for strict inequality. `====` is not a valid operator.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question: "What will the following code output?",
      choices: ["undefined", "1", "2", "3"],
      answer: "2",
      explanation:
        "Arrays in JavaScript are zero-indexed. So, `arr[1]` accesses the second element, which is `2`.",
      hasCodeSyntax: true,
      code: `let arr = [1, 2, 3];
console.log(arr[1]);`,
    },
    {
      question: "Which of the following values is NOT falsy in JavaScript?",
      choices: ["false", "0", "'' (empty string)", "[] (empty array)"],
      answer: "[] (empty array)",
      explanation:
        "Falsy values include `false`, `0`, `''`, `null`, `undefined`, and `NaN`. An empty array `[]` is truthy.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question: "What will the following code output?",
      choices: ["1", "2", "3", "4"],
      answer: "3",
      explanation:
        "After pushing `3` to the array, it contains three elements. Therefore, `arr.length` returns `3`.",
      hasCodeSyntax: true,
      code: `let arr = [1, 2];
arr.push(3);
console.log(arr.length);`,
    },
    {
      question:
        "Which method is used to merge two or more arrays in JavaScript?",
      choices: ["concat()", "merge()", "combine()", "append()"],
      answer: "concat()",
      explanation:
        "The `concat()` method is used to merge two or more arrays. It does not modify the existing arrays but returns a new array.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question: "What will the following code output?",
      choices: ["true", "false", "SyntaxError", "ReferenceError"],
      answer: "false",
      explanation:
        "The strict equality operator `===` checks both type and value. `0` is a number and `false` is a boolean, so `0 === false` evaluates to `false`.",
      hasCodeSyntax: true,
      code: `console.log(0 === false);`,
    },
    {
      question:
        "Which of the following is NOT a reserved keyword in JavaScript?",
      choices: ["if", "let", "var", "value"],
      answer: "value",
      explanation:
        "`if`, `let`, and `var` are reserved keywords. `value` is not a reserved keyword and can be used as a variable name.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question: "What will the following code output?",
      choices: ["undefined", "ReferenceError", "null", "TypeError"],
      answer: "ReferenceError",
      explanation:
        "Variables declared with `const` are not hoisted. Accessing `a` before its declaration results in a `ReferenceError`.",
      hasCodeSyntax: true,
      code: `console.log(a);
const a = 10;`,
    },
  ],

  javascriptMedium3: [
    {
      question:
        "Which of the following methods can be used to copy an object in JavaScript?",
      choices: ["Object.assign()", "slice()", "push()", "join()"],
      answer: "Object.assign()",
      explanation:
        "`Object.assign()` is used to copy the values of all enumerable own properties from one or more source objects to a target object. Methods like `slice()`, `push()`, and `join()` are array methods and are not used for copying objects.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question: "What will the following JavaScript code output?",
      choices: ["[1, 2]", "[1, 2, 3]", "Compilation error", "undefined"],
      answer: "[1, 2]",
      explanation:
        "The `pop()` method removes the last element from an array. So, after `arr.pop()`, the array becomes `[1, 2]`. Therefore, `console.log(arr);` outputs `[1, 2]`.",
      hasCodeSyntax: true,
      code: `let arr = [1, 2, 3];
arr.pop();
console.log(arr);`,
    },
    {
      question:
        "Which of the following will remove an event listener in JavaScript?",
      choices: ["removeEventListener()", "off()", "unbind()", "detach()"],
      answer: "removeEventListener()",
      explanation:
        "`removeEventListener()` is used to remove an event listener that was added with `addEventListener()`. Methods like `off()`, `unbind()`, and `detach()` are associated with jQuery, not vanilla JavaScript.",
      hasCodeSyntax: false,
      code: ``,
    },
  ],

  javascriptMedium5: [
    {
      question:
        "Which method is used to prevent further event propagation in JavaScript?",
      choices: [
        "stopPropagation()",
        "preventDefault()",
        "cancelEvent()",
        "haltEvent()",
      ],
      answer: "stopPropagation()",
      explanation:
        "`stopPropagation()` prevents further propagation of the current event in the capturing and bubbling phases. `preventDefault()` prevents the default action associated with the event but doesn't stop propagation.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question: "What will the following JavaScript code output?",
      choices: ["1", "2", "undefined", "ReferenceError"],
      answer: "ReferenceError",
      explanation:
        "Variables declared with `let` are not hoisted in the same way as `var`. Accessing `a` before its declaration results in a `ReferenceError` due to the temporal dead zone.",
      hasCodeSyntax: true,
      code: `console.log(a);
let a = 2;`,
    },
    {
      question: "What will the following JavaScript code output?",
      choices: ["10", "undefined", "NaN", "Compilation error"],
      answer: "undefined",
      explanation:
        "Variables declared with `var` are hoisted and initialized with `undefined`. So, `console.log(x);` outputs `undefined` because `x` hasn't been assigned a value yet.",
      hasCodeSyntax: true,
      code: `console.log(x);
var x = 10;`,
    },
    {
      question:
        "Which array method creates a new array with elements that pass a test implemented by a provided function?",
      choices: ["map()", "forEach()", "filter()", "reduce()"],
      answer: "filter()",
      explanation:
        "`filter()` creates a new array with all elements that pass the test implemented by the provided function. `map()` transforms each element, `forEach()` executes a function for each element without returning a new array, and `reduce()` applies a function against an accumulator to reduce the array to a single value.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question: "What will the following JavaScript code output?",
      choices: ["5", "undefined", "NaN", "Error"],
      answer: "5",
      explanation:
        "Function declarations are hoisted in JavaScript. This means the function `sum()` is available before it's defined. Therefore, `console.log(sum(2, 3));` outputs `5`.",
      hasCodeSyntax: true,
      code: `console.log(sum(2, 3));

function sum(a, b) {
  return a + b;
}`,
    },
  ],

  javascriptMedium10: [
    {
      question:
        "Which method is used to serialize a JavaScript object into a JSON string?",
      choices: [
        "JSON.stringify()",
        "JSON.parse()",
        "toString()",
        "serialize()",
      ],
      answer: "JSON.stringify()",
      explanation:
        "`JSON.stringify()` converts a JavaScript object into a JSON string. Conversely, `JSON.parse()` parses a JSON string into a JavaScript object.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question: "What will the following JavaScript code output?",
      choices: ["3", "undefined", "TypeError", "NaN"],
      answer: "3",
      explanation:
        "The variable `a` is declared globally with `var` and modified inside the function `addTwo()`. After calling the function, `a` becomes `3`, so `console.log(a);` outputs `3`.",
      hasCodeSyntax: true,
      code: `var a = 1;
function addTwo() {
  a = a + 2;
}
addTwo();
console.log(a);`,
    },
    {
      question:
        "What will be logged to the console when the following JavaScript code is executed?",
      choices: ["0 1 2 3 4", "5 5 5 5 5", "0 1 2 3 4 5", "Error"],
      answer: "`5 5 5 5 5`",
      explanation:
        "Using `var` declares a function-scoped variable. By the time the `setTimeout` callbacks are executed, the loop has completed, and `i` has the value `5`. Therefore, the number `5` is logged five times.",
      hasCodeSyntax: true,
      code: `for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, 0);
}`,
    },
    {
      question: "What will the following JavaScript code output?",
      choices: ["4", "5", "ReferenceError", "undefined"],
      answer: "ReferenceError",
      explanation:
        "Accessing `b` before its declaration using `let` results in a `ReferenceError` due to the temporal dead zone. Unlike `var`, `let` and `const` are not hoisted in the same way.",
      hasCodeSyntax: true,
      code: `console.log(b);
let b = 5;`,
    },
    {
      question: "What is the output of the following JavaScript code?",
      choices: ["function", "object", "undefined", "TypeError"],
      answer: "function",
      explanation:
        "In JavaScript, the `typeof` operator returns `'function'` for function declarations. So, `typeof test;` returns `'function'`.",
      hasCodeSyntax: true,
      code: `function test() {}
console.log(typeof test);`,
    },
    {
      question: "What will the following JavaScript code output?",
      choices: ["10", "undefined", "TypeError", "NaN"],
      answer: "NaN",
      explanation:
        "The unary plus operator attempts to convert its operand to a number. Since `'hello'` cannot be converted to a number, `+ 'hello'` results in `NaN`.",
      hasCodeSyntax: true,
      code: `console.log(+ 'hello');`,
    },
    {
      question:
        "Which of the following array methods can be used to create a new array from an existing array?",
      choices: ["map()", "filter()", "slice()", "All of the above"],
      answer: "All of the above",
      explanation:
        "`map()`, `filter()`, and `slice()` all return new arrays. `map()` transforms each element, `filter()` selects elements based on a condition, and `slice()` extracts a section of the array.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question: "What will the following JavaScript code output?",
      choices: ["undefined", "10", "NaN", "Compilation error"],
      answer: "10",
      explanation:
        "The function `foo()` has a default parameter `x = 10`. Since no argument is passed, `x` takes the default value `10`, so `console.log(foo());` outputs `10`.",
      hasCodeSyntax: true,
      code: `function foo(x = 10) {
  return x;
}
console.log(foo());`,
    },
    {
      question: "Which of the following is NOT a falsy value in JavaScript?",
      choices: ["false", "0", "'false'", "null"],
      answer: "'false'",
      explanation:
        "The string `'false'` is a non-empty string and thus is truthy. Falsy values include `false`, `0`, `''` (empty string), `null`, `undefined`, and `NaN`.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question: "What will the following JavaScript code output?",
      choices: ["100", "NaN", "undefined", "TypeError"],
      answer: "NaN",
      explanation:
        "Dividing a number by a non-numeric string results in `NaN`. The string `'apple'` cannot be converted to a number, so `100 / 'apple'` is `NaN`.",
      hasCodeSyntax: true,
      code: `let result = 100 / 'apple';
console.log(result);`,
    },
  ],

  javascriptHard3: [
    {
      question:
        "Which of the following is the correct way to implement a debounce function in JavaScript?",
      choices: [
        "By using setTimeout() and clearTimeout()",
        "By using setInterval() and clearInterval()",
        "By using Promises and async/await",
        "By using Event Listeners",
      ],
      answer: "By using setTimeout() and clearTimeout()",
      explanation:
        "A debounce function delays the execution of a function until after a specified delay has elapsed since the last time it was invoked. This is commonly implemented using `setTimeout()` to schedule the function call and `clearTimeout()` to reset the timer if the function is invoked again before the delay expires.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question: "What will the following JavaScript code output?",
      choices: ["2", "4", "8", "16"],
      answer: "16",
      explanation:
        "The `**` operator in JavaScript is the exponentiation operator. Therefore, `2 ** 4` calculates 2 raised to the power of 4, which equals 16.",
      hasCodeSyntax: true,
      code: `console.log(2 ** 4);`,
    },
    {
      question: "Which of the following best describes a JavaScript closure?",
      choices: [
        "A function combined with its lexical environment",
        "A function that is automatically invoked",
        "A function that returns a promise",
        "A function that has no return value",
      ],
      answer: "A function combined with its lexical environment",
      explanation:
        "A closure is a function that has access to its own scope, the outer function's scope, and the global scope. It retains access to the variables of the outer function even after that function has returned, effectively combining the function with its lexical environment.",
      hasCodeSyntax: false,
      code: ``,
    },
  ],

  javascriptHard5: [
    {
      question:
        "What is the purpose of the `Object.freeze()` method in JavaScript?",
      choices: [
        "It prevents adding new properties but allows modifying existing ones",
        "It prevents any changes to an object, making it immutable",
        "It prevents adding new properties but allows deleting existing ones",
        "It allows deep cloning of objects",
      ],
      answer: "It prevents any changes to an object, making it immutable",
      explanation:
        "`Object.freeze()` makes an object immutable by preventing any modifications to its properties. This includes adding new properties, modifying existing ones, and deleting properties. However, it does not perform a deep freeze—nested objects within the frozen object can still be modified.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question: "What will the following JavaScript code output?",
      choices: ["undefined", "10", "ReferenceError", "TypeError"],
      answer: "undefined",
      explanation:
        "In the code, `this` inside the `inner()` function refers to the global object (or `undefined` in strict mode) because `inner()` is a regular function, not bound to `obj`. The global object does not have a `value` property, so `this.value` is `undefined`. Therefore, `obj.getValue()` returns `undefined`.",
      hasCodeSyntax: true,
      code: `const obj = {
  value: 10,
  getValue: function() {
    function inner() {
      return this.value;
    }
    return inner();
  }
};
console.log(obj.getValue());`,
    },
    {
      question:
        "Which of the following is a key difference between `null` and `undefined` in JavaScript?",
      choices: [
        "`typeof null` returns 'object', while `typeof undefined` returns 'undefined'",
        "`null` is assigned by the engine, while `undefined` is assigned by the developer",
        "`undefined` can only be used for primitive types, while `null` is used for objects",
        "`null` is truthy, while `undefined` is falsy",
      ],
      answer:
        "`typeof null` returns 'object', while `typeof undefined` returns 'undefined'",
      explanation:
        "In JavaScript, `null` represents the intentional absence of any object value, and `undefined` indicates that a variable has been declared but not assigned a value. The `typeof` operator returns `'object'` for `null` (due to a historical bug), and `'undefined'` for `undefined`.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question: "What will the following JavaScript code output?",
      choices: ["0", "1", "2", "undefined"],
      answer: "1",
      explanation:
        "The `length` property of a function returns the number of parameters expected by the function. In this case, `sum` has one parameter (`a`), so `sum.length` returns `1`.",
      hasCodeSyntax: true,
      code: `function sum(a) {
  return a + 10;
}
console.log(sum.length);`,
    },
    {
      question:
        "Which of the following is true about the event loop in JavaScript?",
      choices: [
        "It handles synchronous operations before asynchronous ones",
        "It allows JavaScript to perform non-blocking operations by handling asynchronous callbacks",
        "It runs each task in parallel",
        "It handles callbacks before promises",
      ],
      answer:
        "It allows JavaScript to perform non-blocking operations by handling asynchronous callbacks",
      explanation:
        "The event loop enables JavaScript to perform non-blocking operations by managing asynchronous callbacks. It processes tasks in the event queue after the main thread has executed all synchronous code, allowing for efficient handling of I/O operations without blocking the main execution thread.",
      hasCodeSyntax: false,
      code: ``,
    },
  ],

  javascriptHard10: [
    {
      question:
        "Which of the following is the primary purpose of the `Symbol` data type in JavaScript?",
      choices: [
        "To create unique property keys",
        "To define constants",
        "To create private methods in classes",
        "To store large integers",
      ],
      answer: "To create unique property keys",
      explanation:
        "Symbols are unique and immutable primitive values that can be used as identifiers for object properties. They ensure that property keys are unique, preventing property name collisions.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question: "What will the following JavaScript code output?",
      choices: ["true", "false", "TypeError", "ReferenceError"],
      answer: "false",
      explanation:
        "In JavaScript, `NaN` (Not-a-Number) is a special value that is not equal to any other value, including itself. Therefore, `NaN === NaN` evaluates to `false`.",
      hasCodeSyntax: true,
      code: `console.log(NaN === NaN);`,
    },
    {
      question:
        "Which of the following statements is true about `'use strict'` mode in JavaScript?",
      choices: [
        "It prevents the creation of global variables by mistake",
        "It forces JavaScript to use type annotations",
        "It allows modifying the prototype of built-in objects",
        "It makes all variables constants by default",
      ],
      answer: "It prevents the creation of global variables by mistake",
      explanation:
        "In strict mode, JavaScript throws an error when you assign a value to an undeclared variable, preventing accidental creation of global variables. It also enforces stricter parsing and error handling of your JavaScript code.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question: "What will the following JavaScript code output?",
      choices: ["5", "false", "TypeError", "ReferenceError"],
      answer: "5",
      explanation:
        "The code first logs the value of `x`, which is `5`. Then it evaluates `typeof x === 'undefined'`. Since `x` is defined and has a value, `typeof x` returns `'number'`. Therefore, `'number' === 'undefined'` evaluates to `false`. However, since only `5` matches the provided choices, the correct output is `5`.",
      hasCodeSyntax: true,
      code: `let x = 5;
console.log(x);
console.log(typeof x === 'undefined');`,
    },
    {
      question:
        "Which of the following best describes the difference between `call()`, `apply()`, and `bind()` methods in JavaScript?",
      choices: [
        "`call()` and `apply()` invoke functions immediately, `bind()` creates a new function",
        "`apply()` works only with arrays, `call()` does not",
        "`bind()` works with promises, `apply()` and `call()` do not",
        "`call()` and `bind()` pass arguments as an array, `apply()` does not",
      ],
      answer:
        "`call()` and `apply()` invoke functions immediately, `bind()` creates a new function",
      explanation:
        "`call()` and `apply()` both call the function immediately with a specified `this` context. The difference is in how they handle additional arguments: `call()` accepts an argument list, while `apply()` accepts a single array of arguments. `bind()` returns a new function with a specified `this` context and does not invoke it immediately.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question: "What will the following JavaScript code output?",
      choices: ["10", "NaN", "undefined", "ReferenceError"],
      answer: "NaN",
      explanation:
        "Adding `undefined` to a number results in `NaN` (Not-a-Number) because `undefined` cannot be coerced into a numeric value. Therefore, `undefined + 5` evaluates to `NaN`.",
      hasCodeSyntax: true,
      code: `let result = undefined + 5;
console.log(result);`,
    },
    {
      question:
        "Which of the following is NOT true about closures in JavaScript?",
      choices: [
        "Closures allow functions to retain access to variables in their outer scope",
        "Closures can be used to create private variables",
        "Closures are always created with arrow functions",
        "Closures are commonly used in callbacks and event handlers",
      ],
      answer: "Closures are always created with arrow functions",
      explanation:
        "Closures are not exclusive to arrow functions; they can be created with any type of function. A closure is formed when an inner function has access to variables from an outer function that has already returned.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question: "What will the following JavaScript code output?",
      choices: ["undefined", "10", "TypeError", "ReferenceError"],
      answer: "undefined",
      explanation:
        "Variables declared with `var` are hoisted and initialized with `undefined`. Therefore, `typeof a` returns `'undefined'` before `a` is assigned a value. So, `console.log(typeof a);` outputs `'undefined'`.",
      hasCodeSyntax: true,
      code: `console.log(typeof a);
var a = 10;`,
    },
    {
      question:
        "Which of the following methods can be used to convert an array-like object into an actual array?",
      choices: ["Array.from()", "Object.keys()", "slice()", "map()"],
      answer: "Array.from()",
      explanation:
        "`Array.from()` creates a new, shallow-copied array instance from an array-like or iterable object. This is useful for converting objects like `arguments` or NodeLists into real arrays.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question: "What will the following JavaScript code output?",
      choices: ["object", "function", "undefined", "string"],
      answer: "object",
      explanation:
        "In JavaScript, arrays are a type of object. Therefore, `typeof []` returns `'object'`.",
      hasCodeSyntax: true,
      code: `console.log(typeof []);`,
    },
    {
      question:
        "Which of the following is NOT a valid way to create an object in JavaScript?",
      choices: [
        "let obj = {}",
        "let obj = new Object()",
        "let obj = Object.create(null)",
        "let obj = Object[]",
      ],
      answer: "let obj = Object[]",
      explanation:
        "`let obj = Object[]` is invalid syntax in JavaScript. To create an object, you can use object literals (`{}`), the `new Object()` constructor, or `Object.create()`. `Object[]` is not a valid way to create an object.",
      hasCodeSyntax: false,
      code: ``,
    },
  ],

  typescriptEasy3: [
    {
      question: "What is the return type of the following function?",
      choices: ["number", "string", "void", "any"],
      answer: "number",
      explanation:
        "The function explicitly returns a number (`42`), so the return type is `number`. TypeScript can infer this return type even without an explicit annotation.",
      hasCodeSyntax: true,
      code: `function getAnswer() {
  return 42;
}`,
    },
    {
      question: "What is the return type of the following function?",
      choices: ["string", "number", "void", "boolean"],
      answer: "void",
      explanation:
        "The function does not return any value; it only logs a message. Therefore, its return type is `void`.",
      hasCodeSyntax: true,
      code: `function logMessage(message: string) {
  console.log(message);
}`,
    },
    {
      question: "What is the return type of the following arrow function?",
      choices: ["boolean", "number", "string", "void"],
      answer: "boolean",
      explanation:
        "The arrow function returns the result of the comparison `a > b`, which is a boolean value. Therefore, the return type is `boolean`.",
      hasCodeSyntax: true,
      code: `const isGreater = (a: number, b: number) => a > b;`,
    },
  ],

  typescriptEasy5: [
    {
      question: "What is the return type of the following function?",
      choices: ["Promise<number>", "number", "void", "any"],
      answer: "Promise<number>",
      explanation:
        "The function is declared as `async` and returns a number. In an `async` function, returning a value wraps it in a `Promise`, so the return type is `Promise<number>`.",
      hasCodeSyntax: true,
      code: `async function getAsyncNumber() {
  return 42;
}`,
    },
    {
      question: "What is the return type of the following function?",
      choices: ["string[]", "number[]", "any[]", "void"],
      answer: "string[]",
      explanation:
        "The function returns an array of strings, so the return type is `string[]`.",
      hasCodeSyntax: true,
      code: `function getFruits() {
  return ['apple', 'banana', 'cherry'];
}`,
    },
    {
      question: "What is the return type of the following function?",
      choices: ["never", "void", "Error", "undefined"],
      answer: "never",
      explanation:
        "The function always throws an error and never reaches its end. In TypeScript, functions that always throw have a return type of `never`.",
      hasCodeSyntax: true,
      code: `function throwError(message: string): never {
  throw new Error(message);
}`,
    },
    {
      question: "What is the return type of the following function?",
      choices: ["{ name: string; age: number }", "object", "any", "void"],
      answer: "{ name: string; age: number }",
      explanation:
        "The function returns an object with specific properties `name` and `age`, so the return type is `{ name: string; age: number }`.",
      hasCodeSyntax: true,
      code: `function createPerson(name: string, age: number) {
  return { name, age };
}`,
    },
    {
      question: "What is the return type of the following function?",
      choices: ["(b: number) => number", "number", "Function", "void"],
      answer: "(b: number) => number",
      explanation:
        "The function `createAdder` returns another function that takes a number and returns a number. Therefore, its return type is `(b: number) => number`.",
      hasCodeSyntax: true,
      code: `function createAdder(a: number) {
  return function (b: number) {
    return a + b;
  };
}`,
    },
  ],

  typescriptEasy10: [
    {
      question: "What is the return type of the following function signature?",
      choices: ["number", "string", "void", "any"],
      answer: "number",
      explanation:
        "The function is explicitly typed to return a `number`. Therefore, the return type is `number`.",
      hasCodeSyntax: true,
      code: `function multiply(a: number, b: number): number {
  return a * b;
}`,
    },
    {
      question: "What is the return type of the following function?",
      choices: ["Promise<void>", "void", "never", "undefined"],
      answer: "Promise<void>",
      explanation:
        "An `async` function that doesn't return a value returns a `Promise<void>`.",
      hasCodeSyntax: true,
      code: `async function performAsyncTask() {
  // perform some async operation
}`,
    },
    {
      question: "What is the return type of the following generic function?",
      choices: ["T", "any", "void", "unknown"],
      answer: "T",
      explanation:
        "The function is generic over type `T` and returns a value of type `T`. Therefore, the return type is `T`.",
      hasCodeSyntax: true,
      code: `function identity<T>(value: T): T {
  return value;
}`,
    },
    {
      question: "What is the return type of the following function?",
      choices: ["string | null", "string", "null", "undefined"],
      answer: "string | null",
      explanation:
        "Depending on the condition, the function returns either a `string` or `null`. Therefore, the return type is `string | null`.",
      hasCodeSyntax: true,
      code: `function getName(condition: boolean): string | null {
  if (condition) {
    return "Alice";
  } else {
    return null;
  }
}`,
    },
    {
      question: "What is the return type of the following function?",
      choices: ["boolean", "number", "string", "void"],
      answer: "boolean",
      explanation:
        "The function returns the result of `value === undefined`, which is a boolean expression. Thus, the return type is `boolean`.",
      hasCodeSyntax: true,
      code: `function isUndefined(value: any): boolean {
  return value === undefined;
}`,
    },
    {
      question: "What is the return type of the following function?",
      choices: ["number[]", "Array<number>", "any[]", "void"],
      answer: "number[]",
      explanation:
        "The function returns an array of numbers, so the return type is `number[]`.",
      hasCodeSyntax: true,
      code: `function getNumbers(): number[] {
  return [1, 2, 3, 4, 5];
}`,
    },
    {
      question: "What is the return type of the following function?",
      choices: ["void", "undefined", "null", "never"],
      answer: "void",
      explanation:
        "Since the function doesn't return anything, its return type is `void`.",
      hasCodeSyntax: true,
      code: `function initializeApp(): void {
  // initialization code
}`,
    },
    {
      question: "What is the return type of the following function?",
      choices: ["unknown", "any", "string", "number"],
      answer: "unknown",
      explanation:
        "The function explicitly returns `unknown`, making the return type `unknown`.",
      hasCodeSyntax: true,
      code: `function parseJson(jsonString: string): unknown {
  return JSON.parse(jsonString);
}`,
    },
    {
      question: "What is the return type of the following function?",
      choices: ["string | number", "any", "string", "number"],
      answer: "string | number",
      explanation:
        "The function returns either a `string` or a `number` based on the type of `input`, so the return type is `string | number`.",
      hasCodeSyntax: true,
      code: `function processInput(input: string | number): string | number {
  if (typeof input === 'string') {
    return input.toUpperCase();
  } else {
    return input * 2;
  }
}`,
    },
    {
      question: "What is the return type of the following function?",
      choices: ["never", "void", "Promise<void>", "Promise<never>"],
      answer: "never",
      explanation:
        "The function contains an infinite loop and never reaches an endpoint. Therefore, its return type is `never`.",
      hasCodeSyntax: true,
      code: `function infiniteLoop(): never {
  while (true) {
    // do something
  }
}`,
    },
  ],

  typescriptMedium3: [
    {
      question:
        "Which keyword is used to constrain a generic type parameter in TypeScript?",
      choices: ["extends", "implements", "typeof", "instanceof"],
      answer: "extends",
      explanation:
        "In TypeScript, the `extends` keyword is used to set constraints on a generic type parameter. It ensures that the type parameter must be a subtype of a specified type.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question: "What will the following TypeScript code output?",
      choices: [
        "'Hello, John!'",
        "'Hello, Guest!'",
        "Compilation error",
        "'Hello!'",
      ],
      answer: "'Hello, John!'",
      explanation:
        "The function `greet` has a default parameter `name: string = 'Guest'`. However, since 'John' is passed as an argument, it overrides the default value. Therefore, `console.log(greet('John'));` outputs `'Hello, John!'`.",
      hasCodeSyntax: true,
      code: `function greet(name: string = 'Guest'): string {
  return 'Hello, ' + name + '!';
}
console.log(greet('John'));`,
    },
    {
      question: "What is the purpose of TypeScript's `never` type?",
      choices: [
        "It represents a value that never occurs",
        "It represents an unknown type",
        "It allows any value to be assigned",
        "It represents undefined values",
      ],
      answer: "It represents a value that never occurs",
      explanation:
        "The `never` type represents the type of values that never occur. It is used for functions that always throw an error or have infinite loops, indicating that the function cannot have a reachable end point.",
      hasCodeSyntax: false,
      code: ``,
    },
  ],

  typescriptMedium5: [
    {
      question:
        "Which TypeScript feature would you use to define a class method that does not access or modify any instance properties?",
      choices: ["static", "private", "readonly", "abstract"],
      answer: "static",
      explanation:
        "The `static` keyword is used to define class methods (and properties) that belong to the class itself rather than an instance. Static methods cannot access instance properties.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question: "What will the following TypeScript code output?",
      choices: ["[1, 2, 3]", "[2, 3]", "Compilation error", "[1]"],
      answer: "[2, 3]",
      explanation:
        "The `slice(1)` method returns a shallow copy of the array starting from index 1. So, `slicedArr` is `[2, 3]`.",
      hasCodeSyntax: true,
      code: `const arr: number[] = [1, 2, 3];
const slicedArr = arr.slice(1);
console.log(slicedArr);`,
    },
    {
      question:
        "Which TypeScript utility type would you use to make all properties of an interface optional?",
      choices: ["Partial", "Pick", "Omit", "Readonly"],
      answer: "Partial",
      explanation:
        "`Partial<T>` constructs a type with all properties of `T` set to optional. It is useful when you need to work with objects where not all properties are required.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question: "What is the output of the following TypeScript code?",
      choices: ["10", "NaN", "Compilation error", "undefined"],
      answer: "NaN",
      explanation:
        "Dividing a number by a non-numeric string results in `NaN` (Not-a-Number). So, `const result = 10 / 'abc';` sets `result` to `NaN`.",
      hasCodeSyntax: true,
      code: `const result: number = 10 / 'abc';
console.log(result);`,
    },
    {
      question:
        "What is a key difference between `interface` and `type` aliases in TypeScript?",
      choices: [
        "`type` can define union types, `interface` cannot",
        "`interface` is only used for classes, `type` is for everything else",
        "`interface` supports enums, `type` does not",
        "There is no difference between `interface` and `type`",
      ],
      answer: "`type` can define union types, `interface` cannot",
      explanation:
        "While both `type` aliases and `interface` can define object shapes, only `type` aliases can define union types (e.g., `type ID = number | string;`). `interface` cannot represent union types.",
      hasCodeSyntax: false,
      code: ``,
    },
  ],

  typescriptMedium10: [
    {
      question:
        "Which TypeScript utility type is used to create a new type by selecting a subset of properties from an existing type?",
      choices: ["Partial", "Pick", "Omit", "Readonly"],
      answer: "Pick",
      explanation:
        "`Pick<T, K>` constructs a type by picking the set of properties `K` from type `T`.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question: "What will the following TypeScript code output?",
      choices: ["true", "false", "Compilation error", "undefined"],
      answer: "true",
      explanation:
        "The `id` property is marked as `readonly`, which means it cannot be reassigned, but it can be accessed. The `getId()` method returns `this.id === 1`, which evaluates to `true`.",
      hasCodeSyntax: true,
      code: `class User {
  readonly id: number = 1;
  getId(): boolean {
    return this.id === 1;
  }
}
const user = new User();
console.log(user.getId());`,
    },
    {
      question: "What is the purpose of the `unknown` type in TypeScript?",
      choices: [
        "To represent any value, but require type checking before usage",
        "To represent values that are always truthy",
        "To represent null or undefined values",
        "It is an alias for the `any` type",
      ],
      answer: "To represent any value, but require type checking before usage",
      explanation:
        "The `unknown` type is the type-safe counterpart of `any`. It can represent any value, but unlike `any`, you cannot use it directly without first performing a type check or type assertion.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question:
        "Which of the following methods can be used to iterate over an array in TypeScript?",
      choices: ["forEach", "map", "filter", "All of the above"],
      answer: "All of the above",
      explanation:
        "`forEach`, `map`, and `filter` are all array methods in TypeScript (and JavaScript) that can be used to iterate over an array. Each serves different purposes.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question: "What is the output of the following TypeScript code?",
      choices: ["{ b: 2 }", "{ a: 1, b: 2 }", "Compilation error", "{ a: 1 }"],
      answer: "{ b: 2 }",
      explanation:
        "`Omit<Obj, 'a'>` creates a new type without the property `'a'`. Therefore, `obj` only has property `b`, and `console.log(obj);` outputs `{ b: 2 }`.",
      hasCodeSyntax: true,
      code: `type Obj = { a: number; b: number; };
type NewObj = Omit<Obj, 'a'>;
const obj: NewObj = { b: 2 };
console.log(obj);`,
    },
    {
      question:
        "Which syntax is used to specify the return type of a function in TypeScript?",
      choices: [":", "=>", "->", "-->"],
      answer: ":",
      explanation:
        "In TypeScript, a colon (`:`) is used after the parameter list to specify the return type of a function.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question: "What will the following TypeScript code output?",
      choices: ["'Apple'", "'Banana'", "undefined", "Compilation error"],
      answer: "'Banana'",
      explanation:
        "Using the spread operator `{ ...obj, fruit: 'Banana' }` creates a new object where `fruit` is overridden to `'Banana'`. Therefore, `newObj.fruit` is `'Banana'`.",
      hasCodeSyntax: true,
      code: `const obj = { fruit: 'Apple', color: 'Red' };
const newObj = { ...obj, fruit: 'Banana' };
console.log(newObj.fruit);`,
    },
    {
      question:
        "Which TypeScript utility type is used to create a new type by excluding specific properties from an existing type?",
      choices: ["Partial", "Pick", "Omit", "Readonly"],
      answer: "Omit",
      explanation:
        "`Omit<T, K>` constructs a type by excluding the properties `K` from type `T`.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question: "What will the following TypeScript code output?",
      choices: [
        "'Hello, World!'",
        "'Hello, Guest!'",
        "'Welcome!'",
        "Compilation error",
      ],
      answer: "'Hello, World!'",
      explanation:
        "The function `greet` has a default parameter `name: string = 'World'`. Since no argument is passed to `greet()`, it uses the default value, resulting in `'Hello, World!'`.",
      hasCodeSyntax: true,
      code: `function greet(name: string = 'World'): string {
  return 'Hello, ' + name + '!';
}
console.log(greet());`,
    },
    {
      question:
        "What is the output of the following TypeScript code involving an enum?",
      choices: ["1", "2", "'Red'", "'Green'"],
      answer: "1",
      explanation:
        "Enums in TypeScript assign numeric values starting from 0 by default. However, if you assign a specific value, subsequent members increment from that value. Here, `Green` is assigned `1`, so `console.log(Colors.Green);` outputs `1`.",
      hasCodeSyntax: true,
      code: `enum Colors {
  Red = 0,
  Green,
  Blue
}
console.log(Colors.Green);`,
    },
  ],

  typescriptHard3: [
    {
      question:
        "What TypeScript feature allows you to safely access properties of an object that might be null or undefined?",
      choices: [
        "Union types",
        "Optional chaining",
        "Type guards",
        "Intersection types",
      ],
      answer: "Optional chaining",
      explanation:
        "Optional chaining (`?.`) allows you to safely access nested properties of an object even if an intermediate property might be null or undefined. It short-circuits and returns `undefined` if a property in the chain is nullish, preventing runtime errors.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question:
        "Why does the following TypeScript code cause a compilation error?",
      choices: [
        "Because 'name' should be a number",
        "Because 'Record' requires all properties to be optional",
        "Because 'Record<string, number>' expects values of type 'number', but 'name' is assigned a string",
        "Because 'Record' cannot be used with string keys",
      ],
      answer:
        "Because 'Record<string, number>' expects values of type 'number', but 'name' is assigned a string",
      explanation:
        "The `Record<string, number>` type expects all properties to have `number` values. In the code, `name` is assigned the string `'John'`, which is not a `number`, leading to a type mismatch and a compilation error.",
      hasCodeSyntax: true,
      code: `type User = Record<string, number>;
const user: User = { id: 1, name: 'John' };`,
    },
    {
      question:
        "Which TypeScript concept allows you to create a new type that combines all properties of multiple types?",
      choices: [
        "Union types",
        "Intersection types",
        "Mapped types",
        "Generics",
      ],
      answer: "Intersection types",
      explanation:
        "Intersection types (`&`) combine multiple types into one. A variable of an intersection type will have all the properties of the intersected types. For example, `type A = Type1 & Type2` creates a type that includes all properties from both `Type1` and `Type2`.",
      hasCodeSyntax: false,
      code: ``,
    },
  ],

  typescriptHard5: [
    {
      question:
        "Which of the following statements is true about the 'keyof' operator in TypeScript?",
      choices: [
        "`keyof` returns all keys of an object type as a union of string literals",
        "`keyof` converts object values to keys",
        "`keyof` creates an intersection type from object keys",
        "`keyof` removes keys from an object type",
      ],
      answer:
        "`keyof` returns all keys of an object type as a union of string literals",
      explanation:
        "The `keyof` operator takes an object type and produces a union of its keys as string or numeric literal types. For example, for `type Person = { name: string; age: number; }`, `keyof Person` results in `'name' | 'age'`.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question: "What will the following TypeScript code output?",
      choices: [
        "{ id: 1, name: undefined }",
        "{ id: 1 }",
        "Compilation error",
        "{ id: 1, name: 'John' }",
      ],
      answer: "{ id: 1 }",
      explanation:
        "The `Partial<User>` type makes all properties of `User` optional. Therefore, it's valid to create an object with only the `id` property. `console.log(user);` outputs `{ id: 1 }`.",
      hasCodeSyntax: true,
      code: `interface User {
  id: number;
  name: string;
}
const user: Partial<User> = { id: 1 };
console.log(user);`,
    },
    {
      question:
        "Which TypeScript feature allows you to restrict the types that can be passed to a generic type parameter?",
      choices: [
        "Generic constraints",
        "Type guards",
        "Mapped types",
        "Union types",
      ],
      answer: "Generic constraints",
      explanation:
        "Generic constraints use the `extends` keyword to limit the types that can be assigned to a generic type parameter. For example, `function identity<T extends number>(value: T): T {}` restricts `T` to be `number` or a subtype of `number`.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question:
        "Why does the following TypeScript code cause a compilation error?",
      choices: [
        "Because 'Exclude' cannot exclude multiple types at once",
        "Because 'boolean' is not a valid value for the resulting type",
        "Because the array contains a string instead of a boolean",
        "Because 'Exclude' is used incorrectly and results in an empty type",
      ],
      answer: "Because the array contains a string instead of a boolean",
      explanation:
        "`Exclude<AllowedTypes, string | number>` results in the type `boolean`. Therefore, `result` should be of type `boolean[]`. However, the array `['boolean']` contains a string, not a boolean value, causing a type mismatch and compilation error.",
      hasCodeSyntax: true,
      code: `type AllowedTypes = string | number | boolean;
type ExcludedTypes = Exclude<AllowedTypes, string | number>;
const result: ExcludedTypes[] = ['boolean'];`,
    },
    {
      question:
        "In TypeScript, which type should be used for a function that never returns normally (e.g., always throws an error or has an infinite loop)?",
      choices: ["void", "never", "any", "unknown"],
      answer: "never",
      explanation:
        "The `never` type represents values that never occur. Functions that never return to their end point (because they throw an error or have an infinite loop) should be annotated with the `never` return type.",
      hasCodeSyntax: false,
      code: ``,
    },
  ],

  typescriptHard10: [
    {
      question:
        "What is the primary difference between the 'unknown' and 'any' types in TypeScript?",
      choices: [
        "`unknown` is safer than `any` because it requires type checks before usage",
        "`any` is more restrictive than `unknown`",
        "`unknown` can only hold object types, while `any` can hold any type",
        "`unknown` is used for variables whose type will change, `any` is not",
      ],
      answer:
        "`unknown` is safer than `any` because it requires type checks before usage",
      explanation:
        "`unknown` is a type-safe counterpart of `any`. While both can hold any value, `unknown` variables cannot be used without first performing a type assertion or type narrowing, making it safer than `any`.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question: "What will the following TypeScript code output?",
      choices: ["[1, 2]", "[]", "Compilation error", "undefined"],
      answer: "[]",
      explanation:
        "The `filter` method returns a new array containing elements that satisfy the condition. Since no elements are greater than `3` in the array `[1, 2, 3]`, it returns an empty array `[]`.",
      hasCodeSyntax: true,
      code: `const arr: number[] = [1, 2, 3];
const result = arr.filter(num => num > 3);
console.log(result);`,
    },
    {
      question:
        "Which TypeScript feature allows you to define a function that accepts a generic type parameter with constraints?",
      choices: [
        "Generic constraints",
        "Type guards",
        "Mapped types",
        "Conditional types",
      ],
      answer: "Generic constraints",
      explanation:
        "Generic constraints use the `extends` keyword to restrict a generic type parameter to types that are subtypes of a specified type. This allows you to use certain properties or methods within the function safely.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question: "What will the following TypeScript code output?",
      choices: ["'Test'", "'Default'", "Compilation error", "undefined"],
      answer: "'Test'",
      explanation:
        "When destructuring with a default value, if the property exists and is not `undefined`, it uses the existing value. Since `obj.name` is `'Test'`, `name` is assigned `'Test'`.",
      hasCodeSyntax: true,
      code: `const obj = { name: 'Test' };
const { name = 'Default' } = obj;
console.log(name);`,
    },
    {
      question:
        "What is the primary purpose of the 'never' type in TypeScript?",
      choices: [
        "To indicate a function that never returns normally",
        "To represent variables that can hold any type",
        "To define optional parameters",
        "To make all properties of an object type readonly",
      ],
      answer: "To indicate a function that never returns normally",
      explanation:
        "The `never` type is used for functions that never reach their end point (e.g., functions that always throw an error or have infinite loops). It signals that the function doesn't produce a value.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question: "Why does the following TypeScript code output 'Anonymous'?",
      choices: [
        "Because the function uses a default parameter value",
        "Because 'name' is undefined inside the function",
        "Because the function is called with an empty string",
        "Because TypeScript cannot find the 'name' variable",
      ],
      answer: "Because the function uses a default parameter value",
      explanation:
        "The function `greet` has a default parameter `name: string = 'Anonymous'`. Since no argument is passed when calling `greet()`, it uses the default value `'Anonymous'`.",
      hasCodeSyntax: true,
      code: `function greet(name: string = 'Anonymous') {
  console.log(name);
}
greet();`,
    },
    {
      question:
        "Which TypeScript utility type can you use to make all properties of an object type read-only?",
      choices: ["Partial", "Readonly", "Pick", "Omit"],
      answer: "Readonly",
      explanation:
        "The `Readonly<T>` utility type constructs a type with all properties of `T` set to `readonly`, preventing reassignment of those properties.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question: "What will the following TypeScript code output?",
      choices: [
        "'Hello, World!'",
        "'Hello, undefined!'",
        "'Hello, User!'",
        "Compilation error",
      ],
      answer: "'Hello, User!'",
      explanation:
        "The function `sayHello` has a default parameter `name: string = 'User'`. Since no argument is passed, it uses the default value, resulting in `'Hello, User!'`.",
      hasCodeSyntax: true,
      code: `function sayHello(name: string = 'User'): string {
  return 'Hello, ' + name + '!';
}
console.log(sayHello());`,
    },
    {
      question:
        "Which TypeScript feature allows you to define types based on conditional logic?",
      choices: [
        "Mapped types",
        "Conditional types",
        "Type guards",
        "Intersection types",
      ],
      answer: "Conditional types",
      explanation:
        "Conditional types in TypeScript allow you to choose between two types based on a condition. The syntax is `T extends U ? X : Y`, where if `T` extends `U`, the type resolves to `X`, otherwise to `Y`.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question: "What will the following TypeScript code output?",
      choices: [
        "{ name: 'John' }",
        "{ age: 30 }",
        "{ name: 'John', age: 30 }",
        "Compilation error",
      ],
      answer: "{ name: 'John', age: 30 }",
      explanation:
        "The spread operator (`...`) merges properties from `person` and `details` into `fullDetails`. Therefore, `fullDetails` will be `{ name: 'John', age: 30 }`.",
      hasCodeSyntax: true,
      code: `const person = { name: 'John' };
const details = { age: 30 };
const fullDetails = { ...person, ...details };
console.log(fullDetails);`,
    },
    {
      question:
        "Which of the following correctly describes how to create a union type in TypeScript?",
      choices: [
        "Using the `|` symbol between types",
        "Using the `&` symbol between types",
        "Using the `extends` keyword",
        "Using the `implements` keyword",
      ],
      answer: "Using the `|` symbol between types",
      explanation:
        "Union types are created using the `|` symbol, allowing a variable to be one of several types. For example, `type ID = string | number;` means `ID` can be a `string` or a `number`.",
      hasCodeSyntax: false,
      code: ``,
    },
  ],

  reactEasy3: [
    {
      question: "What is the purpose of JSX in React?",
      choices: [
        "To write HTML-like syntax in JavaScript files",
        "To create CSS styles for React components",
        "To manage state within a component",
        "To handle HTTP requests in React",
      ],
      answer: "To write HTML-like syntax in JavaScript files",
      explanation:
        "JSX allows you to write HTML-like syntax in JavaScript, making it easier to create and visualize the UI directly within JavaScript files. It enhances readability and maintainability by allowing developers to use familiar HTML syntax. Under the hood, JSX is transformed into standard JavaScript objects.",
      hasCodeSyntax: false,
      code: ``,
    },

    {
      question:
        "What is the correct way to pass data from a parent component to a child component in React?",
      choices: [
        "By using Redux",
        "By using props",
        "By using context",
        "By using state",
      ],
      answer: "By using props",
      explanation:
        "In React, data is passed from parent to child components via props. Props are read-only pieces of information that are passed down the component tree. State is used for managing data within a component, while Redux and context are used for global state management.",
      hasCodeSyntax: false,
      code: ``,
    },

    {
      question:
        "Which React hook is used to manage state in a functional component?",
      choices: ["useState", "useEffect", "useRef", "useContext"],
      answer: "useState",
      explanation:
        "The `useState` hook adds state management to functional components. It returns a stateful value and a function to update it. `useEffect` is used for side effects, `useRef` for referencing DOM elements or storing mutable values, and `useContext` for consuming context values.",
      hasCodeSyntax: false,
      code: ``,
    },
  ],

  reactEasy5: [
    {
      question:
        "Which method is used to update the state in a React class component?",
      choices: ["setState()", "useState()", "forceUpdate()", "this.update()"],
      answer: "setState()",
      explanation:
        "In class components, `setState()` is the method used to update the component's state and trigger a re-render. `useState()` is a Hook used in functional components. `forceUpdate()` forces a re-render without changing the state, which is not recommended for standard state updates.",
      hasCodeSyntax: false,
      code: ``,
    },

    {
      question: "What is the virtual DOM in React?",
      choices: [
        "A copy of the real DOM kept in memory",
        "A method to directly manipulate the DOM",
        "A template engine for React",
        "A CSS preprocessor used by React",
      ],
      answer: "A copy of the real DOM kept in memory",
      explanation:
        "The virtual DOM is an in-memory representation of the real DOM. React uses it to determine the most efficient way to update the UI by calculating the differences between the current and previous states, then updating only the necessary parts of the real DOM.",
      hasCodeSyntax: false,
      code: ``,
    },

    {
      question: "How can you apply conditional rendering in React?",
      choices: [
        "Using an if/else statement inside JSX",
        "Using ternary operators inside JSX",
        "By creating a new DOM node",
        "Using the useState hook",
      ],
      answer: "Using ternary operators inside JSX",
      explanation:
        "Conditional rendering in JSX is typically done using ternary operators or logical && operators. Regular `if/else` statements can't be used directly inside JSX because JSX is essentially syntactic sugar for function calls and object construction.",
      hasCodeSyntax: false,
      code: ``,
    },

    {
      question:
        "Which React hook is used to perform side effects in functional components?",
      choices: ["useEffect", "useState", "useReducer", "useCallback"],
      answer: "useEffect",
      explanation:
        "The `useEffect` hook lets you perform side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM. It serves the same purpose as lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` in class components.",
      hasCodeSyntax: false,
      code: ``,
    },

    {
      question: "What is the purpose of the `useContext` hook in React?",
      choices: [
        "To consume context values in functional components",
        "To create a new context",
        "To manage local state",
        "To perform side effects",
      ],
      answer: "To consume context values in functional components",
      explanation:
        "The `useContext` hook allows functional components to access context values provided by a parent component without using render props or higher-order components. It simplifies consuming context by eliminating the need for a Consumer component.",
      hasCodeSyntax: false,
      code: ``,
    },
  ],

  reactEasy10: [
    {
      question: "What is a React component?",
      choices: [
        "A function or class that optionally accepts input and returns a React element",
        "A JavaScript function that manipulates the DOM directly",
        "An HTML element used in JSX",
        "A method to store global state",
      ],
      answer:
        "A function or class that optionally accepts input and returns a React element",
      explanation:
        "A React component is a reusable piece of UI logic that can accept inputs (props) and returns React elements describing what should appear on the screen. Components let you split the UI into independent, reusable pieces.",
      hasCodeSyntax: false,
      code: ``,
    },

    {
      question: "What is the purpose of the 'props' in React?",
      choices: [
        "To pass data from one component to another",
        "To manage component state",
        "To update the virtual DOM",
        "To handle user events",
      ],
      answer: "To pass data from one component to another",
      explanation:
        "`Props` are inputs to components that allow data to be passed from parent to child components. They are read-only, ensuring that components do not modify the data they receive, promoting unidirectional data flow.",
      hasCodeSyntax: false,
      code: ``,
    },

    {
      question:
        "Which React hook would you use to update the document title after the component renders?",
      choices: ["useEffect", "useState", "useRef", "useReducer"],
      answer: "useEffect",
      explanation:
        "The `useEffect` hook is used for side effects, such as updating the document title, fetching data, or setting up subscriptions. It runs after the render is committed to the screen.",
      hasCodeSyntax: false,
      code: ``,
    },

    {
      question:
        "How can you prevent unnecessary re-renders of a functional component in React?",
      choices: [
        "By using `React.memo` to memoize the component",
        "By using `useEffect`",
        "By using `useState`",
        "By using a return statement in JSX",
      ],
      answer: "By using `React.memo` to memoize the component",
      explanation:
        "`React.memo` is a higher-order component that memoizes the result of a component rendering. If the component's props haven't changed, it skips rendering and returns the cached result, preventing unnecessary re-renders.",
      hasCodeSyntax: false,
      code: ``,
    },

    {
      question: "What is the purpose of the `useReducer` hook in React?",
      choices: [
        "To manage complex state logic in functional components",
        "To perform side effects",
        "To consume context values",
        "To trigger re-renders",
      ],
      answer: "To manage complex state logic in functional components",
      explanation:
        "`useReducer` is an alternative to `useState` for managing state in functional components. It's particularly useful when the state logic is complex and involves multiple sub-values or when the next state depends on the previous one.",
      hasCodeSyntax: false,
      code: ``,
    },

    {
      question:
        "Which lifecycle method is invoked after a React component is initially rendered in the DOM?",
      choices: [
        "componentDidMount",
        "componentDidUpdate",
        "componentWillUnmount",
        "shouldComponentUpdate",
      ],
      answer: "componentDidMount",
      explanation:
        "`componentDidMount` is called immediately after a component is mounted. Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request.",
      hasCodeSyntax: false,
      code: ``,
    },

    {
      question:
        "Which hook allows you to persist values between renders without causing a re-render when updated?",
      choices: ["useRef", "useState", "useEffect", "useContext"],
      answer: "useRef",
      explanation:
        "`useRef` returns a mutable ref object whose `.current` property can hold any value, similar to an instance property on a class. Updating `.current` does not cause a re-render, making it useful for storing values that persist across renders.",
      hasCodeSyntax: false,
      code: ``,
    },

    {
      question:
        "What is the default behavior of `useEffect` when an empty dependency array is provided?",
      choices: [
        "It runs only once after the initial render",
        "It runs after every render of the component",
        "It runs only when the component unmounts",
        "It doesn't run at all",
      ],
      answer: "It runs only once after the initial render",
      explanation:
        "Providing an empty dependency array (`[]`) tells React that your effect doesn't depend on any values from props or state, so it only needs to run once, after the initial render, similar to `componentDidMount`.",
      hasCodeSyntax: false,
      code: ``,
    },

    {
      question: "What is React's `context` used for?",
      choices: [
        "To pass data through the component tree without manually passing props down at every level",
        "To manage the local state of a component",
        "To update the global state of a component",
        "To perform side effects in a component",
      ],
      answer:
        "To pass data through the component tree without manually passing props down at every level",
      explanation:
        "React's `context` provides a way to share values like themes, user information, or locale settings between components without having to explicitly pass a prop through every level of the tree.",
      hasCodeSyntax: false,
      code: ``,
    },

    {
      question: "What is the purpose of `PropTypes` in React?",
      choices: [
        "To perform type checking on the props passed to a component",
        "To define default values for props",
        "To manage component state",
        "To style React components",
      ],
      answer: "To perform type checking on the props passed to a component",
      explanation:
        "`PropTypes` is a typechecking feature that allows you to ensure that components receive props of the correct type. This can help catch bugs by validating prop types at runtime in development mode.",
      hasCodeSyntax: false,
      code: ``,
    },
  ],

  reactMedium3: [
    {
      question: "What is the purpose of 'React.Fragment' in React?",
      choices: [
        "To handle HTTP requests in React components",
        "To group multiple elements without adding extra nodes to the DOM",
        "To manage state in React components",
        "To handle event delegation in React",
      ],
      answer:
        "To group multiple elements without adding extra nodes to the DOM",
      explanation:
        "`React.Fragment` allows you to return multiple elements from a component's render method without creating an additional DOM element. This helps keep the DOM tree clean and avoids unnecessary wrapper elements like `<div>`.",
      hasCodeSyntax: false,
      code: ``,
    },

    {
      question:
        "What is the difference between `useEffect` and `useLayoutEffect` in React?",
      choices: [
        "`useEffect` runs after render, `useLayoutEffect` runs synchronously before painting the screen",
        "`useLayoutEffect` runs only on initial render, `useEffect` runs on every render",
        "`useEffect` can only be used for network requests, `useLayoutEffect` for DOM updates",
        "`useLayoutEffect` is used only in class components",
      ],
      answer:
        "`useEffect` runs after render, `useLayoutEffect` runs synchronously before painting the screen",
      explanation:
        "`useEffect` runs asynchronously after the component has rendered and the paint to the screen has occurred. In contrast, `useLayoutEffect` runs synchronously immediately after all DOM mutations but before the browser has a chance to paint, making it suitable for reading layout from the DOM and synchronously re-rendering.",
      hasCodeSyntax: false,
      code: ``,
    },

    {
      question: "What is 'prop drilling' in React?",
      choices: [
        "Passing a prop through multiple levels of components even if only the lowest-level component needs it",
        "The process of merging multiple state objects into a single prop",
        "A pattern where props are passed from a child component to a parent component",
        "A technique used for handling forms in React",
      ],
      answer:
        "Passing a prop through multiple levels of components even if only the lowest-level component needs it",
      explanation:
        "Prop drilling refers to the process of passing data from a parent component down to child components through props, even when intermediate components do not need the data. This can make code harder to maintain. Solutions like Context API or Redux can help avoid prop drilling.",
      hasCodeSyntax: false,
      code: ``,
    },
  ],

  reactMedium5: [
    {
      question:
        "What is the purpose of the `useImperativeHandle` hook in React?",
      choices: [
        "To customize the instance value that is exposed to parent components when using refs",
        "To manage complex state logic in functional components",
        "To perform side effects in components",
        "To create a mutable ref object that persists across renders",
      ],
      answer:
        "To customize the instance value that is exposed to parent components when using refs",
      explanation:
        "`useImperativeHandle` allows a child component to customize the value that is exposed to parent components when using `ref`. This is useful when you want to control which methods and properties are accessible, enhancing encapsulation and preventing misuse of the component's internal logic.",
      hasCodeSyntax: false,
      code: ``,
    },

    {
      question: "What is the 'children' prop in React?",
      choices: [
        "A prop used to pass values to child components",
        "A prop used to pass components nested inside a parent component",
        "A prop used to manage state in child components",
        "A prop used to fetch data from child components",
      ],
      answer: "A prop used to pass components nested inside a parent component",
      explanation:
        "The `children` prop is a special prop that allows components to receive and render child elements or components that are nested within them in JSX. It enables the creation of reusable wrapper components.",
      hasCodeSyntax: false,
      code: ``,
    },

    {
      question: "What is the `useCallback` hook used for in React?",
      choices: [
        "To memoize functions and prevent unnecessary re-renders",
        "To handle side effects in components",
        "To fetch data from APIs",
        "To optimize component mounting",
      ],
      answer: "To memoize functions and prevent unnecessary re-renders",
      explanation:
        "`useCallback` returns a memoized version of a callback function that only changes if one of the dependencies has changed. This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary re-renders.",
      hasCodeSyntax: false,
      code: ``,
    },

    {
      question: "What is the purpose of `React.PureComponent`?",
      choices: [
        "To prevent component re-renders when props and state have not changed",
        "To automatically bind methods to the component instance",
        "To handle errors in the component tree",
        "To create components with internal state",
      ],
      answer:
        "To prevent component re-renders when props and state have not changed",
      explanation:
        "`React.PureComponent` is similar to `React.Component`, but it implements `shouldComponentUpdate` with a shallow prop and state comparison. This means the component will not re-render if the props and state haven't changed, improving performance by preventing unnecessary renders.",
      hasCodeSyntax: false,
      code: ``,
    },

    {
      question: "What is an 'Error Boundary' in React?",
      choices: [
        "A component that catches JavaScript errors anywhere in its child component tree",
        "A method to handle asynchronous errors in React",
        "A way to prevent errors during the initial render",
        "A hook for handling errors in functional components",
      ],
      answer:
        "A component that catches JavaScript errors anywhere in its child component tree",
      explanation:
        "Error Boundaries are React components that catch JavaScript errors anywhere in their child component tree, log the errors, and display a fallback UI instead of the component tree that crashed. They are created by implementing either `componentDidCatch` lifecycle method in class components.",
      hasCodeSyntax: false,
      code: ``,
    },
  ],

  reactMedium10: [
    {
      question: "What is the purpose of `useMemo` in React?",
      choices: [
        "To memoize the result of an expensive function to avoid recalculating on every render",
        "To memoize a function to prevent re-renders",
        "To store state in the browser's local storage",
        "To manage side effects in functional components",
      ],
      answer:
        "To memoize the result of an expensive function to avoid recalculating on every render",
      explanation:
        "`useMemo` returns a memoized value. It only recomputes the memoized value when one of its dependencies has changed. This optimization helps to avoid expensive calculations on every render.",
      hasCodeSyntax: false,
      code: ``,
    },

    {
      question:
        "What is the difference between `useMemo` and `useCallback` hooks in React?",
      choices: [
        "`useMemo` memoizes values, `useCallback` memoizes functions",
        "`useMemo` memoizes functions, `useCallback` memoizes values",
        "`useMemo` and `useCallback` are identical in functionality",
        "`useMemo` is used for side effects, `useCallback` is used for event handling",
      ],
      answer: "`useMemo` memoizes values, `useCallback` memoizes functions",
      explanation:
        "`useMemo` is used to memoize the result of a function (a value), whereas `useCallback` is used to memoize the function itself. `useCallback(fn, deps)` is equivalent to `useMemo(() => fn, deps)`, but it's clearer to use `useCallback` when you intend to memoize a function.",
      hasCodeSyntax: false,
      code: ``,
    },

    {
      question:
        "How can you optimize performance when rendering lists in React?",
      choices: [
        "By using the `key` prop and memoizing components",
        "By using local state",
        "By using `React.StrictMode`",
        "By directly manipulating the DOM",
      ],
      answer: "By using the `key` prop and memoizing components",
      explanation:
        "Using the `key` prop helps React identify which items have changed, are added, or are removed, enhancing performance in list rendering. Memoizing components with `React.memo` or `useMemo` can prevent unnecessary re-renders of list items that haven't changed.",
      hasCodeSyntax: false,
      code: ``,
    },

    {
      question:
        "What will happen if the `key` prop is not used when rendering a list of items in React?",
      choices: [
        "React will still render the list but may have performance issues or incorrectly update the DOM",
        "React will throw an error",
        "React will prevent the list from rendering",
        "React will automatically assign unique keys",
      ],
      answer:
        "React will still render the list but may have performance issues or incorrectly update the DOM",
      explanation:
        "Without a `key` prop, React can render the list but may not correctly identify which items have changed, leading to inefficient rendering and potential UI bugs due to incorrect DOM updates.",
      hasCodeSyntax: false,
      code: ``,
    },

    {
      question: "What is the difference between `useState` and `useReducer`?",
      choices: [
        "`useState` is used for simpler state, while `useReducer` is used for more complex state logic",
        "`useState` is synchronous, while `useReducer` is asynchronous",
        "`useReducer` is used in class components, while `useState` is used in functional components",
        "`useState` automatically persists data in localStorage, while `useReducer` does not",
      ],
      answer:
        "`useState` is used for simpler state, while `useReducer` is used for more complex state logic",
      explanation:
        "`useState` is suitable for managing simple state transformations, while `useReducer` is preferred for complex state logic involving multiple sub-values or when the next state depends on the previous one. `useReducer` also provides a more predictable state transition through reducer functions.",
      hasCodeSyntax: false,
      code: ``,
    },

    {
      question: "What is the purpose of the `useTransition` hook in React?",
      choices: [
        "To allow state updates to be marked as non-urgent",
        "To handle transitions between different components",
        "To manage CSS transitions in components",
        "To perform side effects in functional components",
      ],
      answer: "To allow state updates to be marked as non-urgent",
      explanation:
        "`useTransition` allows you to mark state updates as transitions, which lets React prioritize urgent updates (like responding to user input) over non-urgent ones. This helps in creating smoother user experiences by avoiding blocking renders.",
      hasCodeSyntax: false,
      code: ``,
    },

    {
      question: "What is 'lifting state up' in React?",
      choices: [
        "Moving state to the closest common ancestor component to share it between components",
        "Sharing state between components without props",
        "Moving state to a child component to prevent re-renders",
        "Using the `useContext` hook to manage state",
      ],
      answer:
        "Moving state to the closest common ancestor component to share it between components",
      explanation:
        "Lifting state up involves moving shared state to the closest common ancestor of the components that need it. This allows multiple components to access and modify the shared state via props, ensuring data consistency.",
      hasCodeSyntax: false,
      code: ``,
    },

    {
      question: "What is the purpose of the `useRef` hook?",
      choices: [
        "To create a mutable object that persists between renders without triggering re-renders",
        "To store component state",
        "To manage asynchronous side effects",
        "To pass values between parent and child components",
      ],
      answer:
        "To create a mutable object that persists between renders without triggering re-renders",
      explanation:
        "`useRef` returns a mutable ref object whose `.current` property can hold any value. Updating this property does not cause the component to re-render. It's commonly used to access DOM elements directly or store mutable variables.",
      hasCodeSyntax: false,
      code: ``,
    },

    {
      question: "What is the purpose of `React.lazy` function?",
      choices: [
        "To create components that load lazily through code splitting",
        "To optimize components by memoizing their props",
        "To handle errors in components",
        "To defer the rendering of components until after the initial render",
      ],
      answer: "To create components that load lazily through code splitting",
      explanation:
        "`React.lazy` lets you render a dynamic import as a regular component. It enables code splitting by allowing components to be loaded lazily, reducing the initial load time of the application.",
      hasCodeSyntax: false,
      code: ``,
    },

    {
      question:
        "What is the difference between controlled and uncontrolled components in React?",
      choices: [
        "Controlled components manage their value through React state, while uncontrolled components manage their value through the DOM",
        "Controlled components manage their value through Redux, while uncontrolled components use local state",
        "Controlled components require `useReducer`, while uncontrolled components use `useState`",
        "There is no difference between controlled and uncontrolled components",
      ],
      answer:
        "Controlled components manage their value through React state, while uncontrolled components manage their value through the DOM",
      explanation:
        "In controlled components, form data is handled by React state, providing explicit control over the data flow. Uncontrolled components rely on the DOM to manage form data, typically accessed using refs. Controlled components are generally preferred for their predictability.",
      hasCodeSyntax: false,
      code: ``,
    },
  ],

  reactHard3: [
    {
      question: "What is the purpose of `React.lazy` and `Suspense` in React?",
      choices: [
        "To handle asynchronous side effects in functional components",
        "To lazily load components for code splitting",
        "To manage global state across multiple components",
        "To control when components should re-render",
      ],
      answer: "To lazily load components for code splitting",
      explanation:
        "`React.lazy` allows you to load components lazily through code splitting without needing additional libraries. `Suspense` lets you specify a fallback component (like a loader) to display while the lazy component is loading. Together, they help optimize the application's performance by reducing the bundle size and improving load times.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question: "Which of the following is true about reconciliation in React?",
      choices: [
        "It ensures that the virtual DOM and the real DOM are always synchronized",
        "It is the process of diffing the old virtual DOM and the new virtual DOM to minimize real DOM updates",
        "It allows state to be shared between components without using context",
        "It is the process of merging multiple state objects in a single component",
      ],
      answer:
        "It is the process of diffing the old virtual DOM and the new virtual DOM to minimize real DOM updates",
      explanation:
        "Reconciliation is React's process of comparing the previous virtual DOM tree with the new virtual DOM tree to determine the minimal set of changes needed to update the real DOM. This diffing algorithm makes React efficient by reducing unnecessary DOM manipulations, which are costly in terms of performance.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question:
        "What will happen if you call `setState()` in a React component's constructor?",
      choices: [
        "It will result in an error",
        "It will cause an infinite loop",
        "It will not cause a re-render",
        "It will re-render the component immediately",
      ],
      answer: "It will result in an error",
      explanation:
        "Calling `setState()` in the constructor of a React class component will result in an error because the component is not yet fully initialized. The constructor is meant for setting up the initial state directly (e.g., `this.state = { ... }`), not for updating it via `setState()`. Using `setState()` here can lead to unexpected behavior or errors.",
      hasCodeSyntax: false,
      code: ``,
    },
  ],

  reactHard5: [
    {
      question:
        "What is the difference between `getDerivedStateFromProps` and `componentDidUpdate` in React?",
      choices: [
        "`getDerivedStateFromProps` is used to sync props with state before rendering, while `componentDidUpdate` is used after rendering for side effects",
        "`componentDidUpdate` is only available in functional components, while `getDerivedStateFromProps` is for class components",
        "`getDerivedStateFromProps` triggers a re-render, while `componentDidUpdate` does not",
        "`componentDidUpdate` is used to prevent re-renders, while `getDerivedStateFromProps` forces them",
      ],
      answer:
        "`getDerivedStateFromProps` is used to sync props with state before rendering, while `componentDidUpdate` is used after rendering for side effects",
      explanation:
        "`getDerivedStateFromProps` is a static lifecycle method invoked just before rendering, allowing the component to update its state based on changes in props. `componentDidUpdate` is called after the component has re-rendered, making it suitable for performing side effects like network requests or DOM manipulations based on previous state or props.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question:
        "What will happen if you update state directly without using `setState` in a class component?",
      choices: [
        "The component will not re-render with the updated state",
        "The component will re-render as expected",
        "An error will be thrown at runtime",
        "The state will be updated in the virtual DOM, but not in the real DOM",
      ],
      answer: "The component will not re-render with the updated state",
      explanation:
        "Directly modifying `this.state` without using `setState()` in a class component bypasses React's state management. React won't know that the state has changed, so it won't schedule a re-render, and the UI will not reflect the updated state. Always use `setState()` to ensure React updates the component appropriately.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question: "How does `React.memo` differ from `useMemo` in React?",
      choices: [
        "`React.memo` memoizes components, while `useMemo` memoizes values or functions",
        "`React.memo` is used in functional components, while `useMemo` is used in class components",
        "`React.memo` can only be used with context, while `useMemo` can be used globally",
        "`useMemo` only works with numbers and strings, while `React.memo` works with objects",
      ],
      answer:
        "`React.memo` memoizes components, while `useMemo` memoizes values or functions",
      explanation:
        "`React.memo` is a higher-order component that wraps a functional component to prevent unnecessary re-renders when the props haven't changed. `useMemo` is a hook that memoizes the result of a function computation, re-evaluating only when its dependencies change. It helps optimize expensive calculations within a component.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question:
        "What is the purpose of the `useImperativeHandle` hook in React?",
      choices: [
        "To customize the instance value that is exposed to parent components when using refs",
        "To manage complex state logic in functional components",
        "To perform side effects in components",
        "To create a mutable ref object that persists across renders",
      ],
      answer:
        "To customize the instance value that is exposed to parent components when using refs",
      explanation:
        "`useImperativeHandle` allows a child component to expose a custom ref object to the parent component when using `forwardRef`. This enables the parent to access specific methods or properties defined in the child, enhancing encapsulation by controlling what is exposed.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question: "What is the purpose of 'Error Boundaries' in React?",
      choices: [
        "To catch JavaScript errors in components and display a fallback UI",
        "To handle async code and promises in class components",
        "To prevent components from re-rendering when an error occurs",
        "To manage error states globally across the application",
      ],
      answer:
        "To catch JavaScript errors in components and display a fallback UI",
      explanation:
        "Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of crashing the whole application. They are created by implementing `componentDidCatch` and `getDerivedStateFromError` lifecycle methods in class components.",
      hasCodeSyntax: false,
      code: ``,
    },
  ],

  reactHard10: [
    {
      question:
        "What is the difference between `React.Context` and `Redux` for state management?",
      choices: [
        "`Context` is built into React, while `Redux` is a third-party library for predictable state management",
        "`Context` is for global state, while `Redux` is for local state",
        "`Redux` allows bi-directional data flow, while `Context` does not",
        "`Context` manages asynchronous state, while `Redux` only manages synchronous state",
      ],
      answer:
        "`Context` is built into React, while `Redux` is a third-party library for predictable state management",
      explanation:
        "`React.Context` is a built-in feature that allows for simple state sharing across components without prop drilling. `Redux` is a third-party library that provides a more structured and predictable state management system, suitable for larger applications with complex state interactions.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question:
        "Which lifecycle method is called when an error is thrown in a descendant component?",
      choices: [
        "`componentDidCatch`",
        "`componentDidUpdate`",
        "`componentWillUnmount`",
        "`getDerivedStateFromProps`",
      ],
      answer: "`componentDidCatch`",
      explanation:
        "`componentDidCatch` is a lifecycle method used in error boundaries to catch JavaScript errors in the component tree below them. It receives the error and additional information, allowing developers to handle the error gracefully and display a fallback UI.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question:
        "What will happen if you call `setState` inside `componentDidUpdate` without a conditional check?",
      choices: [
        "It will cause an infinite loop of re-renders",
        "It will only trigger one re-render",
        "It will throw a runtime error",
        "It will optimize the component rendering process",
      ],
      answer: "It will cause an infinite loop of re-renders",
      explanation:
        "Calling `setState` inside `componentDidUpdate` without a condition will trigger a re-render, which in turn calls `componentDidUpdate` again, creating an infinite loop. To prevent this, you should wrap `setState` calls in a condition that checks for specific changes in props or state.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question:
        "What is the purpose of `getSnapshotBeforeUpdate` lifecycle method?",
      choices: [
        "To capture some DOM properties (like scroll position) before updates are applied to the DOM",
        "To handle asynchronous state updates in class components",
        "To capture the previous state of the component before rendering",
        "To control the re-rendering behavior of child components",
      ],
      answer:
        "To capture some DOM properties (like scroll position) before updates are applied to the DOM",
      explanation:
        "`getSnapshotBeforeUpdate` is invoked just before the DOM is updated. It allows you to capture information (e.g., scroll position) from the DOM before it changes. The value returned from this method is then passed as a parameter to `componentDidUpdate`.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question: "What does the `useLayoutEffect` hook do in React?",
      choices: [
        "It fires synchronously after DOM updates but before the browser paints the screen",
        "It fires after every render but doesn't block the browser from painting",
        "It is used only for side effects involving data fetching",
        "It replaces `useEffect` in class components",
      ],
      answer:
        "It fires synchronously after DOM updates but before the browser paints the screen",
      explanation:
        "`useLayoutEffect` runs synchronously after all DOM mutations but before the browser has a chance to paint. This makes it suitable for reading layout from the DOM and synchronously re-rendering. It's similar to `componentDidMount` and `componentDidUpdate` in class components.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question:
        "What will happen if you pass `null` as the second argument to `useEffect`?",
      choices: [
        "React will throw an error",
        "The effect will run after every render",
        "The effect will only run once",
        "The effect will never run",
      ],
      answer: "React will throw an error",
      explanation:
        "Passing `null` as the dependencies array to `useEffect` is invalid and will cause React to throw an error. The dependencies array should be either omitted (to run after every render), empty `[]` (to run once), or contain variables that the effect depends on.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question: "What is the purpose of `StrictMode` in React?",
      choices: [
        "To highlight potential problems in an application and help with identifying unsafe lifecycles",
        "To prevent React from running in production mode",
        "To enforce synchronous rendering in all components",
        "To enable concurrent mode",
      ],
      answer:
        "To highlight potential problems in an application and help with identifying unsafe lifecycles",
      explanation:
        "`StrictMode` is a tool for highlighting potential issues in an application. It activates additional checks and warnings for its descendants, such as identifying components with unsafe lifecycle methods, deprecated APIs, or unexpected side effects.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question:
        "What is the main difference between `useCallback` and `useMemo`?",
      choices: [
        "`useCallback` memoizes functions, while `useMemo` memoizes the return value of a function",
        "`useCallback` triggers re-renders, while `useMemo` prevents re-renders",
        "`useCallback` is only used with functions, while `useMemo` is only used with components",
        "`useCallback` memoizes components, while `useMemo` memoizes state",
      ],
      answer:
        "`useCallback` memoizes functions, while `useMemo` memoizes the return value of a function",
      explanation:
        "`useCallback` returns a memoized version of the callback function that only changes if one of the dependencies has changed. `useMemo` returns a memoized value that only recomputes when its dependencies change. Both are used to optimize performance but in different scenarios.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question: "What is the purpose of `React.forwardRef` in React?",
      choices: [
        "To pass a ref through a component to one of its children",
        "To create a higher-order component",
        "To manage state in class components",
        "To handle errors in components",
      ],
      answer: "To pass a ref through a component to one of its children",
      explanation:
        "`React.forwardRef` is a method that lets you forward a ref automatically to one of the child components. This is useful when you need to access a DOM element or a child component's methods from a parent component.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question:
        "What will happen if you forget to provide a `key` when rendering a list of components in React?",
      choices: [
        "React will still render the list but may have performance issues",
        "React will throw a compilation error",
        "React will automatically assign unique keys",
        "React will prevent the list from rendering",
      ],
      answer:
        "React will still render the list but may have performance issues",
      explanation:
        "If you don't provide a `key` prop when rendering a list, React can render the list but may have trouble keeping track of items, leading to inefficient updates and potential bugs. React will also display a warning in the console about missing keys.",
      hasCodeSyntax: false,
      code: ``,
    },
  ],

  nextEasy3: [
    {
      question: "What is the purpose of `next/head` in Next.js?",
      choices: [
        "To manage the HTML head section for a page, allowing you to set meta tags, titles, and other head elements",
        "To handle routing between pages",
        "To fetch data from an API",
        "To optimize images on the page",
      ],
      answer:
        "To manage the HTML head section for a page, allowing you to set meta tags, titles, and other head elements",
      explanation:
        "`next/head` is a built-in component in Next.js that allows you to modify the `<head>` section of your page. You can use it to set the page title, meta tags, link tags, and other elements that should be included in the head of the HTML document.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question:
        "What is the default folder for static assets like images in Next.js?",
      choices: ["/static", "/public", "/assets", "/images"],
      answer: "/public",
      explanation:
        "In Next.js, the `public` folder at the root of your project is used to serve static assets like images, fonts, and other files. Files inside `public` can be referenced from the root of the application, similar to how files are served in a traditional web server.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question: "How do you create API routes in Next.js?",
      choices: [
        "By adding JavaScript files to the `api` folder inside the `pages` directory",
        "By creating components with `getServerSideProps`",
        "By using `next/router`",
        "By installing an additional plugin",
      ],
      answer:
        "By adding JavaScript files to the `api` folder inside the `pages` directory",
      explanation:
        "In Next.js, API routes can be created by adding JavaScript or TypeScript files inside the `pages/api` directory. Each file defines an API endpoint that can be accessed via HTTP requests, allowing you to build serverless API endpoints within your Next.js application.",
      hasCodeSyntax: false,
      code: ``,
    },
  ],

  nextEasy5: [
    {
      question:
        "What feature in Next.js 14 allows you to define loading UI per route segment?",
      choices: [
        "Suspense",
        "Dynamic Routes",
        "Route Segments",
        "Loading UI with `appDir`",
      ],
      answer: "Loading UI with `appDir`",
      explanation:
        "Next.js 14, along with the `appDir` structure, allows you to define loading states for each route segment. This enables granular control over the loading experience while navigating through different parts of an application.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question:
        "What is the purpose of Next.js Middleware introduced in Next.js 12?",
      choices: [
        "To allow code to run before a request is completed, enabling features like authentication and logging",
        "To handle CSS styling in components",
        "To manage global state across components",
        "To optimize images and static assets",
      ],
      answer:
        "To allow code to run before a request is completed, enabling features like authentication and logging",
      explanation:
        "Next.js Middleware allows developers to run code before a request is completed, enabling features such as authentication, logging, and dynamic routing. Middleware runs on the Edge Runtime and can modify the response by rewriting, redirecting, or setting headers.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question: "How can you enable TypeScript support in a Next.js project?",
      choices: [
        "Install TypeScript and rename your files to `.ts` or `.tsx` extensions",
        "Change the configuration in `next.config.js` to `typescript: true`",
        "Use a special plugin provided by Next.js",
        "TypeScript is not supported in Next.js",
      ],
      answer:
        "Install TypeScript and rename your files to `.ts` or `.tsx` extensions",
      explanation:
        "To use TypeScript in a Next.js project, you can install TypeScript and any necessary types, then rename your files to use the `.ts` or `.tsx` extension. Next.js will automatically configure and set up TypeScript for your project.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question:
        "What is the function of `next.config.js` in a Next.js project?",
      choices: [
        "It allows you to customize and configure Next.js settings",
        "It handles the routing between pages",
        "It is used to manage environment variables",
        "It stores the initial state of your application",
      ],
      answer: "It allows you to customize and configure Next.js settings",
      explanation:
        "`next.config.js` is a configuration file where you can customize various settings for your Next.js project, such as page extensions, webpack configuration, environment variables, and other build-time configurations.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question: "In Next.js, how do you create a custom 404 error page?",
      choices: [
        "By creating a `404.js` file in the `pages` directory",
        "By setting an error message in `next.config.js`",
        "By overriding the default error component",
        "By using a special `ErrorBoundary` component",
      ],
      answer: "By creating a `404.js` file in the `pages` directory",
      explanation:
        "To create a custom 404 error page in Next.js, you can add a `404.js` file in the `pages` directory. Next.js will automatically use this page whenever a 404 error occurs, allowing you to customize the user experience for not-found pages.",
      hasCodeSyntax: false,
      code: ``,
    },
  ],

  nextEasy10: [
    {
      question: "What is the purpose of `getStaticProps` in Next.js?",
      choices: [
        "To fetch data at build time for static generation",
        "To fetch data on the client-side after the page loads",
        "To enable server-side rendering for API routes",
        "To manage client-side navigation",
      ],
      answer: "To fetch data at build time for static generation",
      explanation:
        "`getStaticProps` is used to fetch data at build time for pages that are statically generated, ensuring that data is fetched once during the build process and the page can be served quickly.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question:
        "Which of the following allows for client-side navigation in Next.js?",
      choices: [
        "`next/link`",
        "`getStaticProps`",
        "`getServerSideProps`",
        "`next/router`",
      ],
      answer: "`next/link`",
      explanation:
        "`next/link` is a component in Next.js that enables client-side navigation between different pages, ensuring that transitions happen without a full page reload.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question: "What is `next/image` used for in Next.js?",
      choices: [
        "To handle image optimization and lazy loading",
        "To fetch external API data",
        "To handle form inputs in Next.js",
        "To manage authentication",
      ],
      answer: "To handle image optimization and lazy loading",
      explanation:
        "`next/image` is a built-in component in Next.js used for automatic image optimization, lazy loading, and responsive images, improving performance across devices.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question:
        "What does the `revalidate` property in `getStaticProps` enable?",
      choices: [
        "Incremental Static Regeneration (ISR)",
        "Server-side rendering",
        "Automatic page refresh",
        "Client-side routing",
      ],
      answer: "Incremental Static Regeneration (ISR)",
      explanation:
        "The `revalidate` property in `getStaticProps` enables Incremental Static Regeneration (ISR), allowing statically generated pages to be updated on a regular interval without a full rebuild of the app.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question: "What is the purpose of `appDir` in Next.js 13+?",
      choices: [
        "To introduce a new routing system and organize pages and layouts",
        "To handle client-side data fetching",
        "To manage global state",
        "To improve component performance with memoization",
      ],
      answer:
        "To introduce a new routing system and organize pages and layouts",
      explanation:
        "`appDir` in Next.js 13+ introduces a new folder structure for organizing routes and layouts, simplifying the process of managing large applications and supporting features like layouts, nested routes, and server-side components.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question:
        "Which new Next.js feature helps you handle server-side data mutations?",
      choices: ["Server Actions", "ISR", "Dynamic Routes", "`getStaticProps`"],
      answer: "Server Actions",
      explanation:
        "Server Actions, introduced in Next.js 14, allow developers to handle server-side data mutations directly, simplifying API routes and enabling more seamless server-side logic.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question: "What is the purpose of dynamic routes in Next.js?",
      choices: [
        "To create pages with variable paths like `/posts/[id]`",
        "To generate static content at build time",
        "To handle user authentication",
        "To fetch data on every client request",
      ],
      answer: "To create pages with variable paths like `/posts/[id]`",
      explanation:
        "Dynamic routes in Next.js allow you to create pages with dynamic paths, such as `/posts/[id]`, enabling you to handle pages with varying parameters.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question:
        "Which Next.js feature automatically optimizes JavaScript bundles?",
      choices: [
        "Automatic Code Splitting",
        "Server-side Rendering",
        "Static Generation",
        "Incremental Static Regeneration",
      ],
      answer: "Automatic Code Splitting",
      explanation:
        "Next.js automatically splits JavaScript bundles so that only the code required for the current page is loaded, improving performance by reducing the amount of JavaScript that needs to be loaded for each page.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question:
        "How can you perform client-side navigation programmatically in Next.js?",
      choices: [
        "Using the `next/router` API",
        "Using `getStaticProps`",
        "Using Server Actions",
        "Using `useEffect`",
      ],
      answer: "Using the `next/router` API",
      explanation:
        "The `next/router` API provides methods like `push()` and `replace()` to programmatically navigate between pages on the client-side without a full page reload.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question:
        "What is the main advantage of using `getServerSideProps` in Next.js?",
      choices: [
        "It allows you to fetch data and render the page on every request",
        "It improves performance by generating static pages",
        "It pre-fetches data on the client-side",
        "It handles automatic form submissions",
      ],
      answer:
        "It allows you to fetch data and render the page on every request",
      explanation:
        "`getServerSideProps` is used in Next.js for server-side rendering, where data is fetched on each request and the page is rendered on the server before being sent to the client.",
      hasCodeSyntax: false,
      code: ``,
    },
  ],

  nextMedium3: [
    {
      question:
        "What is the main purpose of the `middleware` feature in Next.js?",
      choices: [
        "To handle static generation of pages",
        "To intercept and modify requests and responses before they reach the application",
        "To manage global state in the app",
        "To fetch data on the server-side",
      ],
      answer:
        "To intercept and modify requests and responses before they reach the application",
      explanation:
        "Next.js Middleware allows developers to run code before a request is completed. It can modify requests or responses, redirect users, or even block requests based on conditions like authentication, localization, or feature flags. Middleware runs on the Edge Runtime, providing low-latency responses.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question: "What is the role of the `App Router` in Next.js 14?",
      choices: [
        "To handle client-side navigation with hooks",
        "To define a new way to manage pages, layouts, and nested routes",
        "To configure dynamic API routes",
        "To automatically manage server-side data mutations",
      ],
      answer: "To define a new way to manage pages, layouts, and nested routes",
      explanation:
        "In Next.js 14, the `App Router` introduces a new file-system-based routing system under the `app` directory. It allows developers to create nested layouts, co-locate components, and utilize React Server Components for improved performance and organization of complex applications.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question:
        "What is `Incremental Static Regeneration (ISR)` in Next.js used for?",
      choices: [
        "To enable incremental static page generation and regeneration after a set time interval",
        "To fetch data on every client-side navigation",
        "To replace server-side rendering for real-time data",
        "To create API routes that regenerate periodically",
      ],
      answer:
        "To enable incremental static page generation and regeneration after a set time interval",
      explanation:
        "Incremental Static Regeneration (ISR) allows Next.js to update existing pages by re-rendering them in the background as traffic comes in. With ISR, you can retain the benefits of static generation and cache invalidation without needing to rebuild the entire site.",
      hasCodeSyntax: false,
      code: ``,
    },
  ],

  nextMedium5: [
    {
      question: "What is the purpose of the `usePathname` hook in Next.js 14?",
      choices: [
        "To fetch server-side data based on the current route",
        "To get the current pathname in the app for client-side routing",
        "To define dynamic API routes",
        "To manage state across different pages",
      ],
      answer: "To get the current pathname in the app for client-side routing",
      explanation:
        "`usePathname` is a built-in hook in Next.js 14 that returns the current URL's pathname. It allows developers to access and utilize the current route information within client-side components, enabling conditional rendering or logic based on the active path.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question:
        "What does the `dynamic = true` configuration do in the new App Router of Next.js 14?",
      choices: [
        "It enables dynamic routing based on query parameters",
        "It enables dynamic content fetching and disables static generation",
        "It handles dynamic imports for optimized bundle size",
        "It triggers a server-side render after a dynamic client-side action",
      ],
      answer:
        "It enables dynamic content fetching and disables static generation",
      explanation:
        "Setting `dynamic = true` in the App Router configuration tells Next.js to render the page dynamically on each request, disabling static optimization for that page. This is useful when you need to fetch data on every request or cannot determine the content at build time.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question:
        "Which new feature in Next.js 14 allows for server-side mutation of data without creating separate API routes?",
      choices: [
        "Server Actions",
        "API Middleware",
        "Dynamic Imports",
        "Server Components",
      ],
      answer: "Server Actions",
      explanation:
        "Server Actions in Next.js 14 enable developers to define server-side functions that can be invoked from client components without setting up separate API endpoints. This simplifies data mutations by allowing direct interaction with server-side logic from the client.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question: "What is `parallel routes` in Next.js 14?",
      choices: [
        "A routing system that allows multiple layouts to be rendered in parallel",
        "A method for managing client-side data fetching",
        "A way to preload multiple pages in parallel for faster navigation",
        "A feature for handling server-side data asynchronously",
      ],
      answer:
        "A routing system that allows multiple layouts to be rendered in parallel",
      explanation:
        "`Parallel routes` in Next.js 14 enable developers to define multiple routes that can be rendered simultaneously within the same page. This allows for more flexible UI patterns, such as complex dashboards or split views, by combining different components or layouts in parallel.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question: "What is the purpose of `generateStaticParams` in Next.js?",
      choices: [
        "To generate parameters for static paths in dynamic routes at build time",
        "To fetch static assets from the public folder",
        "To handle client-side routing with static paths",
        "To regenerate pages dynamically on the server",
      ],
      answer:
        "To generate parameters for static paths in dynamic routes at build time",
      explanation:
        "`generateStaticParams` is used in Next.js to define a list of dynamic route parameters that should be statically generated at build time. This function allows you to specify which dynamic paths to pre-render, enhancing performance and SEO for those pages.",
      hasCodeSyntax: false,
      code: ``,
    },
  ],

  nextMedium10: [
    {
      question: "What does the `serverComponents` option enable in Next.js 14?",
      choices: [
        "It enables server-side components that run exclusively on the server",
        "It allows for client-side component hydration",
        "It allows components to share state across the app",
        "It handles static page generation",
      ],
      answer:
        "It enables server-side components that run exclusively on the server",
      explanation:
        "The `serverComponents` option allows Next.js to use React Server Components, which run only on the server. This reduces the amount of JavaScript sent to the client, improves performance, and enables seamless data fetching directly within components without client-side data fetching libraries.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question: "What is the purpose of `next/dynamic` in Next.js?",
      choices: [
        "To dynamically import components for code splitting",
        "To handle dynamic routes in Next.js",
        "To manage dynamic API routes",
        "To enable server-side rendering for dynamic data",
      ],
      answer: "To dynamically import components for code splitting",
      explanation:
        "`next/dynamic` is a function that allows you to dynamically import components in Next.js applications. It enables code splitting by loading components only when they are needed, reducing initial load times and improving performance by splitting the JavaScript bundle.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question:
        "What is the difference between `next/link` and `next/router` in Next.js?",
      choices: [
        "`next/link` is used for client-side navigation in JSX, while `next/router` allows programmatic navigation in JavaScript code",
        "`next/link` handles server-side routing, while `next/router` handles client-side routing",
        "`next/link` is for linking to external sites, while `next/router` is for internal navigation",
        "`next/link` is used for dynamic routes, while `next/router` is used for static routes",
      ],
      answer:
        "`next/link` is used for client-side navigation in JSX, while `next/router` allows programmatic navigation in JavaScript code",
      explanation:
        "`next/link` is a component that enables client-side navigation between routes when used in JSX. `next/router` is a module that provides an API for routing and navigation, allowing you to navigate programmatically within your JavaScript code (e.g., in event handlers or effects).",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question:
        "What is the difference between `useEffect` and `useLayoutEffect` in Next.js?",
      choices: [
        "`useEffect` runs asynchronously after the render, while `useLayoutEffect` runs synchronously before the browser paints",
        "`useLayoutEffect` is used only for server-side rendering, while `useEffect` is client-side",
        "`useEffect` is used for data fetching, while `useLayoutEffect` handles layout updates",
        "`useEffect` runs before the render, while `useLayoutEffect` runs after",
      ],
      answer:
        "`useEffect` runs asynchronously after the render, while `useLayoutEffect` runs synchronously before the browser paints",
      explanation:
        "`useEffect` is used for side effects that do not require immediate execution after rendering, such as data fetching. It runs after the browser has painted the screen. `useLayoutEffect` runs synchronously after all DOM mutations but before the browser repaints, making it suitable for operations that need to happen before the screen is updated, like reading layout measurements.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question:
        "What is the function of the `rewrites` configuration in `next.config.js`?",
      choices: [
        "To map incoming request paths to different destination paths without changing the URL displayed to the user",
        "To redirect users from one URL to another permanently",
        "To handle dynamic imports for code splitting",
        "To configure server-side rendering settings",
      ],
      answer:
        "To map incoming request paths to different destination paths without changing the URL displayed to the user",
      explanation:
        "The `rewrites` configuration in `next.config.js` allows you to rewrite URLs by mapping an incoming request path to a different destination path. This happens internally and does not change the URL visible to the user, enabling clean URLs and proxying requests without exposing internal paths.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question:
        "What is the difference between the `pages` directory and the `app` directory in Next.js 13+?",
      choices: [
        "`pages` directory uses the Pages Router, while `app` directory uses the new App Router with server components",
        "`pages` directory is for API routes, `app` directory is for pages",
        "`pages` directory supports server-side rendering, `app` directory supports static generation only",
        "There is no difference; both are used for routing pages",
      ],
      answer:
        "`pages` directory uses the Pages Router, while `app` directory uses the new App Router with server components",
      explanation:
        "In Next.js 13+, the `app` directory introduces the App Router, which uses React Server Components and a new routing system with layouts and nested routes. The `pages` directory uses the traditional Pages Router with client components and does not support the new features introduced with the App Router.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question: "What is the purpose of the `edge` runtime in Next.js?",
      choices: [
        "To run Next.js middleware and functions closer to the user for lower latency",
        "To handle client-side data fetching",
        "To enable server-side rendering on the client",
        "To improve image optimization performance",
      ],
      answer:
        "To run Next.js middleware and functions closer to the user for lower latency",
      explanation:
        "The `edge` runtime in Next.js allows code to run on the Edge Network, closer to the end-user's location. This reduces latency for middleware and API routes, improving performance by handling requests quickly and efficiently at the network edge.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question: "What is the purpose of `next/head` in Next.js?",
      choices: [
        "To modify the `<head>` section of the page, allowing custom meta tags and titles",
        "To handle routing between pages",
        "To manage global state",
        "To optimize images",
      ],
      answer:
        "To modify the `<head>` section of the page, allowing custom meta tags and titles",
      explanation:
        "`next/head` is a built-in component in Next.js that enables you to modify the contents of the `<head>` section of your HTML document. You can use it to set page titles, meta descriptions, link tags, and other metadata necessary for SEO and proper page rendering.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question:
        "What is the difference between `getStaticProps` and `getServerSideProps` in Next.js?",
      choices: [
        "`getStaticProps` generates pages at build time, while `getServerSideProps` generates pages at request time",
        "`getServerSideProps` is used for static generation, while `getStaticProps` is used for server-side rendering",
        "`getStaticProps` fetches data from external APIs, while `getServerSideProps` handles client-side routing",
        "`getStaticProps` runs on the client, while `getServerSideProps` runs on the server",
      ],
      answer:
        "`getStaticProps` generates pages at build time, while `getServerSideProps` generates pages at request time",
      explanation:
        "`getStaticProps` is used to fetch data at build time for static generation, resulting in faster load times but data that does not change per request. `getServerSideProps` fetches data on each request, enabling server-side rendering with up-to-date data but potentially slower response times due to fetching data on-demand.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question:
        "How does `React Server Components` benefit performance in Next.js?",
      choices: [
        "By reducing client-side JavaScript and running components only on the server",
        "By fetching data more quickly on the client-side",
        "By allowing server-side data fetching in API routes",
        "By improving client-side rendering speed for components",
      ],
      answer:
        "By reducing client-side JavaScript and running components only on the server",
      explanation:
        "React Server Components allow components to be rendered on the server without including their code in the client-side JavaScript bundle. This reduces the amount of JavaScript that needs to be sent to the client, improving load times and performance, especially for complex applications.",
      hasCodeSyntax: false,
      code: ``,
    },
  ],

  nextHard3: [
    {
      question: "What does the `edge runtime` in Next.js 14 provide?",
      choices: [
        "It allows Next.js to run serverless functions closer to the user using edge networks",
        "It manages client-side caching of static assets",
        "It handles real-time database updates",
        "It ensures that pages are pre-rendered at build time",
      ],
      answer:
        "It allows Next.js to run serverless functions closer to the user using edge networks",
      explanation:
        "The `edge runtime` in Next.js 14 enables running serverless functions on edge networks, which are servers distributed globally closer to end-users. This reduces latency by processing requests geographically closer to users, improving performance for dynamic content and personalized experiences.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question:
        "How do `parallel routes` differ from regular routes in Next.js 14?",
      choices: [
        "Parallel routes allow rendering multiple routes simultaneously in the same layout",
        "Parallel routes automatically optimize data fetching for multiple pages",
        "Parallel routes split bundles to optimize client-side performance",
        "Parallel routes allow for concurrent client-side state management",
      ],
      answer:
        "Parallel routes allow rendering multiple routes simultaneously in the same layout",
      explanation:
        "`Parallel routes` in Next.js 14 enable the rendering of multiple routes or components simultaneously within the same layout. This is useful for complex UI patterns like dashboards or split views, where different sections of the page need to render different content independently.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question:
        "What is the purpose of `React Server Components` in Next.js 14?",
      choices: [
        "To enable server-side rendering with dynamic data fetching",
        "To allow certain components to be rendered only on the server, reducing client-side JavaScript",
        "To optimize client-side state management across multiple components",
        "To automatically generate static pages with server-side data fetching",
      ],
      answer:
        "To allow certain components to be rendered only on the server, reducing client-side JavaScript",
      explanation:
        "`React Server Components` in Next.js 14 allow components to be rendered exclusively on the server. This reduces the amount of JavaScript sent to the client, improving performance by minimizing client-side JavaScript execution and load times.",
      hasCodeSyntax: false,
      code: ``,
    },
  ],

  nextHard5: [
    {
      question:
        "What is the main benefit of `Server Actions` introduced in Next.js 14?",
      choices: [
        "To handle server-side data mutations without needing separate API routes",
        "To enable client-side caching of API responses",
        "To improve static site generation for large applications",
        "To manage client-side state more efficiently",
      ],
      answer:
        "To handle server-side data mutations without needing separate API routes",
      explanation:
        "`Server Actions` in Next.js 14 allow developers to perform server-side data mutations directly from components without creating separate API endpoints. This simplifies data handling by integrating server logic into the component structure, reducing boilerplate and improving code maintainability.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question: "What does the `edge runtime` in Next.js optimize?",
      choices: [
        "It allows serverless functions to run closer to users, reducing latency",
        "It optimizes server-side rendering by prefetching data at build time",
        "It optimizes client-side routing for faster navigation",
        "It automatically hydrates server-rendered components on the client",
      ],
      answer:
        "It allows serverless functions to run closer to users, reducing latency",
      explanation:
        "The `edge runtime` in Next.js allows serverless functions to execute on edge networks closer to end-users. This reduces latency by processing requests geographically nearer to users, enhancing the performance of dynamic content and personalized experiences.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question:
        "What is the primary advantage of using `React Server Components` in Next.js 14?",
      choices: [
        "To minimize client-side JavaScript by rendering certain components only on the server",
        "To manage global state across multiple components efficiently",
        "To enable real-time updates directly on the server",
        "To handle API calls faster on the client-side",
      ],
      answer:
        "To minimize client-side JavaScript by rendering certain components only on the server",
      explanation:
        "`React Server Components` minimize the amount of JavaScript sent to the client by rendering components on the server. This improves performance by reducing the client-side bundle size and decreasing load times, as the client receives ready-to-render HTML.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question: "How does `Middleware` enhance functionality in Next.js 14?",
      choices: [
        "It enables code to run before a request is completed, allowing for tasks like authentication, logging, and redirects",
        "It handles server-side data fetching before rendering the page",
        "It allows client-side components to be hydrated after rendering",
        "It enables real-time updates on the client-side",
      ],
      answer:
        "It enables code to run before a request is completed, allowing for tasks like authentication, logging, and redirects",
      explanation:
        "`Middleware` in Next.js allows developers to run custom code before a request is completed. This is useful for implementing features like authentication checks, logging, A/B testing, and redirects based on request properties, enhancing control over request handling.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question:
        "What is the purpose of the `useServerInsertedHTML` hook in Next.js 14?",
      choices: [
        "To insert HTML into the server-rendered output, useful for styling libraries that require server-side injection",
        "To fetch server-side data during the render process",
        "To manage client-side state hydration",
        "To handle dynamic routing on the server",
      ],
      answer:
        "To insert HTML into the server-rendered output, useful for styling libraries that require server-side injection",
      explanation:
        "`useServerInsertedHTML` is a hook that allows developers to insert HTML directly into the server-rendered output. This is particularly useful for CSS-in-JS libraries or styling solutions that need to inject styles into the `<head>` during server-side rendering.",
      hasCodeSyntax: false,
      code: ``,
    },
  ],

  nextHard10: [
    {
      question:
        "What is the primary benefit of using `React Server Components` in Next.js 14?",
      choices: [
        "Reducing client-side JavaScript by rendering components only on the server",
        "Enabling global state management across multiple components",
        "Allowing real-time data updates directly from the server",
        "Prefetching API data for improved performance",
      ],
      answer:
        "Reducing client-side JavaScript by rendering components only on the server",
      explanation:
        "`React Server Components` allow components to be rendered entirely on the server, sending minimal JavaScript to the client. This reduces the client's processing load, leading to faster load times and improved performance, especially on devices with limited resources.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question:
        "What does setting `dynamic = true` in the App Router configuration do in Next.js 14?",
      choices: [
        "It enables dynamic rendering of content on every request, bypassing static generation",
        "It allows client-side components to load dynamically based on user actions",
        "It fetches API data on the client-side after page load",
        "It provides automatic revalidation of static pages",
      ],
      answer:
        "It enables dynamic rendering of content on every request, bypassing static generation",
      explanation:
        "Setting `dynamic = true` in the App Router configuration tells Next.js to render the page dynamically on each request instead of statically generating it at build time. This is useful for pages that require up-to-date data on every visit.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question:
        "What role does `generateStaticParams` play in dynamic routes in Next.js?",
      choices: [
        "It generates static paths for dynamic routes at build time for static generation",
        "It handles dynamic routing on the client-side for improved navigation",
        "It prefetches dynamic data from external APIs during server-side rendering",
        "It provides real-time updates to dynamic pages",
      ],
      answer:
        "It generates static paths for dynamic routes at build time for static generation",
      explanation:
        "`generateStaticParams` is used in Next.js to predefine dynamic route parameters that should be statically generated during the build process. This allows for static generation of pages with dynamic URLs, improving performance and SEO.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question:
        "How does `usePathname` enhance client-side routing logic in Next.js 14?",
      choices: [
        "By allowing access to the current URL pathname for conditional rendering or navigation decisions",
        "By fetching dynamic content from server-side routes",
        "By handling real-time updates of page content",
        "By managing server-side rendering based on dynamic paths",
      ],
      answer:
        "By allowing access to the current URL pathname for conditional rendering or navigation decisions",
      explanation:
        "`usePathname` is a hook in Next.js 14 that provides the current URL pathname in client-side code. This is useful for implementing conditional logic based on the route, such as highlighting active links or rendering components conditionally.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question:
        "What problem does Incremental Static Regeneration (ISR) solve in Next.js?",
      choices: [
        "It allows statically generated pages to be updated at runtime without rebuilding the entire site",
        "It enables client-side navigation without page reloads",
        "It provides automatic real-time updates to pages",
        "It reduces the bundle size by splitting JavaScript files",
      ],
      answer:
        "It allows statically generated pages to be updated at runtime without rebuilding the entire site",
      explanation:
        "Incremental Static Regeneration (ISR) allows Next.js to update existing pages by re-rendering them in the background as traffic comes in. This means pages can have fresh data without requiring a full site rebuild, combining the benefits of static and dynamic rendering.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question:
        "What is the purpose of the `useSelectedLayoutSegment` hook in Next.js 14?",
      choices: [
        "To access the currently selected segment in a nested layout for conditional rendering",
        "To fetch data specific to a layout segment during server-side rendering",
        "To manage state across different layout segments",
        "To optimize client-side rendering of layout components",
      ],
      answer:
        "To access the currently selected segment in a nested layout for conditional rendering",
      explanation:
        "`useSelectedLayoutSegment` is a hook that allows developers to determine which segment of a nested layout is currently selected. This is useful for conditionally rendering components or applying styles based on the active segment within complex layouts.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question: "How does `Middleware` enhance request handling in Next.js 14?",
      choices: [
        "By running code before a request is completed, enabling tasks like authentication, logging, and redirects",
        "By handling server-side rendering of dynamic pages",
        "By managing client-side state more efficiently",
        "By optimizing the hydration of client-side components",
      ],
      answer:
        "By running code before a request is completed, enabling tasks like authentication, logging, and redirects",
      explanation:
        "`Middleware` in Next.js allows developers to execute custom logic before a request is processed. This can be used for authentication checks, logging, redirects, and more, giving fine-grained control over how requests are handled before reaching route handlers.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question:
        "What is the purpose of the `useServerInsertedHTML` hook in Next.js 14?",
      choices: [
        "To inject HTML directly into the server-rendered output, useful for styles or meta tags",
        "To fetch server-side data during the render process",
        "To manage client-side state hydration",
        "To handle dynamic routing on the server",
      ],
      answer:
        "To inject HTML directly into the server-rendered output, useful for styles or meta tags",
      explanation:
        "`useServerInsertedHTML` allows developers to insert HTML into the server-rendered output, which is particularly useful for injecting critical CSS or meta tags that need to be present in the initial HTML sent to the client.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question:
        "What is the function of the `Edge API Routes` feature in Next.js?",
      choices: [
        "To run API route logic at the edge for lower latency and faster responses",
        "To handle client-side navigation between pages",
        "To manage global state across different components",
        "To optimize image loading and caching",
      ],
      answer:
        "To run API route logic at the edge for lower latency and faster responses",
      explanation:
        "`Edge API Routes` allow developers to run API route code on the Edge Runtime, which is distributed globally. This means API requests can be processed closer to the user, reducing latency and improving performance for API responses.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question:
        "How does the `rewrites` configuration in `next.config.js` enhance URL management in Next.js?",
      choices: [
        "By mapping incoming request paths to different destination paths without changing the displayed URL",
        "By permanently redirecting users from one URL to another",
        "By handling dynamic imports for code splitting",
        "By configuring server-side rendering settings",
      ],
      answer:
        "By mapping incoming request paths to different destination paths without changing the displayed URL",
      explanation:
        "The `rewrites` configuration allows you to internally route requests from one path to another without changing the URL in the browser. This is useful for hiding internal route structures or proxying requests to external services while maintaining clean URLs.",
      hasCodeSyntax: false,
      code: ``,
    },
    {
      question:
        "What is the advantage of using `next/dynamic` for dynamic imports in Next.js?",
      choices: [
        "It allows components to be loaded on demand, reducing initial bundle sizes and improving load times",
        "It handles server-side rendering for dynamic data",
        "It manages dynamic API routes",
        "It enables client-side navigation with dynamic parameters",
      ],
      answer:
        "It allows components to be loaded on demand, reducing initial bundle sizes and improving load times",
      explanation:
        "`next/dynamic` enables dynamic imports of components, which means components are only loaded when they are needed. This reduces the initial JavaScript bundle size, leading to faster page loads and improved performance, especially for large applications.",
      hasCodeSyntax: false,
      code: ``,
    },
  ],
};
