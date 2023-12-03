/*
let a=90 , b=10;
function callme(a){
    let b=20;
    console.log(a+b);  // 120
}
callme(a+b); // a=> a+b 90+10=100
*/

/*
let a=90 , b=10;
function callme(a){
    // let b=20;
    console.log(a+b);  // 120
}
callme(a+b);
*/

/*let a=20;
function change(){
    a++;
    console.log(a);
   ++a;
}
change()
console.log(a);

21,22
*/


/*
function change(){
    
    console.log(a);//a con't access before initilization
    
}
change()

let a=20;
*/


/*
function x(x){
    console.log(x+c); //undefineabusalmanundefine
}
x(c+"abusalman")  
var c=20;
*/

/*
let a=20;
function parent(a){
    let b=90;
    function child(a){
        console.log(x+a+b); //NaN
    }
    child(b-a);//a= b-a=90-40=50
}

parent(2*a); //a=2*20=40
var x=200; 

*/
/*
let a=20;
function parent(a){
    let b=90;
    function child(a){
        console.log(x,a,b); //undefine,50, 90
    }
    child(b-a);//a= b-a=90-40=50
}

parent(2*a); //a=2*20=40
var x=200; */


/*

function parent(){
    function child(){
        console.log("inside a child");
    }
    return child  // child ko return kar raha hai 
                  // child => function                  
}

let result=parent();// parent return child function(entire function)  

console.log(result);// o/p=> ƒ child(){
                         // console.log("inside a child");
                        //}

                        */
/*

function parent(){
    function child(){
        console.log("inside a child");
    }
    return 10;                  
}

let result=parent();// parent return 10  

console.log(result) //10                        

*/


/*

let a=90;
function parent(){
    let a=20;
    function child(){
        console.log(a);// 20
    }
    return child;                  
}

let result=parent();  

result() 

*/


