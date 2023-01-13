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
  },
];
