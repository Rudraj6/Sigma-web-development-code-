//  let btn = document.querySelector("button");

//  console.dir(btn);

    //**After inline events 2nd method is setting property value in function */
          //** METHOD no 1:- .onclick :- when an element is clicked */

 // created an function which repeat output based on function

//  btn.onclick = function() {

//     console.log("button is clicked"); // output comes on console screen
//     alert("button is clicked");       // output comes as alert
//     console.log(prompt());            // output of enterd prompt

//  };


       // now first creating a function after that assigning with button;

    //  function sayhello(){
    //  alert("The button was clicked");
    //   }

    //   btn.onclick = sayhello;


        // now creating a function for all button and with the help of "queryselectorALL".

        // let btns = document.querySelectorAll("button");

        // function sayhello(){
        // alert("The button was clicked");
        // }

        // btns.forEach(btn => btn.onclick = sayhello);


           //***METHOD no 2:- .onclickenter/onmouseenter :- when mouse enters an element  */
           /*   ISSUE WITH ONCLICKENTER property it could not run more than 1 function       */

       
    //     let btns = document.querySelectorAll("button");
        
    //     console.dir(btns);

    //     function onmause() {
    //         console.log("you enterd a button")
    //     }

    //     btns.forEach((btn) => {
    //         btn.onmouseenter = onmause;
    //    });
           

          

             //**METHOD no 3:- EVENT LISTENER(.addEventListener(event, callback)) */
                
            // let btns = document.querySelectorAll("button");



            // btns.forEach((btns) =>{

            //     btns.addEventListener("click", sayhello);
            //     btns.addEventListener("click", sayname);
            //     btns.addEventListener("dblclick", function(){
            //         console.log("you double clicked me")
            //     });
            // });

            // function sayhello() {
            //     alert("Hello, Disha");
            // }

            // function sayname() {
            //     alert("I Love You");
            // }


            
         /// ACTIVITY:- change color on clicking button


// let btn = document.querySelector("button");

// btn.addEventListener("click", function() {
    
//     let h3 = document.querySelector("h3");
//     let randomColor = getrandomcolor();
//     h3.innerText = randomColor;

//     let div = document.querySelector("div");
//     div.style.backgroundColor = randomColor;


//     console.log("color updated");
// });


// function getrandomcolor() {
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);


//     let color = `rgb(${red}, ${green}, ${blue})`;
//     return color;
// }


// let p = document.querySelector("p");

// p.addEventListener("click", function(){
//     console.log("para was cliked")
// });


// let box = document.querySelector(".box");

// box.addEventListener("mouseenter", function(){
//     console.log("mouse inside box")
// });


  //***Adding "This" in event listeners example */


// let h1 = document.querySelector("h1");
// let p = document.querySelector("p");
// let h3 = document.querySelector("h3");
// let btn = document.querySelector("button");

//  function changecolor(){
//      console.dir(this.innerText);
    
//      this.style.backgroundColor = "red" ;


//  }

// btn.addEventListener("click", changecolor);

// h1.addEventListener("click", changecolor);

// p.addEventListener("click", changecolor);

// h3.addEventListener("click", changecolor);


   //***Keyboard Event */
    

     // adding event in function and printing property with help of console

// let btn = document.querySelector("button");

// // btn.addEventListener("click", function (event) {
// //   console.log(event);
// //   console.log("button Clicked");
// // });
        
// btn.addEventListener("dblclick", function (event) {
//   console.log(event);
//   console.log("button Clicked");
// });

   
     //******* With the help of keyboards use up,down, right, left */

// let input = document.querySelector("input");

// input.addEventListener("keydown", function(event) {

//   console.log("code = " +event.code); // ArrowUp, Arrowdown, Arrowleft, ArrowRight

//   if(event.code =="ArrowUp"){
//     console.log("character move forward");
//   } else if(event.code == "ArrowDown"){
//     console.log("character move backwards");
//   } else if(event.code == "ArrowLeft"){
//     console.log("character move left");
//   } else if(event.code == "ArrowRight"){
//     console.log("charater move right");
//   } else{
//     console.log("wrong input");
//   }

// });


// input.addEventListener("keyup", function() {

//   console.log("key was released");
// });



      /**Form Eventlisterner */
      /** Here extracting data from submoitted form with the help of eventlistener and adding altert with details*/

      // let form = document.querySelector("form");

      // form.addEventListener("submit", function (event) {
      //   event.preventDefault();

      //   let user = document.querySelector("#user");  //=this.element[0];
      //   let pass = document.querySelector("#pass");  //=this.element[1];
        

      //   console.log(user.value);
      //   console.log(pass.value);

      //   alert(`hii ${user.value}, your passworrd is set to ${pass.value} `);
      
      // } );



  /** More Events 1.change event, 2.Input event  */ 
  
  // let form = document.querySelector("form");

  // form.addEventListener("submit", function(event){
  //   event.preventDefault();

  // });


  // let user = document.querySelector("#user");

  // user.addEventListener("change", function() {
  //   console.log("change event");
  //   console.log("the username value is changed to "+this.value);
  // });

  //    // change event track only ending change


  // user.addEventListener("input", function(){
  //   console.log("input event");
  //   console.log("the username value is changed to " +this.value)
  // });



  //  // input event track every single input change printing every single text enterd in input box get written in <p> tag


  // let para = document.querySelector("p");

  // let inp = document.querySelector("#text");

  // inp.addEventListener("input", function() {
  //   console.log(this.value);
  //   para.innerText = this.value;
     
  // });