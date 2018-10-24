require("dotenv").config();

var moment = require("moment");

var request = require("request");

var keys = require("./keys");

var Spotify = require("node-spotify-api");

var spotify = new Spotify(keys.spotify);

var input = process.argv.slice(3).join(" ");
var command = process.argv[2];
var fs = require("fs");



//command functions

//concert-this pieces

function getConcert() {

    var bandURL = "https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp";

    request(bandURL, function(err, response, body){
      
      var jsonConcert = JSON.parse(body);
      
      if (!jsonConcert || jsonConcert.length == 0){
        console.log("sorry, no results");
      }

      for (var i=0; i < jsonConcert.length; i++){    
        var momentDate = moment(jsonConcert[i].datetime).format("MM/DD/YYYY");
        
        //contains data to print
        var concertData = (
          "Venue: " + jsonConcert[i].venue.name +
          "\nLocation: " + jsonConcert[i].venue.city + " " + jsonConcert[i].venue.region +
          "\nDate: " + momentDate +
          "\n-------------"
        )
        
        //print 
        console.log(concertData);
      }

    })

}
  

//spotify pieces

function getSpotify(){
  console.log("input: " + input);
  spotify
    .search({ 
      type: 'track', 
      query: input }, 
      function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
        var tracks = data.tracks.items;
        // var artistArr = tracks[i].album.artists
        for (var i=0; i < 5; i++){
          console.log("Artist: " + tracks[i].artists);//struggled with this

          //not working
          // for (var x=0; x < artistArr.length; x++) {
          //   console.log(artistArr[x] + ", ");
          // }
          console.log("song: " + tracks[i].name);
          console.log("Preview URL: " + tracks[i].preview_url);
          console.log("Album: " + tracks[i].album.name);
          console.log("---------------");
        }
      });


}

//movie pieces
//not able to get data from JSON here
function getMovie() {
  input = process.argv.slice(3).join("+");
  var movieURL = "http://www.omdbapi.com/?apikey=trilogy&t=" + input;

  request(movieURL, function(err, response, body){
    
    var jsonMovie = JSON.parse(body);
    
    if (!jsonMovie || jsonMovie.length == 0){
      console.log("sorry, no results");
    }

  
    var movieData = (
      "Title: " + jsonMovie.Title +
      "\nRelease: " + jsonMovie.Year +
      "\nRating: " + jsonMovie.Rated +
      //this was inside of an array and I wasn't sure how to get it
      // "\nRotten Tomatoes Score: " + jsonMovie.Ratings.Source.RottenTomatoes.Value +
      "\nCountry: " + jsonMovie.Country +
      "\nLangugage: " + jsonMovie.Language + 
      "\nActors: " + jsonMovie.Actors +
      "\nPlot: " + jsonMovie.Plot 
    );
      
    //print 
    console.log(movieData);
    

  })

}

//random

function getRandom(){
  fs.readfile(random.txt);
}


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