// JSON methods

let obj = {
    email: "aravind@gmail.com",
    password: "12345678"
}
// data => string => encrypted => encryoted data can be sent to the server
// console.log(typeof obj)
// let stringifiedObject = JSON.stringify(obj)

// console.log( stringifiedObject)

// let str = `{ "a" : 10 }`

/*
{a: 10} [ object ] => `{ "a" : 10 }` [ json string ]

=> 1010010010101 => traverse on the internet => 


1010010010101 => decrypts => `{ "a" : 10 }` => {a: 10}



// client to server 

Browser's javascript code 
 
/*
object => stringifiedObject => encrypted => traversed on the internet => 

Backend application 

decrypts the data => stringifiedObject => object
*/

// data from server 


/*
let x = JSON.stringify([10, 20])
// x => a stringified object 
console.log({x})

let y = JSON.parse(x) ;

console.log()
*/