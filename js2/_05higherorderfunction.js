
/*
A function which either takes another function as argument or returns another function is called higher order function

when a funcion is passed as an argument to another function then that argument (function) we call as a callback function
*/



/*
function higherOrderFunc(a){  // #300   a = callme = #200
    let x=20;
    a(); //  called callme()=>#200
}

let x=30
function callme(){  // #200
    console.log(x); // 30
}

higherOrderFunc(callme); 


*/



// Diffrent way of creating function

/*

1. function

function func(){
    will be hoisted fully during creation phase
    code here 
    }

2.   Anonymous function => Anonymous function is which have no fuction name  

let callme = function(a,b){
    call me will be hoisted partially and kept inside the TDZ
    console.log(a+b)
}

callme(10,20)


3. Arrow fubction

let arrow =(a,b,c)=>{
  console,log(a,b,c)  
}
arroe(10,20,10)


function parent(callback){
    let a=20;
    callback();
}

parent(()=>{
    console.log(a); //error a con't access before intilization  
})

let a=30;

4. forEach function




let arr = [2,3,1,4,5,6,9];
function forEach(callback)
{
    for(let i=0;i=arr.length;i++){
        callback(arr[i],i,arr);
    }
}

forEach((Element,index,list)=>{
    console.log(Element,index,list)
})
*/
/*
let arr = [2,3,1,4,5,6,9];
arr.forEach((e,i,a)=>{
    console.log(e,i,a);
})
*/

/*
let arr = [2,3,1,4,5,6,9];
let cb =(e,i,a)=>{
    console.log(e,i,a);
}

arr.forEach(cb)

*/


/*let arr = [2,3,1,4,5,6,9];
function forEach(callback){
    for(let i=0 ; i < arr.length ; i++){
        callback(10);
    }
}

forEach((Element,index,list,constant)=>{
    console.log(Element,index,list,constant)
})
*/

/*
let arr = [2,3,1,4,5,6,9];
let result = arr.forEach((e,i,a)=>{
    console.log(e, i ,a);
})

console.log(result);// undefine bcz foeEach function does not return any think

*/



