/* eslint-disable no-tabs */
/* eslint-disable no-unused-vars */
/* eslint-disable no-prototype-builtins */
/* eslint-disable indent */
/* eslint-disable comma-spacing */
/* eslint-disable no-var */
/* eslint-disable semi */
var numbers = { x: 1,y: 2,z: 3 };
// for (var i in numbers) {
//     if (numbers.hasOwnProperty('x')) {
//     console.log(i + '-' + numbers[i]);
//     }
// }
var o1 = { r: 10, s: 20, t: 30, u: 40, v: 50, w: 60, x: 70, y: 80, z: 90 };
        console.log(o1);
//
function createCopy (o1, p) {
	for (var prop in p) { // For all props in p.
		o1[prop] = p[prop] // Add the property to o.
	}
	return o1;
}
var q = {};
console.log(q);
q = createCopy(q, o1);
console.log(q);
//
function merge (o, p) {
    for (var prop in p) { // For all props in p.
        if (prop in o) continue
        o[prop] = p[prop] // Add the property to o.
	}
	return o
}
