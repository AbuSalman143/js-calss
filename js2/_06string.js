// String
/*
there is three way to write String in javascrip

1. using dobule quote " "
2. using singlw quote ' '
3. using template litral  ` `
 
there no concept Character data type in Javascript

//for length\\
str.leghth
Space also a chractar
string can't modifide in JS
let str ="class started ?"

console.log(str.length);   // for string length  
console.log(str[1]);       // for string charactor at index value 
console.log(str[20]);// when we write grater then index value show undefine
console.log(str.charAt(1));// one more way to print character of string
console.log(str.charAt(20))// when we write grater then index value show empty



// split methode\\


in this methode u cut the string using Split("anything")(like=> any key u want to split some fragment)
let str ="c$la$ss$ st$ar$ted ?"
console.log(str.split("$"));


let url  = "https://google.com/api?q=javascrip&browser=chrome&user=Abu Salman"
let queries = url.split("?")[1];// i want to only left side of string
console.log(queries);// o/p=>  q=javascrip&browser=chrome&user=Abu Salman
let queryPrameter ={};
let query=queries.split("&");
console.log(query);//['q=javascrip', 'browser=chrome', 'user=Abu Salman']
query.forEach(item=>{
    console.log(item);//q=javascrip
    //browser=chrome
                      //user=Abu Salman
                      
                      
                    })

                    query.forEach(item=>{
                        let keyValue=item.split("=")
                        console.log(keyValue);//['q', 'javascrip']
                                              //['browser', 'chrome']
                                              //['user', 'Abu Salman'] 
})

query.forEach(item=>{
    let keyValue=item.split("=");
    queryPrameter[keyValue[0]]=keyValue[1];
})

console.log(queryPrameter);//{q: 'javascrip', browser: 'chrome', user: 'Abu Salman'}


*/
/*
let obj={}
let key="user"
let value="Abu Salman"
obj[key]=value
console.log(obj);

//slice methode\\

let str = "Abu-Salman"
//    0123456789  index 
slice(start,end) end consider end-1
slice(start) means index to last  
console.log(str.slice(3 , 7));



let str = "Abu-Salman"
console.log(str.substring(1,5));

//template string\\
it is use to concatinate the string without any + symble


let str = "Abu-Salman"


let sentances = `My Name is ${str}. I am a student`
console.log(sentances);

//Escape charecter\\
let str ="Hi\n abu salman "// for nwe line \n
console.log(str);           // ofor tab \t

//trim methode\\


let str="   a abc "
console.log({ans:str});// print same as 
console.log({ans:str.trim()});     //  trim extra spacesstarting and ending only   


//Spread Oprator(...)\\

can be used with swequance type data structure like array,string

denoted bt three dot (...)
*/

/*
let arr1=[4,5,6,7]
let arr2=[false, true, 10,20, "Abu Salman"]
let result=[4,5,...arr2,6,7]
console.log(result); //[4, 5, false, true, 10, 20, 'Abu Salman', 6, 7]
*/
/*
let a = "abu salman"
let b=[...a]
console.log(b);//['a', 'b', 'u', ' ', 's', 'a', 'l', 'm', 'a', 'n']
*/

/*
function callme(a,b,c){
    console.log(a,b,c); //10,20,30
}

callme(10,20,30)
but 
function callme(a,b,c){
    console.log(a,b,c);//[10, 20, 30] undefined undefined
}

callme([10,20,30])


function callme(a,b,c){
    console.log(a,b,c); //10,20,30
}

callme(...[10,20,30])// =>  callme(10,20,30)

pahle value apred ho rah tha but ...x value ko spared se array mai convert kr raha hai 

function callme(a,...x){
    console.log(a,x)  // 10,[20,30,40,50,60,70]
}
callme(10,20,30,40,50,60,70)


function callme(...x){
    console.log(x)
}

callme("abc")

abc=...x -> ...["abc"]  
x=[abc]

*/
/*
//Destructuring\\

destructuring => object and array

let a=[3,4]

from the array [3,4] destructuring element into variable
let [a,b]=[3,4]
console.log(a,b)




function callme([a,b]){
    console.log(a,b);  // a=10,b=20
}
callme([10,20])





function callme([a,b]){
    console.log(a,b);  // error number 10 is not iterable
}
callme(...[10,20]) 

// show error bcz 

// ...[10,20]=10,20
// in a function callme only one parameter in the form of array
// show [a,b]=10 and 10 is not itrable  



let  [a,b]="10";
console.log(a,b);// a=1  b=0



function callme([a,b]){
    console.log(a,b);  // a=1  b=0
}
callme(...['10','20']) 


let obj={
    name : "Abu Salman",
    gender:"male",
    age:28

}

let {name,age1,gender}={
    name : "Abu Salman",
    gender:"male",
    age:28,
    
    
}
console.log(name,age1,gender);



function callme({name , age, gender}){
    console.log(name,age,gender);
}

callme({name:"abu Salman",agee:22})

*/

