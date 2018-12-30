const express = require('express');
const app =express();
const bodyParser = require('body-parser');
const {graphiqlExpress, gpl } = require('apollo-server');
var path = require('path');
var index = require('./routes/index');
var mongoose =   require( 'mongoose');
mongoose.connect('mongodb://localhost/DBHalyfax')
  .then(() => console.log('connected to db'))
  .catch(err => console.log(err));
var Car =   require ('./models/Car');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

const { makeExecutableSchema } =   require ('graphql-tools');

const typeDefs =   require ('./schema');
const resolvers =   require ('./resolvers');

app.use(express.static(path.join(__dirname, 'public')));


const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

// settings
app.set('port', process.env.PORT || 3000);
/*
app.use('/graphql', express.json(), gpl({
  schema,
  context: {
    Car
  }
}))
*/
/*
app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));
*/// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
app.get("/",function(req,res){
  //console.log(req.session.user_id);
  res.render("index");
});

// start the server}

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(app.get('port'), (require,res) => {
  console.log('server on port', app.get('port'));
});


app.use('/', index);
module.exports = app;