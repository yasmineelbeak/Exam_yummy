import { Home } from "./home.module.js";
const home = new Home();


// async function getMeal(){
    
//      const api=await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
     
//      console.log(api)
//      const respose= await api.json();
//      console.log(respose)
//      display(respose.categories)
//      document.querySelectorAll(".allMeal").forEach((allMeal)=>{
//          allMeal.addEventListener('click',()=>{
//           document.getElementById("details").classList.remove("d-none");
//         document.getElementById("foods").classList.add("d-none");
//          })
//      })
//      }
//     function display(arr){
//           console.log(arr);
//           let blackBox=""
//           for (let i = 0; i < arr.length; i++) {
//              const element = arr[i];
//              blackBox +=` <div class="col-md-3 allMeal">
//              <div><img src="${element.strCategoryThumb}" class="img-fluid" alt="food"></div>;
//              <div class="bg-blue text-white"><h3>${element.strCategory}</h3></div>
//            </div>`
         
//           }
//           document.querySelector("#food").innerHTML=blackBox
//      }
// const areaBut=document.getElementById("area")

 
//   async function getFood(){
  
//      const api=await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    
//      console.log(api)
//      const respose= await api.json();
//      console.log(respose)
//      display(respose)
// }


//  function display(arr){
//       console.log(arr);
//       let blackBox=""
//       for (let i = 0; i < arr.length; i++) {
//          const element = arr[i];
//          blackBox +=` <div class="col-md-3">
//          <div><img src="${element.strCategoryThumb}" class="img-fluid" alt="food"></div>;
//          <div class="bg-blue text-white"><h3>${element.strCategory}</h3></div>
//        </div>`
     
//       }
//       document.querySelector("#food").innerHTML=blackBox
//  }


//  getFood()


 $(document).ready(function(){
  
 $(".color-switter .color-icon i").on("click",function(){
     console.log($(".color-switter").css("left"))
      const pos=$(".color-switter").css("left")
      if(pos=="0px"){
          $(".color-switter").animate({left:"-16rem"},1000) 
           $(".color-switter .color-icon i").addClass(" open-close-icon")
           $(".color-switter .color-icon i").removeClass(" fa-xmark") 
      }else{
      $(".color-switter").animate({left:"0rem"},1000)
      $(".color-switter .color-icon i").removeClass("  open-close-icon")
      $(".color-switter .color-icon i").addClass("fa-xmark") 
 }
 })

// links
// $(".color-switter #area").on("click",function(){
//      location.href="area.html"
// })
// $(".color-switter #search").on("click",function(){
//      // location.href="search.html"
//      document.querySelector("#food").innerHTML=`<div class="row pt-5">
//      <div class="col-md-6 ">
//          <input type="text" placeholder="Search By Name" id="nameSearch" class="bg-transparent text-white form-control ">
//      </div>
//      <div class="col-md-6">
//          <input type="text" placeholder="Search By First Letter" id="fristSearch" class="bg-transparent text-white form-control">
//      </div>

//  </div>`
//     const  nameSearch=document.getElementById("nameSearch")
//     const  fristSearch=document.getElementById("fristSearch")
//     searchByName(nameSearch.value)
//     searchByFLetter(fristSearch.value)

// })
// $(".color-switter #Categories").on("click",function(){
//      location.href="catogery.html"
// })
$(".catogyrys").hover(function(){
     $(".catogery-cap" ).animate({top:'0'},1000) ;},function(){
          $(".catogery-cap" ).animate({top:'100%'},1000) 
})
// searchN.addEventListeners("input",function(){
//    console.log("hello")
// })
$(".color-switter #Categories").on("click",async function(){
   console.log("hello");
     const api=await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    
     console.log(api)
     const respose= await api.json();
     console.log(respose)
     // displayArea(respose.meals)
     displayCatogery(respose.categories)
})

function displayCatogery(arr){
     console.log(arr);
     let blackBox=""
     for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        blackBox +=`
        <div class="col-md-3  cat-layer">
                <div onclick="getCategoryMeals('${element.strCategory}')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                    <img class="w-100" src="${element.strCategoryThumb}" alt="" srcset="">
                    <div class="meal-layer catogery-cap position-absolute text-center text-black p-2 z-3 ">
                        <h3>${element.strCategory}</h3>
                        <p>${element.strCategoryDescription.split(" ").slice(0,20).join(" ")}</p>
                    </div>
                </div>
        </div>
        `
     }

}

//area
// $(".color-switter #areaClick").on("click",function(){
//      console.log("hello")
// })

$(".color-switter #areaClick").on("click",async function(){
 
     const api=await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    
     console.log(api)
     const respose= await api.json();
     console.log(respose)
     displayArea(respose.meals)
})
//display cards area
function displayArea(arr){
     console.log(arr);
     let blackBox=""
     for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        blackBox += `<div class="col-md-3 text-white">
        <div onclick="getAreaMeals('${arr[i].strArea}')" class="rounded-2 text-center cursor-pointer">
                <i class="fa-solid fa-house-laptop fa-4x"></i>
                <h3>${arr[i].strArea}</h3>
        </div>
</div>`
    
     }
     document.querySelector("#food").innerHTML=blackBox
}
// //fetch Ingredients
// $(".color-switter #ingredients").on("click",async function(){
 
//      const api=await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    
//      console.log(api)
//      const respose= await api.json();
//      console.log(respose)
//      displayIngredient(respose.meals.slice(0, 20))
//      document.querySelectorAll(".cards").forEach((card) => {
//         card.addEventListener('click', (e) => {
//             const mealCategory = e.currentTarget.getAttribute('data-category');
//             detailsInter(mealCategory);
//         });
//     });
// })
// //display details of intergradient
// async function detailsInter(category){
    
//         console.log("hello");
//           const api=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
         
//           console.log(api)
//           const respose= await api.json();
//           console.log(respose)
//           // displayArea(respose.meals)
//          diplayMeals(respose.categories)
// }
// //display integradient
// function displayIngredient(arr){
//      console.log(arr);
//      let blackBox=""
//      for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         blackBox +=  `
//         <div class="col-md-3 text-white" data-category="${element.strCategory}">
//                 <div onclick="'${arr[i].strIngredient}" class="rounded-2 text-center cursor-pointer">
//                         <i class="fa-solid fa-drumstick-bite fa-4x"></i>
//                         <h3>${arr[i].strIngredient}</h3>
//                         <p>${arr[i].strDescription.split(" ").slice(0,20).join(" ")}</p>
//                 </div>
//         </div>`
    
//      }
//      document.querySelector("#food").innerHTML=blackBox
// }
$(".color-switter #ingredients").on("click", async function() {
    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
    const response = await api.json();
    displayIngredient(response.meals.slice(0, 20));

    document.querySelectorAll(".cards").forEach((card) => {
        card.addEventListener('click', (e) => {
            const mealIngredient = e.currentTarget.getAttribute('data-ingredient');
            detailsInter(mealIngredient);
        });
    });
});

// Display details of ingredient
async function detailsInter(ingredient) {
    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const response = await api.json();
    displayMeals(response.meals);
}

// Display ingredients
function displayIngredient(arr) {
    let blackBox = "";
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        blackBox += `
            <div class="col-md-3 text-white cards" data-ingredient="${element.strIngredient}">
                <div class="rounded-2 text-center cursor-pointer">
                    <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                    <h3>${element.strIngredient}</h3>
                    <p>${element.strDescription ? element.strDescription.split(" ").slice(0, 20).join(" ") : ''}</p>
                </div>
            </div>`;
    }
    document.querySelector("#food").innerHTML = blackBox;
}

// Display meals
function displayMeals(arr) {
    let blackBox = "";
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        blackBox += `
            <div class="col-md-3 text-white cards" data-ingredient="${element.strIngredient}">
                <div class="rounded-2 text-center cursor-pointer">
                    <img src="${element.strMealThumb}" class="img-fluid" alt="${element.strMeal}">
                    <h3>${element.strMeal}</h3>
                </div>
            </div>`;
    }
    document.querySelector("#food").innerHTML = blackBox;
}

// Ensure the event listeners are re-attached after displaying meals
document.querySelectorAll(".cards").forEach((card) => {
    card.addEventListener('click', (e) => {
        const mealIngredient = e.currentTarget.getAttribute('data-ingredient');
        detailsInter(mealIngredient);
    });
});
//meals
function diplayMeals(arr) {
     let cartona = "";
 
     for (let i = 0; i < arr.length; i++) {
         cartona += `
         <div class="col-md-3" data-category="${element.strCategory}">
                 <div onclick="getMealDetails('${arr[i].idMeal}')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                     <img class="w-100" src="${arr[i].strMealThumb}" alt="" srcset="">
                     <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
                         <h3>${arr[i].strMeal}</h3>
                     </div>
                 </div>
         </div>
         `
     }
 
     document.querySelector("#food").innerHTML = cartona
 }
 //area
 async function getAreaMeals(area){
 
     const api=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
    
     console.log(api)
     const respose= await api.json();
     console.log(respose)
     diplayMeals(respose.meals.slice(0, 20))
}
//catogery
async function getCategoryMeals(area){
 
     const api=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${category}`)
    
     console.log(api)
     const respose= await api.json();
     console.log(respose)
     displaycatogerycards(respose.meals.slice(0, 20))
     document.querySelectorAll(".cards").forEach((card) => {
        card.addEventListener('click', (e) => {
            const mealCategory = e.currentTarget.getAttribute('data-category');
            displaysamecatogeryall(mealCategory);
        });})
}
///ingredients
async function getIngredientsMeals(ingredients){
 
     const api=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${ingredients}`)
    
     console.log(api)
     const respose= await api.json();
     console.log(respose)
     diplayMeals(respose.meals.slice(0, 20))
     document.querySelectorAll(".cards").forEach((card) => {
        card.addEventListener('click', (e) => {
            const mealCategory = e.currentTarget.getAttribute('data-category');
            displaydetailsall(mealCategory);
        });
    });
     

//details card
    function displaydetailsall(element){
        console.log(element);
        let blackBox=""
        for (let i = 0; i < arr.length; i++) {
           const element = arr[i];
           blackBox +=`
            <div class="col-lg-3 p-5">
        <img src="${element.strMealThumb}" alt="" class="img-fluid">
        <h2>Corba</h2>
      </div>
    <div class="col-lg-9 px-4" id="${element.id}">
       <h3>${element.strCategory}</h3>
       <p>${element.strInstructions}</p>
       <h3>Area : <span> ${element.strArea}</span></h3>
       <h3>Category : <span> ${element.strCategory}</span></h3>
       <ul class="list-unstyled d-flex g-3 flex-wrap">
        <li class="alert alert-info m-2 p-1">${element.strIngredient1}</li>
        <li class="alert alert-info m-2 p-1">${element.strIngredient2}</li>
        <li class="alert alert-info m-2 p-1">${element.strIngredient3}</li>
        <li class="alert alert-info m-2 p-1">${element.strIngredient4}</li>
        <li class="alert alert-info m-2 p-1">${element.strIngredient5}</li>
        <li class="alert alert-info m-2 p-1">${element.strIngredient6}</li>
        <li class="alert alert-info m-2 p-1">${element.strIngredient7}</li>
        <li class="alert alert-info m-2 p-1">${element.strIngredient8}</li>
        <li class="alert alert-info m-2 p-1">${element.strIngredient9}</li>
        <li class="alert alert-info m-2 p-1">${element.strIngredient10}</li>
        <li class="alert alert-info m-2 p-1">${element.strIngredient11}</li>
        <li class="alert alert-info m-2 p-1">${element.strIngredient12}</li>
        <li class="alert alert-info m-2 p-1">${element.strIngredient13}</li>
    </ul>
       <h3>Tags :</h3>
          <ul class="list-unstyled d-flex g-3 flex-wrap">
                        
        <li class="alert alert-danger m-2 p-1">Soup</li>
                </ul>
      <a target="_blank" href="${element.strSource}" class="btn btn-success">Source</a>
      <a target="_blank" href="${element.strYoutube}" class="btn btn-danger">Youtube</a>
      </div>
           `
        }
       document.getElementById("details").innerHTML=blackBox
    }
    //  document.querySelectorAll(".cards").forEach((card)=>{
    //     card.addEventListener('click',(e)=>{
    //         const mealcat = e.currentTarget.strCategory;
    //     console.log(e.currentTarget.strCategory);
    //   const selectedMeal = respose.meals.find(meal => meal.strCategory ===  mealcat);
    //   displaysamecatogery(selectedMeal);
    //         // this.displaydetails(respose.meals)
    //     document.getElementById("details").classList.remove("d-none");
    //    document.getElementById("foods").classList.add("d-none");
  
    //     })
    // })
}

async function displaysamecatogeryall(category) {
    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    const response = await api.json();
    this.ui.display(response.meals.slice(0, 20));

    document.querySelectorAll(".cards").forEach((card) => {
        card.addEventListener('click', (e) => {
            const mealId = e.currentTarget.id;
            const selectedMeal = response.meals.find(meal => meal.idMeal === mealId);
            displaysamecatogery(selectedMeal);
        });
    });

    this.details.classList.remove("d-none");
    this.foods.classList.add("d-none");
}
function displaycatogerycards(arr){
    console.log(arr);
    let blackBox=""
    for (let i = 0; i < arr.length; i++) {
       const element = arr[i];
       blackBox +=` <div class="col-md-3 allMeal cards" id="${element.idMeal}" data-category="${element.strCategory}" >
       <div><img src="${element.strMealThumb}" class="img-fluid" alt="food"></div>;
       <div class="bg-blue text-white"><h3>${element.strCategory}</h3></div>
     </div>`
   
    }
    document.querySelector("#food").innerHTML=blackBox
}
function displaysamecatogery(element){
    console.log(element);
    let blackBox=""
    for (let i = 0; i < arr.length; i++) {
       const element = arr[i];
       blackBox +=`
        <div class="col-lg-3 p-5">
    <img src="${element.strMealThumb}" alt="" class="img-fluid">
    <h2>Corba</h2>
  </div>
  <div class="col-lg-9 px-4" id="${element.id}">
   <h3>${element.strCategory}</h3>
   <p>${element.strInstructions}</p>
   <h3>Area : <span> ${element.strArea}</span></h3>
   <h3>Category : <span> ${element.strCategory}</span></h3>
   <ul class="list-unstyled d-flex g-3 flex-wrap">
    <li class="alert alert-info m-2 p-1">${element.strIngredient1}</li>
    <li class="alert alert-info m-2 p-1">${element.strIngredient2}</li>
    <li class="alert alert-info m-2 p-1">${element.strIngredient3}</li>
    <li class="alert alert-info m-2 p-1">${element.strIngredient4}</li>
    <li class="alert alert-info m-2 p-1">${element.strIngredient5}</li>
    <li class="alert alert-info m-2 p-1">${element.strIngredient6}</li>
    <li class="alert alert-info m-2 p-1">${element.strIngredient7}</li>
    <li class="alert alert-info m-2 p-1">${element.strIngredient8}</li>
    <li class="alert alert-info m-2 p-1">${element.strIngredient9}</li>
    <li class="alert alert-info m-2 p-1">${element.strIngredient10}</li>
    <li class="alert alert-info m-2 p-1">${element.strIngredient11}</li>
    <li class="alert alert-info m-2 p-1">${element.strIngredient12}</li>
    <li class="alert alert-info m-2 p-1">${element.strIngredient13}</li>
</ul>
   <h3>Tags :</h3>
      <ul class="list-unstyled d-flex g-3 flex-wrap">
                    
    <li class="alert alert-danger m-2 p-1">Soup</li>
            </ul>
  <a target="_blank" href="${element.strSource}" class="btn btn-success">Source</a>
  <a target="_blank" href="${element.strYoutube}" class="btn btn-danger">Youtube</a>
  </div>
       `
    // }
   document.getElementById("details").innerHTML=blackBox
}
}
$(".color-switter #search").on("click",function showSearchInputs() {
     searchBox.innerHTML = `
     <div class="row py-4 ">
         <div class="col-md-6 ">
       
             <input id="nameSearch"  class="form-control bg-transparent text-white" type="text" placeholder="Search By Name">
         </div>
         <div class="col-md-6">
        
             <input  id="fristSearch" maxlength="1" class="form-control bg-transparent text-white" type="text" placeholder="Search By First Letter">
         </div>
     </div>`
 
     document.querySelector("#food").innerHTML = ""
     const  nameSearch=document.getElementById("nameSearch")
    const  fristSearch=document.getElementById("fristSearch")
    nameSearch.addEventListener("input",function(){
        console.log(nameSearch.value)
        searchByName(nameSearch.value)
    })
    fristSearch.addEventListener("input",function(){
        console.log(fristSearch.value)
        searchByFLetter(fristSearch.value)
    })
 })
document.querySelector("#food").innerHTML = ""

    
});
// // Get the search box element
let searchBox = document.getElementById("searchBox");

// Add event listener to search box
searchBox.addEventListener("input", function() {
    let searchTerm = searchBox.value.trim();
    searchByName(searchTerm);
});

// Function to search meals by name
async function searchByName(term) {
    document.querySelector("#food").innerHTML = "";
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`);
    console.log(response);
    response = await response.json();
    response.meals ? displayMeals(response.meals) : displayMeals([]);
}

// Function to display meals
function displayMeals(arr) {
    let blackBox = "";
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        blackBox += `
            <div class="col-md-3 text-white cards" data-id="${element.idMeal}">
                <div class="rounded-2 text-center cursor-pointer">
                    <img src="${element.strMealThumb}" class="img-fluid" alt="${element.strMeal}">
                    <h3>${element.strMeal}</h3>
                </div>
            </div>`;
    }
    document.querySelector("#food").innerHTML = blackBox;


async function searchByFLetter(term) {
    closeSideNav()
    rowData.innerHTML = ""
    $(".inner-loading-screen").fadeIn(300)

    term == "" ? term = "a" : "";
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${term}`)
    response = await response.json()

    response.meals ? displayMeals(response.meals) : displayMeals([])
    $(".inner-loading-screen").fadeOut(300)

}

    // Re-attach event listeners after displaying meals
    // document.querySelectorAll(".cards").forEach((card) => {
    //     card.addEventListener('click', (e) => {
    //         const mealId = e.currentTarget.getAttribute('data-id');
    //         getMealDetails(mealId);
    //     });
    // });
}

function showContacts() {
    document.querySelector("#food").innerHTML =""
     document.querySelector("#food").innerHTML = `<div class="contact min-vh-100 d-flex justify-content-center align-items-center">
     <div class="container w-75 text-center">
         <div class="row g-4">
             <div class="col-md-6">
                 <input id="nameInput" type="text" onkeyup="inputValidation()" class="form-control" placeholder="Enter Your Name">
                 <div id="nameAlert" class="alert alert-danger w-100 mt-2 d-none">
                     Special characters and numbers not allowed
                 </div>
             </div>
             <div class="col-md-6">
                 <input id="emailInput" onkeyup="inputValidation()" type="email" class="form-control " placeholder="Enter Your Email">
                 <div id="emailAlert" class="alert alert-danger w-100 mt-2 d-none">
                     Email not valid *exemple@yyy.zzz
                 </div>
             </div>
             <div class="col-md-6">
                 <input id="phoneInput" onkeyup="inputValidation()" type="text" class="form-control " placeholder="Enter Your Phone">
                 <div id="phoneAlert" class="alert alert-danger w-100 mt-2 d-none">
                     Enter valid Phone Number
                 </div>
             </div>
             <div class="col-md-6">
                 <input id="ageInput" onkeyup="inputValidation()" type="number" class="form-control " placeholder="Enter Your Age">
                 <div id="ageAlert" class="alert alert-danger w-100 mt-2 d-none">
                     Enter valid age
                 </div>
             </div>
             <div class="col-md-6">
                 <input  id="passwordInput" onclick="inputValidation()" type="password" class="form-control " placeholder="Enter Your Password">
                 <div id="passwordAlert" class="alert alert-danger w-100 mt-2 d-none">
                     Enter valid password *Minimum eight characters, at least one letter and one number:*
                 </div>
             </div>
             <div class="col-md-6">
                 <input  id="repasswordInput" onkeyup="inputValidation()" type="password" class="form-control " placeholder="Repassword">
                 <div id="repasswordAlert" class="alert alert-danger w-100 mt-2 d-none">
                     Enter valid repassword 
                 </div>
             </div>
         </div>
         <button id="submitBtn" disabled class="btn btn-outline-danger px-2 mt-3">Submit</button>
     </div>
 </div> `;
    const submitBtn = document.getElementById("submitBtn")
    const nameInput=document.getElementById("nameInput")
const emailInput=document.getElementById("emailInput")
const phoneInput=document.getElementById("phoneInput")
const ageInput=document.getElementById("ageInput")
const passwordInput=document.getElementById("passwordInput")
const repasswordInput=document.getElementById("repasswordInput")

nameInput.addEventListener("keyup", inputValidation);
emailInput.addEventListener("keyup", inputValidation);
phoneInput.addEventListener("keyup", inputValidation);
ageInput.addEventListener("keyup", inputValidation);
passwordInput.addEventListener("keyup", inputValidation);
repasswordInput.addEventListener("keyup", inputValidation);

} 



function nameValidation() {
     return (/^[a-zA-Z ]+$/.test(nameInput.value))
 }
 function emailValidation() {
     return (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailInput.value))
 }
 function phoneValidation() {
     return (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(phoneInput.value))
 }
 function ageValidation() {
     return (/^(1[01][0-9]|120|[1-9]?[0-9])$/.test(ageInput.value))
 }
 function passwordValidation(){
     return (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(passwordInput.value))
 }
 function repasswordValidation() {
     return (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(repasswordInput.value))
 }
 function inputValidation(){
     console.log("hello")
     if (nameValidation()) {
          document.getElementById("nameAlert").classList.replace("d-block", "d-none")

      } else {
          document.getElementById("nameAlert").classList.replace("d-none", "d-block")
      }
      if (emailValidation()) {
          document.getElementById("emailAlert").classList.replace("d-block", "d-none")
      } else {
          document.getElementById("emailAlert").classList.replace("d-none", "d-block")

      }
      if (phoneValidation()) {
          document.getElementById("phoneAlert").classList.replace("d-block", "d-none")
      } else {
          document.getElementById("phoneAlert").classList.replace("d-none", "d-block")

      }
      if (ageValidation()) {
          document.getElementById("ageAlert").classList.replace("d-block", "d-none")
      } else {
          document.getElementById("ageAlert").classList.replace("d-none", "d-block")

      }
      if (passwordValidation()) {
          document.getElementById("passwordAlert").classList.replace("d-block", "d-none")
      } else {
          document.getElementById("passwordAlert").classList.replace("d-none", "d-block")

      }
      if (repasswordValidation()) {
          document.getElementById("repasswordAlert").classList.replace("d-block", "d-none")
      } else {
          document.getElementById("repasswordAlert").classList.replace("d-none", "d-block")

      }
      if (nameValidation() &&
        emailValidation() &&
        phoneValidation() &&
        ageValidation() &&
        passwordValidation() &&
        repasswordValidation()) {
        submitBtn.removeAttribute("disabled")
    } else {
        submitBtn.setAttribute("disabled", true)
    }
 }
 $(".color-switter #contact").on("click",async function(){
     showContacts()
    })
//area
// async function getArea(){
//      let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
//     response = await respone.json()
//     console.log(response.meals);

//     displayArea(response.meals)
// }
// const area=document.getElementById("area")
// function displayArea(arr){
//      let cartona=""
//      for (let i = 0; i < arr.length; i++) {
//           cartona += `
//           <div class="col-md-3">
//                   <div onclick="getAreaMeals('${arr[i].strArea}')" class="rounded-2 text-center cursor-pointer">
//                           <i class="fa-solid fa-house-laptop fa-4x"></i>
//                           <h3>${arr[i].strArea}</h3>
//                   </div>
//           </div>`
// }
//    document.getElementById("area").innerHtml= cartona;
//    area.addEventListener("click", function(){
//      getArea()
//   })
// }
//////////////////////////////////////
// catogory

// $(".color-switter #Categories").on("click",async function(){
 
//      const api=await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    
//      console.log(api)
//      const respose= await api.json();
//      console.log(respose)
//      displayArea(respose.meals)
// })

// function displayCatogery(arr){
//      console.log(arr);
//      let blackBox=""
//      for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         blackBox +=`
//         <div class="col-md-3">
//                 <div onclick="getCategoryMeals('${arr[i].strCategory}')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
//                     <img class="w-100" src="${arr[i].strCategoryThumb}" alt="" srcset="">
//                     <div class="meal-layer position-absolute text-center text-black p-2">
//                         <h3>${arr[i].strCategory}</h3>
//                         <p>${arr[i].strCategoryDescription.split(" ").slice(0,20).join(" ")}</p>
//                     </div>
//                 </div>
//         </div>
//         `
    
//      }
//      document.querySelector("#food").innerHTML=blackBox
// }
// //area
// // $(".color-switter #areaClick").on("click",function(){
// //      console.log("hello")
// // })
// $(".color-switter #areaClick").on("click",async function(){
 
//      const api=await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    
//      console.log(api)
//      const respose= await api.json();
//      console.log(respose)
//      displayArea(respose.meals)
// })

// function displayArea(arr){
//      console.log(arr);
//      let blackBox=""
//      for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         blackBox += `<div class="col-md-3 text-white">
//         <div onclick="getAreaMeals('${arr[i].strArea}')" class="rounded-2 text-center cursor-pointer">
//                 <i class="fa-solid fa-house-laptop fa-4x"></i>
//                 <h3>${arr[i].strArea}</h3>
//         </div>
// </div>`
    
//      }
//      document.querySelector("#food").innerHTML=blackBox
// }
// //Ingredients
// $(".color-switter #ingredients").on("click",async function(){
 
//      const api=await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    
//      console.log(api)
//      const respose= await api.json();
//      console.log(respose)
//      displayIngredient(respose.meals.slice(0, 20))
// })

// function displayIngredient(arr){
//      console.log(arr);
//      let blackBox=""
//      for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         blackBox +=  `
//         <div class="col-md-3 text-white">
//                 <div onclick="getIngredientsMeals('${arr[i].strIngredient}')" class="rounded-2 text-center cursor-pointer">
//                         <i class="fa-solid fa-drumstick-bite fa-4x"></i>
//                         <h3>${arr[i].strIngredient}</h3>
//                         <p>${arr[i].strDescription.split(" ").slice(0,20).join(" ")}</p>
//                 </div>
//         </div>`
    
//      }
//      document.querySelector("#food").innerHTML=blackBox
// }