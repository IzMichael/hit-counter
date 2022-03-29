const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const helmet = require('helmet');
var cors = require('cors');
const fs = require('fs');

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

let db = '{}';
try {
    db = fs.readFileSync('./database.json', { encoding: 'utf8', flag: 'r' });
} catch (error) {
    console.log('missing - creating new file.')
    fs.writeFileSync('./database.json', '{}', { encoding: 'utf8', flag: 'w' });
}
if (!db.startsWith('{' || !db.endsWith('}'))) {
    console.log('invalid - backing up old file and overwriting original');
    fs.writeFileSync('./databaseBackup-' + new Date().getTime() + '.json', db, { encoding: 'utf8', flag: 'w' });
    fs.writeFileSync('./database.json', '{}', { encoding: 'utf8', flag: 'w' });
}

app.use(`/hits`, require(`./hits.js`));

app.listen(9240, () => {
    console.log(`Hit Counter listening at http://localhost:9240`)
});