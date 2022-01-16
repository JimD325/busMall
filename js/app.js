'use strict';
// declaring global Variables at the top//;

let counter = 0;
let productArray = [];
let counterMax = 3;
const myContainer=document.getElementById('results');


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



console.log(productArray);
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
    console.log(randomProductArray);
  }
  randomProductArray.push(product2);
  // verify that product 3 isnt already in the array then add
  let product3= selectRandomProduct();
  while(randomProductArray.includes(product3)){
    product3= selectRandomProduct();
    console.log(product3);
  }
  randomProductArray.push(product3);

  console.log(randomProductArray);
}

renderProduct();



