let allFood = [];
let count = 999;

function Food(foodId, foodName, foodType, foodPrice) {
  this.foodId = count++;
  this.foodName = foodName;
  this.foodType = foodType;
  this.foodPrice = foodPrice;

  allFood.push(this);
}

// Food.prototype.render = function() {

//     let table= document.getElementsByTagName('table');

//     let row=document.createElement('tr')
//     table[0].appendChild(row)

//     let id=document.createElement('td')
//     id.textContent=this.foodId()

//     let name=document.createElement('td')
//     name.textContent=this.foodName

//     let type=document.createElement('td')
//     type.textContent=this.foodType

//     let price=document.createElement('td')
//     price.textContent=this.foodPrice

//     row.append(id,name,type,price)

// }

let form = document.getElementsByTagName("form");
form[0] = addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  let id = event.target.foodId.value;
  let foodName = event.target.foodName.value;
  let options = event.target.foodOptions.value;
  let price = event.target.price.value;

  const addFood = new Food(id, foodName, options, price);

  // addFood.render()

  //save new food in local storage
  saveData(allFood);
}

function saveData(data) {
  let stringObject = JSON.stringify(data);
  localStorage.setItem("foods", stringObject);
}
// function getData(){

//     let retarveData =localStorage.getItem('foods') //string data in LS
//     let arrData=JSON.parse(retarveData) //array data in LS

//     if (arrData !== null){
//         for (let i = 0; i < arrData.length; i++) {
//             new Food(arrData[i].foodName,arrData[i].foodType,arrData[i].foodPrice)
//             allFood[i].render()
//         }
//     }
// }
// getData()
