export const questions = [
  {
    question: "What's the output?",
    code: `function sayHi() {
    console.log(name); 
    console.log(age);    
    var name = 'Lydia'; 
    let age = 21; 
  }   
sayHi();`,
    choices: [
      "Lydia and undefined",
      "Lydia and ReferenceError",
      "ReferenceError and 21",
      "undefined and ReferenceError",
    ],
    answer: "undefined and ReferenceError",
    explanation: `Within the function, we first declare the name variable with the "var"
    keyword. This means that the variable gets hoisted (memory space is set
    up during the creation phase) with the default value of "undefined", until
    we actually get to the line where we define the variable. We haven't
    defined the variable yet on the line where we try to log the name
    variable, so it still holds the value of "undefined". 
    Variables with the" let" keyword (and "const") are hoisted, but
    unlike "var", don't get initialized. They are not accessible before the
    line we declare (initialize) them. This is called the "temporal dead
    zone". When we try to access the variables before they are declared,
    JavaScript throws a ReferenceError.`,
  },
  {
    question: "What's the output?",
    code: `for (var i = 0; i < 3; i++) {
      setTimeout(() => console.log(i), 1);
  }

  for (let i = 0; i < 3; i++) {
      setTimeout(() => console.log(i), 1);
  }`,
    choices: ["0 1 2 and 0 1 2", "0 1 2 and 3 3 3", "3 3 3 and 0 1 2"],
    answer: "3 3 3 and 0 1 2",
    explanation: `Because of the event queue in JavaScript, the "setTimeout" callback function is called after the loop has been executed. Since the variable "i" in the first loop was declared using the var keyword, this value was global. During the loop, we incremented the value of "i" by 1 each time, using the unary operator "++". By the time the setTimeout callback function was invoked, "i" was equal to 3 in the first example.

    In the second loop, the variable "i" was declared using the let keyword: variables declared with the let (and const) keyword are block-scoped (a block is anything between { }). During each iteration, "i" will have a new value, and each value is scoped inside the loop.`,
  },
  {
    question: "What's the output?",
    code: `const shape = {
      radius: 10,
      diameter() {
        return this.radius * 2;
      },
      perimeter: () => 2 * Math.PI * this.radius,
  };

    console.log(shape.diameter());
    console.log(shape.perimeter());`,
    choices: [
      "20 and 62.83185307179586",
      "20 and NaN",
      "20 and 63",
      "NaN and 63",
    ],
    answer: "20 and NaN",
    explanation: `Note that the value of "diameter" is a regular function, whereas the value of "perimete"r is an arrow function.

      With arrow functions, the "this" keyword refers to its current surrounding scope, unlike regular functions! This means that when we call "perimeter", it doesn't refer to the shape object, but to its surrounding scope (window for example).
      
      There is no value "radius" on that object, which returns NaN.`,
  },
  {
    question: "What's the output?",
    code: `+true;
!'Lydia';`,
    choices: ["1 and false", "false and NaN", "false and false"],
    answer: "1 and false",
    explanation: `The unary plus tries to convert an operand to a number. true is 1, and false is 0.

    The string 'Lydia' is a truthy value. What we're actually asking, is "is this truthy value falsy?". This returns false.`,
  },
  {
    question: "Which one is true?",
    code: `const bird = {
size: 'small',
};
    
const mouse = {
name: 'Mickey',
small: true,
};`,
    choices: [
      "mouse.bird.size is not valid",
      "mouse[bird.size] is not valid",
      'mouse[bird["size"]] is not valid',
      "All are valid",
    ],
    answer: "mouse.bird.size is not valid",
    explanation: `In JavaScript, all object keys are strings (unless it's a Symbol). Even though we might not type them as strings, they are always converted into strings under the hood.

    JavaScript interprets (or unboxes) statements. When we use bracket notation, it sees the first opening bracket [ and keeps going until it finds the closing bracket ]. Only then, it will evaluate the statement.
    
    mouse[bird.size]: First it evaluates bird.size, which is "small". mouse["small"] returns true
    
    However, with dot notation, this doesn't happen. mouse does not have a key called bird, which means that mouse.bird is undefined. Then, we ask for the size using dot notation: mouse.bird.size. Since mouse.bird is undefined, we're actually asking undefined.size. This isn't valid, and will throw an error similar to Cannot read property "size" of undefined.`,
  },
  {
    question: "What's the output?",
    code: `let c = { greeting: 'Hey!' };
    let d;
    
    d = c;
    c.greeting = 'Hello';
    console.log(d.greeting);`,
    choices: ["Hello", "Hey!", "undefined", "ReferenceError", "TypeError"],
    answer: "Hello",
    explanation: `
    In JavaScript, all objects interact by reference when setting them equal to each other.

First, variable c holds a value to an object. Later, we assign d with the same reference that c has to the object. When you change one object, you change all of them.`,
  },
  {
    question: "What's the output?",
    code: `let a = 3;
    let b = new Number(3);
    let c = 3;
    
    console.log(a == b);
    console.log(a === b);
    console.log(b === c);`,
    choices: [
      "true false true",
      "false false true",
      "true false false",
      "false true true",
    ],
    answer: "true false false",
    explanation: `new Number() is a built-in function constructor. Although it looks like a number, it's not really a number: it has a bunch of extra features and is an object.

    When we use the == operator, it only checks whether it has the same value. They both have the value of 3, so it returns true.
    
    However, when we use the === operator, both value and type should be the same. It's not: new Number() is not a number, it's an object. Both return false.`,
  },
  {
    question: "What's the output?",
    code: `class Chameleon {
      static colorChange(newColor) {
        this.newColor = newColor;
        return this.newColor;
      }
    
      constructor({ newColor = 'green' } = {}) {
        this.newColor = newColor;
      }
    }
    
    const freddie = new Chameleon({ newColor: 'purple' });
    console.log(freddie.colorChange('orange'));`,
    choices: ["orange", "purple", "green", "TypeError"],
    answer: "TypeError",
    explanation: `The colorChange function is static. Static methods are designed to live only on the constructor in which they are created, and cannot be passed down to any children or called upon class instances. Since freddie is an instance of class Chameleon, the function cannot be called upon it. A TypeError is thrown.`,
  },
  {
    question: "What's the output?",
    code: `let greeting;
    greetign = {}; // Typo!
    console.log(greetign);`,
    choices: ["{}", "ReferenceError: greetign is not defined", "undefined"],
    answer: "{}",
    explanation: `It logs the object, because we just created an empty object on the global object! When we mistyped greeting as greetign, the JS interpreter actually saw this as global.greetign = {} (or window.greetign = {} in a browser).

    In order to avoid this, we can use "use strict". This makes sure that you have declared a variable before setting it equal to anything.`,
  },
  {
    question: "What happens when we do this?",
    code: `function bark() {
      console.log('Woof!');
    }
    
    bark.animal = 'dog';`,
    choices: [
      "Nothing, this is totally fine!",
      "SyntaxError. You cannot add properties to a function this way.",
      '"Woof" gets logged.',
      "ReferenceError",
    ],
    answer: "Nothing, this is totally fine!",
    explanation: `This is possible in JavaScript, because functions are objects! (Everything besides primitive types are objects)

    A function is a special type of object. The code you write yourself isn't the actual function. The function is an object with properties. This property is invocable.`,
  },
  {
    question: "What's the output?",
    code: `function Person(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    
    const member = new Person('Lydia', 'Hallie');
    Person.getFullName = function() {
      return \${this.firstName} \${this.lastName};
    };
    
    console.log(member.getFullName());`,
    choices: [
      "TypeError",
      "SyntaxError",
      "Lydia Hallie",
      "undefined undefined",
    ],
    answer: "TypeError",
    explanation: `In JavaScript, functions are objects, and therefore, the method getFullName gets added to the constructor function object itself. For that reason, we can call Person.getFullName(), but member.getFullName throws a TypeError.

    If you want a method to be available to all object instances, you have to add it to the prototype property`,
  },
  {
    question: "What's the output?",
    code: `function Person(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    
    const lydia = new Person('Lydia', 'Hallie');
    const sarah = Person('Sarah', 'Smith');
    
    console.log(lydia);
    console.log(sarah);`,
    choices: [
      `Person {firstName: "Lydia", lastName: "Hallie"} and undefined`,
      `Person {firstName: "Lydia", lastName: "Hallie"} and Person {firstName: "Sarah", lastName: "Smith"}`,
      `Person {firstName: "Lydia", lastName: "Hallie"} and {}`,
      `Person {firstName: "Lydia", lastName: "Hallie"} and ReferenceError`,
    ],
    answer: 'Person {firstName: "Lydia", lastName: "Hallie"} and undefined',
    explanation: `For sarah, we didn't use the new keyword. When using new, this refers to the new empty object we create. However, if you don't add new, this refers to the global object!

    We said that this.firstName equals "Sarah" and this.lastName equals "Smith". What we actually did, is defining global.firstName = 'Sarah' and global.lastName = 'Smith'. sarah itself is left undefined, since we don't return a value from the Person function.`,
  },
  {
    question: "What's the output?",
    code: `function sum(a, b) {
      return a + b;
    }
    
    sum(1, '2');`,
    choices: ["NaN", "TypeError", '"12"', "3"],
    answer: '"12"',
    explanation: `avaScript is a dynamically typed language: we don't specify what types certain variables are. Values can automatically be converted into another type without you knowing, which is called implicit type coercion. Coercion is converting from one type into another.

    In this example, JavaScript converts the number 1 into a string, in order for the function to make sense and return a value. During the addition of a numeric type (1) and a string type ('2'), the number is treated as a string. We can concatenate strings like "Hello" + "World", so what's happening here is "1" + "2" which returns "12".`,
  },
  {
    question: "What's the output?",
    code: `let number = 0;
    console.log(number++);
    console.log(++number);
    console.log(number);`,
    choices: ["1 1 1", "1 2 2", "0 2 2", "0 1 2"],
    answer: "0 2 2",
    explanation: `The postfix unary operator ++:

    Returns the value (this returns 0)
    Increments the value (number is now 1)

The prefix unary operator ++:

    Increments the value (number is now 2)
    Returns the value (this returns 2)

This returns 0 2 2.`,
  },
  {
    question: "What's the output?",
    code: `function getPersonInfo(one, two, three) {
      console.log(one);
      console.log(two);
      console.log(three);
    }
    
    const person = 'Lydia';
    const age = 21;
    
    getPersonInfo\${person} is $\{age} years old\;`,
    choices: [
      '"Lydia" 21 ["", " is ", " years old"]',
      ' ["", " is ", " years old"] "Lydia" 21',
      '"Lydia" ["", " is ", " years old"] 21',
    ],
    answer: '["", " is ", " years old"] "Lydia" 21',
    explanation: `If you use tagged template literals, the value of the first argument is always an array of the string values. The remaining arguments get the values of the passed expressions!`,
  },
  {
    question: "What's the output?",
    code: `function checkAge(data) {
      if (data === { age: 18 }) {
        console.log('You are an adult!');
      } else if (data == { age: 18 }) {
        console.log('You are still an adult.');
      } else {
        console.log(\`Hmm.. You don't have an age I guess\`);
      }
    }
    
    checkAge({ age: 18 });`,
    choices: [
      "You are an adult!",
      "You are still an adult.",
      "Hmm.. You don't have an age I guess",
    ],
    answer: "Hmm.. You don't have an age I guess",
    explanation: `When testing equality, primitives are compared by their value, while objects are compared by their reference. JavaScript checks if the objects have a reference to the same location in memory.

    The two objects that we are comparing don't have that: the object we passed as a parameter refers to a different location in memory than the object we used in order to check equality.
    
    This is why both { age: 18 } === { age: 18 } and { age: 18 } == { age: 18 } return false.`,
  },
  {
    question: "What's the output?",
    code: `function getAge(...args) {
      console.log(typeof args);
    }
    
    getAge(21);`,
    choices: ['"number"', '"array"', '"object"', '"NaN"'],
    answer: '"object"',
    explanation: `The rest parameter (...args) lets us "collect" all remaining arguments into an array. An array is an object, so typeof args returns "object"`,
  },
  {
    question: "What's the output?",
    code: `function getAge() {
      'use strict';
      age = 21;
      console.log(age);
    }
    
    getAge();`,
    choices: ["21", "undefined", "ReferenceError", "TypeError"],
    answer: "ReferenceError",
    explanation: `With "use strict", you can make sure that you don't accidentally declare global variables. We never declared the variable age, and since we use "use strict", it will throw a reference error. If we didn't use "use strict", it would have worked, since the property age would have gotten added to the global object.`,
  },
  {
    question: "What's the value of sum?",
    code: `const sum = eval('10*10+5');`,
    choices: ["105", '"105"', "TypeError", '"10*10+5"'],
    answer: "105",
    explanation: `eval evaluates codes that's passed as a string. If it's an expression, like in this case, it evaluates the expression. The expression is 10 * 10 + 5. This returns the number 105.`,
  },
  {
    question: "How long is cool_secret accessible?",
    code: `sessionStorage.setItem('cool_secret', 123);`,
    choices: [
      "Forever, the data doesn't get lost.",
      "When the user closes the tab.",
      "When the user closes the entire browser, not only the tab.",
      "When the user shuts off their computer.",
    ],
    answer: "When the user closes the tab.",
    explanation: `The data stored in sessionStorage is removed after closing the tab.

    If you used localStorage, the data would've been there forever, unless for example localStorage.clear() is invoked.`,
  },
  {
    question: "What's the output?",
    code: `var num = 8;
    var num = 10;
    
    console.log(num);`,
    choices: ["8", "10", "SyntaxError", "ReferenceError"],
    answer: "10",
    explanation: `With the var keyword, you can declare multiple variables with the same name. The variable will then hold the latest value.

    You cannot do this with let or const since they're block-scoped.`,
  },
  {
    question: "What's the output?",
    code: `const obj = { 1: 'a', 2: 'b', 3: 'c' };
    const set = new Set([1, 2, 3, 4, 5]);
    
    obj.hasOwnProperty('1');
    obj.hasOwnProperty(1);
    set.has('1');
    set.has(1);`,
    choices: [
      "false true false true",
      "false true true true",
      "true true false true",
      "true true true true",
    ],
    answer: "true true false true",
    explanation: `All object keys (excluding Symbols) are strings under the hood, even if you don't type it yourself as a string. This is why obj.hasOwnProperty('1') also returns true.

    It doesn't work that way for a set. There is no '1' in our set: set.has('1') returns false. It has the numeric type 1, set.has(1) returns true.`,
  },
  {
    question: "What's the output?",
    code: `const obj = { a: 'one', b: 'two', a: 'three' };
    console.log(obj);`,
    choices: [
      '{ a: "one", b: "two" }',
      '{ b: "two", a: "three" }',
      '{ a: "three", b: "two" }',
      "SyntaxError",
    ],
    answer: '{ a: "three", b: "two" }',
    explanation: `If you have two keys with the same name, the key will be replaced. It will still be in its first position, but with the last specified value.`,
  },
  {
    question: "What's the output?",
    code: `for (let i = 1; i < 5; i++) {
      if (i === 3) continue;
      console.log(i);
    }`,
    choices: ["1 2", "1 2 3", "1 2 4", "1 3 4"],
    answer: "1 2 4",
    explanation: `The continue statement skips an iteration if a certain condition returns true.`,
  },
  {
    question: "What's the output?",
    code: `String.prototype.giveLydiaPizza = () => {
      return 'Just give Lydia pizza already!';
    };
    
    const name = 'Lydia';
    
    console.log(name.giveLydiaPizza())`,
    choices: [
      '"Just give Lydia pizza already!"',
      "TypeError: not a function",
      "SyntaxError",
      "undefined",
    ],
    answer: '"Just give Lydia pizza already!"',
    explanation: `String is a built-in constructor, which we can add properties to. I just added a method to its prototype. Primitive strings are automatically converted into a string object, generated by the string prototype function. So, all strings (string objects) have access to that method!`,
  },
];
