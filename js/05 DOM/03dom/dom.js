/* 

// window.document
To retrive an element's refrence (object ) from the dom tree thre are many methode to avialble in the dom documnet object 


1.getElementById("idname") 
2.getElementsByClassName("classname") // form of array (HTML collection)
3.getElementsByTagName("tagName") // form of array 
4.get.querySelector("selector name")//retun first elemnet of selector
5.get.querySelectorAll("selectorName")//query selecter hme return krta hai nodelist , node look like array but not array some array property we use

*/
// const classes = document.getElementsByTagName("div")
// console.log(classes.length);
// for(let i=0;i<classes.length;i++){
//     console.log(classes[i].innerText);
// }
// const tag = document.getElementsByTagName("div")
// console.log(tag.length);
// for(let i=0;i<tag.length;i++){
//     console.log(tag[i].innerText);
// }

// const qALL=document.querySelectorAll("div")
// console.log(qALL.length);
// for(let i=0;i<qALL.length;i++){
//     console.log(qALL[i]);
// }

// const qALLclss=document.querySelectorAll(".content")
// console.log(qALLclss.length);
// for(let i=0;i<qALLclss.length;i++){
//     console.log(qALLclss[i]);
// }


const qselctor=document.querySelector(".container");
console.log(qselctor.children);//html collection

//queryselctor ki .children property use krne per hamne HTML collecton milta hai usko hm array ki trah use kr sakte hai 