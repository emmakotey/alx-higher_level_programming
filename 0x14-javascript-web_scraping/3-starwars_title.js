#!/usr/bin/node
// Import required modules
const request = require('request');

// Fetch the episode number from command line argument
const episodeNumber = process.argv[2];

// Make a GET request to the Star Wars API with the provided movie ID
request(`https://swapi-api.alx-tools.com/api/films/${episodeNumber}`, (error, response, body) => {
  if (error) {
    console.error(`Error: ${error}`);
  } else if (response.statusCode !== 200) {
    console.error(`Error: ${response.statusCode} - ${response.statusMessage}`);
  } else {
    const movie = JSON.parse(body);
    console.log(movie.title);
  }
});

