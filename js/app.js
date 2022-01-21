'use strict';
// declaring global Variables at the top//;

let counter = 0;
let productArray = [];
let counterMax = 15;
let indexArray= [];
const myContainer=document.getElementById('images');


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
  while (indexArray.length < 6){
    let randomNumber = selectRandomProduct();
    if(!indexArray.includes(randomNumber)){
      indexArray.push(randomNumber);
    }
  }


  let product1 = indexArray.shift();
  let product2 = indexArray.shift();
  let product3 = indexArray.shift();

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
    renderChart();
  }
  renderProduct();
}



function renderChart(){
  let productNames =[];
  let productLikes =[];
  let productViews = [];
  for (let i = 0; i < productArray.length; i++) {
    productNames.push(productArray[i].name);
    productLikes.push(productArray[i].likes);
    productViews.push(productArray[i].views);
  }
  console.log(productNames);
  const data = {
    labels: productNames,
    datasets: [{
      label: 'Views',
      data: productViews,
      backgroundColor: [
        'rgba(255, 200, 200, 1)'
      ],
      borderColor: [
        'rgb(0, 159, 64)',
      ],
      borderWidth: 1
    },
    {
      label: 'Votes',
      data: productLikes,
      backgroundColor: [
        'rgba(255, 99, 0, 1)',
      ],
      borderColor: [
        'rgb(255, 99, 132)',
      ],
      borderWidth: 1
    }]
  };
  const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };
  const chart = document.getElementById('myChart');
  const myChart = new Chart(chart, config); // squiggly stays =(
}








renderProduct();
myContainer.addEventListener('click', handleClick);


