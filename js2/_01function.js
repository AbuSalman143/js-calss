/*let arr1=[1,2,3,4,5]
let arr2=[1,2,3,4,5,6]
let arr3=[1,2,3,4,5,6,7]
let arr4=[1,2,3,4,5,6,7,8,]
let arr5=[1,2,3,4,5,6,7,8,9]
let arr6=[1,2,3,4,5,6,7,8,9,10]
let arr7=[1,2,3,4,5,6,7,8,9,10,11]
let arr8=[1,2,3,4,5,6,7,8,9,10,11,12]
let arr9=[1,2,3,4,5,6,7,8,9,10,11,12,13]

function totalSum(arr){
    let sum=0
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i]
    }
    return sum
}

let sum=totalSum(arr1)+totalSum(arr2)+totalSum(arr3)+totalSum(arr4)+totalSum(arr5)+totalSum(arr6)+totalSum(arr7)+totalSum(arr8)+totalSum(arr9)
console.log(sum);*/

/*
function add(a,b){
    let sum =a+b
    return sum
}
    

let r=add(25,6);
console.log(r);
*/


/*
function add(a,b){
    let sum =a+b
    return sum
}
    

let r=add(25);// one argument pass only 
console.log(r);


// when variable not declear function parameter take as undefine value 

function uppercase(str){
    console.log(str.toUpperCase());  
}

uppercase("abu salman");//this function in not returning 


function uppercase(str){
    return str.toUpperCase();  
}

result = uppercase("abu salman");
console.log(result);//this function return the value 

//** by default value of return function is undefine 

*/
/*
1)

function calculateArea(width,height){
const area = width*height;
return area;
} 

const area=calculateArea(30,40)//1200
const area1=calculateArea(30) //o/p => NaN bcz w=30 but h=undefine

2)
function calculateArea(width,height){
    height=height===undefined? 1 : height; // condition apply here
    const area = width*height;
    
    return area;
} 

const area=calculateArea(30,40)//1200
const area1=calculateArea(30) //o/p => 30 bcz w=30 but h=1



*  variable scope 


=> if any variable inside the function block we use in the funtion but we  can't access outside the function block   
=> if any variable decleard outside the function block we access the in side the block function bcz it is in the golobal contest 


function declaration and expression

1. function decleration 
function login(){


}

2.  expression (anonymus) => function ka koi naam nhi hai(function keyword use karte hai but function ka koi naam nhi hai ) but usko hm ek variable mai store krate hai or variable ko as function call kete hai usko hi anonymus function bhi kahte hai 
const login =function (){
    console.log();
}

login()

3. callback

function formatetext()
*/

