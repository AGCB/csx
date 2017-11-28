let p = (input) => {
  console.log(input);
}
let isEven = (input) => {
  return Number.isInteger(input/2)
}

//those 2 functions above are just for my sanity.
//if anyone wants to type console.log or use a modulo operator, that's fine


//Run your JavaScript by pressing the "run" button


/* 
Challenge 1
Use an if statement to double the variable num if num is greater than 2.
*/
// Challenge 1
let num = 5;
if (num>2) {
  num *=2
  }


// uncomment the below line to check your work
// console.log(num) // -> should print 10
/* 








Challenge 2
Use an if statement to double the variable newNum if newNum is less than 2.
*/
// Challenge 2
let newNum = 1;
if (newNum < 2) {newNum *=2;}



// uncomment the below line to check your work
// console.log(newNum) // -> should print 2;
/* 








Challenge 3 
Use an if statement to determine if num from Challenge 1 is even.  
If it is, log true to the console.  Otherwise, log false to the console.
*/
// Challenge 3
// p('challenge 3 here we go')
// p(`Here is num-- ${num}`)

// if (Number.isInteger(num/2)) {p(true)}








/* 
Challenge 4 
You are given an array of elements called checkMe.  
Use an if statement to log true if the length of the array is greater than 5, and false if it is not.
*/
// p('challenge 4')
// let checkMe = [1, 2, 3];
// if (checkMe.length > 5) {p(true)}
// else {p(false)}
/* 








Challenge 5
You are given a variable called isDivisibleBy4.  
Use an if statement to determine if its value is divisible by 4.  
Log true to the console if it is, and false to the console if it isn't.
*/
// p( 'Challenge 5')
// let isDivisibleBy4 = 23;
// if (Number.isInteger(isDivisibleBy4/4)) {p(true)}
// else {p(false)}








/* 
Challenge 6
Use a while loop to increment count by 2 and count2 by 3 on 
each repeat of the block of code. 
Run the code block of your while loop 4 times total.
*/
// p( 'Challenge 6')
// let timesRun = 0;
// let count = 2;
// let count2 = 3;
// while (timesRun < 4) {
//   timesRun++
//   count +=2;
//   count2 +=3
// }


// uncomment the below line to check your work
// console.log(`count: ${count}, count2: ${count2}`) // -> should print 10 and 15
/* 








Challenge 7
Use a for loop to initialize a variable addThis to 0, 
increment addThis by 1 on each run of the code block, 
and then to repeat the code block as long as addThis is less than 10. 
In the code block,  add the value of addThis to sum. T
he value of sum should be the sum of the numbers 0 through 9.
*/
// p('Challenge 7')
// let sum = 0;
// for (var addThis = 0; addThis < 10; addThis++) {
//   sum += addThis;
// }
// // uncomment the below line to check your work
// console.log(sum) // -> should print 45;









/* 
Challenge 8
You are given a variable countDown that is initialized to 10.  
Use a for loop to decrease it's value by 1 on every iteration of the loop until it's value is 0.
*/
// p('Challenge 8')
// let countDown = 10;
// for(;countDown>0;) {
//   countDown--;
// }
// uncomment the below line to check your work
// console.log(countDown) // -> should print 0;








/* 
Challenge 9
You are given an array of 5 numbers called increaseByTwo.  
Use a for loop to iterate through the array and increase each number by two.
*/
// p('Challenge 9')
let increaseByTwo = [1, 2, 3, 4, 5];
for (var i = 0; i<increaseByTwo.length; i++) {
  increaseByTwo[i] +=2
}


// uncomment the below line to check your work
// console.log(increaseByTwo) // -> should print [3, 4, 5, 6, 7];








/* 
Challenge 10
Using increaseByTwo from Challenge 9,  
iterate through the modified array and multiply a number by 10 
if it is greater than or equal to 5.
*/
// p('Challenge 10')
for (var i = 0; i<increaseByTwo.length;i++) {
  if (increaseByTwo[i] >=5) {increaseByTwo[i] *=10}
}
// uncomment the below line to check your work
// console.log(increaseByTwo) // -> should print [3, 4, 50, 60, 70];









/* 
Challenge 11
You are given an empty array called fillMe.  
Using a for loop, fill the array with numbers from 0 to 10.
*/
// p('Challenge 11')
let fillMe = [];
for(var i = 0; i <=10; i++) {
  fillMe.push(i)
}


// uncomment the below line to check your work
// console.log(fillMe) // -> should print [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]











/* 
Challenge 12
You are given a new empty array called modifiedFillMe.  
Using a for loop, loop backwards through the fillMe array from Challenge 11 
and populate the new array with the numbers if they are even.
*/
// p('Challenge 12')
// p(`first off here is fillMe to begin with... ${fillMe}`)
let modifiedFillMe = [];

for (var i = fillMe.length-1; i >=0; i--) {
  if (isEven(fillMe[i])) {modifiedFillMe.push(fillMe[i])}
}


// uncomment the below line to check your work
// console.log(modifiedFillMe) // -> should print [0, 2, 4, 6, 8, 10]









/* 
Challenge 13
You are provided with an object called checkObj.  
Using a for... in loop, determine if the object contains the property foundNum.  
If it exists, log Found! to the console, otherwise log, Does not exist! to the console.
*/
// p('Challenge 13')
let checkObj = {
  oddNum: 1,
  evenNum: 2,
  foundNum: 5,
  randomNum: 18
};

let answer13 = '';
for(const prop in checkObj) {
  if (prop === 'foundNum') {answer13 = 'found!';}
}
if (answer13 === '') {answer13 = "doesnt exist"}












/* 

Challenge 14
You are provided with another empty array called objToArray.  
Using a for... in loop, fill the array with all of the numbers from the checkObj object 
from the previous challenge if they are greater than or equal to 2
*/
// p('Challenge 14')
let objToArray = [];
for(const prop in checkObj) {
  if (checkObj[prop] >=2) {objToArray.push(checkObj[prop])}
  }
// p(objToArray)










/* 
Challenge 15
Using a for loop, iterate through the objToArray to determine if 
any of the numbers are divisible by 6.  
If there are any, log true to the console.  
If there aren't any, log false to the console.
*/
// p(`Challenge 15`)
// let answer15 = '';
// p(objToArray)
// for (var i = 0; i<objToArray.length; i++) {
//   p(objToArray[i]/6)
//   if (Number.isInteger(objToArray[i]/6)) {
//     answer15 = 'true';
//   }
//   else {}
//   if (answer15 === '') {answer15 = 'false'}
// }
// p(`the answer to problem 15 is --- ${answer15}`);








/* 
Challenge 16
You are provided with an empty array called nestedArr.  
Using a for loop, add 5 sub-arrays to nestedArr, 
with each nested array containing the string 'loop' concatenated with 
the corresponding index in nestedArr as it's first element, and just the 
index as it's second element. 
Example of a subarray: ['loop3', 3]
*/
// p('Challenge 16')
let nestedArr = [];
// p(`this is our nested array-- ${nestedArr}`)
for(var i = 0; i<5; i++) {
  // p(`this is our i for the moment ${i}`)
  let currWord = 'loop'  + i;
  // p(`this is our currWord for the moment ${currWord}`)
  let currArray = [];
  currArray.push(currWord)
  currArray.push(i)
  // p(`this is our currArray for the moment ${currArray}`)
  nestedArr.push(currArray)
  
}
// p(nestedArr)








/* 
Challenge 17
Create a variable called loopNumbers and initialize it to an empty object literal. 
Using a for loop, iterate through nestedArr from the previous challenge.  
For each iteration of your loop, 
assign a new property to loopNumbers where the property name is the first element 
in each nested array in nestedArr and the value is the second element.
*/
// p('Challenge 17')

let loopNumbers = {something: 'nothing', b: 'c'}
for(var i = 0; i < nestedArr.length; i++) {
  //p(`${}`)
  
    let prop = nestedArr[i][0]
    let value = nestedArr[i][1]
     loopNumbers[prop] = value


}//end  the iTh







/* 
Challenge 18
Using a for...in loop, iterate through loopNumbers from the previous challenge and 
determine how many properties are contained within the object.
*/
// p('Challenge 18')
let count = 0;
for (const prop in loopNumbers) {
  count++
}
// p(count)
// p(loopNumbers)




/* 
Challenge 19
You are given an array of integers called possibleIterable.  
Using an if statement, loop through the array and log each element to the console 
only if the number of elements in the array is greater than 3.
*/
// p('Challenge 19')
let possibleIterable = [4, 3, 9, 6, 23];
if(possibleIterable.length > 3) {
  for(var i = 0; i<possibleIterable.length; i++) {
    // p(possibleIterable[i])
  }
}






/* 
Challenge 20
You are given a variable called sumMe that is initialized to an object literal 
containing several key/value pairs, and a variable called total that is initialized to 0. 
 Using a for... in loop, iterate through sumMe.  
 If the value of the property that is being evaluated on the current iteration of the loop is a number,
  add it to total.
*/
// p('Challenge 20')
let total = 0;
let sumMe = {
  hello: 'there',
  you: 8,
  are: 7,
  almost: '10',
  done: '!'
};

for (let prop in sumMe) {
  if (Number.isInteger(sumMe[prop])) {
    total += sumMe[prop]
  }
}
// p('this is total--' + total)





