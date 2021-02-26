var express = require('express');
const db= require('../../databases/database').sequelize;
var CryptoJS = require("crypto-js");
var router = express.Router();


router.get('/', async(req,res) =>{
res.render('Cat/CatGKT',{
    title:'Express',
    userId:req.signedCookies.userId,
   html:''
})
})

module.exports = router;