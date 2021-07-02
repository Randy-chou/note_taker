// Dependencies
const express = require('express');

// Set up Express App
const app = express();
var PORT = process.env.PORT || 3001;

// Set up Express app to parse incoming data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTER
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

app.listen(PORT, () => console.log(`App listening on PORT http://localhost:${PORT}`));