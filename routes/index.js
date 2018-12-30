var express = require('express');


'use strict';
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/auth');

module.exports = mongoose;
var app = express();


app.set("view engine", "jade");
var router = express.Router();

app.use(express.static("public"));
app.post('/')
/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { titles: 'JUNKIES ' });
});

//http
//METODOS
  //POST
  //GET
module.exports = router;
