var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');
const upload=require('express-fileupload');




var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
var homeRouter=require('./routes/home/home');
var testRouter=require('./routes/test/test');
var loginRouter=require('./routes/login');
var logoutRouter= require('./routes/logout');
//kho
var KhoSDTCRouter=require('./routes/Kho/KhoSDTC');
var KhoQTRouter=require('./routes/Kho/KhoQT');
var KhoQCTCRouter=require('./routes/Kho/KhoQCTC');
const KhoDMC_Router=require('./routes/Kho/KhoDMC');
const Kho_QTQLNVL_Router=require('./routes/Kho/Kho_QTQLNVL');
const KhoQTDatChi_Router=require('./routes/Kho/KhoQTDatChi');
const KhoOrderInput_Router=require('./routes/Kho/KhoOrderInput');
const KhoOrderInput_RouterV2=require('./routes/Kho/KhoOrderInputV2');
const KhoProductCode_Router= require('./routes/Kho/KhoProductCode');
const KhoProductColor_Router=require('./routes/Kho/Kho_ProductColor');
const KhoProducSize_Router=require('./routes/Kho/KhoProoductsize');
const KhoLoaiChi_Router=require('./routes/Kho/KhoLoaiChi');
const KhoLoaiMay_Router=require('./routes/Kho/KhoLoaiMay');
const KhoDMCInput_Router=require('./routes/Kho/KhoDMCInput');
const KhoCongDoanMaHangInput_Router=require('./routes/Kho/KhoCongDoanMaHangInput');

const KhoOrderTinhChi_Router=require('./routes/Kho/KhoOrderTinhChi');
const KhoOrderTinhChiV2_Router=require('./routes/Kho/KhoOrderTinhChiV2');

//VietNam Wacoal
var VNWCSDTCCRouter=require('./routes/WCVN/wcvn_sdtc');
//admin
const userListRouter=require('./routes/admin/userList');
const userListRouter2=require('./routes/admin/userListV2');
//Cat
const CatSDTC_Router=require('./routes/Cat/CatSDTC');
const CatTDLCard_Router=require('./routes/Cat/CatTDLCard');
const CatLLKH_Router=require('./routes/Cat/CatLLKHCard');
const CatMasterPattern_Router=require('./routes/Cat/CatMasterPattern');
const CatGKT_Router=require('./routes/Cat/CatGKT');
//May
const MayQTSX_Router=require('./routes/May/MayQTSX');
//San Xuat
const SanXuatQTSX_Router= require('./routes/SanXuat/SXQTSX');

// const IN_PROD= node

var app = express();

app.use(upload());


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
//home
app.use('/home',homeRouter);
app.use('/test',testRouter)
app.use('/login',loginRouter);
app.use('/home/Kho/khoSDTC',KhoSDTCRouter);
app.use('/home/kho/KhoQT',KhoQTRouter);
app.use('/home/kho/QCTC',KhoQCTCRouter);
app.use('/home/VNWC/VNWC_SDTC',VNWCSDTCCRouter);
app.use('/logout',logoutRouter);
app.use('/home/kho/DMC',KhoDMC_Router)

//admin
app.use('/userList',userListRouter);
app.use('/admin/userlistv2', userListRouter2);

//cat
app.use('/Cat/SDTC',CatSDTC_Router);
app.use('/Cat/TDLCard',CatTDLCard_Router);
app.use('/Cat/LLKHCard',CatLLKH_Router);
app.use('/Cat/CatMasterPattern',CatMasterPattern_Router);
app.use('/Cat/GKT',CatGKT_Router);
//may
app.use('/May/QTSX',MayQTSX_Router);
//kho
app.use('/Kho/QTQLNVL',Kho_QTQLNVL_Router);
app.use('/kho/QTDC',KhoQTDatChi_Router);
app.use('/kho/InputOrder',KhoOrderInput_Router);
app.use('/kho/inputorderv2',KhoOrderInput_RouterV2);
app.use('/kho/productcode',KhoProductCode_Router);
app.use('/kho/prodcolor',KhoProductColor_Router);
app.use('/kho/productsize',KhoProducSize_Router);
app.use('/kho/loaichi',KhoLoaiChi_Router);
app.use('/kho/loaimay',KhoLoaiMay_Router);
app.use('/kho/DMCInput',KhoDMCInput_Router);
app.use('/kho/congodanmahanginput',KhoCongDoanMaHangInput_Router);
app.use('/kho/ordertinhchi',KhoOrderTinhChi_Router);
app.use('/kho/ordertinhchiv2',KhoOrderTinhChiV2_Router);
//San Xuat
app.use('/SX/QTSX',SanXuatQTSX_Router);

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
