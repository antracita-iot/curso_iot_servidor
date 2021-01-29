const axios = require('axios');
const fs = require('fs');
const avatar = axios.create({
  baseURL: 'https://robohash.org/'
});

let miAvatar  = "hulk";
 
avatar({
  method: "get",
  url:`/${miAvatar}`,
  responseType: "stream"})
    .then(function (response) {
      response.data.pipe(fs.createWriteStream(`${miAvatar}.png`));
    })
    .catch(function (error) {
      console.log(error);
    })
