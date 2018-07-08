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
    return note;
  }
};

let getAll = () => {
  return fetchNotes();
};

let getNote = (title) => {
  let notes = fetchNotes();
  let filteredNote = notes.filter((note) => note.title === title);
  return filteredNote[0];
};

let removeNote = (title) => {
  let notes = fetchNotes();

  // filter all notes that do not match the title argument
  let filteredNotes = notes.filter((note) => note.title !== title);

  saveNotes(filteredNotes);

  // if true, then note was removed
  return notes.length !== filteredNotes.length;
};

let logNote = (note) => {
  console.log('--');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
}

module.exports = {
  addNote, //same as 'addNote: addNote'
  getAll,
  getNote,
  removeNote,
  logNote
};