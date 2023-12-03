/*
 
two type of event 

1. Mouse event
    a.scroll
    b.click
    c.moving mouse onto an element (mouse enter)
    d.moving mouse out from the element (mouse leave)
    e.right click
    f.drag
    g.dubbleclick
2. keyboard event 

    a.Press down a key (keydown) (press a key but not relaese)
    b.press released (keyup)

3. other event 

    changing the text of an element  (input value change)=>{change}
    submitting a form (submit)  
*/


/*
function clickListener(){
    console.log("clicked the button")
}

function mouseEnterListener(){
    console.log("mouse entered")
}

function mouseLeaveListener(){
    console.log("mouse leave event")
}

function doubleClickListener(){
    console.log("double click")
}
*/



// addEventListener(listener-name, function) event ko add krne k liye usekrte hai 

const btn = document.getElementById("btn");
const btn2 = document.getElementById("remove");

// const listener1 = (event) => {
//     console.log("first click listener")
// }

// const listener2 = () => {
//     console.log("second click listener")
// }

// btn.addEventListener("click" , listener1); 

// btn.addEventListener("click", listener2);

// btn2.addEventListener("click", () => {

//     //removeEventListener(listener-name, function) event ko remove krne k liye use krte hai 
//     btn.removeEventListener("click", listener1);
// })



// const button = document.getElementById("test") ;

// const listener = (event) => {
//     console.log("inside the listener")
//     event.target.style.backgroundColor = "blue" ;
//     event.target.style.color = "white" ;
//     //  remove the listener
//     button.removeEventListener("click", listener)
// }

// button.addEventListener("click", listener)

const parent = document.getElementsByClassName("parent")[0] ;
const child = document.getElementsByClassName("child")[0] ;

parent.addEventListener("click", (event) => {
    console.log("parent listener")
})

child.addEventListener("click", (event) => {
    console.log("child listener")
    event.stopPropagation();// stops propagating the event to it's parent elements
})





 const button = document.getElementsByTagName("button")[0] ;

// let students = [
//     "sukesh", 
//     "saikumar",
//     "rajesh"
// ]

// button.addEventListener("click", () => {
//     // create a bold element and append it inside the container
//     const bold = document.createElement('b') ;
//     // <b></b>
//     bold.innerText = "Aravind" ;
//     // <b>Aravind</b>
//     const container = document.getElementById("container");
//     container.appendChild(bold);
// })

// const container = document.getElementById("container");

// button.addEventListener("click", () => {
//     students.forEach(student => {
//         const bold = document.createElement("b");
//         bold.innerText = student ;
//         bold.style.margin = "10px"; 
//         container.appendChild(bold);
//     })
// })

/*
const form = document.querySelector("form") ;

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let formRef = event.target ;
    let elements = formRef.elements ;

    let userInfo = {} ;

    userInfo["dummy"] = "abc" ;

    for(let i = 0 ; i < elements.length; i++) {
        elements[i].name && (userInfo[elements[i].name] = elements[i].value)
    }
    console.log(userInfo)

    // SEND DATA TO SERVER
})
*/

// const input = document.querySelector("input");

// input.addEventListener("focus" , () => {
//     console.log("focused the input")
// })

// input.addEventListener("click", () => {
//     console.log("clicked on input")
// })

// input.addEventListener("change", (e) => {
//     console.log(e.target.value)
// })

// input.addEventListener("keyup", (e) => {
//         console.log(e.target.value)
// })

/**
 <div class="modal">
        <div class="modal-container">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, illum?</p>
            <button>Close</button>
        </div>
    </div>
 */
// const button = document.getElementById("btn");
// button.addEventListener("click", () => {
//     const modal = document.createElement("div");
//     modal.className = "modal" ;
//     const modalContainer = document.createElement("div");
//     modalContainer.className = "modal-container" ;
//     modal.appendChild(modalContainer);

//     let str = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, illum?` ;

//     const p = document.createElement("p");
//     p.innerText = str ;

//     const closeButton = document.createElement("button");
//     closeButton.innerText = "Close Modal" ;

//     const closeModal = () => {
//         // write the logic to close the modal
//         modal.remove();
//     }

//     closeButton.addEventListener("click", closeModal)

//     modal.addEventListener("click", closeModal);

//     modalContainer.appendChild(p);
//     modalContainer.appendChild(closeButton);

//     document.body.appendChild(modal);
// })

/*
card => task 

task = {
    title: '',
    assignee: 'Aravind',
    status: "In progress" | "Done" | "Todo"
}


*/



// const span = document.querySelector("#container > span") // #300
// // span => object (HTML Object in the HEAP memory) 
// const container1 = document.getElementById("container1") ;

// function copyElement() {
//     let newSpan = span.cloneNode(true);
//     console.log(newSpan) // #400
//     console.log(span) // #300
//     console.log(span === newSpan) // #300 === #400
//     container1.appendChild(newSpan); 
// }


const container = document.getElementById("container");
const container1 = document.getElementById("container1");

const draggableElement = document.querySelector("#container > span") ; // span



draggableElement.addEventListener("dragstart" , (e) => {
    e.dataTransfer.setData("element", e.target.id) // e.target === draggableElement.id = "source"
    console.log("started dragging")
});

// container1.addEventListener("dragover", () => {
//     console.log("dragging some element onto me")
// })

// container1.addEventListener("dragenter" , (e) => {
//     console.log("entered some element onto me")
// })

// container1.addEventListener("dragleave", () => {
//     console.log("some element left from me")
// })

container1.addEventListener("dragover", (e) => {
    container1.style.border = "3px dotted green";
    e.preventDefault();
})

container1.addEventListener("drop", (e) => {
    // e.target => container1
    const draggedElementId = e.dataTransfer.getData("element");  // draggedElementId = "source"
    const sourceElement = document.getElementById(draggedElementId) ;// document.getElementById("source")
    console.log(sourceElement.draggable)
    sourceElement.draggable = false ; // Boolean("false") => true 
    e.target.style.border = "2px solid blue"
    e.target.appendChild(sourceElement);
})

/**
 * 
 * dragstart(span) => dragenter(container1) => dragover(container1) => drop(container1)
 *  {key: value} =>  {key: value} => {key: value} => {key: value}
 *  {id: "span"} => {id: "span"} => {id: "span"} => {id: "span"}
 */

const test = document.getElementById("test");
console.log(test.childNodes)// all child nodes including text nodes 5

console.log(test.children) // only HTML element children excluding text nodes 2