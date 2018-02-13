var express = require('express');
var app = express();
var path = require ('path');
var app_port = 8019;
//var router = express.Router();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "layouts", "home.html"));
});

app.get('/projects', (req, res) => {
  res.sendFile(path.join(__dirname, "layouts", "projects.html"));
});

app.listen(app_port, () => {
  console.log("FSS app listening on port " + app_port);
});

module.exports = app;
