Step to run the project:
 - rename the env file on the root directory to .env
 - install the node modules - npm i 
 - npm run build-prod
 - run "npm run start"
 - log onto localhost:8080 on a broswer

Make sure you run the production version if you get a CORS error. I have put a screenshot to show the output with the PRELOADED DATA

On the server side there are two flags - DEBUG for console.log output if set to true and PRELOAD_DATA = true or false if you want to get some initial data
We are reloading all the information at each instance because the service from pixabay is rotating the URLs and the weather could be changing
We could cache a bunch of the information to improve performance but this isn't needed for this project

In this project we will have a web app allowing the users to input a location, date and it will return a picture of the place in addition to the weather information. If the picture is not available it will fetch an image of the country

At the initial stage the application will query the server for the past trip information


Server setup:
All the information will be stored on a redis cache for the server side - to ensure persistency we will also setup a postgress instance to store the data
The server will listen on port 8080 and have three main endpoints
GET: '/' to get the index.html file
GET: '/oldtrips' to get the past trips - it will return a JSON with Date, Location and Weather
POST: '/newtrip' sending a JSON to the server to insert the latest trip information
POST: '/removetrip' sending a JSON to the server to delete an existing trip

You will need a .env file in the root directory with 
GEONAME_USERNAME
DARKSKY_KEY=
PIXABAY_KEY=

Start the server with npm run start

//TODO: Deal with the caching of images?
// REDIS INSTANCE - KUBERNETES - DOCKER
// DEAL WITH THE ALT from the images