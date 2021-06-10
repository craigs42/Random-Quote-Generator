/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote : 'hi',
    source: 'unknown',
    citation: 'unknown',
    year: '1975',
    tags: 'rock'
  },
  {
    quote : 'hi',
    source: 'unknown',
    citation: 'unknown',
    year: '1975',
    tags: 'rock'
  },
  {
    quote : 'hi',
    source: 'unknown',
    citation: 'unknown',
    year: '1975',
    tags: 'rock'
  },
  {
    quote : 'hi',
    source: 'unknown',
    citation: 'unknown',
    year: '1975',
    tags: 'rock'
  },
  {
    quote : 'hi',
    source: 'unknown',
    citation: 'unknown',
    year: '1975',
    tags: 'rock'
  }
];


/***
 * `getRandomQuote` function
***/
function getRandomQuote(){
  return quotes[Math.floor(Math.random() * quotes.length)];
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
  const objQuote = getRandomQuote();
  if(objQuote.quote!==undefined) document.querySelector('.quote').textContent = objQuote.quote;
  if(objQuote.source!==undefined) document.querySelector('.source').textContent = objQuote.source;
  if(objQuote.year!==undefined) document.querySelector('.year').textContent = objQuote.year;
  if(objQuote.citation!==undefined) document.querySelector('.citation').textContent = objQuote.citation;
  if(objQuote.tags!==undefined) document.querySelector('.tags').textContent= objQuote.tags;
}


/***
 * click event listener for the print quote button
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
