// Dom=> Document Object Manipulation 

let id= document.getElementById("title");// return mai hame pura element milta hai 
// console.log(id);
// console.log(document);


// ager hmko attribute pata krne hai ki kon kon se hai to hm getAttribute("id"/"class") ka use krtr hai 

// id=document.getElementById("title").getAttribute("id");
// console.log(id);

// id=document.getElementById("title").getAttribute("class");
// console.log(id);

// ager hmko koi attribute se kerna hai to hm setAttribute("class", "class-name" )


// id=document.getElementById("title").setAttribute("class","set");// setAttribute ke use krne se console o/p undefine ayega but element mai jaker dekhenge to class over write ho jayega mean change ho jata hai  
// console.log(id);

// id=document.getElementById("title").setAttribute("class","set heading");//  ager hame do class name deni hai setAttribute ka use kr ke to hmko dono class ka naam likhna hoga  
// console.log(id);

id.style.backgroundColor="green";
id.style.padding="15px"
id.style.borderRadius="30px"






console.log(id);

let text=id.textContent // textContent => mai sara text display hota chahe wo display=none ho  
console.log(text);

text=id.innerHTML // isme ager sara Html code dikha hai us tag ka --- ager us tag ke ander  koi html code hoga to pura HTML code display hoga  
console.log(text);
text=id.innerText// ager display none hua to wo text nhi dikhega 
console.log(text);



// document.getElementsByClassName()

// query selctor=> hm css ki trah #idname / .className ya sare css slector ko use kr sakte hai mager srf hmko 1st value hi dega  

// document.querySelector()

// let ul=document.querySelector("ul")
// console.log(ul);
// ul.style.backgroundColor ="black"

// querySlectorAll


// query selecter hme return krta hai node , node look like array but not array some array property we use  

let list = document.querySelectorAll("li")
console.log(list)// nodeList(3) [li, li, li]


// if we want to change color of li one 

// list.style.color=green // error bcz it no use like this 

list[0].style.color="green"
list[1].style.color="yellow"
list[2].style.color="red"


// list.forEach((element)=>{
//     element.style.backgroundColor="black"
// })

list.forEach(function(index){
    index.style.backgroundColor="black"

})







