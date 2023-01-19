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
    explanation: `In JavaScript, all objects interact by reference when setting them equal to each other.
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
    explanation: `JavaScript is a dynamically typed language: we don't specify what types certain variables are. Values can automatically be converted into another type without you knowing, which is called implicit type coercion. Coercion is converting from one type into another.
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
  {
    question: "What's the output?",
    code: `const a = {};
    const b = { key: 'b' };
    const c = { key: 'c' };
    
    a[b] = 123;
    a[c] = 456;
    
    console.log(a[b]);`,
    choices: ["123", "456", "undefined", "ReferenceError"],
    answer: "456",
    explanation: `Object keys are automatically converted into strings. We are trying to set an object as a key to object a, with the value of 123.
    However, when we stringify an object, it becomes "[object Object]". So what we are saying here, is that a["[object Object]"] = 123. Then, we can try to do the same again. c is another object that we are implicitly stringifying. So then, a["[object Object]"] = 456.
    Then, we log a[b], which is actually a["[object Object]"]. We just set that to 456, so it returns 456.`,
  },
  {
    question: "What is the event.target when clicking the button?",
    code: `<div onclick="console.log('first div')">
    <div onclick="console.log('second div')">
      <button onclick="console.log('button')">
        Click!
      </button>
    </div>
  </div>`,
    choices: [
      "Outer div",
      "Inner div",
      "button",
      "An array of all nested elements.",
    ],
    answer: "button",
    explanation: `The deepest nested element that caused the event is the target of the event. You can stop bubbling by event.stopPropagation`,
  },
  {
    question: "When you click the paragraph, what's the logged output?",
    code: `<div onclick="console.log('div')">
    <p onclick="console.log('p')">
      Click here!
    </p>
  </div>`,
    choices: ["p div", "div p", "p", "div"],
    answer: "p div",
    explanation: `If we click p, we see two logs: p and div. During event propagation, there are 3 phases: capturing, target, and bubbling. By default, event handlers are executed in the bubbling phase (unless you set useCapture to true). It goes from the deepest nested element outwards.`,
  },
  {
    question: "What's the output?",
    code: `const person = { name: 'Lydia' };

    function sayHi(age) {
      return \${this.name} is \${age};
    }
    
    console.log(sayHi.call(person, 21));
    console.log(sayHi.bind(person, 21));`,
    choices: [
      "undefined is 21 Lydia is 21",
      "function function",
      "Lydia is 21 Lydia is 21",
      "Lydia is 21 function",
    ],
    answer: "Lydia is 21 function",
    explanation: `With both, we can pass the object to which we want the this keyword to refer to. However, .call is also executed immediately!
    .bind. returns a copy of the function, but with a bound context! It is not executed immediately.`,
  },
  {
    question: "What's the output?",
    code: `function sayHi() {
      return (() => 0)();
    }
    
    console.log(typeof sayHi());`,
    choices: ['"object"', '"number"', '"function"', '"undefined"'],
    answer: '"number"',
    explanation: `The sayHi function returns the returned value of the immediately invoked function expression (IIFE). This function returned 0, which is type "number".
    FYI: typeof can return the following list of values: undefined, boolean, number, bigint, string, symbol, function and object. Note that typeof null returns "object".`,
  },
  {
    question: "Which of these values are falsy?",
    code: `0;
    new Number(0);
    ('');
    (' ');
    new Boolean(false);
    undefined;`,
    choices: [
      "0, '', undefined",
      "0, new Number(0), '', new Boolean(false), undefined",
      "0, '', new Boolean(false), undefined",
      "All of them are falsy",
    ],
    answer: "",
    explanation: `There are 8 falsy values:

    undefined
    null
    NaN
    false
    '' (empty string)
    0
    -0
    0n (BigInt(0))

Function constructors, like new Number and new Boolean are truthy.`,
  },
  {
    question: "What's the output?",
    code: `console.log(typeof typeof 1);`,
    choices: ['"number"', '"string"', '"object"', '"undefined"'],
    answer: '"string"',
    explanation: `typeof 1 returns "number". typeof "number" returns "string"`,
  },
  {
    question: "What's the output?",
    code: `const numbers = [1, 2, 3];
    numbers[10] = 11;
    console.log(numbers);`,
    choices: [
      "[1, 2, 3, null x 7, 11]",
      "[1, 2, 3, 11]",
      "[1, 2, 3, empty x 7, 11]",
      "SyntaxError",
    ],
    answer: "[1, 2, 3, empty x 7, 11]",
    explanation: `When you set a value to an element in an array that exceeds the length of the array, JavaScript creates something called "empty slots". These actually have the value of undefined, but you will see something like:
    [1, 2, 3, empty x 7, 11]
    depending on where you run it (it's different for every browser, node, etc.)`,
  },
  {
    question: "What's the output?",
    code: `(() => {
      let x, y;
      try {
        throw new Error();
      } catch (x) {
        (x = 1), (y = 2);
        console.log(x);
      }
      console.log(x);
      console.log(y);
    })();`,
    choices: [
      "1 undefined 2",
      "undefined undefined undefined",
      "1 1 2",
      "1 undefined undefined",
    ],
    answer: "1 undefined 2",
    explanation: `The catch block receives the argument x. This is not the same x as the variable when we pass arguments. This variable x is block-scoped.
    Later, we set this block-scoped variable equal to 1, and set the value of the variable y. Now, we log the block-scoped variable x, which is equal to 1.
    Outside of the catch block, x is still undefined, and y is 2. When we want to console.log(x) outside of the catch block, it returns undefined, and y returns 2.`,
  },
  {
    question: "What's the output?",
    code: `[[0, 1], [2, 3]].reduce(
      (acc, cur) => {
        return acc.concat(cur);
      },
      [1, 2],
    );`,
    choices: [
      "[0, 1, 2, 3, 1, 2]",
      "[6, 1, 2]",
      "[1, 2, 0, 1, 2, 3]",
      "[1, 2, 6]",
    ],
    answer: "[1, 2, 0, 1, 2, 3]",
    explanation: `[1, 2] is our initial value. This is the value we start with, and the value of the very first acc. During the first round, acc is [1,2], and cur is [0, 1]. We concatenate them, which results in [1, 2, 0, 1].
    Then, [1, 2, 0, 1] is acc and [2, 3] is cur. We concatenate them, and get [1, 2, 0, 1, 2, 3]`,
  },
  {
    question: "What's the output?",
    code: `!!null;
    !!'';
    !!1;`,
    choices: [
      "false true false",
      "false false true",
      "alse true true",
      "true true false",
    ],
    answer: "false false true",
    explanation: `null is falsy. !null returns true. !true returns false.

    "" is falsy. !"" returns true. !true returns false.
    
    1 is truthy. !1 returns false. !false returns true.`,
  },
  {
    question: "What does the setInterval method return in the browser?",
    code: `setInterval(() => console.log('Hi'), 1000);`,
    choices: [
      "a unique id",
      "the amount of milliseconds specified",
      "the passed function",
      "undefined",
    ],
    answer: "a unique id",
    explanation: `It returns a unique id. This id can be used to clear that interval with the clearInterval() function.`,
  },
  {
    question: "What does this return?",
    code: `[...'Lydia'];`,
    choices: [
      '["L", "y", "d", "i", "a"]',
      '"Lydia"]',
      '[[], "Lydia"]',
      '[["L", "y", "d", "i", "a"]]',
    ],
    answer: '["L", "y", "d", "i", "a"]',
    explanation: `A string is an iterable. The spread operator maps every character of an iterable to one element.`,
  },
  {
    question: "What's the output?",
    code: `function* generator(i) {
      yield i;
      yield i * 2;
    }
    
    const gen = generator(10);
    
    console.log(gen.next().value);
    console.log(gen.next().value);`,
    choices: ["[0, 10], [10, 20]", "20, 20", "10, 20", "0, 10 and 10, 20"],
    answer: "10, 20",
    explanation: `Regular functions cannot be stopped mid-way after invocation. However, a generator function can be "stopped" midway, and later continue from where it stopped. Every time a generator function encounters a yield keyword, the function yields the value specified after it. Note that the generator function in that case doesn’t return the value, it yields the value.
    First, we initialize the generator function with i equal to 10. We invoke the generator function using the next() method. The first time we invoke the generator function, i is equal to 10. It encounters the first yield keyword: it yields the value of i. The generator is now "paused", and 10 gets logged.
    Then, we invoke the function again with the next() method. It starts to continue where it stopped previously, still with i equal to 10. Now, it encounters the next yield keyword, and yields i * 2. i is equal to 10, so it returns 10 * 2, which is 20. This results in 10, 20.`,
  },
  {
    question: "What does this return?",
    code: `const firstPromise = new Promise((res, rej) => {
      setTimeout(res, 500, 'one');
    });
    
    const secondPromise = new Promise((res, rej) => {
      setTimeout(res, 100, 'two');
    });
    
    Promise.race([firstPromise, secondPromise]).then(res => console.log(res));`,
    choices: ['"one"', '"two"', '"two" "one"', '"one" "two"'],
    answer: '"two"',
    explanation: `When we pass multiple promises to the Promise.race method, it resolves/rejects the first promise that resolves/rejects. To the setTimeout method, we pass a timer: 500ms for the first promise (firstPromise), and 100ms for the second promise (secondPromise). This means that the secondPromise resolves first with the value of 'two'. res now holds the value of 'two', which gets logged.`,
  },
  {
    question: "What's the output?",
    code: `let person = { name: 'Lydia' };
    const members = [person];
    person = null;
    
    console.log(members);`,
    choices: ["null", "[null]", "[{}]", '[{ name: "Lydia" }]'],
    answer: '[{ name: "Lydia" }]',
    explanation: `First, we declare a variable person with the value of an object that has a name property.
    Then, we declare a variable called members. We set the first element of that array equal to the value of the person variable. Objects interact by reference when setting them equal to each other. When you assign a reference from one variable to another, you make a copy of that reference. (note that they don't have the same reference!)
    Then, we set the variable person equal to null.
    We are only modifying the value of the person variable, and not the first element in the array, since that element has a different (copied) reference to the object. The first element in members still holds its reference to the original object. When we log the members array, the first element still holds the value of the object, which gets logged.`,
  },
  {
    question: "What's the output?",
    code: `const person = {
      name: 'Lydia',
      age: 21,
    };
    
    for (const item in person) {
      console.log(item);
    }`,
    choices: [
      '{ name: "Lydia" }, { age: 21 }',
      '"name", "age"',
      '"Lydia", 21',
      '["name", "Lydia"], ["age", 21]',
    ],
    answer: '"name", "age"',
    explanation: `With a for-in loop, we can iterate through object keys, in this case name and age. Under the hood, object keys are strings (if they're not a Symbol). On every loop, we set the value of item equal to the current key it’s iterating over. First, item is equal to name, and gets logged. Then, item is equal to age, which gets logged.`,
  },
  {
    question: "What's the output?",
    code: `console.log(3 + 4 + '5');`,
    choices: ['"345"', '"75"', "12", '"12"'],
    answer: '"75"',
    explanation: `Operator associativity is the order in which the compiler evaluates the expressions, either left-to-right or right-to-left. This only happens if all operators have the same precedence. We only have one type of operator: +. For addition, the associativity is left-to-right.
    3 + 4 gets evaluated first. This results in the number 7.
    7 + '5' results in "75" because of coercion. JavaScript converts the number 7 into a string. We can concatenate two strings using the +operator. "7" + "5" results in "75".`,
  },
  {
    question: "What's the value of num?",
    code: `const num = parseInt('7*6', 10);`,
    choices: ["42", '"42"', "7", "NaN"],
    answer: "7",
    explanation: `Only the first numbers in the string is returned. Based on the radix (the second argument in order to specify what type of number we want to parse it to: base 10, hexadecimal, octal, binary, etc.), the parseInt checks whether the characters in the string are valid. Once it encounters a character that isn't a valid number in the radix, it stops parsing and ignores the following characters.
    * is not a valid number. It only parses "7" into the decimal 7. num now holds the value of 7.`,
  },
  {
    question: "What's the output?",
    code: `[1, 2, 3].map(num => {
      if (typeof num === 'number') return;
      return num * 2;
    });`,
    choices: [
      "[]",
      "[null, null, null]",
      "[undefined, undefined, undefined]",
      "[ 3 x empty ]",
    ],
    answer: "[undefined, undefined, undefined]",
    explanation: `When mapping over the array, the value of num is equal to the element it’s currently looping over. In this case, the elements are numbers, so the condition of the if statement typeof num === "number" returns true. The map function creates a new array and inserts the values returned from the function.
    However, we don’t return a value. When we don’t return a value from the function, the function returns undefined. For every element in the array, the function block gets called, so for each element we return undefined.`,
  },
  {
    question: "What's the output?",
    code: `function getInfo(member, year) {
      member.name = 'Lydia';
      year = '1998';
    }
    
    const person = { name: 'Sarah' };
    const birthYear = '1997';
    
    getInfo(person, birthYear);
    
    console.log(person, birthYear);`,
    choices: [
      '{ name: "Lydia" }, "1997"',
      '{ name: "Sarah" }, "1998"',
      '{ name: "Lydia" }, "1998"',
      '{ name: "Sarah" }, "1997"',
    ],
    answer: '{ name: "Lydia" }, "1997"',
    explanation: `Arguments are passed by value, unless their value is an object, then they're passed by reference. birthYear is passed by value, since it's a string, not an object. When we pass arguments by value, a copy of that value is created (see question 46).
    The variable birthYear has a reference to the value "1997". The argument year also has a reference to the value "1997", but it's not the same value as birthYear has a reference to. When we update the value of year by setting year equal to "1998", we are only updating the value of year. birthYear is still equal to "1997".
    The value of person is an object. The argument member has a (copied) reference to the same object. When we modify a property of the object member has a reference to, the value of person will also be modified, since they both have a reference to the same object. person's name property is now equal to the value "Lydia"`,
  },
  {
    question: "What's the output?",
    code: `function greeting() {
      throw 'Hello world!';
    }
    
    function sayHi() {
      try {
        const data = greeting();
        console.log('It worked!', data);
      } catch (e) {
        console.log('Oh no an error:', e);
      }
    }
    
    sayHi();`,
    choices: [
      "It worked! Hello world!",
      "Oh no an error: undefined",
      "SyntaxError: can only throw Error objects",
      "Oh no an error: Hello world!",
    ],
    answer: "Oh no an error: Hello world!",
    explanation: `With the throw statement, we can create custom errors. With this statement, you can throw exceptions. An exception can be a string, a number, a boolean or an object. In this case, our exception is the string 'Hello world!'.
    With the catch statement, we can specify what to do if an exception is thrown in the try block. An exception is thrown: the string 'Hello world!'. e is now equal to that string, which we log. This results in 'Oh an error: Hello world!'.`,
  },
  {
    question: "What's the output?",
    code: `function Car() {
      this.make = 'Lamborghini';
      return { make: 'Maserati' };
    }
    
    const myCar = new Car();
    console.log(myCar.make);`,
    choices: ['"Lamborghini"', '"Maserati"', "ReferenceError", "TypeError"],
    answer: '"Maserati"',
    explanation: `When you return a property, the value of the property is equal to the returned value, not the value set in the constructor function. 
    We return the string "Maserati", so myCar.make is equal to "Maserati".`,
  },
  {
    question: "What's the output?",
    code: `(() => {
      let x = (y = 10);
    })();
    
    console.log(typeof x);
    console.log(typeof y);`,
    choices: [
      '"undefined", "number"',
      '"number", "number"',
      '"object", "number"',
      '"number", "undefined"',
    ],
    answer: '"undefined", "number"',
    explanation: `let x = (y = 10); is actually shorthand for: y = 10; let x = y;
    When we set y equal to 10, we actually add a property y to the global object (window in browser, global in Node). In a browser, window.y is now equal to 10. Then, we declare a variable x with the value of y, which is 10. Variables declared with the let keyword are block scoped, they are only defined within the block they\'re declared in; the immediately invoked function expression (IIFE) in this case. When we use the typeof operator, the operand x is not defined: we are trying to access x outside of the block it\'s declared in. This means that x is not defined. Values who haven\'t been assigned a value or declared are of type "undefined". console.log(typeof x) returns "undefined". However, we created a global variable y when setting y equal to 10. This value is accessible anywhere in our code. y is defined, and holds a value of type "number". console.log(typeof y) returns "number".`,
  },
];
