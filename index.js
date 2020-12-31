const prompt = require("prompt-sync")();
const splitter = require("./functions/splitter");
const query = require("./functions/query");

console.log("Welcome to pendekin.id");
console.log("Input your command below");
let command = prompt(">>");

while (command) {
  const data = splitter(command);
  console.log(query(data));
  command = prompt(">>");
}
