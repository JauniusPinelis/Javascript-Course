const fs = require('fs');
const chalk = require('chalk');

function createNote(argv){

    var note = {
        title: argv.title,
        body: argv.body
    };

    saveNotes(note);
}

function listNotes(){
    var note = loadNotes();
    console.log(`Note title: ${note.title}, body: ${note.body}`)
    return [];
}

function readNote(){
    return {};
}

const removeNote = () => {

}

const saveNotes = (notes) => {
    //Converting notes into a json string
    var notesJson = JSON.stringify(notes);
    // writing this json string into a file
    fs.writeFileSync('./data/notes.json', notesJson)
}

const loadNotes = () => {
    const buffer = fs.readFileSync('./data/notes.json');
    const jsonData = buffer.toString();
    return JSON.parse(jsonData);
}

module.exports = {
    createNote,
    listNotes
}