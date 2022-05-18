const path = require('path');
const fs = require('fs');
const router = require('express').Router();

// const { db } = require('../../db/db.json')

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../db/db.json'));
});

router.post('/notes', (req, res) => {
    /* This is reading the db.json file and parsing it into a JSON object. */
    let db = fs.readFileSync('db/db.json');
    db = JSON.parse(db);
    res.json(db);

    let userNote = {
      title: req.body.title,
      text: req.body.text,
    };

    db.push(userNote);
    fs.writeFileSync('db/db.json', JSON.stringify(db));
    res.json(db);
});




module.exports = router;