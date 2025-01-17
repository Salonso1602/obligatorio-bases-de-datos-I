require('dotenv').config();

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const permisosRouter = require('./routes/permisos');
const registrarRouter = require('./routes/registrar');
const autenticacionRouter = require('./routes/autenticacion');
const dummyRouter = require('./routes/dummy')
const rolesRouter = require('./routes/roles')
const recuperarContraseñaRouter = require('./routes/recuperarContraseña');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', '*');

  next();
});

app.use('/api/v1/permisos', permisosRouter);
app.use('/api/v1/autenticacion', autenticacionRouter);
app.use('/api/v1/registrar', registrarRouter);
app.use('/api/v1/dummy', dummyRouter);
app.use('/api/v1/roles', rolesRouter);
app.use('/api/v1/recuperarContrasena', recuperarContraseñaRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
