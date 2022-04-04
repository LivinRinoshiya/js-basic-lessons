// function calculateBill() {
//   const total = 100 * 1.13;
//   return total;
// }
// -----------------------------------
// Functions - arguments and parameters 
// - parametrs are like placeholdres for data that will be passed to a function
// - arguments rae the values passed to a function while calling it

// variables created inside a function cannot be used outside of it.
// function calculateBill (100, 0.13) {
//  console.log(billAmount + '-' + taxRate);
// }
// here 100,0.13 are parameters

function calculateBill(billAmount, taxRate) {
    console.log(billAmount + '-' + taxRate);
    const total=billAmount + billAmount * taxRate;
    return total;
}

let billTotal = calculateBill(20+10+50,0.75);
console.log(billTotal);

// default value for parameter

function yell (name = 'silly goose') {
    return `HEY ${name.toUpperCase()}`
}
let greetings = yell('venkat');
console.log(greetings);
greetings = yell();
console.log(greetings);

// ----------------------------

function calculateBill (billAmount, taxRate = 0.13, tipRate = 0.15) {
    console.log('Running Calculate Bill');
    console.log(billAmount + '-' + taxRate);
    console.log('billAmount:' + billAmount + 'taxrate:' + taxRate + 'tiprate:' + tipRate)
    const total=billAmount + billAmount * taxRate + billAmount * tipRate;
    return total;
}
calculateBill(100);
calculateBill(100 , 0.66);
calculateBill(100, undefined, 0.66);