//include fs package
const fs = require("fs");

// create writeFile promise to be used in the index.js file
const writeFile = (fileContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./README.md", fileContent, (err) => {
      //if there's an error, reject the Promise and send the rror to the Promise's .catch() method
      if (err) {
        reject(err);
        //return out of the function here to make sure the Promise doesn't accidentally execute the resolve() func as well
        return;
      }

      //if everything went well, resolve the Promise and send the successful data to the .then method
      resolve({
        ok: true,
        message: "ReadMe file created successfully!",
      });
    });
  });
};

// create copyFile promise to be used in the index.js file
const copyFile = (fileContent) => {
  return new Promise((resolve, reject) => {
    fs.copyFile("./README.md", "./ext/README.md", (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message:
          "Readme created! Check out REAMDME.MD in this directory to see it",
      });
    });
  });
};

//export writeFile and copyFile promises
module.exports = {
  writeFile,
  copyFile,
};
