const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;

// parse incoming string or array data
app.use(express.urlencoded({extended: true }));
// parse incoming JSON data
app.use(express.json());

// Routes go here


// This is the code that starts the server.
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});