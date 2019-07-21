# liri-node-app

This is a Command Line Interface (CLI) app. It is intended to offer information in 1 same place for 3 different consultations: Find movies' information, find song's information, and find artist's upcoming concert's information. 


It requires a 3rd and sometimes a 4th argument to be passed in for it to run. The third command/argument should be 1 of these 4 options: 

**concert-this**
**spotify-this-song**
**movie-this**
**do-what-it-says**

Those 4 options will take different actions. 

The first option: "concert-this" will access axios npm to call the bandsintown API and get the list of concerts for the artist being searched. It is required the 4th argument to be passed in with this option. The 4th argument needs to be a artist name. 

The second option: "spotify-this-song" will access the spotify node package manager (npm) and get a list of songs for the song's name being searched. It doesn't require a 4th argument for this command, but if no 4th argument is passed it it will default to the song: "the sign".

The third option: "movie-this" will access axios npm to call the OMDB API and get movie information being searched. It doesnt require a 4th argument to be passed in with this option, but if no 4th argument is passed it will default to the movie: "Mr. Nobody".

The 4th option: "do-what-it-says" will take the text in random.txt and passed them in as arguments to run a command. separate arguments based on the coma. It takes a maximun of 2 arguments.

in addition, the first 3 commands will transfer information in JSON form to be stored in log.txt 

*important: To run this code in your Command Line you will need to provide your own .env file. This File will include Spotify API keys.

Developer: Ginna Campbell
Technologies applied: Node.js

*Example on how to run this code in the Command Line:*

*node liri.js spotify-this-song despacito*

*or* 

*node liri.js spotify-this-song*


*(The first option will render results with the "despacito, the second will default to "the sign").*


![concert-this command](images\concert-this.PNG);



