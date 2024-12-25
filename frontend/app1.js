// // let students = [
// //     {
// //         name: "Rudra",
// //         Marks: 80,
// //     },

// //     {
// //         name: "Rohan",
// //         Marks: 90,
// //     },

// //     {
// //         name: "Rahul",
// //         Marks: 95,
// //     },
// // ];

// // let Gpa = students.map(function(el){
// //     return (el.Marks) / 10;
// // })

// // let gpa = students.map((el) => {
// //     return (el.Marks) / 10;
// // });

// // console.log(students, gpa);


// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let num1 = [3, 9, 6, 12];

// let even = num.filter(function(el){
//     return el % 2 ==0;
// });

// let odd = num.filter((el) => {
//     return el % 3 ==0;
// });

// let checkalleven = num.every( (el) => {
//     return (el % 2 == 0);
// });

// let checkallodd = num1.every((el) =>{
//     return (el %3 == 0);
// });

// let Checkallodd = num1.every(function(el){
//     return (el % 3 == 0);
// });

// let check_some = num.some(function(a) {
//     return (a % 2)==0;
// });

// let num = [ 1, 2, 3, 4, 5];

// let sum = num.reduce(function(red, el){
//     console.log(red);
//     return red + el;
// });


// let reduce = num.reduce((red,el) => {
//     return red + el;
// });

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

// let max = num.reduce(function(max, el){
//     if(el > max){
//         return el;
//     }
//     else{
//         return max;
//     }
// });


// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let div10 = num.every((el) => {
//     return (el % 1 == 0);
// });


// console.log(div10);


// let min = num.reduce(function(min, el){
//     if(el < min){
//         return el;
//     }
//     else{
//         return min;
//     }
// });

// console.log(min);


// const data = {
//     email: "M7lFt@example.com",
//     password: "123456",
//     name: "Rudra",
//     age: 20
// };

// const datacopy = {...data, id:1234 };

let arr = [1, 2,4 ];

const square = arr.map((num) => num* num);

console.log(square);

let sum = square.reduce((acc, cur) => {
   return acc + cur
});

let avg = sum / arr.length;

console.log("The Average is " +avg);

let newarr = arr.map((el) => {
   return el+5
});

console.log("The new array with +5 is " +newarr);

let wordarr = ["abhishek"];

let uppercase_arr = wordarr.map((wordarr) => {
  return  wordarr.toUpperCase()
});

