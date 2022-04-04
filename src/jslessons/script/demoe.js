/* eslint-disable indent */
/* eslint-disable semi */
// const doc = doctorize('venkat');
// console.log(doc);
// function doctorize (firstName) {
//     return `dr.${firstName}`;
// }

// anonymous function
//  function (firstName) {
//     return `Dr. ${firstName}`;
// }
// function expression
// const doctorize = function (firstName){
//     return `Dr.${firstName}`;
// }

// arrow functions

// const inchToCM = inches => {
//     console.log(inches);
//     return inches * 2.54;
// };
// const resultcm = inchToCM(10);
// console.log(resultcm);

// arrow functions
// const functA = () => {
//     console.log('hi');
// }
// functA();

// const add = (a, b = 3) => a + b;
// const inchToCM = (inches) => inches * 2.54;
// console.log(add(100));
// console.log(inchToCM(25));

const makeAPerson = (first, last) => ({ name: `${first} ${last}`, age:0})
const person = makeAPerson('livin', 'rinoshiya');
console.log(person);

(function (age) {
    console.log(`you are cool and your age is ${age}`);
})(20);
