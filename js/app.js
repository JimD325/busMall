'use strict';
// declaring global Variables at the top//;

let counter = 0;
let productArray = [];
let counterMax = 3;
const myContainer=document.getElementById('images');
const resultsButton = document.querySelector('section');

let image1=document.querySelector('div img:first-child');
let image2=document.querySelector('div img:nth-child(2)');
let image3=document.querySelector('div img:nth-child(3)');


function Product (name, filetype = 'jpg'){
  this.likes = 0;
  this.views=0;
  this.name=name;
  this.src = `img/${name}.${filetype}`;
  productArray.push(this);
}


new Product ('bag');
new Product ('banana');
new Product ('bathroom');
new Product ('boots');
new Product ('breakfast');
new Product ('bubblegum');
new Product ('chair');
new Product ('cthulhu');
new Product ('dog-duck');
new Product ('dragon');
new Product ('pen');
new Product ('pet-sweep');
new Product ('scissors');
new Product ('shark');
new Product ('sweep','png');
new Product ('tauntaun');
new Product ('unicorn');
new Product ('water-can');
new Product ('wine-glass');



function selectRandomProduct(){
  return Math.floor(Math.random() * productArray.length);
}

function renderProduct (){

  // create randomized products and put them in an array.
  let randomProductArray = [];
  let product1= selectRandomProduct();
  randomProductArray.push(product1);
  let product2= selectRandomProduct();
  // verify that product 1 isnt the same as product 2 then add
  while (product1===product2){
    product2=selectRandomProduct();

  }
  randomProductArray.push(product2);
  // verify that product 3 isnt already in the array then add
  let product3= selectRandomProduct();

  while(randomProductArray.includes(product3)){
    product3= selectRandomProduct();
  }
  randomProductArray.push(product3);

  image1.src=productArray[product1].src;
  image1.alt=productArray[product1].name;
  image2.src=productArray[product2].src;
  image3.src=productArray[product3].src;
  image2.alt=productArray[product2].name;
  image3.alt=productArray[product3].name;
  productArray[product1].views++;
  productArray[product2].views++;
  productArray[product3].views++;
}

function handleClick(event){

  counter++;
  let productClicked = event.target.alt;
  for (let i =0; i <productArray.length; i++){
    if (productClicked===productArray[i].name){
      productArray[i].likes++;
      break;
    }
  }
  if (counter === counterMax){
    myContainer.removeEventListener('click',handleClick);
    resultsButton.className = 'clicks-allowed';
    resultsButton.addEventListener('click',handleButtonClick);
  }
  renderProduct();
}



function renderResults (){
  for (let i=0; i < productArray.length; i++) {
    let message = `${productArray[i].name} had ${productArray[i].views} views and was clicked on ${productArray[i].likes} times`;

    let p =document.createElement('p');
    p.textContent=message;
    console.log(message);
    resultsButton.appendChild(p);
  }
}

function handleButtonClick(){
  if (counter === counterMax){
    renderResults();
  }
}





renderProduct();
myContainer.addEventListener('click', handleClick);


