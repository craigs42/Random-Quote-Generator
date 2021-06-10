/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote : 'To the moon!',
    source: 'Original Author Cannot Be Identified',
    citation: 'Reddit',
    year: '2021',
    tags: ''
  },
  {
    quote : 'A long long time ago, I can still remember how that music, used to make me smile...',
    source: 'Don Mclean',
    citation: 'American Pie',
    year: '1971',
    tags: ''
  },
  {
    quote : 'Never go full ret*rd.',
    source: 'Robert Downey Jr.',
    citation: 'Tropic Thunder',
    year: '2008',
    tags: 'Movie'
  },
  {
    quote : 'ENGLISH MUTHA***A, DO YOU SPEAK IT?',
    source: 'Samuel L. Jackson',
    citation: 'Pulp Fiction',
    year: '1994',
    tags: 'Movie'
  },
  {
    quote : `If I were a rich man, daidle deedle daidle daidle daidle deedle daidle dum, All day long I'd biddy-biddy-bum...`,
    source: 'Tevye',
    citation: 'Fiddler on the Roof',
    year: '1971',
    tags: 'Musical'
  }
];


/***
 * `getRandomQuote` function
 * Returns a random quote. Random number based on length of quotes array
***/
function getRandomQuote(){
  return quotes[Math.floor(Math.random() * quotes.length)];
}

/***
 * `getRandomNum256` function
 * returns a number 0-255
 ***/
function getRandomNum256(){
  return Math.floor(Math.random() * 256);
}

/***
 * `printQuote` function
 * Calls for a new color with each new call to printQuote
 * Checks each property to see if it has a value before adding it to the string
***/
function printQuote(){
  const body = document.querySelector('body');
  body.style.backgroundColor = `rgb(${getRandomNum256()},${getRandomNum256()},${getRandomNum256()})`;
  const objQuote = getRandomQuote();
  let citationString = ``;
  if(objQuote.quote) document.querySelector('.quote').textContent = objQuote.quote;
  if(objQuote.source) citationString += `${objQuote.source} `;
  if(objQuote.citation) citationString +=`<span class='citation'>${objQuote.citation}</span> `;
  if(objQuote.year) citationString +=`<span class='year'>${objQuote.year}</span> `;
  if(objQuote.tags) citationString +=objQuote.tags;
  document.querySelector('.source').innerHTML = citationString;
  }


/***
 * click event listener for the print quote button
***/
setInterval(printQuote, 7000);
document.getElementById('load-quote').addEventListener("click", printQuote, false);
