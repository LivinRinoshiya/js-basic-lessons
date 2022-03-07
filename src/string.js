/* eslint-disable semi */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
const my_name = 'NameFieldEmpty' // singlr quotes
const middle = 'gabbar'// double quotes
const last = 'singh'// back tick

const sentence1 = 'she\'s so "cool"'
console.log(sentence1)

const sentence2 = "she's so cool"
console.log(sentence2)

const sentence3 = ' \'she\'s so cool\''
console.log(sentence3)

const sentence4 = "she's so \"cool\""
console.log(sentence4)

// multi line string using single quotes

const song1 = `i like ARR songs and Aniruth songs`
console.log(song1)

const hello3 = `hello my name is` + 'my_name' + ".nice to meet you"
console.log(hello3)

const hello4 = `hello my name is + ${my_name} + .nice to meet you.i am ${100 + 1} yeras old`

console.log(hello4)

const html = `<div>
                <h2>${my_name}</h2>
                <p>${hello3}</p>
                </div>`
console.log(html);
// document.body.innerHTML = html;
