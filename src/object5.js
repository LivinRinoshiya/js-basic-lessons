/* eslint-disable no-undef */
const book = {
  'main title': 'javascript',
  'sub-title': 'the definitve guide',
  for: 'all audiences',
  author: {
    firstnmae: 'donald',
    surname: 'duck'
  }
}
/*
let len = undefined;
book=null;
if(book){
    if(book.subtitles){
        len=book.subtitle.length;
        console.log(len);
    }
    else
     console.log("book.subtitle undefined")
}
else
   console.log("book is null")
*/
len = book && book.subtitle && book.subtitle.length
if (len) console.log(len)
console.log(book.author)
delete book.author
console.log(book.author)

console.log(book['main title'])
delete book['main title']
console.log(book['main title'])

const o6 = { x: 100 }
console.log(o6.x)
delete o6.x
console.log(o6.x)
console.log(o6.toString)
delete o6.toString


// delete Object.prototype;
// var a =1;
// delete this.a;
// function f1() {}
// delete this.f1()
