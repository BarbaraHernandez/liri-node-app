require("dotenv").config();

var request = require("request");

var keys = require("keys.js").config();

var spotify = require("node-spotify-api");

var input = process.argv[4];


//movies

//request data
// example
// request('http://www.google.com', function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });

//console



var fs = require("fs");
//require packages
//--movie this: omdb


//functions
//concert-this -- all pieces
//API query
var bandsURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

function bandQuery(artist) = request(bandsURL, function(error, response){
  if(error){
    console.log("error: " + error);
  }else{
    var bandResponse = response.stringify;
  }
})

//concert object
function ConcertInfo (bandResponse){
    console.log(bandResponse);
}

function getConcert (input){
  var artist = input;
  //get info
  bandQuery();
  //output
  console.log(concert);
}

getConcert();

//spotify pieces

function getSpotify(song){
  if(song === undefined || song === " "){
    song === 'The Sign'
  };

  spotify.search();
}


//movie pieces



//switch function based on commands

//concert-this

//spotify-this-song

//movie-this

//do-what-it-says