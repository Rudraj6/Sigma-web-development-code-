
  //** for learning event bubbling */
// let div = document.querySelector("div");

// let ul = document.querySelector("ul");

// let lis = document.querySelectorAll("li");


// div.addEventListener("click", function(){
//     console.log("div was cliked");
// });


// ul.addEventListener("click", function(event){
//     event.stopPropagation();
//     console.log("Ul was clicked");
// });

// lis.forEach( (li) => {
//     li.addEventListener("click", function(event){
//         event.stopPropagation();
//         console.log("li was clicked");
//     });
// });


    // /** Activity:- TO DO List */
    // let btn = document.querySelector("button"); // Add Task button
    // let inp = document.querySelector("input"); // Input field
    // let ul = document.querySelector("ul"); // Unordered list
    
    // btn.addEventListener("click", function () {
    //     if (inp.value.trim() === "") {
    //         alert("Please enter a task.");
    //         return; // Prevent adding empty tasks
    //     }
    
    //     // Create a new list item
    //     let item = document.createElement("li");
    //     item.innerText = inp.value;
    
    //     // Create a delete button for the task
    //     let delBtn = document.createElement("button"); // Create a new button element
    //     delBtn.innerText = "Delete";
    //     delBtn.classList.add("delete");
    
    //     // Append the delete button to the list item
    //     item.appendChild(delBtn);
    
    //     // Append the list item to the unordered list
    //     ul.appendChild(item);
    
    //     // Clear the input field
    //     inp.value = "";
    // });
    
    // // Event delegation for delete buttons
    // ul.addEventListener("click", function (event) {
    //     if (event.target.nodeName === "BUTTON" && event.target.classList.contains("delete")) {
    //         let listItem = event.target.parentElement; // Get the parent <li>
    //         listItem.remove(); // Remove the <li>
    //         console.log("Task deleted");
    //     }
    // });
    
  
   //function of deleting button

    // let delBtns = document.querySelectorAll(".delete");

    // delBtns.forEach( (delBtn) =>{
    //   delBtn.addEventListener("click", function(){
    //     let para = this.parentElement;
      
    //     para.remove();
    //   });
    // });


           //**SIMON GAME */
           
           

let gameseq = [];
let userseq = [];

let btns = ["yellow", "red", "purple", "green"];

let start = false;
let level = 0;

let h2 = document.querySelector("h2");


document.addEventListener("keypress", function(){
   if (start == false){
    console.log("game is started");
    start = true;

    levelup();
   };
}); 

function gameflash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
};

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 250);
};


function levelup() {
    level++;
    h2.innerText = "level "+level ;


    let RandomIdx = Math.floor(Math.random() * 3);
    let randColor = btns[RandomIdx];
    let randbtn = document.querySelector(`.${randColor}`);
 
   gameseq.push(randColor);
   console.log(gameseq);
    // Random btn choose
    gameflash(randbtn);
};

function checkAns() {

};


function btnpress() {

  let btn = this;
  userflash(btn);

  usercolor = btn.getAttribute("id");
  userseq.push(usercolor);
};

let allbtn = document.querySelectorAll(".btn");

allbtn.forEach((btn) =>{
    btn.addEventListener("click", btnpress);

});




