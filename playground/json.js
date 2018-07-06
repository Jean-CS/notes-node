const fs =  require('fs');

var originalNote = {
  title: 'Some title',
  body: 'Some body'
};

// save note
let originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

// read note
let noteString = fs.readFileSync('notes.json');
let note = JSON.parse(noteString);