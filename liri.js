require("dotenv").config();

require("moment").config();

var request = require("request");

var keys = require("keys.js").config();

var Spotify = require("node-spotify-api");

var input = process.argv[4];
var command = process.argv[3];


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

//spotify pieces
//not working

function getSpotify(input){
  spotify
    .search({ 
      type: 'track', 
      query: input }, 
      function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
      })
    .then(function(response){
      console.log(response);
    })

}

//movie pieces



//switch function based on commands
switch(command){
  case "spotify-this":
    getSpotify();
    break;
  case "concert-this":
    getConcert();
    break;
  case "movie-this":
    getMovie();
    break;
  case "do-what-it-says":
    getRandom();
    break;
  default:
    console.log("Sorry, I don't recognize that command.");
}