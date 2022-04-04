// const names = ['John','sam','peter'];
// console.log(names[0]);
// console.log(names.length);
// console.log(names[names.length - 1]);

// // methods of array

// names.push('suresh');
// console.log('after push:' + names );
// //push will add an item at end

// //-----------------

// const names2 = [...names, 'Raj'];
// console.log('names2:' + names);

// //---------------------------
// names.unshift('poppy');
// console.log('unshift:' + names);
// // adds data to the beginning index no of rest of the values will change
// // --------------------------

// const names3 = ['raj', ...names];
// console.log(names3);
// // will add data at the beginning 

// //------------------------------------
// //slice()

// const bikes = ['binachi','miele','panosonic','miyata','RE'];
// const b1 = [...bikes.slice (0, 2)];
// console.log(b1);
// //slice takes 2 paramteres
// //from , to
// //it has copied 2 values from index 0 and assigned to b1
// const b2 = [...bikes.slice(3)];
// console.log(b2);//last 2 values
//  const newBikes = [
//      ...bikes.slice(0, 3),
//      'benotto',
//      ...bikes.slice(3)
//  ];
//  console.log('newBikes:' + newBikes);
//  const newBikes2 = [...newBikes.slice(0, 2),
//     ...newBikes.slice(4)
// ];
// console.log('newBikes2:' + newBikes2);
// // new array called newbikes is created.
// // then in index 0 and 1 values from bikes is copied using
// // the slice(0 ,2) method.the first 2 values are copied 
// //---------------------------------------------

// const indexOfSam = names.findIndex(names => names === 'sam');
// console.log('IndexOfsam:' + indexOfSam);

// // 
// function deleteName(nametodelete,names) {
    
//     const indexOfname = names.findIndex(n => n === nametodelete);
//     console.log('IndexOfname to delete:' + indexOfname);
//     const newName = [...names.slice(0, indexOfname),
//     ...names.slice(indexOfname+1)
// ];
// return newName;
// };
// const deletedNames = deleteName('john',names);
// console.log('After Delete:' + deletedNames);
// console.log("before delete:" +names) ; 

// const numbers = [1,2,3,4,5,6,7,8,9];
// console.log(numbers);
// numbers.splice(3, 2);
// console.log(numbers);

// const pizzaSlice = numbers.slice(2, 4);
// console.log('pizzaSlices:' + pizzaSlice);
// console.log('orginal Numbers:' + numbers);

 // ---------------------------------------
 
 const numbers = [1,2,3,4,5,6,7,8,9];
//  numbers.reverse();
//  console.log(numbers);
const numberReversed = [...numbers].reverse();
 console.log(numberReversed);
 
 




