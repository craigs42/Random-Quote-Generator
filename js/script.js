/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote : 'hi',
    source: 'unknown',
    citation: 'unknown',
    year: 1975,
    tags: 'rock'
  },
  {
    quote : 'hi',
    source: 'unknown',
    citation: 'unknown',
    year: 1975,
    tags: 'rock'
  },
  {
    quote : 'hi',
    source: 'unknown',
    citation: 'unknown',
    year: 1975,
    tags: 'rock'
  },
  {
    quote : 'hi',
    source: 'unknown',
    citation: 'unknown',
    year: 1975,
    tags: 'rock'
  },
  {
    quote : 'hi',
    source: 'unknown',
    citation: 'unknown',
    year: 1975,
    tags: 'rock'
  }
];


/***
 * `getRandomQuote` function
***/
function getRandomQuote(){

}

function getRandomNum255(){
  const num = Math.floor(Math.random() * 255);
  console.log(num);
  return num;
}

/***
 * `printQuote` function
***/
function printQuote(){
  const body = document.querySelector('body');
  body.style.backgroundColor = `rgb(${getRandomNum255()},${getRandomNum255()},${getRandomNum255()})`;
}


/***
 * click event listener for the print quote button
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
