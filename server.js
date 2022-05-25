const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

// this will run our db connection file in the background
require('./server/config/database')

/* Importing in routers */


// server
const app = express();

const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});

app.use(logger('dev'));
app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

/* App Use for routers    */
app.use('/portfolio', portfolioRouter)


app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});