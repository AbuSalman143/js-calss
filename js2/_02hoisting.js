/* 
console.log(a);// o/p => Not Define 
diffrence b/w "undefine" and "not define" 

1. Not Define mean varible not declear 
let a;


consol.log(a);// o/p=> undefine  
2. undefine is a data type mean value not initilized 



console.log(a)  //cannot access 'a' before initialization
let a;
3. javascript know the variable is present but not access before  

*/


/*
variable is declared 4 way 
1. let 
2. const
3. var
4. function ()

let a=90;
console.log(a,b); // 90,undefine
var b=100;
console.log(a,b); //90,100


stack data structured  meam some thing store in orgnized way  stack follow some rule like LIFO=> last in fisrt out

context=> every line of code devided into two zone

1. Global context => if code is out side the block or function  mean Golobal context 
2. local context => when eer code in present in side a function or block  is called local zone

and context goes throgh two phase 

(a) . creation Phase  
(b) . exicution phase 


variable declared with let and const  keyword will be hoisted and they will be inside a TDZ=> Temporal Dead Zone  

during creation phase let var const all value is undefine 

var const let declared variable will be hoisted partially 

function will be hoisted fully

*/


/*
console.log(a);   // a is not access before initilization
let a=20;  // due to let keyword  a is TDZ so   
*/


/*
console.log(a);  // undefine
var a=20;
console.log(a);  // 20
*/


/*
function add(){
    // add is variable of function data type
    let a=20;
    console.log(a+b)  //NaN
    var b=300;
    console.log(a+b)  //320
}

let x=100;
console.log(x-y); // Nan
var y=200;
console.log(x+y);  //300
add();

// NaN 300  NaN 320

*/

/*
a();
function a(){
    console.log("inside a");
}
a();

// o/p=> inside a
//       inside a"  

*/
/*
function a(){
    console.log("inside a");
}
let b="abusalman"

console.log(a);

// when we print a print all funtion as output 
// bcz function a data type and a variable of function 
// data type print a as variable  
console.log(typeof a); // function

// i have caste as string 

console.log(String(a));// print entire function as string 

console.log(typeof String(a));// string

console.log(b+a); // o/p=>  abusalmanfunction a(){
                    //     console.log("inside a");
                    // }


*/









  