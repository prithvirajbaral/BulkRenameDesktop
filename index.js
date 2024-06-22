const fs = require('node:fs');
const path = require('path');

const replaceThis = "prithvi";
const replaceWith = "ritzz";
const preview = false;
const folder = __dirname;

try {
  fs.readdir(folder, (err, data) => {
    if (err) {
      console.error("Error reading directory:", err);
      return;
    }

    // Check if data is undefined or null
    if (!data) {
      console.error("No files found in the directory.");
      return;
    }

    for (let index = 0; index < data.length; index++) {
      const item = data[index];  
      let oldFile = path.join(folder, item);
      let newFile = path.join(folder, item.replaceAll(replaceThis, replaceWith));
      
      if (!preview) {
        fs.rename(oldFile, newFile, (err) => {
          if (err) {
            console.error("Error renaming file:", err);
          } else {
            console.log("Rename success:", oldFile, "->", newFile);
          }
        }); 
      } else {
        if (oldFile !== newFile) {
          console.log(oldFile + " will be renamed to " + newFile);
        }
      }    
    }
  });
} catch (err) {
  console.error(err);
}
