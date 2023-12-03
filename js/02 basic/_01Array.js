 /*

=> Array are the variable which hold more than one value .
=> Store hetrogenipus (not a similar) data type.
=> take the contiguos memory location 
=> type of array is object

yntax    

1. let array=["string","number","boolean","obj "]  // all type data store in js array
console.log(array);
2. using new keword 
const num=new Array("string","number","boolean","obj")


*/

// length

// let arr = [56,56,85,96,78,12,13 ]
// console.log(arr.length);// array ki length (.length)

/*  Array mehod()

1. push methode


=> add the element in the last we use push 
let array=["string","number","boolean","obj "];
array.push("Abu Salman",123);
console.log(array);// ['string', 'number', 'boolean', 'obj ', 'Abu Salman', 123]

=>modify the orignal array and return the new array length 
let array=["string","number","boolean","obj "];
let newArray=array.push("Abu Salman",123);
console.log(newArray);// 6 output is new array length

*/

/* 
 2. unshift

=> add the element in the starting of the array unshift method 
let array=["string","number","boolean","obj "];
array.unshift("hafsa",282345);
console.log(array);
// => return the new array length
// let array=["string","number","boolean","obj "];
let result =array.unshift("hafsa",282345);
console.log(result);// 6 output is new array length
*/


/* 

3. pop method


=>remove the last  elemnet from the length 

let array=["string","number","boolean","obj "];
array.pop();
console.log(array);//['string', 'number', 'boolean']

=>return the last value who remove from the array
let array=["string","number","boolean","obj "];
let result =array.pop();
console.log(result); // obj output is last element who remove from array

*/

/* 

4. shift methode

=> remove 1st element of the array 
let array=["string","number","boolean","obj "];
array.shift()
console.log(array); // ['number', 'boolean', 'obj ']

=> return the remove element 
let array=["string","number","boolean","obj "];
let result =array.shift()
console.log(result); // string output is 1st element who remove from array

*/

/*

5. to String()
=> convert a array to a string of comma saprated 

let arr=[1,2,3,4,5]
console.log(typeof arr); //object

let result=arr.toString();
console.log(result);///1,2,3,4,5
console.log(typeof result);//string

*/

/*

6. join() => joi all  the  array element using a saprator  
let array=["string","number","boolean","obj "];
let result=array.join("@")
console.log(result);//string@number@boolean@obj 
*/


/*
7. Delet opater =>  Array element and object elemnet can be deleted using delet oprator  and return array with same length and show empty 

let array=["string","number","boolean","obj "];
delete array[1];
console.log(array);//['string', empty, 'boolean', 'obj ']

const Employee = {
    firstname: 'John',
    lastname: 'Doe',
};

console.log(Employee.firstname);// Expected output: "John"

delete Employee.firstname;

console.log(Employee.firstname); // Expected output: undefined
  
 */

/*

8. concat() => use to join the array into given array 


let arr1=[1,2,3,4,5]
let arr=[6,7,8,9,10]
let arr3=[4,3,2,1,4]

let result=arr1.concat(arr,arr3)
console.log(result);// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 4, 3, 2, 1, 4]

*/

/*

9. indexof =>  1. provide the index number of first ocurrence 

let array1=["string","number","boolean","obj "];
console.log(array1.indexOf("number"))// 1
2. when datain not avialable in array 
let array=["string","number","boolean","obj "];
console.log(array.indexOf("Abu Salman"));// -1 bcz data not avilable in array
3. when data is avialable multilpe index

// lastindexof => it is same as indexof but providing data from last index
*/

/*

10. include()=> return boolean data mean data exist krta hai ki nhi 
*/ 
/*
11.slice & splice
const myArr = [0, 1, 2, 3, 4, 5]
console.log("A",myArr);
console.log("slice", myArr.slice(1,4));
console.log("after slice orignal array is same" ,myArr);

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]
*/
/*

Splice()=> 

start: The index at which to start changing the array. If negative, it will count from the end of the array.

deleteCount: The number of elements to remove from the array, starting at the start index. If set to 0 or omitted, no elements will be removed.

item1, item2, ...: Optional. Elements to add to the array at the start index. If you don't specify any items, only elements will be removed, and the array will be shortened.

Here are some common use cases of the splice() method:

Removing Elements:

javascript
Copy code
const myArray = [1, 2, 3, 4, 5];
myArray.splice(2, 2); // Removes 3 and 4
// myArray is now [1, 2, 5]
Replacing Elements:

javascript
Copy code
const myArray = [1, 2, 3, 4, 5];
myArray.splice(2, 2, 6, 7); // Replaces 3 and 4 with 6 and 7
// myArray is now [1, 2, 6, 7, 5]
Adding Elements:

javascript
Copy code
const myArray = [1, 2, 3, 4, 5];
myArray.splice(2, 0, 6, 7); // Inserts 6 and 7 without removing any elements
// myArray is now [1, 2, 6, 7, 3, 4, 5]
Removing and Adding Elements:

javascript
Copy code
const myArray = [1, 2, 3, 4, 5];
myArray.splice(2, 2, 6, 7); // Removes 3 and 4, adds 6 and 7
// myArray is now [1, 2, 6, 7, 5]

*/
/*



const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

12. spared array ...arr 


const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
 */




console.log(Array.isArray("Hitesh"))//kya ye array hai o/p boolean 
console.log(Array.from("Hitesh")) // array mai convertkrta hai  
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));