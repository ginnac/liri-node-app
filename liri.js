//require use to call packages...
//read and set any environment variables
require("dotenv").config();

//required to import the keys.js file
var keys = require("./keys.js");

//required to import spotify npm 
var Spotify = require('node-spotify-api');

//required to import axios npm
var axios = require('axios');

//required to import the fs read and write package
var fs = require('fs');

//required to import moment npm 
var moment = require('moment');

//then access your keys information
var spotify = new Spotify(keys.spotify);


// Make it so liri.js can take in one of the following commands:
// concert-this-------------------------------

// node liri.js concert-this <artist/band name here>.......
 // This will search the Bands in Town Artist Events API 
 //("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp") for
 // an artist and render the following information about each event to the terminal:
var getConcert = function(artist){
    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
axios.get(queryURL)
  .then(function (response) {
    // handle success
    var data = response.data; 
    console.log ("\n------------------------------------------------------\n There is " + data.length + " concerts coming up! \n");
    //lets print every result inside data array....
    for (var concertResponses = 0; concertResponses < data.length; concertResponses ++ ){
    var venue = data[concertResponses].venue;
    // Name of the venue
    var venueName = venue.name;
    // Venue location
    var venueLocation = venue.city + ", " +  venue.region + ", " + venue.country; 
    // Date of the Event (use moment to format this as "MM/DD/YYYY")
    var venueTime = data[concertResponses].datetime;
    var venueMoment = moment(venueTime).format("MM/DD/YYYY");
    console.log("Venue: " + venueName + "\n Location: " + venueLocation + "\n Time: " + venueMoment + ". \n" );
    }

    console.log("\n---------------------------------------------------------\n")
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}

//used to test the getConcert function...
//getConcert (process.argv.slice(2).join(" "));
   
//-----------------------------------------------------------------------------------------------------------------------------------

// spotify-this-song
    // node liri.js spotify-this-song '<song name here>' ------------------------------------------------------
    // This will show the following information about the song in your terminal/bash window
    var spotifyASong = function(nameOfTheSong){
            //If no song is provided then your program will default to "The Sign" by Ace of Base.
        if(nameOfTheSong === undefined || nameOfTheSong ===" "){
            nameOfTheSong = "the sign";
        }
     spotify.search({ type: 'track', query: nameOfTheSong })
    .then(function(response) {
    
        var items = response.tracks.items;
        var artistsArray=[];
        //If no song is provided then your program will default to "The Sign" by Ace of Base.

        //items is an array, let's get all values in items array
        for(var i=0; i<items.length; i++){
            
            //getting the list of artists..
            var artists = response.tracks.items[i].artists;
            for(var x=0;x<artists.length;x++){
                artistsArray.push(artists[x].name);
            }
            //the artistList array should be an string so we can console the list...
            var artistsList=artistsArray.slice(0).join(", ")
            // console logging the: Artist(s), The song's name, A preview link of the song from Spotify, The album that the song is from,
            console.log( "\n\nArtist(s): " + artistsList + "\nSong: " + response.tracks.items[i].name + 
            "\nLink: " + response.tracks.items[i].external_urls.spotify + 
            "\nAlbum: " + response.tracks.items[i].album.name + "\n" );
            
            //emptying array so we can use it in next item from items array...
            artistsArray = [];
        }
    })
    .catch(function(err) {
      console.log(err);
    });

}
//getting terminal argument... testing spotify function
//spotifyASong(process.argv.slice(2).join(" "));

        






// movie-this
    // This will output the following information to your terminal/bash window:
    //You'll use the axios package to retrieve data from the OMDB API. Like all of the in-class activities, the OMDB API requires an API key.
    // You may use trilogy.
    var movieThis = function(movieTitle){
    // If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
        if (movieTitle === undefined || movieTitle === ""){
            movieTitle = "Mr Nobody";
        }
        var queryURL = "http://omdbapi.com/?apikey=trilogy&t=" + movieTitle + "&y=&plot=full&r=json&tomatoes=true";
    axios.get(queryURL)
      .then(function (response) {
        // handle success
        var data = response.data; 

        // * Title of the movie, Year the movie came out, IMDB Rating of the movie, Rotten Tomatoes Rating of the movie,
        //Country where the movie was produced, Language of the movie, Plot of the movie, Actors in the movie:
        console.log("\n\nMovie Title: " + data.Title + "\nYear: " + data.Year + "\nRating: " + data.imdbRating + " \nRotten Tomatoes Rating:" +
        data.tomatoeRating + "\nCountry: " + data.Country + "\nLanguage: " + data.Language + "\nPlot: " + data.Plot + "\nActors: " +
        data.Actors + "\n");
        
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    }

    movieThis(process.argv.slice(2).join(" "));

// do-what-it-says

    // Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.


    // It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
    // Edit the text in random.txt to test out the feature for movie-this and concert-this.






