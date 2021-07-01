// Dependencies
const express = require('express');
const path = require('path');
const fs = require("fs");

// Set up Express App
const app = express();
const PORT = 3000;

// Set up Express app to parse incoming data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '/public/notes.html')));

app.get('/assets/css/styles.css', (req, res) => res.sendFile(path.join(__dirname, 'public/assets/css/styles.css')));

app.get('/assets/js/index.js', (req, res) => res.sendFile(path.join(__dirname, 'public//assets/js/index.js')));

// Data read and write to database
// fs.readFile('./db/db.json', 'utf8', (error, data) =>
//   error ? console.error(error) : console.log(JSON.parse(data))
// );

// fs.writeFile('./db/db.json', JSON.stringify(test, null, '    '), (err) =>
//     err ? console.error(err) : console.log('Success!')
// );

// Set up server to listen for requests
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));