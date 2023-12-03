/*
root = {
    className:"container",
    id:"root",
    children:[
        {
            tagName:"p",
            className:"para",
            children:[
            {
                tagName:"span",
                innerText:"span 1",
                children:[],
            },
            {
                tagName:"span",
                innerText:"span 2",
                children:[],
            }
            
            ]
        },
        {
            tagName:"b",
            id:"bold",
            style:{
                color:"red",
                fontSize:"20px"
            },
            innerText:"ABU SALMAN"
        }
    ],
    tagName:"div"

}

console.log(window.document); // document he know all about the html document

* Document object know the entire dom tree (DOM object)


let result= document.getElementById("root")
// console.log(result);
result.style.color="white";
result.style.backgroundColor="lightgreen";
result.style.border="2px solid black"

let bold=document.getElementById("bold");
bold.innerText="Abu salman";
bold.style.color="darkblue"




//**some revision**\\
01.
let x="Abu Salman";
function callme(){
    console.log(x); //undefine
    var x=20;
    console.log(x);//20   
}

callme();
console.log(x); //erroe throgh here bcz x is not define

undefined vs not define vs  null

=> undefine mean  variable is decleared but on the time of run the value is not present on those line (ab tak value nhi define ki gyi hai ) or  not initilized 
=> not define mean variable is not declerad 
=> null -> pointing empty memory 
        -> null is the value of object   data type (null koi data type hi nhi hota ha JS mai )

02.         
let a=20;
if(true){
    console.log(a);// 20
} 

//**  DOM manipulation **\\
03.

let a=20;
if(true){
    console.log(a);// 20
    a=21;
} 

console.log(a);//21

04.


if(true){
    let a=20;
    console.log(a);// 20
    a=21;
} 

console.log(a);//error 


05.

if(true){
    let a=20;
    if(true){
        console.log(a); //error can't access before initilization 
        let a=30;
    }
    console.log(a);
}

06.

if(true){
    let a=20;
    if(true){
        let x=300;
        console.log(a);//20
        
    }
    console.log(x);// error x not define
    console.log(a);
}

07.
=> var Keyword 
function f(){
    console.log(y);
    if(true){
        if(true){
            var y=15;
        }
        console.log(y);
    }
}
f();
console.log(y);

*/


//  class 2nd 

/*

in the html code the para tag or elemnet is the object hai to usko memory location (refrence bhi hoga in heep memory mai )

so i want to manipulated of p element ,so first i access the p element  who acces the element window object ki properties "document" window.document 


//window.document \\

* to retrive an elemnt's  refrence (object ) from the dom tree there are many methode avilable in the document objevt 

=> 1.  getElemntById("id name "); srch the elment by the elemnet name

*  if its find the element so returm HTML element other wise return null value
=> 2.  getElementsByClassName("class name"); surch by class Name 

* it return the array of object 

=> 3.  getElementsByTagName("tag name ")  return array object 
=> 4. querySlectorAll(use selector) ;   return array object 
=> 5. querySlector(use selector) return single value 



let pareElemnet=document.getElementById("para");// in this line why we  not ryt the window.document bcz window k ander jo bhi rahta usko directolly access kr sakte hai

console.log(pareElemnet);// p elements
console.log(pareElemnet.id);// #para
console.log(pareElemnet.class);// undefine bcz class jo standerd key word hai  (use "className"  ) avoide the standerd keyword to over lapping 
console.log(pareElemnet.className);// .child
console.log(pareElemnet.innerText); // Para child text (para text in string type)
console.log(typeof pareElemnet.innerText);//  s 


 getElementsByTagName("tag name ")
 
 const inputElemnt = document.getElementsByTagName("input");// o/p is array
 console.log(inputElemnt); // HTMLAllCollection it is a class of array who extend the elemt of array 
 
 console.log(inputElemnt[0]);// input tag of HTML
 console.log(inputElemnt[0].value);// input ka value milta hai 
 console.log(inputElemnt[0].type);//input elment ka type check krenge 
 
 querySlectorAll(use selector)

  let firstInput=document.querySelectorAll(" form > input:nth-child(2)")
 console.log();
 
 .child
 
 let child=document.getElementsByClassName("child");
 child[0].innerText="Abu Salman";
 child[0].style.border="2px solid black";
 
 child[1].innerText="Hafsalman";
 child[1].style.border="2px solid green";
 child[1].style.background="yellow";
 
 //computedStyle\\
 computed style show the browser CSS
 computed is read only 
 
 const para=document.getElementById("para")
 console.log(para.className);
 para.className="two";// change the class name  from one to two in css style we have given two class and diffrent style but in html we have given by defoult one class
 
 
 const para1 =document.getElementById("para");
 const para2 =document.getElementsByClassName("one")[0];
 console.log(para1===para2);
 console.log(para2);
 console.log(para1);
 
 const para1 =document.getElementById("para");
 function toggelinnerText(){
     console.log(para1.innerText); // clic the button print Abu Salman:I love you 
    }


    * change the inner text using functon  
    
    const para1 =document.getElementById("para");
    function toggelinnerText(){
        if(para1.innerText==="Abu Salman: I love you Hafsa"){
            para1.innerText="Hafsa: I love you Salman";
        }
        else if(para1.innerText==="Hafsa: I love you Salman"){
            para1.innerText="Abu Salman: I love you Hafsa";
        }
    }


    * enable or disable button
    
    const input=document.getElementsByTagName("input")[1];
    const button=document.getElementsByTagName("button")[1]
    
    
    function exicute(){
        if(button.innerText==="Disable"){
            button.innerText="Enable";
            input.disabled=true;
            
        }
        else{
            button.innerText="Disable";
            input.disabled=false;
        }
    }
    
    
    */
HTMLCollection