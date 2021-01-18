var express = require('express');
const db= require('../../databases/database').sequelize;
// var CryptoJS = require("crypto-js");
var router = express.Router();

/* GET home page. */
const redirectLogin= (req,res,next) =>{
  if(!req.signedCookies.userId){
    res.redirect('/login')
  } 
      next();
}

router.get('/',redirectLogin, async (req, res ) =>{
 res.render('home',{
   title:'Express',
   userId:req.signedCookies.userId,
   html:req.signedCookies.html
 })
});



module.exports = router;
