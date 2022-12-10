const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs').promises;
const PATH = './talker.json';

app.use(express.static('public'))
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: path.join(__dirname, 'public')});
})

app.get('/test', async (req, res) => {
  const talkers = await fs.readFile(PATH, 'utf-8');
  res.status(200).json(JSON.parse(talkers))
})

app.listen(process.env.PORT || 3000);

module.exports = app;