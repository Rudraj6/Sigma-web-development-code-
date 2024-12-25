
    //**EXAMPLE:1 OF ASYNC FUNCTION:- **/

// async function greet() {
//      throw "404 page not found";        /// return promise value
//     return "hello!"                  /// return promise value
// };

// greet() 
//  .then((result) =>{
//     console.log("promise was resolved");
//     console.log("result was :", result);
//  })
//  .catch((err)=>{
//     console.log("promise was rejected with error: ", err);

//  });

   //**EXAMPLE:2 OF ASYNC FUNCTION:-**//

//    let demo = async () =>{
//     return 5 ;                              /// return promise value
//    };


   //**EXAMPLE:1 OF ASYNC AWAIT KEYWORD */


//    function getnum() {
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             let num = Math.floor(Math.random() *10)+1;
//          console.log(num);
//          resolve();
//         },1000);
//         });
//    }


//    async function demo() {
//     await getnum();
//     await getnum();
//     await getnum();
//    }

  //***NOW applying async keyword on color change function */

//   let h1 = document.querySelector("h1");

//   function changecolor(color, delay) {
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>{

//             let num = Math.floor(Math.random() * 5)+1;
//             if(num>1){
//                reject("promise is rejected");
//             }

//             h1.style.color = color ;
//             console.log(`color changed to ${color}`);
//             resolve("color changed");

//         }, delay);
//     });
//   }


//   async function demo(){
   
//     try{  
//    await changecolor("red", 1000);
//    await changecolor("orange", 1000);
//    await changecolor("green", 1000);
//    await changecolor("yellow", 1000);
//    await changecolor("blue", 1000);
//     } catch(err){
//         console.log("error caught");
//         console.log(err);
//     }


//    let a = 5;
//    console.log(a);
//    console.log("new number is" +a+3);
//   };

 

   ///** API KEY:- JSON DATA  */

   // let jsonRes = '{"fact":"Cats must have fat in their diet because they cant produce it on their own.","length":76}';

   // console.log(jsonRes);

   // let valid = JSON.parse(jsonRes);

   // console.log(valid.fact);

   // let student = {
   //  name : "rudra",
   //  age: 19,
   // }


          //*** FIRST API REQUEST */

   // let url = "https://catfact.ninja/fact";

   // fetch(url)
   //  .then((Response) =>{
   //    // console.log(Response);
   //    return Response.json()   //Response.json() is used for converting data in readable format and return value in promise form
   //    })

   //    .then((data1) =>{
   //        console.log("data 1:- "+data1.fact);
   //         return fetch(url);     
   //    })
       
   //    .then((Response) =>{
   //       // console.log(Response);
   //       return Response.json()   //Response.json() is used for converting data in readable format and return value in promise form
   //       })

   //       .then((data2) =>{
   //          console.log("data 2:- "+data2.fact);        
   //      })   
   
   
   //   .catch((err)=>{
   //    console.log("Error:-" +err);
   //   });



               ///***now adding ASYNC & AWAIT KEYWORD to fetch function */


               // let url = "https://catfact.ninja/fact";

               // async function getfetch() {
               //    try{
               //       let res = await fetch(url);
               //       let data = await res.json();

               //       console.log(data.fact);

               //       let res2 = await fetch(url);
               //       let data2 = await res2.json();

               //       console.log(data2.fact);


               //    } catch(err){
               //       console.log("error:-"+err);
               //    }
               // }
