const {execSync} = require("child_process");
execSync("git describe").toString();
console.log("Hello from index.js");
console.log("Bye from index.js");

