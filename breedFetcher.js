// Require Request Module
const request = require("request");
// Require File System module

const url = "https://api.thecatapi.com/v1/breeds/search?q=";

const fetchBreedDescription = (breed, callback) => {
  request(url + breed, (error, response, body) => {
    if (error) {
      callback(error);
      // console.log("error:", error);
    } else if (body) {
      const data = JSON.parse(body);
      if (data.length === 0) {
        callback(null);
        // console.log("Breed not found");
      } else {
        callback(null, data[0].description);
        // console.log(data[0].description);
      }
    }
  });
};

module.exports = { fetchBreedDescription };