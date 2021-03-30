const fs = require("fs");

var replaceNl = function(str){
  return str.replace(/\r\n/g, "\r").replace(/\r/g, "\n").replace(/\n/g, "\\r\\n");
}

const str = fs.readFileSync("data.json", {encoding: "utf-8"});
console.log(str);
JSON.parse(replaceNl(str));