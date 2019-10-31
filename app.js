const chalk = require('chalk')
const yargs = require ('yargs')
const notes = require('./notes.js')


//version

yargs.version('1.1.0')

// ADD

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body)
  }
})

//remove

yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    notes.removeNote(argv.title)
  }
})

// list

yargs.command({
  command: 'list',
  describe: 'List notes',
  handler() {
    notes.listNotes()
  }
})


// read

yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler(argv) {
    notes.readNote(argv.title)
  }
})

yargs.parse()

// console.log(yargs.argv)
