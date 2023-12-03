

// function c(position){
//     console.log(position);
// }
// window.navigator.geolocation.getCurrentPosition(c);


// function call(){
//     let prom = new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log(1);
//             resolve({a:10,b:30})
//         },3000)
//         console.log(2);
//     })
// }

// call()

// console.log(call());//ubdefine

//  async function call(){
//     let prom = new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log(1);
//             resolve({a:10,b:30})
//         },3000)
//         // console.log(2);
//     })
//     console.log(2);
// }

// call()

// console.log(call());//retuen promise


//  async function call(){
//     let prom = new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log(1);
//             resolve({a:10,b:30})
//         },3000)

        
//     })
//     console.log(prom);
//     let result= await prom;
//     console.log(result);
//     console.log(2);
// }



// call();
// console.log(10);






//  async function call(){//#100
//     let prom = new Promise((resolve)=>{//#200
//         setTimeout(()=>{//#300
//             console.log(1);
//             queueMicrotask(()=>{//#400
//                 console.log(99);
//             })
//             resolve(true)
//             console.log(9);
//         },3000)

        
//     })
//     // console.log(prom);
//     let result= await prom;
//     console.log(result);
//     console.log(2);
// }



// call();
// console.log(10);

// 10,1,9,99,true,2  #100

