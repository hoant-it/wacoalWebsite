var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');


var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
var homeRouter=require('./routes/home/home');
var testRouter=require('./routes/test/test');
var loginRouter=require('./routes/login');
var KhoSDTCRouter=require('./routes/Kho/KhoSDTC');
var KhoQTRouter=require('./routes/Kho/KhoQT');
var KhoQCTCRouter=require('./routes/Kho/KhoQCTC');
var VNWCSDTCCRouter=require('./routes/WCVN/wcvn_sdtc');
var logoutRouter= require('./routes/logout');
const userListRouter=require('./routes/admin/userList');
// const IN_PROD= node

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
//midlewares 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  // name:'sid',
  resave:false,
  saveUninitialized:false,
  secret:'somesecret',
  // cookie:{
  //   maxAge:7200000,
  //   sameSite:true,
  //   secure:false
  // },
  
}));
app.use(cookieParser('Th@!h0A'));

//routes
app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/home',homeRouter);
app.use('/test',testRouter)
app.use('/login',loginRouter);
app.use('/home/Kho/khoSDTC',KhoSDTCRouter);
app.use('/home/kho/KhoQT',KhoQTRouter);
app.use('/home/kho/QCTC',KhoQCTCRouter);
app.use('/home/VNWC/VNWC_SDTC',VNWCSDTCCRouter);
app.use('/logout',logoutRouter);
app.use('/userList',userListRouter);

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
