/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable space-before-function-paren */
/* eslint-disable semi */
// /* eslint-disable indent */
// /* eslint-disable semi */
// // methods
// // a function ehich lives insides a object

// const employee = {
//     name: 'livin',
//     sayHi: function () {
//         console.log(`hi!!! ${this.name}`);
//         return `Hi ${this.name}`
//     },
//     print: () => {
//          console.log('hello employee');
//     },
// // short hand method
//     yellHi () {
//         console.log(`Hi ${this.name.toUpperCase()}`);
//     }
// };
// employee.sayHi();
// employee.print();
// employee.yellHi();

// const greeting = createGreeting('hi');
// console.log(greeting('everyone'));
function createGame(gameName) {
    let score = 0;
    return function win() {
      score++;
      return `Your name ${gameName} score is ${score}`;
    }
}


