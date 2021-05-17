/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
//creating an array of objects
let quotes = [
  {
    quote: "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So, throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover.",
    source: "Mark Twain"
  },
  {
    quote: "I would rather die of passion than of boredom.",
    source: "Vincent van Gogh"
  },
  {
    quote: "True friends are always together in spirit",
    source: "L.M. Montgomery",
    citation: "Anne of Green Gables"
  },
  {
    quote: "Well done is better than well said.",
    source: "Benjamin Franklin",
    year: "1737"
  },
  {
    quote: "I’ve failed over and over and over again in my life and that is why I succeed.",
    source: "Michael Jordan"
  }
];

console.log(quotes);

/***
 * `getRandomQuote` function
***/
function getRandomQuote (){
  let randomNum = Math.floor(Math.random()*quotes.length); //random number generator
  let randomQuote = quotes[randomNum]; //store an object with random index from the array
  return randomQuote; //return variable
}


/***
 * `printQuote` function
***/

function printQuote (){
  let anyQuote = getRandomQuote(); //call of the getEandomQuote() function
  let stringPart = "<p class='quote'>" + anyQuote.quote + "</p> <p class='source'>" + anyQuote.source; //Create a variable that initiates HTML string with the first two <p></p> elements
  //check if citation property exists
  if(anyQuote.hasOwnProperty('citation')){
   stringPart += "<span class='citation'>" + anyQuote.citation + "</span>"; //concatenate a <span></span> element
  } 
  //check if year property exists
  if(anyQuote.hasOwnProperty('year')){
    stringPart += "<span class='year'>" + anyQuote.year + "</span>"; //concatenate a <span></span> element
  }

  let fullString = stringPart += "</p>"; //concatenate a closing <p> tag
  let quoteBox = document.getElementById("quote-box").innerHTML = fullString; //print the full quote on the page

}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);