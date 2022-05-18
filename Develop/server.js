const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;

const apiRoutes = require('./routes/apiRoutes/notes');
const htmlRoutes = require('./routes/htmlRoutes');

// parse incoming string or array data
app.use(express.urlencoded({extended: true }));
// parse incoming JSON data
app.use(express.json());
/* This is telling the server to use the public folder as the root folder. */
app.use(express.static('public'));

// Routes go here
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// This is the code that starts the server.
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});