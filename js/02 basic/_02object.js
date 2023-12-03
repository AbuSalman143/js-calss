//  // singleton 
// // Object.create

// // object literals    b 

const mySym = Symbol("key1")


const JsUser = {  // object mai keys jo hota hai usko system string mai hi leta hai hm likhte nhi hai frr bhi wo string mai hi hota hai 
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1", // symbol reprenstaion 
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// // way to access object value 
// // console.log(JsUser.email)
// // console.log(JsUser["email"])
// // console.log(JsUser["full name"])
// // console.log(JsUser[mySym])

// // if we wrt symbol data type its compulsary to wrt in square baraket 

// JsUser.email = "hitesh@chatgpt.com"//  object ki value change ya add hrne k liye
// // Object.freeze(JsUser)
// JsUser.email = "hitesh@microsoft.com"

// JsUser.greeting = function(){
//     console.log("Hello JS user");
// }
// JsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`);
// }
// console.log(JsUser);

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());



// let person={
//     nam:"pc"
// }

// const menmber=[person];
// person.nam=null;
// console.log(menmber);


// let obj1={
//     1:"a",
//     2:"b",
//     3:"c",
// }


// let obj2={
//     4:"d",
//     5:"e",
//     6:"f",
// }

// let obj3={
//     7:"g",
//     8:"h",
//     9:"i",
// }


// let resultobj={...obj1,...obj2,...obj3} // spared oprater use kr k concatinate kr te hai 
// console.log(resultobj);

// let resultobj1=Object.assign(obj1,obj2,obj3) //Object.assign => ka use kr k concatinate krte hai obj ko is line mai hm obj1 mai obj2 & obj3 ko mrge krte hai 
// console.log(resultobj1);

// let resultobj2=Object.assign({} ,obj1,obj2,obj3)  //Object.assign => ka use kr k concatinate krte hai obj ko is line mai hm {} (bracket) ke ander   obj1 , obj2 & obj3 ko mrge krte hai 
// console.log(resultobj2);



console.log(JsUser);
// object.key()=> object ki key hme milti hai , array ki form mai milti hai 

console.log(Object.keys(JsUser));
// object.value() => object ki value hme milti hai , array ki form mai milti hai 
console.log(Object.values(JsUser));
// object.entries()=> object ki her key or uski value ko array mai bna dete hai 
console.log(Object.entries(JsUser));

// ObjectNmae.hasOwnProperty("propertyName")=> result boolean mai ayega  ki hamre objectmai wo property hai ki nhi 

console.log(JsUser.hasOwnProperty("age"));
