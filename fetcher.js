const request = require('request');
const fs = require('fs');
const args = process.argv;
args.splice(0, 2);

console.log(args);
const URL = args[0];
const PATH = args[1];


const fetcher = (url, path) => {

  request(url, (error, response, body) => {
    

    fs.writeFile(path, body, err => {

      if (error) {
        console.log(error);
      } else {

        fs.stat(path, (error, stats) => {
          if (error) {
            console.log(error);
          } else {
            console.log(`Downloaded and saved ${stats.size} bytes to ${path}`)
          }
        });

      } 
    });

  });

}

fetcher(URL, PATH);