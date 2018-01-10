const yargs = require('yargs');
const argv = yargs.argv;
var command = argv._[0];


const notes = require('./notes');
if (command==='add') {
notes.addNote(argv.title,argv.body);
}
else if (command==='list') {
  notes.getAll();
}
else if (command==='read') {
  notes.getNote(argv.title);
}
else if (command==='remove') {
  notes.removeNote(argv.title);
}
else {
console.log('command not recognized');
}
console.log('Command: ', command);
console.log('Yargs', argv);
