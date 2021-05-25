let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";

strings = [protoArray1, protoArray2, protoArray3, protoArray4];


//a) Use the 'includes' method to check to see if the words in each string are separated by commas (,), semicolons (;) or just spaces.
for (let i = 0; i < strings.length; i++) { // decided to try using a for loop as it was going to be too many if statements

if (strings[i].includes(",") && !strings[i].includes(" ")){ // I had to add the and no spaces otherwise it would pick up on protoArray4 here as well as in the last if statement.
  console.log(`${strings[i]} includes a comma , `);
}
if (strings[i].includes(";")) {
  console.log(`${strings[i]} includes a semicolon ; `);
}
if (strings[i].includes(" ")) {
  console.log(`${strings[i]} includes a space `);
}
}


//b) If the string uses commas to separate the words, split it into an array, reverse the entries, and then join the array into a new comma separated string.
  // not going to use a for loop for the rest, I get how it works though, I'd basically copy the same code as above and modify the if statements.
if (strings[0].includes(",") && !strings[0].includes(" ")){
  const newStringOne = strings[0].split(",").reverse().join(",");
  console.log(newStringOne);
}

if (strings[1].includes(",")&& !strings[1].includes(" ")){
const newStringOne = strings[1].split(",").reverse().join(",");
  console.log(newStringOne);
}

if (strings[2].includes(",")&& !strings[2].includes(", ")){
const newStringOne = strings[2].split(",").reverse().join(",");
  console.log(newStringOne);
}

if (strings[3].includes(",")&& !strings[3].includes(" ")){
const newStringOne = strings[3].split(",").reverse().join(",");
  console.log(newStringOne);
}



//c) If the string uses semicolons to separate the words, split it into an array, alphabetize the entries, and then join the array into a new comma separated string.
if (strings[0].includes(";")){
  const newStringOne = strings[0].split(";").sort().join(",");
  console.log(newStringOne);
}

if (strings[1].includes(";")){
const newStringOne = strings[1].split(";").sort().join(",");
  console.log(newStringOne);
}

if (strings[2].includes(";")){
const newStringOne = strings[2].split(";").sort().join(",");
  console.log(newStringOne);
}

if (strings[3].includes(";")){
const newStringOne = strings[3].split(";").sort().join(",");
  console.log(newStringOne);
}


//d) If the string uses spaces to separate the words, split it into an array, reverse alphabetize the entries, and then join the array into a new space separated string.
if (strings[0].includes(" ") && !strings[0].includes(",")){
  const newStringOne = strings[0].split(" ").sort().reverse().join(" ");
  console.log(newStringOne);
}

if (strings[1].includes(" ") && !strings[1].includes(",")){
const newStringOne = strings[1].split(" ").sort().reverse().join(" ");
  console.log(newStringOne);
}

if (strings[2].includes(" ") && !strings[2].includes(",")){
const newStringOne = strings[2].split(" ").sort().reverse().join(" ");
  console.log(newStringOne);
}

if (strings[3].includes(" ") && !strings[3].includes(",")){
const newStringOne = strings[3].split(" ").sort().reverse().join(" ");
  console.log(newStringOne);
}


//e) If the string uses ‘comma spaces’ to separate the list, modify your code to produce the same result as part “b”, making sure that the extra spaces are NOT part of the final string.
if (strings[0].includes(" ,")){
  const newStringOne = strings[0].split(", ").reverse().join(","); // cannot use trim after split, trim only on strings and this is now an array after we split it up
  console.log(newStringOne);
}

if (strings[1].includes(", ")){
const newStringOne = strings[1].split(", ").reverse().join(",");
  console.log(newStringOne);
}

if (strings[2].includes(", ")){
const newStringOne = strings[2].split(", ").reverse().join(",");
  console.log(newStringOne);
}

if (strings[3].includes(", ")){
const newStringOne = strings[3].split(", ").reverse().join(",");
  console.log(newStringOne);
}