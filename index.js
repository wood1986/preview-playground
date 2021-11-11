const {execSync} = require("child_process");
execSync("git describe").toString().trim();
console.log("Hello from index.js");
console.log("Bye from index.js");

