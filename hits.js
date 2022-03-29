const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/:item', async (req, res) => {
    let db = JSON.parse(fs.readFileSync('./database.json', { encoding: 'utf8', flag: 'r' }));
    if (!db[req.params.item]) {
        db[req.params.item] = { 'hits': 0 };
    };
    res.status(200).send({ 'hits': db[req.params.item].hits, 'timestamp': new Date() });
});

router.post('/:item', async (req, res) => {
    let db = JSON.parse(fs.readFileSync('./database.json', { encoding: 'utf8', flag: 'r' }));
    if (!db[req.params.item]) {
        db[req.params.item] = { 'hits': 1 };
    } else {
        db[req.params.item].hits ++;
    }
    fs.writeFileSync('./database.json', JSON.stringify(db), { encoding: 'utf8', flag: 'w' });
    res.status(202).send();
});

module.exports = router;