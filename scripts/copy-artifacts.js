const fs = require("fs");
const path = require("path");

const artifacts = ["README.md", "LICENSE"];
artifacts.forEach(artifact => {
  const fromPath = path.resolve(__dirname, "..", artifact);
  const toPath = path.resolve(__dirname, "..", "dist\\ngx-avatars", artifact);

  fs.readFile(fromPath, "utf-8", (err, data) => {
    if (err) {
      console.log("an error occurred while reading file ", fromPath);
      return;
    }
    fs.writeFile(toPath, data, err => {
      if (err) {
        console.log("an error occurred while writing file ", toPath, err);
        return;
      }
      console.log(`${artifact} copied`);
    });
  });
});
