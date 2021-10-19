var chalk = require('chalk');
const yargs = require('yargs');

const { createNote, listNotes } = require("./notes")

yargs.version("1.0.0");

// Add command
yargs.command({
    command: 'add',
    description: 'Add a new note',
    builder: {
        title: {
            describe: 'Title of the note',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body of the note',
            type: 'string'
        }
    },
    handler(argv){
         createNote(argv)
    }
});

yargs.command({
    command: 'list',
    describe: 'List all the notes',
    handler(){
        listNotes();
    }
})

// Remove command

yargs.command({
    command: 'remove',
    describe: 'Remove the node',
    builder: {
        title: {
            describe: "Title of the note",
            demandOption: true,
            type: 'string'
        }
    },
    handlers(argv){
        console.log(argv.title)
    }
})

// Read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        console.log(argv);
    }
})

yargs.parse();