// function hello() {
//     console.log("hello");
// };


// function demo() {
//     hello();
// }

// demo();


  /***for learning breakdown */
// function one() {
//     return 1;
// };

// function two() {
//     return one() + one();
// };

// function three(){
//     let ans = two() + one();
//     console.log(ans);
// };


// three();

   //***HERE IS EXAMPLE OF CALLBACKS NESTING */

//   let h1 = document.querySelector("h1");

//  function changecolor(color, delay, nextcolorchange){
//     setTimeout( () => {
//         h1.style.color = color;
//         if(nextcolorchange) nextcolorchange();
//     }, delay);

//  };

//  changecolor("red", 1000, ()=>{
//     changecolor("orange",1000, () =>{
//         changecolor("green",1000, () =>{
//             changecolor("yellow",1000 );
//         } ); 
//     } );
//  } );


//  //callbacks nesting -> callback hell

   //***EXAMPLE:-2 FOR UNDERSTANDING CALLBACK HELL BETTER */

// function savedata(data, success, failure){
//     let internet = Math.floor(Math.random() * 10) +1;

//     if(internet>4){
//         success();
//     }else{
//         failure();
//     }
// }

// savedata(
//     "apna college",
//     () =>{
//         console.log("success: conguratulations your data is successfully save ");
//         savedata("hello world", ()=>{
//             console.log("success2: conguratulations your data is successfully save ");

//             savedata("Rudra Jha", ()=>{
//                 console.log("success3: conguratulations your data is successfully save ");
                
//             },
//           ()=>{
//             console.log("failur3: your internet is week! data is not saved ");
//           })
//         },
//       ()=>{
//         console.log("failur2: your internet is week! data is not saved ");
//       })
//     },

//     () =>{
//         console.log("failure: your internet is week! data is not saved ");
//     }
// );

   //*** example of promise chaning */

// function savedata(data){
//     return new Promise((resolved, reject) =>{
//         let internet = Math.floor(Math.random() *10) + 1;
//         if (internet >4){
//             resolved("success: conguratulations your data is successfully save");
//         } else{
//             reject("failure: your internet is week! data is not saved");
//         }
//     }); 
// };


//  savedata("apna college")
//   .then((result)=>{
//     console.log("data1 was saved");
//     console.log("result of promise", result);
//     return savedata("Hello Rudra");
//    })
//     .then((result)=>{
//         console.log("data2 was saved");
//         console.log("result of promise", result);
//         return savedata("disha more");
//     })
//     .then((result)=>{
//         console.log("data3 was saved");
//         console.log("result of promise", result);
//     })   
//   .catch((error)=>{
//     console.log("promise was rejected");
//     console.log("error of promise", error);
//     });


            //*** HERE NOW CONVERTING  EXAMPLE:-2 IN PROMISE CHANING*/

        // let h1 = document.querySelector("h1");

        // function changecolor(color, delay){
        //     return new Promise((resolve, reject) =>{
        //     setTimeout(() =>{
        //         h1.style.color = color;
        //         resolve("color changed!");
        //     }, delay);
        //     });
        // }

        // changecolor("red",1000)
        //  .then( ()=>{
        //     console.log("red color was completed");
        //     return changecolor("orange", 1000);
        //  })
        //  .then( ()=>{
        //     console.log("orange color was completed");
        //     return changecolor("green", 1000);
        //  })
        //  .then( ()=>{
        //     console.log("green color was completed");
        //     return changecolor("blue", 1000);
        //  })
        //  .then( ()=>{
        //     console.log("blue color was completed");
          
        //  })



        