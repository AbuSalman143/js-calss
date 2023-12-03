// ye 2015 mai hi aya hai 

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);//yaha per hme o/p mai useobje mil raha hai 
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

console.log(this);//yaha per o/p {} empty hai (1) ager hm code ko node js ke through run krte hai to empty{} object milta hai   (2)  mger hm browser mai console krte hai to hme window (global) object milta hai o/p mai 

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// const chai =  () => {
//     let username = "hitesh"
//     console.log(this);
// }


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => ({username: "hitesh"})


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()