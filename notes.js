console.log('starting notes.js');

// module is an object
module.exports.addNote = () => {
  console.log('addNote');
  return 'new note';
}
module.exports.addNum = (a, b) => {
  return a + b;
};