/* eslint-disable no-unused-vars */
/* eslint-disable indent */
/* eslint-disable prefer-const */
/* eslint-disable quotes */
/* eslint-disable no-const-assign */
/* eslint-disable eol-last */
/* eslint-disable space-infix-ops */
/* eslint-disable no-undef */
/* eslint-disable semi */
// eslint-disable-next-line object-curly-spacing
function getChild (parent) {
    if (parent==null) throw TypeError()
    return Object.create(parent);
}
// eslint-disable-next-line object-curly-spacing
let o4 = {x: "dont change this value"}
// console.log(o4.x);
let p = object.create(o4);
console.log(p);
// o4 =null;
// p=object.create(o4);
// console.log(p);