console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == "2"); //true
console.log(2 == 2); //true
console.log(2 != 1);


console.log("2" > 1);
console.log("02" > 1);


// null value treated as "0"
console.log(null > 0);  
console.log(null == 0);
console.log(null >= 0);


// undefine value  mean absence of a value  so js can't perormed a conversion 
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// // === data type & value  compairision 

console.log("2" === 2);//false
console.log("2" === "2");//true
console.log(1 === 2) //false
console.log("abcd" === "abc");//false