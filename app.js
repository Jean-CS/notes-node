// built-in node modules
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};
const bodyOptions = {
  describe: 'Body of note',
  demand: true,
  alias: 'b'
};

const argv = yargs
  .command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('list', 'List all notes')
  .command('read', 'Read a note', {
    title: titleOptions,
  })
  .command('remove', 'Remove a note', {
    title: titleOptions,
  })
  .help()
  .argv;
var command = argv._[0]; // $ node app.js 'command'

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