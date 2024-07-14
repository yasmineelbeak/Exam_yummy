export class Ui{
    constructor(){}
      display(arr){
      console.log(arr);
      let blackBox=""
      for (let i = 0; i < arr.length; i++) {
         const element = arr[i];
         blackBox +=` <div class="col-md-3 allMeal cards" id=${element.idMeal}>
         <div><img src="${element.strMealThumb}" class="img-fluid" alt="food"></div>;
         <div class="bg-blue text-white"><h3>${element.strCategory}</h3></div>
       </div>`
     
      }
      document.querySelector("#food").innerHTML=blackBox
 }
}