console.log('starting app');

// built-in node modules
const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes');

console.log(_.isString(true)); // false
console.log(_.isString('Jean')); // true

// removes any duplicates
let filteredArray = _.uniq(['Jean', 1, 'Jean', 1, 2, 3, 4]);
console.log(filteredArray);

//let res = notes.addNum(2, 3);
//console.log(res);

//let user = os.userInfo();

// arg1: name of file
// arg2: text to append
// arg3: callback 
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}`, (err) => {
//   if (err) {
//     console.log('Unable to write to file');
//   }
// });