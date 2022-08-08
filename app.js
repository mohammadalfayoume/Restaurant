let allFood=[];

function Food(foodName,foodType,foodPrice) {
    this.foodName=foodName;
    this.foodType=foodType;
    this.foodPrice=foodPrice;

    allFood.push(this)
}

let count=999;

Food.prototype.render = function() {

    const foodId= function(){
    count++
    return count;    
    }
    
    let table= document.getElementsByTagName('table');

    let row=document.createElement('tr')
    table[0].appendChild(row)

    let id=document.createElement('td')
    id.textContent=foodId()

    let name=document.createElement('td')
    name.textContent=this.foodName

    let type=document.createElement('td')
    type.textContent=this.foodType

    let price=document.createElement('td')
    price.textContent=this.foodPrice

    row.append(id,name,type,price)    
}

let form=document.getElementsByTagName('form');
form[0]=addEventListener('submit',handleSubmit)

function handleSubmit(event) {
    event.preventDefault();
    let foodName= event.target.foodName.value;
    let options= event.target.foodOptions.value;
    let price= event.target.price.value;
    
    console.log(foodName,options,price);

    const addFood =new Food(foodName,options,price)
    addFood.render()
}