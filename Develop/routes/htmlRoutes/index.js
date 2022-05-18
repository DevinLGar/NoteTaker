const path = require('path');
const router = require('express').Router();

/* This is a route that is being created to handle the `/notes` path. */
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

/* This is a catch-all route that will send the user to the home page if they try to access a route
that doesn't exist. */
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;