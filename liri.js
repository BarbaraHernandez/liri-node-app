require("dotenv").config();

require("moment");

var request = require("request");

var keys = require("./keys");

var Spotify = require("node-spotify-api");

var spotify = new Spotify(keys.spotify);

var input = process.argv.slice(3).join(" ");
var command = process.argv[2];

console.log("argv" + process.argv);
console.log("slice" + process.argv.slice(3));
console.log("join" + input);

var fs = require("fs");



//command functions

//concert-this pieces
//not working

var Concert = function() {
  //API request
  this.getConcert = function(artist) {
    var bandURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    request(bandURL, function(err, response, body){
      var jsonConcert = JSON.parse(body);

      var momentDate = moment(jsonConcert.datetime).format(L);
      
      //contains data to print
      var concertData = [
        "Venue: " + jsonConcert.venue.name,
        "\nLocation: " + jsonConcert.venue.city + " " + jsonConcert.venue.region,
        "\nDate: " + momentDate
      ]
      
      //print 
      console.log(concertData);

    })

  }
  
}

var concert = new Concert();

//spotify pieces

// var artistArr = tracks[i].album.artists
//not working

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
        for (var i=0; i < 5; i++){
          console.log("Artist: " + tracks[i].artists);

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



//switch function based on commands
switch(command){
  case "spotify-this":
    getSpotify();
    break;
  case "concert-this":
    concert.getConcert();
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