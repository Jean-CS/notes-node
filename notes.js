console.log('starting notes.js');

const fs = require('fs');

let addNote = (title, body) => {
  let notes = [];
  let note = {
    title,
    body,
  };

  try { // error checking if file does not exist
    let notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString);
  } catch (err) {

  }

  // return true if there are duplicate titles
  let duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
  }
};

let getAll = () => {
  console.log('Getting all notes');
};

let getNote = (title) => {
  console.log('Getting note', title);
};

let removeNote = (title) => {
  console.log('Removing note', title);
};

module.exports = {
  addNote, //same as 'addNote: addNote'
  getAll,
  getNote,
  removeNote
};