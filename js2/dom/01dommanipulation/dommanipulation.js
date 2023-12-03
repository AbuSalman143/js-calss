   /*
   DOM Manipulation 
   
   1.  editing an existing elemnet 
   
   a) chane the input type to checbox
   const inputElement=document.getElementsByTagName("input")[0];
   console.log(inputElement.type);
   function changeTheType(){
      //defoult type is text 
      console.log(inputElement.type);
      //   inputElement.type="number";//existing element ka type change kiya
      inputElement.type="checkbox";
      //  inputElement.type="password";
   }
   
   b) //change the input type  
   
   
   const inputElement=document.getElementsByTagName("input")[0];
   const inputElement1=document.getElementsByTagName("input")[1];
   //  console.log(inputElement.type);
   function changeTheType(){
      //  defoult type is text 
      if(inputElement.type==="text"){
         inputElement.type="password";
         inputElement1.checked=false;
      }else{
         inputElement.type="text";
         inputElement1.checked=true;
      }
   }
   
   c)  change the image link
   
   
   const inputElement=document.getElementsByTagName("img")[0];
        
         function changeTheType(){
           inputElement.src="https://picsum.photos/400/400.jpg"
           
        }

        //d)   loder 
        const loader = document.getElementById("loderid");
        
        const addLoader=()=>{
           loader.style.display="block";
         }
        
         
         
         
         //2.  adding a node / html element into the dom tree.
         i. creat the element /htnl element in the menory 1st 
         ii. attach the element creared onto DoM tree
         
         
         //a)   loder   (<div class="loader" id="loderid"></div>  same element creat krna )
        const loader = document.getElementsByClassName("loader")[0];
        const button=document.getElementById("btn");
        let count=0;
        const addLoader=()=>{
            let newDivElement=document.createElement("div");//creatElement :=> js  ke through ager koi element creat krte hai to "creatElement" ka usekrte hai (and html element creat krte hai memory mai  ) 
            newDivElement.className="loader";// jo element creat kiya hai usme class add krne k liye
            if(count<=0){
               button.appendChild(newDivElement);// button ke ander loder ko lane k liye button mai "appendChild" ke throgh add krte hai like array
               count++;
            }
               
         }
           3. remove an existing  node from the dom tree 

         add a element in between the element like [1,2,3,4]  and we added 8 in b/w 3 & 4  [1,2,3,8,4] 

         
         const button=document.getElementById("btn");
         // console.log(button.children);// o/p=> html collection 
         // console.log(button.children[0])// o/p=><span>1 one<span>
         // console.log(button.children[1]) // o/p=><b>2 two<b>
         // console.log(button.children[2]) // o/p=><lable>3 three <lable>

         function addElementInBtween(){
             const h1=document.createElement("h1"); //should add <h1>Abu salman </h1> inside the button 
             h1.innerText="Abu Salman"  // add the text in side the h1 tag
             const lastElement=button.children[2];
             lastElement.remove();// detached the lastelment node from the DOM tree ( not memory) 
             button.appendChild(h1);//[span,b,h1];
             button.appendChild(lastElement);



         }
         
         // <!-- in below we want to creat using js  -->
         // <!-- <div class="container">
               // <p>
                     <b>i am Abu salman </b> 
                     <b>Age:27</b>
              // </p>
         // </div> -->

         
         
         function addelement(){
            const container=document.createElement("div"); // 1st we creat container div wih class ontainner 
           container.className="container";
           let p=document.createElement("p");
            let b1=document.createElement("b");
            b1.innerText="I Am Abu Salman";
            let b2=document.createElement("b");
            b2.innerText="Age:27";
            //p.appendChild(b1);
            //p.appendChild(b2);
            // let sapose 50 element to created so we ryt 50 line for append , no so we use (append(b1,b2,b3) like that 
            
            p.append(b1,b2); // p tag mai bold tag ko add kiya 
            container.appendChild(p); // dive tag mai p tag ko add kiya 
            document.body.appendChild(container);


         }
            */ 

         