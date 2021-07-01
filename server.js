// Dependencies
const express = require('express');
const path = require('path');
const fs = require("fs");

// Set up Express App
const app = express();
const PORT = 3000;

// Set up Express app to parse incoming data
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Data read and write to database


// Set up server to listen for requests
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));