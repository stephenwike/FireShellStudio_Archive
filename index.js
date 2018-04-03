// Build Server
var express = require('express');
var path = require ('path');
var hbs = require('express-handlebars');
var app = express();
var app_port = 8019;

app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts/'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Middleware
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('home');
});


app.get('/Projects', (req, res) => {
  res.render('projects');
});

app.get('/Projects/:page', (req, res) => {
	res.render('projects/' + req.params.page);
});

app.get('/About', (req, res) => {
  res.render('about');
});

app.listen(app_port, () => {
  console.log("FSS app listening on port " + app_port);
});

module.exports = app;
