/* eslint-disable no-template-curly-in-string */
const amount = 2000
const toDisplay = 'amount is rupees' + amount
console.log(toDisplay)

const vstring = 'amount is rupees:amount'
console.log(vstring)

// eslint-disable-next-line semi
const string = 'amount is rupees: ${amount}';
console.log(string)
