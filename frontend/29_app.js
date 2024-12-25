     //***AXIOS */


     //code without AXIOS:- 
     
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
               
               
          //** Code after using AXIOS:-*/ 
    
          
    // let url = "https://catfact.ninja/fact";

    // let url2 = "https://dog.ceo/api/breeds/image/random";

    // let para1 = document.querySelector("#fact");

    // let img = document.querySelector("#img");

    // let btn1 = document.querySelector("#catFact");

    // let btn2 = document.querySelector("#dogImg");



   


    //    ///**FUNCTION FOR GETTING RANDOM FACTS */


    // async function getFacts() {
    
    //     try{
    //         let res = await axios.get(url);
    //         return res.data.fact;
    //     }
    //     catch(err){
    //       console.log("error is:-" +err);
    //       return "no fact found";
    //     }
    // }


    // btn1.addEventListener("click", async ()=>{

    //     let fact =  await getFacts() ;
     
    //     para1.innerHTML = fact ; 
 
    //  })


  
    //   ///**FUNCTION FOR GETTING RANDOM IMAGES OF DOGS */
    // async function getImg() {

    //     try {
    //         let res = await axios.get(url2);
    //          console.log("link is "+res.data.message);
    //         return res.data.message ;
    //     } catch (error) {
    //         console.log("error is:-" +error);
    //         return "could not find img" ;
    //     }
        
    // }

   

    //  btn2.addEventListener("click", async ()=>{
    //     let imgref = await getImg();

    //     img.src = imgref ;
        
    //  });


      //***USING SENDING HEADERS */

    
    //   const url = "https://icanhazdadjoke.com/";


    //   async function getJokes() {
    //     try {

    //         //adding header key pair:-
    //         const config = { headers: { Accept : "application/json" }  };


    //         //now the output will be in JSON format inseat of html format


    //         let res = await axios.get(url, config);  //here adding headers as 2nd arrguments 
    //         console.log(res.data);
            
    //     } catch (error) {
    //      console.log("error is:-" +error);
            
    //     }
    //   }


        //*** UPDATING QUERY STRING */

     
    let url = "http://universities.hipolabs.com/search?name=";

    let btn = document.querySelector("button");

   


    btn.addEventListener("click", async () =>{
        let country = document.querySelector("input").value;
        console.log(country);

        let colleges = await getcolleges(country);
       
        
        show(colleges);

    }) ;
    
   function show(colleges){
    let list = document.querySelector("#list");
     list.innerText = "";
    colleges.forEach(college => {
        console.log(college.name);

        let li = document.createElement("li");
        li.innerText = college.name;
        list.appendChild(li);
    });
   }



    async function getcolleges(country) {

        try{
           let res = await axios.get(url + country);

          return res.data ;
        }catch(err){
           console.log("error is:-" +err);
           return [];
        }
        
    }