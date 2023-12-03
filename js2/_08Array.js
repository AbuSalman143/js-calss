/*

=> Array are the variable which hold more than one value .
=> Store hetrogenipus (not a similar) data type.
=> take the contiguos memory location 
=> type of array is object

syntax   

1. let array=["string","number","boolean","obj "]  // all type data store in js array
console.log(array);
2. using new keword 
const num=new Array("string","number","boolean","obj")
// array ki length k array.length

console.log(array.length)


* push methode
=> add the element in the last we use push 
let array=["string","number","boolean","obj "];
array.push("Abu Salman",123);
console.log(array);// ['string', 'number', 'boolean', 'obj ', 'Abu Salman', 123]

=>modify the orignal array and return the new array length
let array=["string","number","boolean","obj "];
let newArray=array.push("Abu Salman",123);
console.log(newArray);// 6 output is new array length

*unshift
=> add the element in the starting of the array unshift method 
let array=["string","number","boolean","obj "];
array.unshift("hafsa",282345);
console.log(array);
=> return the new array length
let array=["string","number","boolean","obj "];
let result =array.unshift("hafsa",282345);
console.log(result);// 6 output is new array length

* pop method
=>remove the last  elemnet from the length 

let array=["string","number","boolean","obj "];
array.pop();
console.log(array);//['string', 'number', 'boolean']

=>return the last value who remove fron the array
let array=["string","number","boolean","obj "];
let result =array.pop();
console.log(result); // obj output is last element who remove from array

* shift methode

=> remove 1st element of the array 
let array=["string","number","boolean","obj "];
array.shift()
console.log(array); // ['number', 'boolean', 'obj ']

=> return the remove element 
let array=["string","number","boolean","obj "];
let result =array.shift()
console.log(result); // string output is 1st element who remove from array

* to String()
=> convert a array to a string of comma saprated 

let arr=[1,2,3,4,5]
console.log(typeof arr); //object

let result=arr.toString();
console.log(result);///1,2,3,4,5
console.log(typeof result);//string

* join() => joi all  the  array element using a saprator  
let array=["string","number","boolean","obj "];
let result=array.join("@")
console.log(result);//string@number@boolean@obj 


* delet opater =>  Array element and object elemnet can be deleted using delet oprator  and return array with same length and show empty 

let array=["string","number","boolean","obj "];
delete array[1];
console.log(array);//['string', empty, 'boolean', 'obj ']

const Employee = {
    firstname: 'John',
    lastname: 'Doe',
};

console.log(Employee.firstname);
// Expected output: "John"

delete Employee.firstname;

console.log(Employee.firstname);
// Expected output: undefined
  

* concat() => use to join the array into given array 


let arr1=[1,2,3,4,5]
let arr=[6,7,8,9,10]
let arr3=[4,3,2,1,4]

let result=arr1.concat(arr,arr3)
console.log(result);// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 4, 3, 2, 1, 4]


// indexof =>  1. provide the index number of first ocurrence 

let array1=["string","number","boolean","obj "];
console.log(array1.indexOf("number"))// 1
2. when datain not avialable in array 
let array=["string","number","boolean","obj "];
console.log(array.indexOf("Abu Salman"));// -1 bcz data not avilable in array
3. when data is avialable multilpe index

// lastindexof => it is same as indexof but providing data from last index

// include()=> return boolean data mean data exist krta hai ki nhi 

find () => use for non premitive data  type    
* sort 
// */
// let array2=["string","number","boolean","obj ","number","obj ","number"];
// console.log(array2.indexOf("number",2))