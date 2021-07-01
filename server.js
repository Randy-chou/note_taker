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

// Data read and write to database
// fs.readFile('./db/db.json', 'utf8', (error, data) =>
//   error ? console.error(error) : console.log(JSON.parse(data))
// );

// fs.writeFile('./db/db.json', JSON.stringify(test, null, '    '), (err) =>
//     err ? console.error(err) : console.log('Success!')
// );

// Set up server to listen for requests
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));