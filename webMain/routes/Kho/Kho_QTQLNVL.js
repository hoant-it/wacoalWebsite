var express = require('express');
const db= require('../../databases/database').sequelize;
var CryptoJS = require("crypto-js");
var router = express.Router();


router.get('/', async(req,res) =>{
res.render('Kho/Kho_QTQLNVL',{
    title:'Express',
    userId:req.signedCookies.userId,
   html:req.signedCookies.html
})
})

module.exports = router;