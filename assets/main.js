
const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);
function displayQuote() {
  let number = Math.floor(Math.random()*quotes.length);
quoteAuthor.innerHTML= quotes[number].name;
quote.innerHTML= quotes[number].quote;  
}


let counter = document.querySelector('.counter');
const addCont = document.querySelector('#addCountBtn');
const lowerCont = document.querySelector('#lowerCountBtn');

let count = 0;

addCont.addEventListener('click', incrementCounter);
lowerCont.addEventListener('click', decrementCounter);

function incrementCounter(){
  count++;
  counter.innerHTML= count;
  if(counter.innerHTML>'0'){
    counter.style.color='blue'
  }
 else if(counter.innerHTML ==='0'){
    counter.style.color='grey'
  }
 counter.animate([{opacity:'0.2'},{opacity: '1.2'}], {duration: 500, fill: 'forwards'}) 
}
function decrementCounter(){
  count--;
  counter.innerHTML= count;
  if(counter.innerHTML<'0'){
    counter.style.color='red'
  }
 else if(counter.innerHTML ==='0'){
    counter.style.color='grey'
  }
  counter.animate([{opacity:'0.2'},{opacity: '1.2'}], {duration: 300, fill: 'forwards'}) 
}