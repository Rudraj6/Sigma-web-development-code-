//**selecting element using by GET

// let smallimg = document.getElementsByClassName("oldImg");

// for(let i =0; i < smallimg.length; i++){
//     smallimg[i].src= "assets/spiderman_img.png";
//     console.log("The value of image " +i +" is chnaged ");

//     };


//********** Selecting element by Query*/


// console.dir(document.querySelector("h1"));


// console.dir(document.querySelector("#description"));

// console.dir(document.querySelector(".oldImg"));

//console.dir(document.querySelectorAll("p"));

//let para = document.querySelector("p");


        //**/ DOM manipulation */

        // changing attribute value

// let img = document.querySelector("img");

          // console.log(img);

// console.log("the id of an image is " +img.getAttribute("id"));

// console.log(`the value of id is  ${img.getAttribute("id")}`);

// console.log(`the value after changing id ${img.setAttribute("id", "spideman")}`);

// console.log(img.setAttribute("id", "spidermain"));

// console.log(`the value of id is  ${img.getAttribute("id")}`);

// img.setAttribute("src", "assets/creation_1.png");
   

        /***changing style property */

// let headding = document.querySelector("h1");


// headding.style.color = "green";

// let linl = document.querySelectorAll(".box a");

// for(let i=0; i<list.length; i++){
//     link[i].style.color = "red";  //inline style
// }

         /**changing classlist property */

// let image = document.querySelector("img");


// console.log(image.classList);

// let heading = document.querySelector("h1");

// console.log(heading.classList);

// heading.classList.add("hx");

// console.log(heading.classList);

         //**** toggle classlist property        */ 

// let box = document.querySelector(".box");

// box.classList.add("changebox"); // adding class & changing colour

//  box.classList.toggle("changebox"); // removing class & previous colour back

         //***** NaviGATION */

// let heading = document.querySelector("h4");

// console.log(heading.parentElement); //navigating parents

// console.log(heading.children);

// let box = document.querySelector("div");

// console.log(box.children);   // navigating children

// console.log(box.childElementCount);  //navigating children count

// let ul = document.querySelector("ul");

// console.log(ul);

// console.log(ul.children);

// console.log(ul.children[2].previousElementSibling); // previous element sibling

// console.log(ul.children[2].nextElementSibling); //next element sibling

// // chaning heading with the help of previous element sibling "img"

// let image = document.querySelector("img");

// image.previousElementSibling.style.color="red";


    /*** Adding elemements  */


//     let para = document.createElement("p");

// para.innerText = "hello";

// console.log(para);

//     //** inserting element  */

//     let body = document.querySelector("body");

//     body.appendChild(para);

//     //*** inserting element(p) in box */

//     let box = document.querySelector(".box");  //creating the element 

//     box.appendChild(para);                ///inserting the element


//     /**  inserting a button in box */

//     let btn = document.createElement("button");

//     let about = document.querySelector("h2")

//     btn.innerText = "Click me";             //creating the element 

//     about.appendChild(btn);                   //inserting the element
  
//     btn.style.color ="red";


//     //** inserting new text on about section */


//     let text =document.querySelector("p");

//     text.innerText ="Hello everyone";

//     text.appendChild("text");

//     console.log(text);


//     text.append("this is new text"); // new append text]

//     console.log(text);



// let body = document.querySelector("body");

// let p = document.querySelector("p");

// let btn = "<button>New button</button>"

// body.remove();

///** pracice Question */

 // Q1. WAP JS progam for a <p> with redtext that says "hey I'm red!" 

// let para1  = document.createElement("p");  // creating an element p and considering it as para1

// para1.innerText="hey I'm red!" ;          // Adding innertext[which will display on screen]- "hey I'm red!" 

// document.querySelector("body").append(para1);  //now inserting it with the help of append on body


// para1.classList.add("red");                  //now creating class red where in red class red text styling is there

// // Q2. WAP JS program for an <h3> with blue text that says "I'm a blue h3!" 


// let headding3 = document.createElement("h3");  //creating an element h3 and considering it as headding3

// headding3.innerText= "I'm a blue h3!";       //Adding innertext[the text which will display on screen]- "I'm a blue h3!" 

// document.querySelector("body").append(headding3);  //now inserting it with the help of append on body

// headding3.classList.add("blue");             // now creating a class of blue where color is blue


// // Q3. WAP JS  a <div> with black border and pink background color with the following element inside of it:-
//   // A. another <h1> that says I'm in a div"
//   // B. a <p> that says "ME TOO!" 


//   let div = document.createElement("div");


//   let headding1 = document.createElement("h1");

//   let para2= document.createElement("p"); 

//   headding1.innerText = "I'm in a div"; 

//   para2.innerText = "me TOO!!";

// div.append(headding1);

// div.append(para2);

// div.classList.add("box");

// document.querySelector("body").append(div);


let input = document.createElement("newinput");

let button = document.createElement("button");

button.innerText= "Click me";


document.querySelector("body").append("input");

document.querySelector("body").prepend("button");



input.setAttribute("placeholder", "username");

button.setAttribute("id", "btn");


let btn = document.querySelector("#btn");

btn.classList.add("butnstyle");


let h1 = document.createElement("h1");
 
h1.inner= "DOM Practice";

