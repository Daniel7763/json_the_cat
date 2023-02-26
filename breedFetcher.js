const request = require("request");
//const fs = require("fs");


//const URL = process.argv[2];
const breed = process.argv[2];
//const Filepath = process.argv[3];


request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`,(error, response, body) => {
  if (error) {
    console.log('error:', error);
  }

  const data = JSON.parse(body);
  //console.log(data);
  if (data.length === 0) {
    console.log(`Breed is not in database.`);
    return;
  }

  console.log(`Showing info about the ${breed} breed:`, data[0].description);

});