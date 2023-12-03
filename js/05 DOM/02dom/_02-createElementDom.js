   const weekdays=document.querySelector(".weekDays");
//    console.log(weekdays);
//    console.log(weekdays.children);//html collection milta hai 
//    console.log(weekdays.children[0])// 1st element milta hai  
//    console.log(weekdays.children[0].innerHTML)


//    for (let i = 0; i < weekdays.children.length; i++) {
//     console.log(weekdays.children[i].innerHTML);
    
//    }


// weekdays.children[1].style.color="orange"


// console.log(weekdays.firstElementChild);// first element hmko milta hai 
// console.log(weekdays.lastElementChild);//  last element hmko milta hai 

// const day=document.querySelector(".day");

// console.log(day);// 1st element milta queryslector se 

// console.log(day.parentElement);// parent element milta hai 

// console.log(day.nextElementSibling);// next silibling element mlta hai 

// console.log("Node: ", weekdays.childNodes);

// o/p=> mai hme nodelist milti hai but hm dekhe to hamare weekdays mai 4 element hai but hme output mai 9 index ate hai mean isliye ki wo hr enter line ko count krta hai 

// html 1 enter ko hi web browser mai count krta hai  usse jada nhi 





/*********         ++++++++++++++++++++++++++++++++++ Creat Element  +++++++++++++++++++++++++++++++++         *********/ 

// two main rules

// 1. creat the element/html element in the memory first 
// 2. attched the elemnet created onto dom tree using appendChild(element ka naam)


// const div=document.createElement("div");
// console.log(div);
// div.className="main";
// div.id="name";
// div.style.backgroundColor="green";
// div.style.padding="10px";
// div.innerText="Abu Salman"

//abhi tak hmne jitna kiya hai usse to memory mai element creat hua hai but dom tree mai nhi 


// document.body.appendChild(div)// jb hm appendChild (element ka namm ) krte hai tm add hota hai 



// containner div k ander ager kuch add krna hai to 
// const newDays=document.createElement("div")
// console.log(newDays);
// newDays.className="day";
// newDays.innerText="Friday";

// const weekDays=document.querySelector(".weekDays")

// weekDays.appendChild(newDays)


/*********         ++++++++++++++++++++++++++++++++++ Creat Element in b/w   +++++++++++++++++++++++++++++++++         *********/ 

// use insertBefore(which element you want to add , uska parent elementname.children[position] )
const newElement=document.createElement("div")
newElement.className="day"
newElement.innerText="ABU SALMAN"

// if(weekdays.children.length>=3){
   const inserte=weekdays.insertBefore(newElement,weekdays.children[4])
   console.log(inserte);
// }



/*********         ++++++++++++++++++++++++++++++++++ Delete/remove Element  +++++++++++++++++++++++++++++++++         *********/ 


// using remove() methode

// const dayClass=document.querySelectorAll(".day")

// // console.log(dayClass[2]);

// dayClass[0].remove();

// weekdays.appendChild(dayClass[0])// add in last 





// insert elment when i click   button 

const button=document.querySelector("button");

 button.addEventListener("click", function(){
   const creatElement=document.createElement("h1")
 creatElement.className="babyName";
 creatElement.innerText="umme Haani";
 button.insertBefore(creatElement,button.children[1])
 })



const clickME=document.querySelector(".click");
clickME.addEventListener("click", function(){
   const container=document.createElement("div");
 container.id="container";
 let p1=document.createElement("p")
 p1.innerHTML="I am ";
 let b=document.createElement("b");
 b.innerText="Abu Salman";
let p2=document.createElement("p");
p2.innerText="Age: 100";
document.body.appendChild(container);
container.appendChild(p1);
container.appendChild(p2)
p1.appendChild(b);
})

 






