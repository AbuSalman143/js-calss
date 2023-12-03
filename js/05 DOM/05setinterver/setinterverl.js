// function callme() {
//     console.log("indside yhe function -1 "); //function print last 
// }

// console.log("in globale index-2");// 1st  print
// window.setTimeout(callme,500)
// console.log("in globale index-3");// 2nd print


/*
setTimeout task is to register function with the schedulaer for the designed time

 wo function refrence jo hai callback que mai jata hai (FIFO=>1st in 1st out)


 1. event loop monitor callstack and callback queue continiuosly 

 2. whenever a function waiting in callback queue (means jb time out complete hoja ta hai tb)   and callstack is also empty the function will enterd into callstack 

3. event loop give higher priority to microtask que over callback queue
*/

//  console.log("a");
//  setTimeout(()=>{
//     console.log("1");
//  },2000); 
//  console.log("b");
//  setTimeout(()=>{
//     console.log("2");
//  },1000); 
//  console.log("c");
//  setTimeout(()=>{
//     console.log("3");
//  },2000); 



// console.log("c");
// for(let i=0;i<3*10e8;i++){};//5000ms
// console.log("a");
//  setTimeout(()=>{
//     console.log("1");
//  },2000); 

//  queueMicrotask(()=>{
//     console.log("microtask");
//  })


// queueMicrotask(()=> console.log(1))

// setTimeout(()=> console.log(2))

// queueMicrotask(()=> console.log(3))

// 1,8,6,7,2,3,4,5


// console.log(1);
// setTimeout(()=>{
//     console.log(2);
//     queueMicrotask(()=>{
//         console.log(4);
//     })
//     console.log(3);
// })

// queueMicrotask(()=>{
//     console.log(6);
//     setTimeout(()=>{
//         console.log(5);
//     },0)
//     console.log(7);
// })

// console.log(8);


// abc12354


console.log("a");
setTimeout(()=>{
    console.log(1);
    queueMicrotask(parent);
    console.log(2);
})

console.log("b");
const parent=()=>{
    console.log(3)
    setTimeout(()=>{
        console.log(4);
    })
    console.log(5);
}

console.log("c");