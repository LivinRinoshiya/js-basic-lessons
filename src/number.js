/* eslint-disable no-undef */
/* eslint-disable quotes */
/* eslint-disable semi */
const age = 100;
const money = 1000.50
console.log(typeof age); // number
console.log(typeof money); // number
// typeof is used to find the type of the variable

console.log("10" - "3")
// the above works with mul,div and sub.
// but on add.
// because + is use for concatination.

// math helper methods:
console.log(Math.round(2.2));
console.log(Math.floor(2.4));
// console.log(Math.coil(2.5));
console.log(Math.random());

const sweets = 20;
const kids = 3;
const eachKidGets = Math.floor(sweets / kids);
console.log(eachKidGets);
const leftsweets = sweets % kids;
console.log(leftsweets);
// -----------------------

let x = 2 ** 3;
console.log(x);
x = Math.pow(2, 3)
console.log(x);
console.log(0.1 + 0.2)

// let costOfProduct = 100.95;
let costOfProduct = 10095;// in paise
/* So,hen working with money,
dont store them as (rupees.paise) or (dollar.cents)
store all the money in(paise/cents)
as you wont have to deal with fractions
when need to display to user,just conver them back
*/
console.log(typeof Infinity);
console.log(typeof -Infinity);
let result = 10 / 'hell0';
console.log(typeof NaN)

// ---------------------------------------
// check the datatype of a value
let t = 100
let result = Number.isInteger(t)
console.log(` Is x a number is ${result}`)
let y="abcd"
result = Number.isInteger(y)
console.log(`Is y a number :${result}`)
result = (typeof y === 'string')
console.log(`Is y a number :${result}`);
let flag = true;
result = (typeof flag === 'boolean');
console.log(`is flag a boolean :${result}`)
let nos = [1,2,3,4,5];
result = (typeof nos === 'object');
console.log(`is flag a object :${result}`)


