 /*
     This Keyword.

     => In jS the "This" keyword refers to an object
     (iski value hameshaa changr hoti according to cenairios)

     => In js the "this keyword " is valid to every where (golobal & local)
     
     

     this=>object

     1. Using this keyword inside the golobal
     
     console.log(this);// window obj
     
     
     window=>window is global object in the browser enviroment
     
     
     JS run wherever jS engain is there mean where run js those its envoroment 

     
     console.log(window);// window obj
     
     we are not creating window variable but console not given error 
     bcz window is golobal object 

     and this===window o/p=> IS TRUE


     
     
     console.log(this===window);// true
     
     window is non premitive value so its a heap memory.  
     
     console.log(this.aaa);//undefine
     var aaa="abc";
     console.log(this.aaa);//abc
     
     when we creat variable using var keyword is the part of the golobal object

     but when we use let and const so it is not a part of golobal constest 
     
     
     
     console.log(this.aaa);//undefine  bcz in window obj no aaa variable 
     let   aaa="abc";
     console.log(this.aaa);//undefine
     
     
     
     //inside the sunction this keyword\\
     
     function callme(){
         console.log(this);
        }
        
        callme();//  window
        
        
        
        function callme(){
            console.log(this);
        }
        
        callme();//  window
        console.log(window.callme); // is the function    
        

        * Variables declared with function or var keywords will become the part of window(global) object Only when they are declared in the global scope and not inside a function scope.
 * 
 * Arrow functions are made in such a way that this keyword has no meaning inside them.
 

//     console.log(this) // this === window 
//     let callme = () => {
//     // inside arrow functions `this` is treated as variables.
//     console.log(this)//  window
// }
   
        

let callme=function (){
    console.log(this);
}

callme();//  window
console.log(window.callme); // undefine bcz let keyword is the not a part of window 



let obj = {
    x:"Abu Salman",
    printNamen:function(){
        console.log(this.x);
     }
}

obj.printNamen();


when you call a non-arrow function(regular function) without any object in front of it then the `this` keyword inside such a function will always be global object(window)

let obj = {
    a:1,
    b:2,
    c:function(){
        console.log(this);// obj 
        let f=()=>{
            console.log(this);// obj 
        }
        f();
    }
} 

obj.c();


let obj ={
    
    a:1,
    b:2,
    c: function(){
        console.log(this);// obj 
        let f=()=>{
            console.log(this);// obj
        }
        f();
    },
    d:{
        a:20,
        b:30,
        c: function(){
              console.log(this.a+this.b);  
        }
    }
}

obj.d.c();


let obj ={
    
    a:1,
    b:2,
    c: function(){
        console.log(this);// obj 
        let f=()=>{
            console.log(this);// window
        }
        f();
    },
    d:{
        a:20,
        b:30,
        c: ()=>{
            console.log(this. a+this.b);  
        }
    }
}

obj.d.c();



//=>This keyword and call bind apply


let obj={
    a:10,
    abc(){
        // this keyword inside any function will refer to the obj with which its binded 
        console.log(this); // obj 
    }
}

obj.abc();


function test(){
    console.log(this);  // window
    
}


window.test();// this type of binding is implicite biding 

* implicite biding => it is applied when you invoke a function in an object using (.) dot notation.
*  "this" keyword in such cases will point toword the object using which the function has been called.   

01.

this.a=5;// this is a golobal context 
console.log(a);//5

02.

this.a=5;
function getparameter(){
    console.log(this.a);//5  this keyword inside a normal fuction 
    
}
getparameter();


03.


this.a =5;
const getparameter=()=>{
    console.log(this.a);
}

getparameter();

04.

let user = {
    name:"pc",
    age:23,
    getDetails(){
        console.log(this.name);//pc
    }
    
}
user.getDetails();

05.

let user = {
    name:"pc",
    age:23,
    childobj:{
        // name:"pc",
        newName:"abu salman",
        getDetails(){
            console.log(this.newName, "and" ,this.name);//abu salman and undefine
        }
    }
}

user.childobj.getDetails();

06. 


let user = {
    nam:"pc",
    age:23,
    getDetails:()=>{     // arrow function
        console.log(this);// window
    }
}

user.getDetails();

07.


=> Normal Function -> Object
=> Arrow Function -> Parent Normal Function 
let user = {
    nam:"pc",
    age:23,
    childobj:{
        // name:"pc",
        newName:"abu salman",
        getDetails:()=>{
            console.log(this.newName, "and" ,this.nam);//abu salman and undefine
        }
    }
}

user.childobj.getDetails();

08.

let nam ="abc"
let getDetails=()=>{
                console.log(this.nam);//abu salman and undefine
            }

            getDetails();

09.


let user ={
    nam:"pc",
    age:23,
    getDetails(){
        const nestedArrow=()=>{
            console.log(this);//user obj 
        }
        
        nestedArrow();
    }
}

user.getDetails();

10. 

const user ={
    firstName :"ABU",
    getName(){
        const firstName="pc"
        return this.firstName;
    }
}

console.log(user.getName());//pc wrog  ryt is ABU 
*/