import {Ui} from "./ui.module.JS";
export class Home{
    constructor(){
        this.getMeal();
        this.ui = new Ui();
        this.details=document.getElementById("details");
        this.foods=document.getElementById("foods")
    }
    
   
    async  getMeal(){
    
        const api=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
        
        console.log(api)
        const respose= await api.json();
        console.log(respose)
        this.ui.display(respose.meals)
        
        document.querySelectorAll(".cards").forEach((card)=>{
            card.addEventListener('click',(e)=>{
                const mealId = e.currentTarget.id;
                console.log(e.currentTarget.id);
                const selectedMeal = respose.meals.find(meal => meal.idMeal === mealId);
                this.displaydetails(selectedMeal);
                // this.displaydetails(respose.meals)
           this.details.classList.remove("d-none");
           this.foods.classList.add("d-none");
      
            })
        })
        }

         displaydetails(element){
            console.log(element);
            let blackBox=""
            // for (let i = 0; i < arr.length; i++) {
            //    const element = arr[i];
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


