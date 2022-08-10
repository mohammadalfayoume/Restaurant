'use strict'
let allFood = [];
let count = 1000;

function Food(foodId, foodName, foodType, foodPrice) {
  this.foodId = count++;
  this.foodName = foodName;
  this.foodType = foodType;
  this.foodPrice = foodPrice;

  allFood.push(this);
}

Food.prototype.render = function () {
  let table = document.getElementsByTagName("table");

  let row = document.createElement("tr");
  table[0].appendChild(row);

  let id = document.createElement("td");
  id.textContent = this.foodId;

  let name = document.createElement("td");
  name.textContent = this.foodName;

  let type = document.createElement("td");
  type.textContent = this.foodType;

  let price = document.createElement("td");
  price.textContent = this.foodPrice;

  row.append(id, name, type, price);
};

function saveData(data) {
  let stringObject = JSON.stringify(data);
  localStorage.setItem("foods", stringObject);
}

function getData() {
  let retarveData = localStorage.getItem("foods"); //string data in LS
  let arrData = JSON.parse(retarveData); //object data in LS

  if (arrData !== null) {
    for (let i = 0; i < arrData.length; i++) {
      new Food(
        arrData[i].foodId,
        arrData[i].foodName,
        arrData[i].foodType,
        arrData[i].foodPrice
      );
      allFood[i].render();
    }
  }
}
getData();
