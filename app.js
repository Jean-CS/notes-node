console.log('starting app');

// built-in node modules
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');


const notes = require('./notes');

const argv = yargs.argv;

// node app.js 'command'
var command = argv._[0];

if (command === "add") {
  let note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Added successfully');
    notes.logNote(note);
  } else {
    console.log('Duplicate note');
  }
} else if (command === 'list') {
  let allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach(note => notes.logNote(note));
} else if (command === 'read') {
  let note = notes.getNote(argv.title);
  if (note) {
    console.log('Note read');
    notes.logNote(note);
  } else {
    console.log('Note not found');
  }
} else if (command === 'remove') {
  let noteRemoved = notes.removeNote(argv.title);
  let message = noteRemoved ? 'Note was removed' : 'Note not found';
  console.log(message);
} else {
  console.log('Command not recognized');
}