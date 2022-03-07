/* eslint-disable semi */
/* eslint-disable indent */
/*
object 
java script fundamental datatype is the object.
An object is a unorederrd collection of roperties.
each of which has a name and a value.
property names ar strings
*/

const person = {
    first:'rinoshiya',
    last:'livin',
    age:20
};

console.log(person.first);
console.log(person.last);
console.log(person.age);

person.first = 'tom';
person.last = 'jerry';
console.log(person.first);
console.log(person.last);

person.last = null;
console.log(person.last)
