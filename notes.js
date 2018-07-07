console.log('starting notes.js');

const fs = require('fs');

let fetchNotes = () => {
  try { // error checking if file does not exist
    let notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (err) {
    return [];
  }
};

let saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

let addNote = (title, body) => {
  let notes = fetchNotes();
  let note = {
    title,
    body,
  };
  // return true if there are duplicate titles
  let duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
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