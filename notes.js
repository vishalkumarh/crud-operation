
console.log('Starting notes.js');

var addNote = (title, body) => {
 console.log('Adding note', title, body);
};
var getAll = ()=>{
  console.log('getting all notes');
};
var getNote =(title)=>{
  console.log('fetching the notes',title);
};
var removeNote =(title)=>{
  console.log('removing notes',title);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
};
