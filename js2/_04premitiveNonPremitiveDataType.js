// Premitive Data type and Non Premitive Data Type (refrence data type)
// primitive and non primitve

// data types => primitve and non-primitive(reference datatypes)

// let arr = [4 , 5, 10]; 
// let b  = arr ; // [4, 5, 10]
// arr[0] = 23 ;
// console.log(arr[0], b[0])

// number , object = {}
// boolean , array 

/**
 * Primitive : number, boolean, undefined , string (Stack Memory)
 * Non Primitive: arrays, objects (Heap Memory), Function
 */


// let a = 20 ;
// let b = true ;
// let x = [3, 4, 5]; // #204
// let y = x ;
// x[0] = 200 ; // #204[0] = 200
// console.log(x[0], y[0])
// #204[0] , #204[0]  = 200

/*
function callme(a , b){
    a = 20 ;
    b[0] = 90 ; //  #320[0]
}
let x = 24, y = [3, 4, 5] 
callme(x, y);
console.log(x, y)
//24 , [90, 4, 5]

*/

/*
let b = 20 ;

function a(a){  // #400
   a && (x=120)  // x=120
    function b(){  // #300
        console.log(a + x); //  40+120=160
        function c(){ //#200
            console.log(typeof b);  // function 
        }
        c();
    }
    return b ;
}

let x = 100 ;
let result = a(2 * b);  // a = 2*b = 2*20 = 40
                        // function a(a) return => b , b is function 
                        // means result => function  b() #300 

result(); // refrence #300 ko call kiya 

*/


/*
let x = 100;
function a(){ // a = #200
    let y = 20 ;
    function b(){ // b = #100
        let x = 90;
        console.log(x + y) // 110
    }
    return b ;
}
let result = a();
result();

*/