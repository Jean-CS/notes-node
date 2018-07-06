console.log('starting app');

// built-in node modules
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');


const notes = require('./notes');

const argv = yargs.argv;

// node app.js 'command'
var command = process.argv[2];
console.log("Command:", process.argv);
console.log('Yargs: ', argv);

if (command === "add") {
  notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  notes.getNote(argv.title);
} else if (command === 'remove') {
  notes.removeNote(argv.title);
} else {
  console.log('Command not recognized');
}