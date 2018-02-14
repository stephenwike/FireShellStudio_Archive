var express = require('express');
var path = require ('path');

var app = express();
var app_port = 8019;

app.set('views', path.join(__dirname, 'layouts'));
app.set('view engine', 'pug');

// Middleware
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/Projects', (req, res) => {
  res.render('projects');
});

app.get('/About', (req, res) => {
  res.render('about');
});

app.listen(app_port, () => {
  console.log("FSS app listening on port " + app_port);
});

module.exports = app;
