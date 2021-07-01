// Dependencies
const express = require('express');
const path = require('path');
const fs = require("fs");
const uniqid = require('uniqid');

// Set up Express App
const app = express();
var PORT = process.env.PORT || 3001;

// Set up Express app to parse incoming data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Helper Function
function getData() {
    return fs.readFile('./db/db.json', 'utf8', (error, data) =>
        error ? console.error(error) : console.log(JSON.parse(data))
    );
}

// Routes

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '/public/notes.html')));

app.get('/assets/css/styles.css', (req, res) => res.sendFile(path.join(__dirname, 'public/assets/css/styles.css')));

app.get('/assets/js/index.js', (req, res) => res.sendFile(path.join(__dirname, 'public//assets/js/index.js')));

app.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (error, data) =>
        error ? console.error(error) : res.json(JSON.parse(data))
    );
});

// TODO: instead of writing the new note, append to the exiting notes and then write the array
app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    newNote.id = uniqid();
    let noteArray;

    fs.readFile('./db/db.json', 'utf8', (error, data) => {
        if (error) {
            console.error(error)
        } else {
            tempArray = JSON.parse(data);
            tempArray.push(newNote);
            fs.writeFile('./db/db.json', JSON.stringify(tempArray, null, '    '), (err) =>
                err ? console.error(err) : console.log('Success!')
            )
        }
    })
    res.json(newNote);
});

app.delete('/api/notes/:id', (req,res) => {
    
});

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
// [
//     {
//         "title": "this",
//         "text": "is",
//         "id": "3frng88okqkiiijx"
//     }
// ]