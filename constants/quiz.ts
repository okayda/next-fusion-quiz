export const javascriptEasy3 = [
  {
    question: "What will the following code output?",
    choices: ["true", "false", "NaN", "undefined"],
    answer: "undefined",
    explanation:
      "In JavaScript, floating-point numbers are not always represented with perfect precision. When you add 0.1 and 0.2, the result is 0.30000000000000004, not exactly 0.3. Therefore, the strict equality 0.1 + 0.2 === 0.3 evaluates to false.",
    hasCodeSyntax: true,
    code: `console.log(0.1 + 0.2 === 0.3);`,
  },
  {
    question: "What will the following code output?",
    choices: ["true", "false", "NaN", "undefined"],
    answer: "undefined",
    explanation:
      "In JavaScript, floating-point numbers are not always represented with perfect precision. When you add 0.1 and 0.2, the result is 0.30000000000000004, not exactly 0.3. Therefore, the strict equality 0.1 + 0.2 === 0.3 evaluates to false.",
    hasCodeSyntax: true,
    code: `console.log(0.1 + 0.2 === 0.3);`,
  },

  {
    question: "What is the output of this code?",
    choices: ["object", "null", "undefined", "function"],
    answer: "object",
    explanation:
      "This is a known bug in JavaScript. The typeof operator incorrectly returns 'object' for null. In reality, null is its own primitive type, but due to legacy reasons, typeof null will still return 'object'.",
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
      "In JavaScript, the correct keyword to declare a constant variable is const, not constant. Option d) const myVar = 10; is the correct way to declare a constant. JavaScript only recognizes var, let, and const for variable declaration. constant is not a valid keyword.",
    hasCodeSyntax: false,
    code: ``,
  },
];

export const javascriptEasy5 = [
  {
    question:
      "Which of the following is NOT a primitive data type in JavaScript?",
    choices: ["string", "number", "boolean", "object"],
    answer: "object",
    explanation:
      "'object' is not a primitive data type in JavaScript. The primitive data types are: string, number, boolean, null, undefined, and symbol.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question:
      "Which of the following is NOT a valid way to create an object in JavaScript?",
    choices: [
      "let obj = {}",
      "let obj = new Object()",
      "let obj = Object.create(null)",
      "let obj = new object()",
    ],
    answer: "let obj = new object()",
    explanation:
      "JavaScript is case-sensitive, and 'Object' must be capitalized. Therefore, 'new object()' is not valid. It should be 'new Object()'.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question:
      "Which of the following methods is used to convert a JSON object to a string?",
    choices: ["JSON.parse()", "JSON.stringify()", "toString()", "parseInt()"],
    answer: "JSON.stringify()",
    explanation:
      "The 'JSON.stringify()' method is used to convert a JavaScript object into a JSON string. 'JSON.parse()' is used for the reverse operation—parsing a JSON string to a JavaScript object.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What will the following code output?",
    choices: ["1", "2", "undefined", "null"],
    answer: "undefined",
    explanation:
      "In JavaScript, when you use 'var', the variable is hoisted but not initialized until the actual line of assignment. So, the first log statement prints 'undefined' as the variable 'x' is hoisted but not assigned a value yet.",
    hasCodeSyntax: true,
    code: `console.log(x);
    var x = 2;`,
  },

  {
    question: "What will the following code output?",
    choices: ["1", "2", "undefined", "ReferenceError"],
    answer: "ReferenceError",
    explanation:
      "The variable 'x' is declared with 'let' inside the block, so it cannot be accessed before the declaration due to block-scoping rules. This leads to a ReferenceError.",
    hasCodeSyntax: true,
    code: `console.log(x);
    let x = 2;`,
  },
];

export const javascriptEasy10 = [
  {
    question:
      "Which array method is used to remove the first element from an array?",
    choices: ["shift()", "pop()", "unshift()", "splice()"],
    answer: "shift()",
    explanation:
      "The 'shift()' method removes the first element from an array and returns that element. 'pop()' removes the last element, 'unshift()' adds elements to the beginning of an array, and 'splice()' can add/remove elements from any position in an array.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What will the following code output?",
    choices: ["2", "4", "8", "16"],
    answer: "16",
    explanation:
      "The '**' operator is the exponentiation operator in JavaScript. '2 ** 4' calculates 2 raised to the power of 4, which equals 16.",
    hasCodeSyntax: true,
    code: `console.log(2 ** 4);`,
  },

  {
    question: "Which of the following operators is NOT used in JavaScript?",
    choices: ["==", "===", "!==", "===="],
    answer: "====",
    explanation:
      "JavaScript uses '==' for loose equality, '===' for strict equality, and '!==' for strict inequality. '====' is not a valid operator in JavaScript.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What will the following code output?",
    choices: ["undefined", "1", "2", "3"],
    answer: "2",
    explanation:
      "JavaScript uses 0-based indexing for arrays, so 'arr[1]' refers to the second element of the array, which is 2.",
    hasCodeSyntax: true,
    code: `let arr = [1, 2, 3];
  console.log(arr[1]);`,
  },

  {
    question: "Which of the following values is NOT falsy in JavaScript?",
    choices: ["false", "0", "'' (empty string)", "[] (empty array)"],
    answer: "[] (empty array)",
    explanation:
      "Falsy values in JavaScript include: false, 0, '', null, undefined, and NaN. However, an empty array '[]' is considered truthy.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What will the following code output?",
    choices: ["1", "2", "3", "4"],
    answer: "3",
    explanation:
      "The 'push' method adds a new element to the end of the array, and the 'length' property returns the number of elements in the array. The array has three elements after 'push'.",
    hasCodeSyntax: true,
    code: `let arr = [1, 2];
  arr.push(3);
  console.log(arr.length);`,
  },

  {
    question:
      "Which of the following methods is used to merge two or more arrays in JavaScript?",
    choices: ["concat()", "merge()", "combine()", "append()"],
    answer: "concat()",
    explanation:
      "The 'concat()' method is used to merge two or more arrays. It returns a new array without modifying the original arrays.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What will the following code output?",
    choices: ["true", "false", "SyntaxError", "ReferenceError"],
    answer: "false",
    explanation:
      "The strict equality operator '===' checks both type and value. The expression '0 === false' evaluates to 'false' because '0' is a number and 'false' is a boolean.",
    hasCodeSyntax: true,
    code: `console.log(0 === false);`,
  },

  {
    question: "Which of the following is NOT a reserved keyword in JavaScript?",
    choices: ["if", "let", "var", "value"],
    answer: "value",
    explanation:
      "'if', 'let', and 'var' are reserved keywords in JavaScript. 'value' is not a reserved keyword and can be used as a variable name.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What will the following code output?",
    choices: ["undefined", "ReferenceError", "null", "TypeError"],
    answer: "ReferenceError",
    explanation:
      "In JavaScript, 'const' variables must be initialized at the time of declaration. If you try to use them before initialization, it will throw a ReferenceError.",
    hasCodeSyntax: true,
    code: `console.log(a);
  const a = 10;`,
  },
];

export const javascriptMedium3 = [
  {
    question:
      "Which of the following methods can be used to copy an object in JavaScript?",
    choices: ["Object.assign()", "slice()", "push()", "join()"],
    answer: "Object.assign()",
    explanation:
      "'Object.assign()' is used to copy the properties of one or more source objects to a target object. Methods like 'slice()', 'push()', and 'join()' are used for arrays, not objects.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What will the following JavaScript code output?",
    choices: ["[1, 2]", "[1, 2, 3]", "Compilation error", "undefined"],
    answer: "[1, 2]",
    explanation:
      "The 'pop()' method removes the last element from an array. Since 'arr.pop()' removes the last element (3), the output will be '[1, 2]'.",
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
      "'removeEventListener()' is the standard method used in JavaScript to remove an event listener that was previously added with 'addEventListener()'. Methods like 'off()', 'unbind()', and 'detach()' are used in jQuery, not vanilla JavaScript.",
    hasCodeSyntax: false,
    code: ``,
  },
];

export const javascriptMedium5 = [
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
      "'stopPropagation()' prevents further propagation of the current event in the capturing and bubbling phases. 'preventDefault()' stops the default action but does not stop propagation.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What will the following JavaScript code output?",
    choices: ["1", "2", "undefined", "ReferenceError"],
    answer: "ReferenceError",
    explanation:
      "Variables declared with 'let' and 'const' are block-scoped and not hoisted like 'var'. Trying to access 'a' before it is declared results in a ReferenceError.",
    hasCodeSyntax: true,
    code: `console.log(a);
let a = 2;`,
  },

  {
    question: "What will the following JavaScript code output?",
    choices: ["10", "undefined", "NaN", "Compilation error"],
    answer: "undefined",
    explanation:
      "The variable 'x' is declared with 'var', which means it is hoisted. However, it is initialized to 'undefined' until the assignment is reached, so 'console.log(x)' prints 'undefined'.",
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
      "'filter()' creates a new array with all elements that pass the test implemented by the provided function. 'map()' transforms each element, 'forEach()' executes a provided function for each element, and 'reduce()' applies a function against an accumulator.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What will the following JavaScript code output?",
    choices: ["5", "undefined", "NaN", "Error"],
    answer: "5",
    explanation:
      "JavaScript allows functions to be hoisted. This means the function declaration is available before it is called. Therefore, 'sum(2, 3)' outputs '5'.",
    hasCodeSyntax: true,
    code: `console.log(sum(2, 3));

function sum(a, b) {
  return a + b;
}`,
  },
];

export const javascriptMedium10 = [
  {
    question:
      "Which method is used to serialize a JavaScript object into a JSON string?",
    choices: ["JSON.stringify()", "JSON.parse()", "toString()", "serialize()"],
    answer: "JSON.stringify()",
    explanation:
      "'JSON.stringify()' is used to convert a JavaScript object into a JSON string. 'JSON.parse()' is used to convert a JSON string back into an object.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What will the following JavaScript code output?",
    choices: ["3", "undefined", "TypeError", "NaN"],
    answer: "3",
    explanation:
      "The variable 'a' is declared globally with 'var' and can be accessed both inside and outside of the function. The addition within the function is applied globally, so the output is 3.",
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
      "Which of the following statements is true about the '===' operator in JavaScript?",
    choices: [
      "'===' checks for both value and type equality",
      "'===' is the same as '=='",
      "'===' only checks for value equality",
      "'===' is used to compare arrays",
    ],
    answer: "'===' checks for both value and type equality",
    explanation:
      "The '===' operator checks for both value and type equality. This is also called strict equality, meaning '3' (string) and 3 (number) are considered unequal.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What will the following JavaScript code output?",
    choices: ["4", "5", "ReferenceError", "undefined"],
    answer: "ReferenceError",
    explanation:
      "Variables declared with 'let' are block-scoped and not accessible before declaration due to the temporal dead zone. Hence, trying to access 'b' before declaration results in a ReferenceError.",
    hasCodeSyntax: true,
    code: `console.log(b);
let b = 5;`,
  },

  {
    question:
      "Which method would you use to remove the first element of an array in JavaScript?",
    choices: ["shift()", "pop()", "unshift()", "slice()"],
    answer: "shift()",
    explanation:
      "'shift()' removes the first element from an array. 'pop()' removes the last element, 'unshift()' adds an element to the beginning, and 'slice()' returns a portion of an array without modifying the original array.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What will the following JavaScript code output?",
    choices: ["false", "true", "undefined", "null"],
    answer: "false",
    explanation:
      "The '===' operator performs strict comparison, checking both type and value. Since '0' (number) and 'false' (boolean) are of different types, the comparison returns false.",
    hasCodeSyntax: true,
    code: `console.log(0 === false);`,
  },

  {
    question:
      "Which of the following array methods can be used to create a new array from an existing array?",
    choices: ["map()", "reduce()", "filter()", "All of the above"],
    answer: "All of the above",
    explanation:
      "All three methods can be used to create a new array. 'map()' applies a function to each element, 'reduce()' reduces the array to a single value, and 'filter()' filters the array based on a condition.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What will the following JavaScript code output?",
    choices: ["undefined", "10", "NaN", "Compilation error"],
    answer: "10",
    explanation:
      "The function 'foo()' uses a default parameter. Since no argument is provided during the call, the default value 10 is used.",
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
      "The string 'false' is a truthy value, while 'false', '0', and 'null' are considered falsy values in JavaScript.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What will the following JavaScript code output?",
    choices: ["100", "Compilation error", "NaN", "undefined"],
    answer: "NaN",
    explanation:
      "Dividing a number by a string in JavaScript results in 'NaN' (Not-a-Number), since the string cannot be converted to a valid number for division.",
    hasCodeSyntax: true,
    code: `let result = 100 / 'apple';
console.log(result);`,
  },
];

export const javascriptHard3 = [
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
      "A debounce function delays the execution of a function until after a certain amount of time has passed since the last time the function was invoked. 'setTimeout()' schedules the function, and 'clearTimeout()' resets the timer if the function is triggered again during the delay.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What will the following JavaScript code output?",
    choices: ["2", "4", "8", "16"],
    answer: "16",
    explanation:
      "The '**' operator in JavaScript is the exponentiation operator. '2 ** 4' means 2 raised to the power of 4, which equals 16.",
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
      "A closure in JavaScript is a function that retains access to its lexical scope even when the function is executed outside of its original context. This allows the function to remember the variables that were in scope when the closure was created.",
    hasCodeSyntax: false,
    code: ``,
  },
];

export const javascriptHard5 = [
  {
    question:
      "What is the purpose of the 'Object.freeze()' method in JavaScript?",
    choices: [
      "It prevents adding new properties but allows modifying existing ones",
      "It prevents any changes to an object, making it immutable",
      "It prevents adding new properties but allows deleting existing ones",
      "It allows deep cloning of objects",
    ],
    answer: "It prevents any changes to an object, making it immutable",
    explanation:
      "'Object.freeze()' makes an object immutable by preventing modifications, additions, and deletions of properties. However, it does not perform deep immutability—nested objects can still be modified.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What will the following JavaScript code output?",
    choices: ["true", "false", "undefined", "ReferenceError"],
    answer: "false",
    explanation:
      "The 'this' keyword in the inner function refers to the global object (or undefined in strict mode) instead of the object 'obj'. To preserve the reference to 'this' in the outer function, an arrow function would need to be used or 'this' should be bound explicitly.",
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
      "Which of the following is a key difference between 'null' and 'undefined' in JavaScript?",
    choices: [
      "'null' is an object, while 'undefined' is its own type",
      "'null' is assigned by the engine, while 'undefined' is assigned by the developer",
      "'undefined' can only be used for primitive types, while 'null' is used for objects",
      "'null' is truthy, while 'undefined' is falsy",
    ],
    answer: "'null' is an object, while 'undefined' is its own type",
    explanation:
      "'null' is an object and represents the intentional absence of value, whereas 'undefined' is its own type and represents an uninitialized value. JavaScript's 'typeof null' returns 'object', while 'typeof undefined' returns 'undefined'.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What will the following JavaScript code output?",
    choices: ["0", "1", "2", "undefined"],
    answer: "1",
    explanation:
      "The 'length' property of a function returns the number of parameters expected by the function. In this case, 'sum' has one parameter, so 'sum.length' returns 1.",
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
      "The event loop allows JavaScript to handle asynchronous operations such as I/O or network requests without blocking the main thread. It processes asynchronous callbacks in the queue once all synchronous tasks are completed.",
    hasCodeSyntax: false,
    code: ``,
  },
];

export const javascriptHard10 = [
  {
    question:
      "Which of the following is the primary purpose of the 'Symbol' data type in JavaScript?",
    choices: [
      "To create unique property keys",
      "To define constants",
      "To create private methods in classes",
      "To store large integers",
    ],
    answer: "To create unique property keys",
    explanation:
      "Symbols in JavaScript are unique and immutable values used primarily as keys for object properties to avoid naming collisions.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What will the following JavaScript code output?",
    choices: ["true", "false", "undefined", "ReferenceError"],
    answer: "false",
    explanation:
      "In JavaScript, strict equality ('===') compares both value and type. The value 'NaN' is not equal to itself, so 'NaN === NaN' returns false.",
    hasCodeSyntax: true,
    code: `console.log(NaN === NaN);`,
  },

  {
    question:
      "Which of the following statements is true about 'use strict' mode in JavaScript?",
    choices: [
      "It prevents the creation of global variables by mistake",
      "It forces JavaScript to use type annotations",
      "It allows modifying the prototype of built-in objects",
      "It makes all variables constants by default",
    ],
    answer: "It prevents the creation of global variables by mistake",
    explanation:
      "'use strict' is a directive that helps catch common coding errors, like accidentally creating global variables, and makes JavaScript run in a stricter mode.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What will the following JavaScript code output?",
    choices: ["5", "undefined", "NaN", "ReferenceError"],
    answer: "5",
    explanation:
      "The 'typeof' operator evaluates the type of 'undefined', which is 'undefined'. Therefore, 'typeof x' returns 'undefined', and since 'x' is not initialized, its value is still 5 after the assignment.",
    hasCodeSyntax: true,
    code: `let x = 5;
console.log(x);
console.log(typeof x === 'undefined');`,
  },

  {
    question:
      "Which of the following best describes the difference between 'call()', 'apply()', and 'bind()' methods in JavaScript?",
    choices: [
      "'call()' and 'apply()' invoke functions immediately, 'bind()' creates a new function",
      "'apply()' works only with arrays, 'call()' does not",
      "'bind()' works with promises, 'apply()' and 'call()' do not",
      "'call()' and 'bind()' pass arguments as an array, 'apply()' does not",
    ],
    answer:
      "'call()' and 'apply()' invoke functions immediately, 'bind()' creates a new function",
    explanation:
      "'call()' and 'apply()' both invoke functions immediately but differ in how arguments are passed. 'bind()' creates a new function with a specific 'this' value but does not invoke it immediately.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What will the following JavaScript code output?",
    choices: ["10", "NaN", "undefined", "ReferenceError"],
    answer: "NaN",
    explanation:
      "When attempting to add 'undefined' and '5', JavaScript coerces 'undefined' to NaN, which results in the operation 'NaN + 5', returning 'NaN'.",
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
      "Closures are created whenever a function retains access to variables in its lexical environment, and this can happen with both regular functions and arrow functions. They are not exclusive to arrow functions.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What will the following JavaScript code output?",
    choices: ["ReferenceError", "undefined", "TypeError", "false"],
    answer: "undefined",
    explanation:
      "Variables declared with 'var' are hoisted and initialized with 'undefined'. Although 'typeof a' is called before the variable 'a' is assigned, it does not cause a ReferenceError.",
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
      "'Array.from()' is used to create a new array from an array-like object or an iterable object. 'Object.keys()', 'slice()', and 'map()' are not used for this purpose.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What will the following JavaScript code output?",
    choices: ["object", "function", "undefined", "string"],
    answer: "object",
    explanation:
      "In JavaScript, arrays are technically objects, and 'typeof []' returns 'object', not 'array'.",
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
      "'Object[]' is not a valid syntax for creating an object. JavaScript objects can be created using object literals, constructors, or the 'Object.create()' method.",
    hasCodeSyntax: false,
    code: ``,
  },
];

export const typescriptEasy3 = [
  {
    question:
      "What is the TypeScript keyword used to specify a variable's type?",
    choices: ["let", "type", "typeof", "interface"],
    answer: "type",
    explanation:
      "In TypeScript, the 'type' keyword is used to define a type alias, which allows you to create a new name for a type. For instance, you can specify the type of a variable like this: 'type Age = number;'.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What will the following TypeScript code output?",
    choices: ["10", "20", "Compilation error", "NaN"],
    answer: "Compilation error",
    explanation:
      "In TypeScript, you cannot reassign a value to a constant variable. The code will result in a compilation error because 'x' is declared as a constant and cannot be reassigned.",
    hasCodeSyntax: true,
    code: `const x: number = 10;
  x = 20;
  console.log(x);`,
  },

  {
    question: "Which of the following is NOT a valid TypeScript type?",
    choices: ["number", "string", "boolean", "float"],
    answer: "float",
    explanation:
      "In TypeScript, there is no separate 'float' type. Both integer and floating-point numbers are of the type 'number'. Therefore, 'float' is not a valid TypeScript type.",
    hasCodeSyntax: false,
    code: ``,
  },
];

export const typescriptEasy5 = [
  {
    question:
      "Which of the following is NOT a valid way to declare a function in TypeScript?",
    choices: [
      "function myFunc() {}",
      "const myFunc = () => {}",
      "let myFunc: Function = () => {}",
      "const myFunc: string = () => {}",
    ],
    answer: "const myFunc: string = () => {}",
    explanation:
      "In TypeScript, the function declaration 'const myFunc: string = () => {}' is invalid because the type 'string' does not match the type of a function. The correct typing would be 'Function' or a more specific function signature.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What will the following TypeScript code output?",
    choices: ["Compilation error", "undefined", "null", "No output"],
    answer: "Compilation error",
    explanation:
      "In TypeScript, if a function explicitly returns a type (e.g., 'number'), returning 'null' or 'undefined' will cause a compilation error unless the return type includes 'null' or 'undefined'.",
    hasCodeSyntax: true,
    code: `function getValue(): number {
  return null;
}`,
  },

  {
    question:
      "Which of the following is the correct way to declare a tuple in TypeScript?",
    choices: [
      "let myTuple: [string, number];",
      "let myTuple: (string, number);",
      "let myTuple = [string, number];",
      "let myTuple: string | number;",
    ],
    answer: "let myTuple: [string, number];",
    explanation:
      "In TypeScript, tuples are declared using square brackets and specifying the types of each element. For example, '[string, number]' declares a tuple where the first element is a string, and the second is a number.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What will the following TypeScript code output?",
    choices: ["Compilation error", "undefined", "false", "null"],
    answer: "Compilation error",
    explanation:
      "In TypeScript, optional properties in interfaces or types are marked with '?'. The object 'person' is missing the 'age' property, which is required by the interface 'Person'. This will cause a compilation error.",
    hasCodeSyntax: true,
    code: `interface Person {
  name: string;
  age: number;
}

let person: Person = { name: "John" };`,
  },

  {
    question:
      "What is the TypeScript keyword used to specify a class should not be instantiated directly?",
    choices: ["static", "readonly", "private", "abstract"],
    answer: "abstract",
    explanation:
      "The 'abstract' keyword in TypeScript is used to declare a class that cannot be instantiated directly. Instead, it must be subclassed, and any abstract methods must be implemented by the subclass.",
    hasCodeSyntax: false,
    code: ``,
  },
];

export const typescriptEasy10 = [
  {
    question:
      "Which of the following types can be assigned to a variable declared with the 'any' type in TypeScript?",
    choices: ["string", "number", "boolean", "all of the above"],
    answer: "all of the above",
    explanation:
      "The 'any' type in TypeScript allows you to assign any type of value to the variable, including 'string', 'number', 'boolean', or any other type.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What will the following TypeScript code output?",
    choices: ["Compilation error", "undefined", "2", "null"],
    answer: "2",
    explanation:
      "In TypeScript, if you declare a variable with 'var', it is function-scoped. The 'var x' is hoisted, and the assignment happens later. So, the output is 2.",
    hasCodeSyntax: true,
    code: `var x = 2;
console.log(x);`,
  },

  {
    question:
      "Which of the following is used to define a function signature in TypeScript?",
    choices: ["interface", "type", "enum", "class"],
    answer: "type",
    explanation:
      "In TypeScript, a 'type' alias can be used to define a function signature by specifying the types of parameters and return value.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What will the following TypeScript code output?",
    choices: ["Compilation error", "undefined", "Hello", "No output"],
    answer: "Compilation error",
    explanation:
      "In TypeScript, you cannot reassign a 'const' variable after it has been initialized. Attempting to do so will throw a compilation error.",
    hasCodeSyntax: true,
    code: `const message: string = "Hello";
message = "World";`,
  },

  {
    question:
      "Which TypeScript feature allows an object to be defined with an optional property?",
    choices: [
      "optional chaining",
      "interface",
      "union types",
      "object types with '?'",
    ],
    answer: "object types with '?'",
    explanation:
      "In TypeScript, you can define optional properties in object types or interfaces by appending a '?' after the property name. For example: 'age?: number'.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What will the following TypeScript code output?",
    choices: ["John", "undefined", "Compilation error", "null"],
    answer: "undefined",
    explanation:
      "In TypeScript, variables declared with 'let' are hoisted, but they are not initialized until they are assigned. Accessing the variable before initialization will result in 'undefined'.",
    hasCodeSyntax: true,
    code: `let name: string;
console.log(name);`,
  },

  {
    question:
      "Which of the following is a valid way to specify that a variable may have multiple types?",
    choices: ["Union types", "Multiple inheritance", "Generics", "Enums"],
    answer: "Union types",
    explanation:
      "Union types allow a variable to accept multiple types. For example, 'let id: number | string' allows 'id' to be a number or a string.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What will the following TypeScript code output?",
    choices: ["100", "Compilation error", "NaN", "undefined"],
    answer: "NaN",
    explanation:
      "In TypeScript, dividing a number by zero results in 'NaN' (Not-a-Number), not a compilation error.",
    hasCodeSyntax: true,
    code: `let result: number = 100 / 0;
console.log(result);`,
  },

  {
    question:
      "What TypeScript feature allows functions to accept parameters with default values?",
    choices: [
      "Rest parameters",
      "Optional parameters",
      "Default parameters",
      "Generics",
    ],
    answer: "Default parameters",
    explanation:
      "In TypeScript, default parameters allow you to specify a default value for a function parameter. If no value is provided, the default value will be used.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What will the following TypeScript code output?",
    choices: ["Compilation error", "undefined", "0", "null"],
    answer: "0",
    explanation:
      "In TypeScript, when a variable is declared with 'let' inside a block and assigned the value 0, logging it after the block shows its value, which is 0.",
    hasCodeSyntax: true,
    code: `let count: number = 0;
console.log(count);`,
  },
];

export const typescriptMedium3 = [
  {
    question:
      "Which of the following can be used to constrain the types a generic type can accept in TypeScript?",
    choices: ["extends", "implements", "typeof", "instanceof"],
    answer: "extends",
    explanation:
      "In TypeScript, you can use the 'extends' keyword to constrain a generic type. It ensures that the generic type must extend or be a subtype of a certain type.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What will the following TypeScript code output?",
    choices: [
      "'Hello, John!'",
      "'Hello, undefined!'",
      "Compilation error",
      "'Hello!'",
    ],
    answer: "'Hello, John!'",
    explanation:
      "In TypeScript, default parameters allow you to define a fallback value for function arguments if none is provided. Since 'John' is provided as an argument, the default value is not used, and the output is 'Hello, John!'.",
    hasCodeSyntax: true,
    code: `function greet(name: string = 'Guest'): string {
  return 'Hello, ' + name + '!';
}
console.log(greet('John'));`,
  },

  {
    question: "What is the purpose of TypeScript's 'never' type?",
    choices: [
      "It represents a value that will never occur",
      "It represents an unknown type",
      "It allows any value to be assigned",
      "It represents undefined values",
    ],
    answer: "It represents a value that will never occur",
    explanation:
      "The 'never' type in TypeScript indicates that a value will never occur, commonly used in functions that always throw an error or have infinite loops. It signals that a function doesn't return anything.",
    hasCodeSyntax: false,
    code: ``,
  },
];

export const typescriptMedium5 = [
  {
    question:
      "What TypeScript feature would you use to define a class method that does not access or modify any instance properties?",
    choices: ["static", "private", "readonly", "abstract"],
    answer: "static",
    explanation:
      "The 'static' keyword defines a method or property that belongs to the class itself rather than instances of the class. Static methods cannot access or modify instance-specific data.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What will the following TypeScript code output?",
    choices: ["[1, 2, 3]", "[2, 3]", "Compilation error", "[1]"],
    answer: "[2, 3]",
    explanation:
      "In TypeScript, the 'slice' method returns a shallow copy of a portion of an array without modifying the original array. The slice starts from the index '1', excluding the first element, so the result is '[2, 3]'.",
    hasCodeSyntax: true,
    code: `const arr: number[] = [1, 2, 3];
const slicedArr = arr.slice(1);
console.log(slicedArr);`,
  },

  {
    question:
      "Which of the following utility types would you use to make all properties of an interface optional in TypeScript?",
    choices: ["Partial", "Pick", "Omit", "Readonly"],
    answer: "Partial",
    explanation:
      "The 'Partial<T>' utility type in TypeScript makes all properties of type 'T' optional. This is useful when you don't want to provide all properties at once.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What will the following TypeScript code output?",
    choices: ["10", "NaN", "Compilation error", "undefined"],
    answer: "NaN",
    explanation:
      "In TypeScript, dividing a number by a string results in 'NaN' (Not-a-Number), since the string cannot be converted into a valid number for the division operation.",
    hasCodeSyntax: true,
    code: `const result: number = 10 / 'abc';
console.log(result);`,
  },

  {
    question:
      "What is the main difference between 'interface' and 'type' in TypeScript?",
    choices: [
      "'type' can define union types, 'interface' cannot",
      "'interface' is only used for classes, 'type' is for everything else",
      "'interface' supports enums, 'type' does not",
      "There is no difference between 'interface' and 'type'",
    ],
    answer: "'type' can define union types, 'interface' cannot",
    explanation:
      "A key difference is that 'type' can be used to define union types (e.g., 'type A = string | number;'), while 'interface' is primarily used to describe object shapes. 'interface' has more use with classes and object structures, while 'type' is more flexible.",
    hasCodeSyntax: false,
    code: ``,
  },
];

export const typescriptMedium10 = [
  {
    question:
      "Which TypeScript utility type is used to create a new type by picking a subset of properties from an existing type?",
    choices: ["Partial", "Pick", "Omit", "Readonly"],
    answer: "Pick",
    explanation:
      "The 'Pick<T, K>' utility type constructs a new type by selecting a subset of properties from type 'T'. The properties to be picked are defined by 'K'.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What will the following TypeScript code output?",
    choices: ["true", "false", "Compilation error", "undefined"],
    answer: "true",
    explanation:
      "The 'readonly' modifier prevents reassignment but does not prevent access. In this case, the 'readonly' property 'id' is accessed, which is allowed, so 'true' is printed.",
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
    question: "What is the purpose of the 'unknown' type in TypeScript?",
    choices: [
      "To represent values that are always truthy",
      "To represent values of any type, but require type-checking before use",
      "To represent null or undefined values",
      "It is an alias for the 'any' type",
    ],
    answer:
      "To represent values of any type, but require type-checking before use",
    explanation:
      "The 'unknown' type in TypeScript is similar to 'any', but it forces developers to perform type checks before performing operations on the variable, making it safer to work with.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What will the following TypeScript code output?",
    choices: ["[1, 2, 3]", "[2, 3]", "Compilation error", "[1]"],
    answer: "[2, 3]",
    explanation:
      "The 'slice' method returns a shallow copy of a portion of an array. It starts from index 1, so the result is '[2, 3]'.",
    hasCodeSyntax: true,
    code: `const arr: number[] = [1, 2, 3];
const slicedArr = arr.slice(1);
console.log(slicedArr);`,
  },

  {
    question:
      "Which of the following methods can be used to iterate over an array in TypeScript?",
    choices: ["forEach", "map", "filter", "All of the above"],
    answer: "All of the above",
    explanation:
      "'forEach', 'map', and 'filter' are all methods used to iterate over an array in TypeScript. Each has different behaviors: 'forEach' for simple iteration, 'map' for transforming elements, and 'filter' for creating a new array based on a condition.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What will the following TypeScript code output?",
    choices: ["{ a: 1, b: 2 }", "{ b: 2 }", "Compilation error", "{ a: 1 }"],
    answer: "{ b: 2 }",
    explanation:
      "The 'Omit' utility type creates a new type by excluding specific properties from an existing type. In this case, property 'a' is omitted, so only 'b' remains.",
    hasCodeSyntax: true,
    code: `type Obj = { a: number; b: number; };
type NewObj = Omit<Obj, 'a'>;
const obj: NewObj = { b: 2 };
console.log(obj);`,
  },

  {
    question:
      "Which of the following allows you to specify the return type of a function in TypeScript?",
    choices: [":", "=>", "->", "-->"],
    answer: ":",
    explanation:
      "In TypeScript, the colon (:) is used to specify a function's return type. For example, 'function foo(): string' specifies that the return type is a 'string'.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What will the following TypeScript code output?",
    choices: ["'Apple'", "'Banana'", "undefined", "Compilation error"],
    answer: "'Banana'",
    explanation:
      "The spread operator (...) is used to create a shallow copy of the object, which allows individual properties to be overridden. Here, 'fruit' is updated to 'Banana'.",
    hasCodeSyntax: true,
    code: `const obj = { fruit: 'Apple', color: 'Red' };
const newObj = { ...obj, fruit: 'Banana' };
console.log(newObj.fruit);`,
  },

  {
    question:
      "Which of the following TypeScript utility types is used to exclude properties from an existing type?",
    choices: ["Partial", "Pick", "Omit", "Readonly"],
    answer: "Omit",
    explanation:
      "The 'Omit<T, K>' utility type creates a new type by removing specific properties 'K' from type 'T'. It is commonly used when you want to create a subset of an interface or type.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What will the following TypeScript code output?",
    choices: ["Compilation error", "'Welcome!'", "'Hello, World!'", "'Hello!'"],
    answer: "'Hello, World!'",
    explanation:
      "Default parameters allow for fallback values if none are provided. Since 'World' is passed as an argument, the result is 'Hello, World!'.",
    hasCodeSyntax: true,
    code: `function greet(name: string = 'World'): string {
  return 'Hello, ' + name + '!';
}
console.log(greet());`,
  },
];

export const typescriptHard3 = [
  {
    question:
      "What TypeScript feature allows you to create type-safe code that works with properties that may or may not exist on an object?",
    choices: [
      "Union types",
      "Mapped types",
      "Optional chaining",
      "Intersection types",
    ],
    answer: "Optional chaining",
    explanation:
      "Optional chaining (?.) allows you to safely access deeply nested properties in an object without needing to explicitly check if each reference in the chain is valid, providing a type-safe way to handle possibly undefined properties.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What will the following TypeScript code output?",
    choices: [
      "{ id: 1, name: 'John' }",
      "Compilation error",
      "{ id: 1 }",
      "{ name: 'John' }",
    ],
    answer: "Compilation error",
    explanation:
      "In TypeScript, when using the 'Record' utility type, all specified keys are required. The object 'user' does not provide a value for 'age', which is required in the 'Record<string, number>' type, leading to a compilation error.",
    hasCodeSyntax: true,
    code: `type User = Record<string, number>;
const user: User = { id: 1, name: 'John' };`,
  },

  {
    question:
      "Which of the following TypeScript concepts is used to combine multiple types into one new type?",
    choices: ["Union types", "Intersection types", "Mapped types", "Generics"],
    answer: "Intersection types",
    explanation:
      "Intersection types in TypeScript combine multiple types into one. For example, 'type A = { name: string } & { age: number }' will create a type that has both 'name' and 'age' properties.",
    hasCodeSyntax: false,
    code: ``,
  },
];

export const typescriptHard5 = [
  {
    question:
      "Which of the following is true about the 'keyof' operator in TypeScript?",
    choices: [
      "'keyof' returns all keys of an object type as a union of string literals",
      "'keyof' converts object values to keys",
      "'keyof' creates an intersection type from object keys",
      "'keyof' removes keys from an object type",
    ],
    answer:
      "'keyof' returns all keys of an object type as a union of string literals",
    explanation:
      "The 'keyof' operator in TypeScript returns a union of string literals representing all the keys of a given object type. For example, for 'type Person = { name: string; age: number; }', 'keyof Person' results in 'name' | 'age'.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What will the following TypeScript code output?",
    choices: [
      "{ id: 1, name: 'John' }",
      "{ id: 1 }",
      "Compilation error",
      "{ name: 'John' }",
    ],
    answer: "{ id: 1 }",
    explanation:
      "The 'Partial' utility type makes all properties of a type optional. As 'Partial<User>' is used, 'name' is not required and the object can have only the 'id' property.",
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
      "Which TypeScript feature allows you to enforce constraints on generic types?",
    choices: [
      "Union types",
      "Intersection types",
      "Type guards",
      "Generic constraints",
    ],
    answer: "Generic constraints",
    explanation:
      "Generic constraints allow you to limit the types that can be passed to a generic function or class. For example, you can use 'T extends number' to ensure a generic type 'T' can only be numbers or their subtypes.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What will the following TypeScript code output?",
    choices: [
      "['number', 'string']",
      "['number', 'boolean']",
      "Compilation error",
      "['string', 'boolean']",
    ],
    answer: "Compilation error",
    explanation:
      "The 'Exclude' utility type is used to exclude certain types from a union. In this example, the 'Exclude' type is used incorrectly as it tries to exclude an unsupported type, causing a compilation error.",
    hasCodeSyntax: true,
    code: `type AllowedTypes = string | number | boolean;
type ExcludedTypes = Exclude<AllowedTypes, string | number>;
const result: ExcludedTypes[] = ['boolean'];`,
  },

  {
    question:
      "Which of the following is a correct use of the 'never' type in TypeScript?",
    choices: [
      "To declare variables that should never be used",
      "To represent a function that never returns",
      "To represent a function that returns undefined",
      "To define a fallback value for optional properties",
    ],
    answer: "To represent a function that never returns",
    explanation:
      "The 'never' type in TypeScript is used to represent a value that should never occur. It is typically used in functions that throw an error or have infinite loops, indicating the function never completes normally.",
    hasCodeSyntax: false,
    code: ``,
  },
];

export const typescriptHard10 = [
  {
    question:
      "What is the difference between 'unknown' and 'any' in TypeScript?",
    choices: [
      "'unknown' is more type-safe than 'any', requiring type checking before usage",
      "'any' is restricted, while 'unknown' can hold any value without restrictions",
      "'any' can only hold primitive types, while 'unknown' can hold any type",
      "'unknown' is used in TypeScript's type inference system, while 'any' is not",
    ],
    answer:
      "'unknown' is more type-safe than 'any', requiring type checking before usage",
    explanation:
      "The 'unknown' type is safer than 'any' because you cannot perform operations on a value of type 'unknown' without first narrowing its type. In contrast, 'any' disables all type checking, making it more error-prone.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What will the following TypeScript code output?",
    choices: ["[1, 2]", "[]", "Compilation error", "undefined"],
    answer: "[]",
    explanation:
      "The 'filter' method on an array returns a new array with all elements that satisfy the condition. Since no element satisfies the condition in the example, it returns an empty array.",
    hasCodeSyntax: true,
    code: `const arr: number[] = [1, 2, 3];
const result = arr.filter(num => num > 3);
console.log(result);`,
  },

  {
    question:
      "Which TypeScript feature allows functions to specify constraints on their generic types?",
    choices: [
      "Generic constraints",
      "Type guards",
      "Mapped types",
      "Union types",
    ],
    answer: "Generic constraints",
    explanation:
      "Generic constraints (using 'extends') allow functions or classes to restrict the types passed to a generic parameter. For example, 'T extends string' ensures the type passed to 'T' must be a subtype of 'string'.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What will the following TypeScript code output?",
    choices: ["'Test'", "Compilation error", "undefined", "null"],
    answer: "'Test'",
    explanation:
      "When destructuring with default values, if the variable is 'undefined', the default value is used. Since 'obj.name' exists, it will log 'Test'.",
    hasCodeSyntax: true,
    code: `const obj = { name: 'Test' };
const { name = 'Default' } = obj;
console.log(name);`,
  },

  {
    question: "What is the primary use of the 'never' type in TypeScript?",
    choices: [
      "To indicate a function that never returns or throws an error",
      "To indicate a variable can hold multiple types",
      "To define optional parameters",
      "To make all properties of an object type readonly",
    ],
    answer: "To indicate a function that never returns or throws an error",
    explanation:
      "The 'never' type is used for functions that never return (e.g., functions that throw errors or have infinite loops). It signals that the function will not produce a normal value.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What will the following TypeScript code output?",
    choices: ["'John Doe'", "'Anonymous'", "Compilation error", "undefined"],
    answer: "'Anonymous'",
    explanation:
      "Default values for destructured function parameters will be used if no argument is passed. Since no 'name' argument is passed, it defaults to 'Anonymous'.",
    hasCodeSyntax: true,
    code: `function greet(name: string = 'Anonymous') {
  console.log(name);
}
greet();`,
  },

  {
    question:
      "Which of the following is a correct use of the 'Readonly' utility type in TypeScript?",
    choices: [
      "To make a variable immutable",
      "To make properties of an object read-only",
      "To remove properties from an object",
      "To add properties to an object type",
    ],
    answer: "To make properties of an object read-only",
    explanation:
      "The 'Readonly' utility type makes all properties of an object type read-only, preventing any reassignment or mutation of those properties.",
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
      "Default parameters in functions are used if no argument is provided. In this case, since no argument is passed, the default value 'User' is used.",
    hasCodeSyntax: true,
    code: `function sayHello(name: string = 'User'): string {
  return 'Hello, ' + name + '!';
}
console.log(sayHello());`,
  },

  {
    question:
      "What is the primary difference between 'interface' and 'type' in TypeScript?",
    choices: [
      "'type' can define union and intersection types, 'interface' cannot",
      "'interface' can only define object shapes, 'type' cannot",
      "'interface' supports all types of values, 'type' is for functions only",
      "There is no difference between 'interface' and 'type'",
    ],
    answer:
      "'type' can define union and intersection types, 'interface' cannot",
    explanation:
      "'type' is more flexible than 'interface' and can define union and intersection types (e.g., 'type A = string | number'). 'interface' is used primarily to describe object shapes and cannot directly define unions or intersections.",
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
      "The spread operator (...) is used to merge the properties of two objects. Here, both 'name' and 'age' properties are combined into a single object.",
    hasCodeSyntax: true,
    code: `const person = { name: 'John' };
const details = { age: 30 };
const fullDetails = { ...person, ...details };
console.log(fullDetails);`,
  },
];

export const reactEasy3 = [
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
      "JSX allows you to write HTML-like syntax in JavaScript, making it easier to create and visualize the UI directly within JavaScript files. JSX is compiled into regular JavaScript at runtime.",
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
      "In React, props are used to pass data from a parent component to a child component. State and context are different mechanisms for managing data, while Redux is used for global state management.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question:
      "Which React hook is used to manage state in a functional component?",
    choices: ["useState", "useEffect", "useRef", "useContext"],
    answer: "useState",
    explanation:
      "The 'useState' hook is used to add state to functional components. It returns the current state and a function to update that state. Other hooks, like 'useEffect' and 'useRef', serve different purposes.",
    hasCodeSyntax: false,
    code: ``,
  },
];

export const reactEasy5 = [
  {
    question:
      "Which method is used to update the state in a React class component?",
    choices: ["setState()", "useState()", "forceUpdate()", "this.update()"],
    answer: "setState()",
    explanation:
      "In React class components, 'setState()' is used to update the state and trigger a re-render. 'useState()' is used in functional components.",
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
      "The virtual DOM is a lightweight, in-memory representation of the real DOM. React uses it to efficiently update the DOM by only applying changes where necessary.",
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
      "In React, ternary operators or logical operators are commonly used for conditional rendering inside JSX. 'if/else' cannot be directly used inside JSX.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question:
      "Which React hook is used to perform side effects in functional components?",
    choices: ["useEffect", "useState", "useReducer", "useCallback"],
    answer: "useEffect",
    explanation:
      "The 'useEffect' hook is used to perform side effects, such as data fetching or manipulating the DOM, in functional components. It runs after the component renders.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What is the key prop used for in React lists?",
    choices: [
      "To uniquely identify elements in the list",
      "To pass values to child components",
      "To store component data",
      "To trigger a re-render of the list",
    ],
    answer: "To uniquely identify elements in the list",
    explanation:
      "The 'key' prop helps React efficiently update and re-render lists by uniquely identifying list elements. It ensures that React can track changes correctly during reconciliation.",
    hasCodeSyntax: false,
    code: ``,
  },
];

export const reactEasy10 = [
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
      "In React, a component is either a function or a class that accepts input (called props) and returns a React element that defines part of the UI.",
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
      "'Props' (short for properties) are used to pass data from a parent component to a child component. They are read-only and help make components reusable.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question:
      "Which React hook would you use to update the document title after the component renders?",
    choices: ["useEffect", "useState", "useRef", "useReducer"],
    answer: "useEffect",
    explanation:
      "The 'useEffect' hook is used to perform side effects in functional components, such as updating the document title after the component renders or fetching data.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question:
      "How can you prevent a re-render of a functional component in React?",
    choices: [
      "By using useCallback or React.memo",
      "By using useEffect",
      "By using useState",
      "By using a return statement in JSX",
    ],
    answer: "By using useCallback or React.memo",
    explanation:
      "'useCallback' and 'React.memo' help optimize performance by preventing unnecessary re-renders. 'useCallback' memoizes a function, and 'React.memo' memoizes the component itself.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What does the 'key' prop do in React?",
    choices: [
      "It helps React identify which items have changed, been added, or removed",
      "It passes a unique identifier to each child component",
      "It is used to store component state",
      "It triggers a re-render of a component",
    ],
    answer:
      "It helps React identify which items have changed, been added, or removed",
    explanation:
      "'key' is used in lists to help React identify which items have changed during rendering. It must be unique for each element in the array.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What is the purpose of 'useState' in React?",
    choices: [
      "To add state to a functional component",
      "To perform side effects in a component",
      "To fetch data from an API",
      "To handle user input",
    ],
    answer: "To add state to a functional component",
    explanation:
      "'useState' is a hook that allows functional components to manage local state. It returns the current state and a function to update the state.",
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
      "'componentDidMount' is called after the component is mounted to the DOM. It is commonly used to fetch data or perform other side effects.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question:
      "Which hook allows you to persist values between renders without triggering a re-render?",
    choices: ["useRef", "useState", "useEffect", "useContext"],
    answer: "useRef",
    explanation:
      "'useRef' can store mutable values that persist across renders without causing the component to re-render when the value is updated.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question:
      "What is the default behavior of 'useEffect' without dependencies?",
    choices: [
      "It runs after every render of the component",
      "It runs only on the initial render",
      "It runs only after the first state update",
      "It doesn't run unless called manually",
    ],
    answer: "It runs after every render of the component",
    explanation:
      "Without dependencies, 'useEffect' runs after every render of the component. To control when it runs, you can pass an array of dependencies as the second argument.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What is React's 'context' used for?",
    choices: [
      "To pass data through the component tree without manually passing props down at every level",
      "To manage the local state of a component",
      "To update the global state of a component",
      "To perform side effects in a component",
    ],
    answer:
      "To pass data through the component tree without manually passing props down at every level",
    explanation:
      "React's 'context' allows you to share values (like global state) between components without needing to pass props at every level of the component tree. It's typically used for things like theming or user authentication.",
    hasCodeSyntax: false,
    code: ``,
  },
];

export const reactMedium3 = [
  {
    question: "What is the purpose of 'React.Fragment' in React?",
    choices: [
      "To handle HTTP requests in React components",
      "To group multiple elements without adding extra nodes to the DOM",
      "To manage state in React components",
      "To handle event delegation in React",
    ],
    answer: "To group multiple elements without adding extra nodes to the DOM",
    explanation:
      "'React.Fragment' is used to group multiple elements in a component without adding additional nodes to the DOM. It avoids unnecessary wrappers like <div> and keeps the DOM structure clean.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question:
      "What is the difference between 'useEffect' and 'useLayoutEffect' in React?",
    choices: [
      "'useEffect' runs after render, 'useLayoutEffect' runs synchronously before painting the screen",
      "'useLayoutEffect' runs only on initial render, 'useEffect' runs on every render",
      "'useEffect' can only be used for network requests, 'useLayoutEffect' for DOM updates",
      "'useLayoutEffect' is used only in class components",
    ],
    answer:
      "'useEffect' runs after render, 'useLayoutEffect' runs synchronously before painting the screen",
    explanation:
      "'useEffect' runs asynchronously after the component renders, while 'useLayoutEffect' runs synchronously after DOM mutations and before the browser paints the screen. This makes 'useLayoutEffect' more suitable for reading layout information or synchronously applying DOM changes.",
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
      "Prop drilling occurs when data is passed down through several levels of components, even though only the lowest-level component in the hierarchy needs the data. It can lead to complex and difficult-to-maintain code, and solutions like React Context or Redux can help reduce prop drilling.",
    hasCodeSyntax: false,
    code: ``,
  },
];

export const reactMedium5 = [
  {
    question: "What is the purpose of the 'useReducer' hook in React?",
    choices: [
      "To handle side effects like data fetching",
      "To manage complex state logic in functional components",
      "To replace Redux for global state management",
      "To optimize component rendering",
    ],
    answer: "To manage complex state logic in functional components",
    explanation:
      "'useReducer' is used to manage more complex state logic in functional components, especially when the state depends on previous state values. It is an alternative to 'useState' and is similar to how reducers work in Redux.",
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
      "The 'children' prop is a special prop in React that is used to pass components or elements nested inside a parent component. This allows components to be reusable with different children passed as props.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What is the 'useCallback' hook used for in React?",
    choices: [
      "To memoize functions and prevent unnecessary re-renders",
      "To handle side effects in components",
      "To fetch data from APIs",
      "To optimize component mounting",
    ],
    answer: "To memoize functions and prevent unnecessary re-renders",
    explanation:
      "'useCallback' is used to memoize a function so that it is not recreated on every render, which helps to prevent unnecessary re-renders when passing functions as props to child components.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What is 'context' in React used for?",
    choices: [
      "To manage global state across the component tree without passing props down manually",
      "To handle event delegation in React components",
      "To share CSS styles between components",
      "To handle routing in React applications",
    ],
    answer:
      "To manage global state across the component tree without passing props down manually",
    explanation:
      "React's 'context' is used to share values (like theme or user authentication data) across multiple components without passing props at every level. It is typically used for managing global state or shared data.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question:
      "What is the difference between 'controlled' and 'uncontrolled' components in React?",
    choices: [
      "Controlled components have their form data managed by React state, while uncontrolled components store their data within the DOM",
      "Controlled components manage their own data, while uncontrolled components use Redux for state management",
      "Controlled components can only be used in class components, while uncontrolled components are used in functional components",
      "Controlled components use 'useState' to manage data, while uncontrolled components use 'useEffect'",
    ],
    answer:
      "Controlled components have their form data managed by React state, while uncontrolled components store their data within the DOM",
    explanation:
      "In controlled components, form data is managed by React state, making it easier to access and modify. Uncontrolled components rely on the DOM to store their form data, typically accessed through refs.",
    hasCodeSyntax: false,
    code: ``,
  },
];

export const reactMedium10 = [
  {
    question: "What is the purpose of 'useMemo' in React?",
    choices: [
      "To memoize the result of an expensive function to avoid recalculating on every render",
      "To memoize a function to prevent re-renders",
      "To store state in the browser's local storage",
      "To manage side effects in functional components",
    ],
    answer:
      "To memoize the result of an expensive function to avoid recalculating on every render",
    explanation:
      "'useMemo' memoizes the result of an expensive computation so that it is only recalculated when its dependencies change, preventing unnecessary recalculations on every render.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question:
      "Which hook is used to manage side effects in functional components?",
    choices: ["useEffect", "useState", "useMemo", "useCallback"],
    answer: "useEffect",
    explanation:
      "'useEffect' is used to manage side effects in functional components, such as data fetching, updating the DOM, or setting up subscriptions. It runs after the component renders.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "How can you optimize performance when rendering lists in React?",
    choices: [
      "By using the 'key' prop and memoizing components",
      "By using local state",
      "By using React.StrictMode",
      "By directly manipulating the DOM",
    ],
    answer: "By using the 'key' prop and memoizing components",
    explanation:
      "To optimize list rendering in React, it's important to use the 'key' prop to help React identify changes, and to use memoization techniques (like 'React.memo') to avoid re-rendering unchanged components.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question:
      "What will happen if the 'key' prop is not used when rendering a list of items in React?",
    choices: [
      "React will still render the list but may have performance issues or incorrectly update the DOM",
      "React will throw an error",
      "React will prevent the list from rendering",
      "React will automatically assign unique keys",
    ],
    answer:
      "React will still render the list but may have performance issues or incorrectly update the DOM",
    explanation:
      "Without a 'key' prop, React can still render the list, but it may struggle to correctly identify changes, additions, or removals in the DOM, leading to inefficient re-renders or bugs.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What is the difference between 'useState' and 'useReducer'?",
    choices: [
      "'useState' is used for simpler state, while 'useReducer' is used for more complex state logic",
      "'useState' is synchronous, while 'useReducer' is asynchronous",
      "'useReducer' is used in class components, while 'useState' is used in functional components",
      "'useState' automatically persists data in localStorage, while 'useReducer' does not",
    ],
    answer:
      "'useState' is used for simpler state, while 'useReducer' is used for more complex state logic",
    explanation:
      "'useState' is simpler and best for small or simple state changes, while 'useReducer' is better for managing complex state logic or when the next state depends on the previous one.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What is React's 'context' API used for?",
    choices: [
      "To share global data like themes or user authentication without passing props",
      "To manage the local state of a component",
      "To define styles for components",
      "To replace useState and useReducer",
    ],
    answer:
      "To share global data like themes or user authentication without passing props",
    explanation:
      "React's 'context' API allows you to share data across many components without having to pass props manually through each component. It's often used for themes, language settings, or authentication data.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What is 'lifting state up' in React?",
    choices: [
      "Moving state to the closest common ancestor component to share it between components",
      "Sharing state between components without props",
      "Moving state to a child component to prevent re-renders",
      "Using the 'useContext' hook to manage state",
    ],
    answer:
      "Moving state to the closest common ancestor component to share it between components",
    explanation:
      "'Lifting state up' refers to moving state to a common ancestor component so that multiple components can share and use the same state data, instead of passing props through multiple layers.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What is the purpose of the 'useRef' hook?",
    choices: [
      "To create a mutable object that persists between renders without triggering re-renders",
      "To store component state",
      "To manage asynchronous side effects",
      "To pass values between parent and child components",
    ],
    answer:
      "To create a mutable object that persists between renders without triggering re-renders",
    explanation:
      "'useRef' creates a mutable object that persists across renders and doesn't cause re-renders when updated. It's commonly used to access DOM elements or store values that shouldn't trigger re-renders.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What is the purpose of 'React.memo'?",
    choices: [
      "To prevent a component from re-rendering unless its props change",
      "To store state values between renders",
      "To share state across multiple components",
      "To handle side effects in React",
    ],
    answer: "To prevent a component from re-rendering unless its props change",
    explanation:
      "'React.memo' is a higher-order component that memoizes a component, preventing unnecessary re-renders unless the props change. It's used to optimize performance for functional components.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question:
      "What is the difference between controlled and uncontrolled components in React?",
    choices: [
      "Controlled components manage their value through React state, while uncontrolled components manage their value through the DOM",
      "Controlled components manage their value through Redux, while uncontrolled components use local state",
      "Controlled components require 'useReducer', while uncontrolled components use 'useState'",
      "There is no difference between controlled and uncontrolled components",
    ],
    answer:
      "Controlled components manage their value through React state, while uncontrolled components manage their value through the DOM",
    explanation:
      "In controlled components, React state controls the component's value, while in uncontrolled components, the DOM manages the form element's state. Controlled components are more common in modern React applications for easier state management.",
    hasCodeSyntax: false,
    code: ``,
  },
];

export const reactHard3 = [
  {
    question: "What is the purpose of 'React.lazy' and 'Suspense' in React?",
    choices: [
      "To handle asynchronous side effects in functional components",
      "To lazily load components for code splitting",
      "To manage global state across multiple components",
      "To control when components should re-render",
    ],
    answer: "To lazily load components for code splitting",
    explanation:
      "'React.lazy' allows you to lazily load components, which helps in reducing the bundle size by splitting the code. 'Suspense' is used to show a fallback (like a loading spinner) while waiting for the lazy-loaded component to be rendered.",
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
      "Reconciliation is React's process of diffing the old virtual DOM with the new virtual DOM to determine the minimal set of changes required to update the real DOM. This makes React efficient at rendering.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question:
      "What will happen if you call 'setState()' in a React component's constructor?",
    choices: [
      "It will result in an error",
      "It will cause an infinite loop",
      "It will not cause a re-render",
      "It will re-render the component immediately",
    ],
    answer: "It will result in an error",
    explanation:
      "Calling 'setState()' inside a constructor is not allowed because the component is not fully initialized yet. It will result in an error since state updates cannot be processed during the initialization phase.",
    hasCodeSyntax: false,
    code: ``,
  },
];

export const reactHard5 = [
  {
    question:
      "What is the difference between 'getDerivedStateFromProps' and 'componentDidUpdate' in React?",
    choices: [
      "'getDerivedStateFromProps' is used to sync props with state before rendering, while 'componentDidUpdate' is used after rendering for side effects",
      "'componentDidUpdate' is only available in functional components, while 'getDerivedStateFromProps' is for class components",
      "'getDerivedStateFromProps' triggers a re-render, while 'componentDidUpdate' does not",
      "'componentDidUpdate' is used to prevent re-renders, while 'getDerivedStateFromProps' forces them",
    ],
    answer:
      "'getDerivedStateFromProps' is used to sync props with state before rendering, while 'componentDidUpdate' is used after rendering for side effects",
    explanation:
      "'getDerivedStateFromProps' is a static lifecycle method that runs before rendering to update the state when props change. 'componentDidUpdate' runs after rendering and is used for side effects such as fetching data or updating the DOM.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question:
      "What will happen if you update state directly without using 'setState' in a class component?",
    choices: [
      "The component will not re-render with the updated state",
      "The component will re-render as expected",
      "An error will be thrown at runtime",
      "The state will be updated in the virtual DOM, but not in the real DOM",
    ],
    answer: "The component will not re-render with the updated state",
    explanation:
      "Directly modifying the state in a class component without using 'setState' will not trigger a re-render. React relies on 'setState' to know when the state has changed and schedule a re-render accordingly.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "How does 'React.memo' differ from 'useMemo' in React?",
    choices: [
      "'React.memo' memoizes components, while 'useMemo' memoizes values or functions",
      "'React.memo' is used in functional components, while 'useMemo' is used in class components",
      "'React.memo' can only be used with context, while 'useMemo' can be used globally",
      "'useMemo' only works with numbers and strings, while 'React.memo' works with objects",
    ],
    answer:
      "'React.memo' memoizes components, while 'useMemo' memoizes values or functions",
    explanation:
      "'React.memo' is a higher-order component that memoizes a component to avoid unnecessary re-renders if the props haven't changed. 'useMemo', on the other hand, memoizes the result of a function or value to prevent re-computation unless its dependencies change.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What will the following React code output?",
    choices: [
      "The text will be updated without any warnings",
      "The text will not be updated, and React will log a warning",
      "The component will throw an error",
      "The DOM will update, but React will show a deprecation warning",
    ],
    answer: "The text will not be updated, and React will log a warning",
    explanation:
      "If you attempt to update a 'readonly' or 'disabled' field using direct DOM manipulation in React, React will block the update and log a warning. React controls the DOM through its virtual DOM, and direct manipulation leads to mismatches between the virtual and real DOM.",
    hasCodeSyntax: true,
    code: `class App extends React.Component {
  componentDidMount() {
    document.getElementById("myInput").value = "Updated Text";
  }
  render() {
    return <input id="myInput" value="Initial Text" readOnly />;
  }
}`,
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
      "Error boundaries are React components that catch JavaScript errors in their child component tree, log those errors, and display a fallback UI instead of crashing the entire application. They are defined by implementing 'componentDidCatch' or 'getDerivedStateFromError'.",
    hasCodeSyntax: false,
    code: ``,
  },
];

export const reactHard10 = [
  {
    question:
      "What is the difference between 'React.Context' and 'Redux' for state management?",
    choices: [
      "'Context' is for global state, while 'Redux' is for local state",
      "'Context' is built into React, while 'Redux' is a third-party library for predictable state management",
      "'Redux' allows bi-directional data flow, while 'Context' does not",
      "'Context' manages asynchronous state, while 'Redux' only manages synchronous state",
    ],
    answer:
      "'Context' is built into React, while 'Redux' is a third-party library for predictable state management",
    explanation:
      "React.Context is a built-in feature used for passing state down the component tree without prop drilling. Redux is an external library used for more complex and predictable global state management, especially in larger applications.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question:
      "Which lifecycle method is called when an error is thrown in a descendant component?",
    choices: [
      "componentDidCatch",
      "componentDidUpdate",
      "componentWillUnmount",
      "getDerivedStateFromProps",
    ],
    answer: "componentDidCatch",
    explanation:
      "'componentDidCatch' is used in React error boundaries to catch JavaScript errors in the component tree, log them, and display a fallback UI. It's triggered when an error is thrown in a descendant component.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What is the purpose of the 'useImperativeHandle' hook in React?",
    choices: [
      "To allow a parent component to access and modify the state of a child component",
      "To create a custom ref object that exposes only certain properties of the child component to the parent",
      "To create a global state that can be accessed from any component",
      "To manage the side effects in functional components",
    ],
    answer:
      "To create a custom ref object that exposes only certain properties of the child component to the parent",
    explanation:
      "'useImperativeHandle' is a React hook that allows you to customize the value that is returned when a parent component uses 'ref' on a child component. It is used to expose specific methods or properties from the child to the parent.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question:
      "What is the main difference between 'useCallback' and 'useMemo'?",
    choices: [
      "'useCallback' memoizes functions, while 'useMemo' memoizes the return value of a function",
      "'useCallback' triggers re-renders, while 'useMemo' prevents re-renders",
      "'useCallback' is only used with functions, while 'useMemo' is only used with components",
      "'useCallback' memoizes components, while 'useMemo' memoizes state",
    ],
    answer:
      "'useCallback' memoizes functions, while 'useMemo' memoizes the return value of a function",
    explanation:
      "'useCallback' is used to memoize a function so it doesn't get recreated on every render. 'useMemo' is used to memoize the result of an expensive computation, re-calculating only when its dependencies change.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question:
      "What will happen if you call 'setState' inside 'componentDidUpdate' without a conditional check?",
    choices: [
      "It will cause an infinite loop of re-renders",
      "It will only trigger one re-render",
      "It will throw a runtime error",
      "It will optimize the component rendering process",
    ],
    answer: "It will cause an infinite loop of re-renders",
    explanation:
      "Calling 'setState' inside 'componentDidUpdate' without a conditional check will cause an infinite loop, as 'setState' triggers a re-render, which causes 'componentDidUpdate' to run again.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question:
      "What is the purpose of 'getSnapshotBeforeUpdate' lifecycle method?",
    choices: [
      "To capture some DOM properties (like scroll position) before updates are applied to the DOM",
      "To handle asynchronous state updates in class components",
      "To capture the previous state of the component before rendering",
      "To control the re-rendering behavior of child components",
    ],
    answer:
      "To capture some DOM properties (like scroll position) before updates are applied to the DOM",
    explanation:
      "'getSnapshotBeforeUpdate' is used in class components to capture information from the DOM (like scroll position) before it is updated. The value returned from this method is passed to 'componentDidUpdate'.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What does the 'useLayoutEffect' hook do in React?",
    choices: [
      "It fires synchronously after DOM updates but before the browser paints the screen",
      "It fires after every render but doesn't block the browser from painting",
      "It is used only for side effects involving data fetching",
      "It replaces 'useEffect' in class components",
    ],
    answer:
      "It fires synchronously after DOM updates but before the browser paints the screen",
    explanation:
      "'useLayoutEffect' runs synchronously after the DOM has been updated, but before the browser paints the screen, allowing you to read layout values and synchronously make updates.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question:
      "What will happen if you pass 'null' as the second argument to 'useEffect'?",
    choices: [
      "The effect will run after every render",
      "The effect will only run once",
      "The effect will never run",
      "React will throw an error",
    ],
    answer: "React will throw an error",
    explanation:
      "Passing 'null' as the second argument to 'useEffect' will throw an error because React expects an array (either empty or with dependencies) to determine when the effect should run. To run the effect only once, you should pass an empty array.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What is the purpose of 'StrictMode' in React?",
    choices: [
      "To highlight potential problems in an application and help with identifying unsafe lifecycles",
      "To prevent React from running in production mode",
      "To enforce synchronous rendering in all components",
      "To enable concurrent mode",
    ],
    answer:
      "To highlight potential problems in an application and help with identifying unsafe lifecycles",
    explanation:
      "'StrictMode' is a tool in React that helps highlight potential problems in an application. It checks for things like deprecated APIs, unsafe lifecycles, and side effects in the render phase during development.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question:
      "What will happen if you forget to provide a 'key' when rendering a list of components in React?",
    choices: [
      "React will still render the list but may have performance issues",
      "React will throw a compilation error",
      "React will automatically assign unique keys",
      "React will prevent the list from rendering",
    ],
    answer: "React will still render the list but may have performance issues",
    explanation:
      "React can still render lists without a 'key', but without it, React will have difficulty tracking changes to the list items, leading to inefficient updates or even incorrect UI rendering.",
    hasCodeSyntax: false,
    code: ``,
  },
];

export const nextEasy3 = [
  {
    question:
      "What is the primary purpose of 'appDir' introduced in Next.js 13+?",
    choices: [
      "To manage client-side routing in Next.js",
      "To enable server-side rendering for API routes",
      "To introduce the new App Router for organizing pages and layouts",
      "To handle static site generation",
    ],
    answer: "To introduce the new App Router for organizing pages and layouts",
    explanation:
      "'appDir' in Next.js 13+ introduces the App Router, a new way to organize pages, layouts, and nested routes. It simplifies creating layouts and provides better support for server-side rendering and static generation.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What is the new 'Server Actions' feature in Next.js 14?",
    choices: [
      "A mechanism to handle server-side rendering without external APIs",
      "A feature that allows developers to define actions that are executed directly on the server, improving server-side data handling",
      "A hook used to optimize client-side rendering",
      "A feature for managing real-time events on the client-side",
    ],
    answer:
      "A feature that allows developers to define actions that are executed directly on the server, improving server-side data handling",
    explanation:
      "In Next.js 14, 'Server Actions' allows developers to define actions that can be executed directly on the server, making server-side data handling easier and reducing the need for custom API routes.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question:
      "Which hook is commonly used in Next.js to fetch data at build time?",
    choices: [
      "getServerSideProps",
      "getInitialProps",
      "getStaticProps",
      "useEffect",
    ],
    answer: "getStaticProps",
    explanation:
      "'getStaticProps' is used to fetch data at build time in Next.js for pages that are statically generated. This ensures that the data is fetched only once during the build, resulting in faster page loads.",
    hasCodeSyntax: false,
    code: ``,
  },
];

export const nextEasy5 = [
  {
    question: "What is the main purpose of 'getServerSideProps' in Next.js?",
    choices: [
      "To fetch data at build time",
      "To fetch data on the client-side",
      "To fetch data on each request and enable server-side rendering",
      "To fetch static assets like images",
    ],
    answer: "To fetch data on each request and enable server-side rendering",
    explanation:
      "'getServerSideProps' allows you to fetch data on the server-side for every request. This enables server-side rendering, where data is rendered on the server and sent to the client on each request.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question:
      "What feature in Next.js 14 allows you to define loading UI per route segment?",
    choices: [
      "Suspense",
      "Dynamic Routes",
      "Route Segments",
      "Loading UI with 'appDir'",
    ],
    answer: "Loading UI with 'appDir'",
    explanation:
      "Next.js 14, along with the 'appDir' structure, allows you to define loading states for each route segment. This enables granular control over the loading experience while navigating through different parts of an application.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What is the purpose of 'next/link' in Next.js?",
    choices: [
      "To navigate between pages in a Next.js app",
      "To preload JavaScript files for faster rendering",
      "To handle API requests",
      "To optimize static assets like images",
    ],
    answer: "To navigate between pages in a Next.js app",
    explanation:
      "'next/link' is used to create client-side navigation between pages in a Next.js app. It enables faster transitions by preventing full-page reloads and optimizing the navigation experience.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What does 'Image Optimization' in Next.js do?",
    choices: [
      "Optimizes image size and quality for better performance",
      "Converts all images to WebP format",
      "Handles image animations in Next.js components",
      "Provides default images for missing assets",
    ],
    answer: "Optimizes image size and quality for better performance",
    explanation:
      "Next.js provides built-in image optimization, which optimizes the size, quality, and format of images, helping improve the performance of the web application by serving the best image for different device sizes and resolutions.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question:
      "Which Next.js feature supports Incremental Static Regeneration (ISR)?",
    choices: ["getServerSideProps", "getStaticProps", "useEffect", "useState"],
    answer: "getStaticProps",
    explanation:
      "'getStaticProps' is used with the 'revalidate' property to enable Incremental Static Regeneration (ISR). This allows pages to be statically regenerated after a set amount of time, without rebuilding the entire app.",
    hasCodeSyntax: false,
    code: ``,
  },
];

export const nextEasy10 = [
  {
    question: "What is the purpose of 'getStaticProps' in Next.js?",
    choices: [
      "To fetch data at build time for static generation",
      "To fetch data on the client-side after the page loads",
      "To enable server-side rendering for API routes",
      "To manage client-side navigation",
    ],
    answer: "To fetch data at build time for static generation",
    explanation:
      "'getStaticProps' is used to fetch data at build time for pages that are statically generated, ensuring that data is fetched once during the build process and the page can be served quickly.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question:
      "Which of the following allows for client-side navigation in Next.js?",
    choices: [
      "next/link",
      "getStaticProps",
      "getServerSideProps",
      "next/router",
    ],
    answer: "next/link",
    explanation:
      "'next/link' is a component in Next.js that enables client-side navigation between different pages, ensuring that transitions happen without a full page reload.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What is 'next/image' used for in Next.js?",
    choices: [
      "To handle image optimization and lazy loading",
      "To fetch external API data",
      "To handle form inputs in Next.js",
      "To manage authentication",
    ],
    answer: "To handle image optimization and lazy loading",
    explanation:
      "'next/image' is a built-in component in Next.js used for automatic image optimization, lazy loading, and responsive images, improving performance across devices.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What does the 'revalidate' property in 'getStaticProps' enable?",
    choices: [
      "Incremental Static Regeneration (ISR)",
      "Server-side rendering",
      "Automatic page refresh",
      "Client-side routing",
    ],
    answer: "Incremental Static Regeneration (ISR)",
    explanation:
      "The 'revalidate' property in 'getStaticProps' enables Incremental Static Regeneration (ISR), allowing statically generated pages to be updated on a regular interval without a full rebuild of the app.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What is the purpose of 'appDir' in Next.js 13+?",
    choices: [
      "To introduce a new routing system and organize pages and layouts",
      "To handle client-side data fetching",
      "To manage global state",
      "To improve component performance with memoization",
    ],
    answer: "To introduce a new routing system and organize pages and layouts",
    explanation:
      "'appDir' in Next.js 13+ introduces a new folder structure for organizing routes and layouts, simplifying the process of managing large applications and supporting features like layouts, nested routes, and server-side components.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question:
      "Which new Next.js feature helps you handle server-side data mutations?",
    choices: ["Server Actions", "ISR", "Dynamic Routes", "getStaticProps"],
    answer: "Server Actions",
    explanation:
      "Server Actions, introduced in Next.js 14, allow developers to handle server-side data mutations directly, simplifying API routes and enabling more seamless server-side logic.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What is the purpose of dynamic routes in Next.js?",
    choices: [
      "To create pages with variable paths like '/posts/[id]'",
      "To generate static content at build time",
      "To handle user authentication",
      "To fetch data on every client request",
    ],
    answer: "To create pages with variable paths like '/posts/[id]'",
    explanation:
      "Dynamic routes in Next.js allow you to create pages with dynamic paths, such as '/posts/[id]', enabling you to handle pages with varying parameters.",
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
      "Using the 'next/router' API",
      "Using 'getStaticProps'",
      "Using 'Server Actions'",
      "Using 'useEffect'",
    ],
    answer: "Using the 'next/router' API",
    explanation:
      "The 'next/router' API provides methods like 'push()' and 'replace()' to programmatically navigate between pages on the client-side without a full page reload.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question:
      "What is the main advantage of using 'getServerSideProps' in Next.js?",
    choices: [
      "It allows you to fetch data and render the page on every request",
      "It improves performance by generating static pages",
      "It pre-fetches data on the client-side",
      "It handles automatic form submissions",
    ],
    answer: "It allows you to fetch data and render the page on every request",
    explanation:
      "'getServerSideProps' is used in Next.js for server-side rendering, where data is fetched on each request and the page is rendered on the server before being sent to the client.",
    hasCodeSyntax: false,
    code: ``,
  },
];

export const nextMedium3 = [
  {
    question:
      "What is the main purpose of the 'middleware' feature in Next.js?",
    choices: [
      "To handle static generation of pages",
      "To intercept and modify requests and responses before they reach the application",
      "To manage global state in the app",
      "To fetch data on the server-side",
    ],
    answer:
      "To intercept and modify requests and responses before they reach the application",
    explanation:
      "Next.js middleware allows developers to run code before a request is completed. It can modify requests or responses, redirect users, or even block requests based on conditions like authentication.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What is the role of 'App Router' in Next.js 14?",
    choices: [
      "To handle client-side navigation with hooks",
      "To define a new way to manage pages, layouts, and nested routes",
      "To configure dynamic API routes",
      "To automatically manage server-side data mutations",
    ],
    answer: "To define a new way to manage pages, layouts, and nested routes",
    explanation:
      "In Next.js 14, the 'App Router' is used to organize pages, layouts, and nested routes. It introduces a new approach for managing the structure of a Next.js app, especially with the 'appDir' folder.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question:
      "What is 'Static Incremental Regeneration (ISR)' in Next.js used for?",
    choices: [
      "To enable incremental static page generation and regeneration after a set time interval",
      "To fetch data on every client-side navigation",
      "To replace server-side rendering for real-time data",
      "To create API routes that regenerate periodically",
    ],
    answer:
      "To enable incremental static page generation and regeneration after a set time interval",
    explanation:
      "Static Incremental Regeneration (ISR) allows statically generated pages to be updated at runtime, after a set interval, without requiring a full rebuild of the site. This enables the best of both static and dynamic rendering.",
    hasCodeSyntax: false,
    code: ``,
  },
];

export const nextMedium5 = [
  {
    question: "What is the purpose of the 'usePathname' hook in Next.js 14?",
    choices: [
      "To fetch server-side data based on the current route",
      "To get the current pathname in the app for client-side routing",
      "To define dynamic API routes",
      "To manage state across different pages",
    ],
    answer: "To get the current pathname in the app for client-side routing",
    explanation:
      "'usePathname' is a built-in hook in Next.js 14 that returns the current pathname of the URL, allowing developers to handle client-side logic based on the current route.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question:
      "What does the 'dynamic = true' configuration do in the new App Router of Next.js 14?",
    choices: [
      "It enables dynamic routing based on query parameters",
      "It enables dynamic content fetching and disables static generation",
      "It handles dynamic imports for optimized bundle size",
      "It triggers a server-side render after a dynamic client-side action",
    ],
    answer:
      "It enables dynamic content fetching and disables static generation",
    explanation:
      "Setting 'dynamic = true' in the App Router configuration allows the page to be dynamically generated on each request instead of being statically generated at build time.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question:
      "Which new feature in Next.js 14 allows for server-side mutation of data without client-side API routes?",
    choices: [
      "Server Actions",
      "API Middleware",
      "Dynamic Imports",
      "Server Components",
    ],
    answer: "Server Actions",
    explanation:
      "Server Actions in Next.js 14 allow developers to mutate data directly on the server, simplifying the handling of server-side logic and avoiding the need to create separate client-side API routes.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What is 'parallel routes' in Next.js 14?",
    choices: [
      "A routing system that allows multiple layouts to be rendered in parallel",
      "A method for managing client-side data fetching",
      "A way to preload multiple pages in parallel for faster navigation",
      "A feature for handling server-side data asynchronously",
    ],
    answer:
      "A routing system that allows multiple layouts to be rendered in parallel",
    explanation:
      "Parallel routes in Next.js 14 allow different layouts or components to be rendered in parallel within the same page, enabling more complex and flexible layouts while optimizing performance.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What is the purpose of 'generateStaticParams' in Next.js?",
    choices: [
      "To generate parameters for static paths in dynamic routes at build time",
      "To fetch static assets from the public folder",
      "To handle client-side routing with static paths",
      "To regenerate pages dynamically on the server",
    ],
    answer:
      "To generate parameters for static paths in dynamic routes at build time",
    explanation:
      "'generateStaticParams' is used to predefine dynamic routes during build time for static generation in Next.js, allowing the app to generate static pages for each dynamic route.",
    hasCodeSyntax: false,
    code: ``,
  },
];

export const nextMedium10 = [
  {
    question: "What does the 'serverComponents' option enable in Next.js 14?",
    choices: [
      "It enables server-side components that run exclusively on the server",
      "It allows for client-side component hydration",
      "It allows components to share state across the app",
      "It handles static page generation",
    ],
    answer:
      "It enables server-side components that run exclusively on the server",
    explanation:
      "'serverComponents' in Next.js 14 allows certain components to run exclusively on the server, reducing the need to send JavaScript to the client and improving performance.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What is the purpose of 'generateStaticParams' in Next.js 14?",
    choices: [
      "To pre-generate static pages with dynamic routes during the build process",
      "To manage API calls server-side",
      "To dynamically import components",
      "To enable client-side navigation with dynamic parameters",
    ],
    answer:
      "To pre-generate static pages with dynamic routes during the build process",
    explanation:
      "'generateStaticParams' is used in dynamic routes to pre-generate static pages during the build, which enables static generation for pages with dynamic URLs.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question:
      "Which feature allows handling data mutations on the server without creating separate API routes?",
    choices: ["Server Actions", "getServerSideProps", "ISR", "useEffect"],
    answer: "Server Actions",
    explanation:
      "Server Actions allow for server-side data mutations without the need for client-side API routes, streamlining server-side logic in Next.js 14.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question:
      "What is the difference between 'useEffect' and 'useLayoutEffect' in Next.js?",
    choices: [
      "'useEffect' runs asynchronously after the render, while 'useLayoutEffect' runs synchronously before the browser paints",
      "'useLayoutEffect' is used only for server-side rendering, while 'useEffect' is client-side",
      "'useEffect' is used for data fetching, while 'useLayoutEffect' handles layout updates",
      "'useEffect' runs before the render, while 'useLayoutEffect' runs after",
    ],
    answer:
      "'useEffect' runs asynchronously after the render, while 'useLayoutEffect' runs synchronously before the browser paints",
    explanation:
      "'useEffect' is used for side effects and runs asynchronously after the render, while 'useLayoutEffect' is used for layout-related side effects and runs synchronously before the browser paints the screen.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question:
      "What does 'ISR' (Incremental Static Regeneration) allow you to do in Next.js?",
    choices: [
      "Update static pages after build time, on a defined schedule",
      "Fetch data at runtime for every request",
      "Create static pages for every route",
      "Prevent a page from rendering on the server",
    ],
    answer: "Update static pages after build time, on a defined schedule",
    explanation:
      "Incremental Static Regeneration (ISR) allows you to regenerate static pages at runtime based on a set interval, enabling dynamic updates to statically generated pages without rebuilding the entire app.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What is the main benefit of 'appDir' introduced in Next.js 13+?",
    choices: [
      "It simplifies routing with built-in layouts and nested routes",
      "It improves client-side hydration",
      "It handles state management automatically",
      "It optimizes API calls for server-side rendering",
    ],
    answer: "It simplifies routing with built-in layouts and nested routes",
    explanation:
      "'appDir' introduces a new folder structure in Next.js that simplifies routing with layouts, nested routes, and server components. It makes organizing and scaling Next.js applications easier.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What is the purpose of 'usePathname' in Next.js 14?",
    choices: [
      "To access the current route's pathname in the client-side code",
      "To dynamically import a page's metadata",
      "To handle real-time updates on the server",
      "To automatically fetch API data for a specific route",
    ],
    answer: "To access the current route's pathname in the client-side code",
    explanation:
      "'usePathname' is a hook in Next.js 14 that allows you to access the current URL's pathname, enabling you to handle routing-related logic on the client side.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What is the purpose of 'middleware' in Next.js?",
    choices: [
      "To run code before a request is completed and modify the request or response",
      "To manage client-side navigation between pages",
      "To handle client-side caching of assets",
      "To dynamically fetch server-side data",
    ],
    answer:
      "To run code before a request is completed and modify the request or response",
    explanation:
      "Next.js middleware allows you to run custom logic before a request is completed, enabling modifications to requests or responses, handling redirects, authentication, and more.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question:
      "What is the difference between 'getStaticProps' and 'getServerSideProps' in Next.js?",
    choices: [
      "'getStaticProps' generates pages at build time, while 'getServerSideProps' generates pages at request time",
      "'getServerSideProps' is used for static generation, while 'getStaticProps' is used for server-side rendering",
      "'getStaticProps' fetches data from external APIs, while 'getServerSideProps' handles client-side routing",
      "'getStaticProps' runs on the client, while 'getServerSideProps' runs on the server",
    ],
    answer:
      "'getStaticProps' generates pages at build time, while 'getServerSideProps' generates pages at request time",
    explanation:
      "'getStaticProps' is used to fetch data at build time and generate static pages, while 'getServerSideProps' fetches data on each request, generating the page server-side at runtime.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question:
      "How does 'React Server Components' benefit performance in Next.js?",
    choices: [
      "By reducing client-side JavaScript and running components only on the server",
      "By fetching data more quickly on the client-side",
      "By allowing server-side data fetching in API routes",
      "By improving client-side rendering speed for components",
    ],
    answer:
      "By reducing client-side JavaScript and running components only on the server",
    explanation:
      "React Server Components in Next.js allow certain components to run only on the server, reducing the amount of JavaScript sent to the client and improving performance by minimizing client-side rendering.",
    hasCodeSyntax: false,
    code: ``,
  },
];

export const nextHard3 = [
  {
    question: "What does 'edge runtime' in Next.js 14 provide?",
    choices: [
      "It allows Next.js to run serverless functions closer to the user using edge networks",
      "It manages client-side caching of static assets",
      "It handles real-time database updates",
      "It ensures that pages are pre-rendered at build time",
    ],
    answer:
      "It allows Next.js to run serverless functions closer to the user using edge networks",
    explanation:
      "Next.js Edge Runtime enables running serverless functions closer to the end-user using edge networks. This reduces latency by serving requests from servers geographically closer to the user.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question:
      "How do 'parallel routes' differ from regular routes in Next.js 14?",
    choices: [
      "Parallel routes allow rendering multiple routes simultaneously in the same layout",
      "Parallel routes automatically optimize data fetching for multiple pages",
      "Parallel routes split bundles to optimize client-side performance",
      "Parallel routes allow for concurrent client-side state management",
    ],
    answer:
      "Parallel routes allow rendering multiple routes simultaneously in the same layout",
    explanation:
      "Parallel routes allow multiple routes to be rendered simultaneously within the same layout. This is useful for creating more complex UIs where different content can be displayed side-by-side within a page.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What is the purpose of 'React Server Components' in Next.js 14?",
    choices: [
      "To enable server-side rendering with dynamic data fetching",
      "To allow certain components to be rendered only on the server, reducing client-side JavaScript",
      "To optimize client-side state management across multiple components",
      "To automatically generate static pages with server-side data fetching",
    ],
    answer:
      "To allow certain components to be rendered only on the server, reducing client-side JavaScript",
    explanation:
      "React Server Components in Next.js 14 allow developers to render components entirely on the server. This reduces the amount of JavaScript sent to the client, improving performance and reducing the client-side load.",
    hasCodeSyntax: false,
    code: ``,
  },
];

export const nextHard5 = [
  {
    question:
      "What is the main benefit of 'Server Actions' introduced in Next.js 14?",
    choices: [
      "To handle server-side data mutations without needing separate API routes",
      "To enable client-side caching of API responses",
      "To improve static site generation for large applications",
      "To manage client-side state more efficiently",
    ],
    answer:
      "To handle server-side data mutations without needing separate API routes",
    explanation:
      "Server Actions in Next.js 14 allow you to perform server-side data mutations directly from the component without needing to define separate API routes, simplifying server-side logic and reducing code duplication.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What does the 'edge runtime' in Next.js optimize?",
    choices: [
      "It optimizes server-side rendering by prefetching data at build time",
      "It allows serverless functions to run closer to users, reducing latency",
      "It optimizes client-side routing for faster navigation",
      "It automatically hydrates server-rendered components on the client",
    ],
    answer:
      "It allows serverless functions to run closer to users, reducing latency",
    explanation:
      "The edge runtime in Next.js allows serverless functions to run on edge networks, closer to users geographically, reducing latency and improving the performance of dynamic content.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question:
      "What is the primary advantage of using 'React Server Components' in Next.js 14?",
    choices: [
      "To minimize client-side JavaScript by rendering certain components only on the server",
      "To manage global state across multiple components efficiently",
      "To enable real-time updates directly on the server",
      "To handle API calls faster on the client-side",
    ],
    answer:
      "To minimize client-side JavaScript by rendering certain components only on the server",
    explanation:
      "React Server Components minimize client-side JavaScript by rendering certain components entirely on the server, improving performance by sending only HTML to the client and reducing the amount of JavaScript that needs to be loaded.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question:
      "How does 'parallel routes' in Next.js 14 improve user experience?",
    choices: [
      "It allows multiple routes or layouts to be rendered simultaneously in a single page",
      "It preloads all routes for faster client-side navigation",
      "It fetches data from multiple APIs in parallel",
      "It optimizes performance by splitting the client bundle into multiple parts",
    ],
    answer:
      "It allows multiple routes or layouts to be rendered simultaneously in a single page",
    explanation:
      "Parallel routes in Next.js 14 allow different parts of a page (such as different layouts or sections) to be rendered simultaneously, which improves the flexibility and performance of complex user interfaces.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What problem does 'Middleware' solve in Next.js 14?",
    choices: [
      "It enables code to run before a request is completed, allowing for tasks like authentication, logging, and redirects",
      "It handles server-side data fetching before rendering the page",
      "It allows client-side components to be hydrated after rendering",
      "It enables real-time updates on the client-side",
    ],
    answer:
      "It enables code to run before a request is completed, allowing for tasks like authentication, logging, and redirects",
    explanation:
      "Middleware in Next.js allows you to intercept requests before they are completed, enabling tasks like authentication, logging, request modification, and handling redirects before the server or client processes the request.",
    hasCodeSyntax: false,
    code: ``,
  },
];

export const nextHard10 = [
  {
    question:
      "What is the key advantage of 'React Server Components' in Next.js 14?",
    choices: [
      "Reducing client-side JavaScript by rendering components only on the server",
      "Enabling global state management across multiple components",
      "Allowing real-time data updates directly from the server",
      "Prefetching API data for improved performance",
    ],
    answer:
      "Reducing client-side JavaScript by rendering components only on the server",
    explanation:
      "React Server Components in Next.js 14 allow components to be rendered entirely on the server, which reduces the amount of JavaScript sent to the client, improving performance and load times.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What is the purpose of 'Middleware' in Next.js 14?",
    choices: [
      "To run code before a request is completed, enabling tasks like authentication, logging, and redirects",
      "To handle server-side rendering of dynamic pages",
      "To manage client-side state more efficiently",
      "To optimize the hydration of client-side components",
    ],
    answer:
      "To run code before a request is completed, enabling tasks like authentication, logging, and redirects",
    explanation:
      "Middleware in Next.js allows developers to run code before the request completes, which is useful for tasks like authentication, logging, and redirecting users based on conditions before the main application logic is processed.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What does the 'edge runtime' in Next.js 14 optimize?",
    choices: [
      "Running serverless functions closer to users for reduced latency",
      "Handling client-side navigation faster by splitting JavaScript bundles",
      "Optimizing API calls for static pages at build time",
      "Running real-time database updates directly from the client",
    ],
    answer: "Running serverless functions closer to users for reduced latency",
    explanation:
      "The 'edge runtime' in Next.js allows serverless functions to be run on edge networks, reducing latency by processing requests closer to users geographically, improving performance for dynamic content.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question:
      "How do 'parallel routes' in Next.js 14 improve rendering performance?",
    choices: [
      "By allowing different routes or layouts to be rendered simultaneously in the same view",
      "By preloading multiple pages before the user navigates",
      "By reducing the amount of JavaScript needed to load a page",
      "By enabling real-time data fetching on both the server and client",
    ],
    answer:
      "By allowing different routes or layouts to be rendered simultaneously in the same view",
    explanation:
      "Parallel routes allow Next.js 14 to render multiple layouts or components in parallel within the same page, improving the flexibility and performance of complex UIs by rendering different sections simultaneously.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question:
      "What is the primary benefit of using 'Server Actions' in Next.js 14?",
    choices: [
      "They allow you to mutate server-side data directly without needing separate API routes",
      "They enable faster page transitions during client-side navigation",
      "They automatically hydrate server-rendered components",
      "They provide automatic caching for server-side data fetching",
    ],
    answer:
      "They allow you to mutate server-side data directly without needing separate API routes",
    explanation:
      "'Server Actions' in Next.js 14 simplify server-side data mutations by allowing developers to perform these actions directly in the component, avoiding the need to set up and manage separate API routes.",
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
      "ISR enables you to update statically generated pages at runtime, which means the page can be regenerated in the background after a set interval, without the need for a full site rebuild.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question:
      "What does 'dynamic = true' in the new App Router configuration of Next.js 14 do?",
    choices: [
      "It enables dynamic rendering of content on every request, bypassing static generation",
      "It allows client-side components to load dynamically based on user actions",
      "It fetches API data on the client-side after page load",
      "It provides automatic revalidation of static pages",
    ],
    answer:
      "It enables dynamic rendering of content on every request, bypassing static generation",
    explanation:
      "Setting 'dynamic = true' in the App Router configuration of Next.js 14 disables static generation and ensures that content is dynamically rendered on every request, making it suitable for dynamic content.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question: "What are the use cases of 'usePathname' in Next.js 14?",
    choices: [
      "To retrieve the current URL pathname for client-side logic like conditional rendering or routing",
      "To fetch dynamic content from server-side routes",
      "To handle real-time updates of page content",
      "To manage server-side rendering based on dynamic paths",
    ],
    answer:
      "To retrieve the current URL pathname for client-side logic like conditional rendering or routing",
    explanation:
      "'usePathname' is a hook in Next.js 14 that allows developers to access the current URL pathname, which is useful for conditional rendering or applying client-side routing logic based on the current URL.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question:
      "What role does 'generateStaticParams' play in dynamic routes in Next.js?",
    choices: [
      "It generates static paths for dynamic routes at build time for static generation",
      "It handles dynamic routing on the client-side for improved navigation",
      "It prefetches dynamic data from external APIs during server-side rendering",
      "It provides real-time updates to dynamic pages",
    ],
    answer:
      "It generates static paths for dynamic routes at build time for static generation",
    explanation:
      "'generateStaticParams' is used in dynamic routes to pre-generate static paths at build time, allowing for static generation of pages that rely on dynamic URL parameters.",
    hasCodeSyntax: false,
    code: ``,
  },

  {
    question:
      "How does 'React Server Components' improve performance in Next.js 14?",
    choices: [
      "By reducing the amount of JavaScript sent to the client and offloading rendering to the server",
      "By managing global state across all server-rendered pages",
      "By dynamically fetching data from the server without blocking the client-side",
      "By enabling server-side data mutations directly from the client",
    ],
    answer:
      "By reducing the amount of JavaScript sent to the client and offloading rendering to the server",
    explanation:
      "React Server Components improve performance by offloading rendering to the server, reducing the amount of JavaScript that needs to be sent to and processed by the client, resulting in faster load times and lower client-side complexity.",
    hasCodeSyntax: false,
    code: ``,
  },
];
