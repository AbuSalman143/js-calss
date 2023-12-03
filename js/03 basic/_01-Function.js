
// function sayMyName(){
//     console.log("H");
//     console.log("I");
//     console.log("T");
//     console.log("E");
//     console.log("S");
//     console.log("H");
// }

// sayMyName()

function addTwoNumbers(number1, number2){

    console.log(number1 + number2);// 8
}
const result = addTwoNumbers(3, 5)
console.log("Result: ", result);// undefine    result variable receives the value undefined because the function doesn't return anything. That's why when you log result, it prints "Result: undefined" to the console.

// function addTwoNumbers1(number1, number2){

//     // let result = number1 + number2
//     // return result
//     return number1 + number2
// }

// const result1 = addTwoNumbers1(3, 5)
// console.log("Result: ", result1);//Result:  8  => bcz here the function return the value 
 

// function loginUserMessage(username = "sam"){
//     if(!username){
//         console.log("PLease enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

// // console.log(loginUserMessage("hitesh"))
// // console.log(loginUserMessage("hitesh"))


// function calculateCartPrice(val1, val2, ...num1){
//     return num1
// }

// // console.log(calculateCartPrice(200, 400, 500, 2000))

// const user = {
//     username: "hitesh",
//     prices: 199
// }

// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
// }

// // handleObject(user)
// handleObject({
//     username: "sam",
//     price: 399
// })

// const myNewArray = [200, 400, 100, 600]

// function returnSecondValue(getArray){
//     return getArray[1]
// }

// // console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));