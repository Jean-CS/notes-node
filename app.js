console.log('starting app');

// built-in node modules
const fs = require('fs');
const os = require('os');
const notes = require('./notes');

let res = notes.addNum(2, 3);
console.log(res);

//let user = os.userInfo();

// arg1: name of file
// arg2: text to append
// arg3: callback 
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}`, (err) => {
//   if (err) {
//     console.log('Unable to write to file');
//   }
// });