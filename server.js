require('dotenv').config({ path: __dirname + '/config/config.env'});
const express = require('express');
const cors = require('cors');
const connectDatabase = require('./config/databaseConnection');
const app = express();

const urlRoutes = require('./routes/urlRoutes');
const url = require('./models/url');

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));
app.use('/api/shorturl', urlRoutes)

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

connectDatabase()
// Your first API endpoint
app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
