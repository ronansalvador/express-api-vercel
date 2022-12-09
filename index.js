const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(express.static('public'))
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: path.join(__dirname, 'public')});
})

app.get('/test', (req, res) => {
  res.status(200).json({message: 'teste de retorno de API'})
})

app.listen(process.env.PORT || 3000);

module.exports = app;