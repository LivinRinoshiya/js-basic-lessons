/* eslint-disable no-array-constructor */
/* eslint-disable no-new-func */
/* eslint-disable no-undef */
/* eslint-disable new-cap */
/* eslint-disable no-unused-vars */
/* eslint-disable space-infix-ops */
/* eslint-disable no-var */
/* eslint-disable block-spacing */
/* eslint-disable no-new-wrappers */
/* eslint-disable no-new-object */
/* eslint-disable semi */
var cody = new Object();
cody.living = true;
cody.age = 333;
cody.gender = 'male'
cody.getGender = function () { return cody.gender;};
console.log(cody.getGender());
console.log(cody);

// -----------------------
const myObject = new Object();
myObject['0'] = 't';
myObject['0'] = 't';
myObject['0'] = 't';
console.log(myObject);

const myString = new String('foo');
console.log(myString);

const person = function (living, age, gender) {
  this.living = living;
  this.age = age;
  this.gender = gender;
  this.getGender= function () {return this.gender; };
};

const smith =new person(true, 33, 'male');
console.log(smith);

// ---------------------------------------
const myNumber = new Number(23);
const myObject1 = new Object();
const myBoolean = new Boolean(false);
const myObject2 = new Object();
const myArray1 = new Array('foo', 'bar');
const myFunction = new Function('x', 'y', 'return x*y');
const myDate = new Date();
// const myRegExp = new RegExp('\bt[a-z]|\b');
const myError = new Error('sorry');
console.log(myNumber.constructor)
console.log(myString.constructor)
console.log(myBoolean.constructor)
console.log(myObject.constructor)
console.log(myArray1.constructor)
console.log(myFunction.constructor)
console.log(myDate.constructor)
// console.log(myRegExp.constructor)
console.log(myError.constructor)
