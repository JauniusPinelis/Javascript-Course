const fs = require('fs');
const chalk = require('chalk');

function createNote(argv){
    // load the existing notes as an array
    var notes = loadNotes();
    // push the new note into the array
    var dublicateNote = notes.find(note => note.title == argv.title);

    if (dublicateNote == null){
        notes.push({
            title: argv.title,
            body: argv.body
        });
    
        // overwrite the file with the new array
        saveNotes(notes);

        console.log(chalk.greenBright("Note was added"));
    }
    else {
        console.log(chalk.redBright("Note already exists"));
    }
}

function listNotes(){
    var notes = loadNotes();
    if (notes.length == 0){
        console.log("No notes");
    }
    notes.forEach(note => {
        var outputText = `Note title: ${note.title}, body: ${note.body}`;
        console.log(chalk.blueBright(outputText));
    });
    return notes;
}

const readNote = (title) => {
    var notes = loadNotes();
    var note = notes.find(note => note.title == title);

    if (!note){
        var output = `Note title: ${note.title}, body: ${note.body}`;
        console.log(chalk.blueBright(output));
    } else {
        console.log(chalk.redBright("Note not found"));
    }
}

const removeNote = (title) => {
    // load the notes into array in javascript
    var notes = loadNotes();

    var note = notes.find(note => note.title == title);
    
    if (!note){
        console.log(chalk.red("Not not found"));
        return;
    }
     // remove the note from the array
     notes = notes.filter(note => note.title != title);

    //save the array to the file
    saveNotes(notes);

    console.log(chalk.greenBright("Note removed"));
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
    if (jsonData == ""){
        return [];
    }
    return JSON.parse(jsonData);
}

module.exports = {
    createNote,
    listNotes,
    readNote,
    removeNote
}