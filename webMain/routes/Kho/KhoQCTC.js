var express = require('express');
const db= require('../../databases/database').sequelize;
var router = express.Router();


router.get('/', async(req,res) =>{
res.render('kho/QCTC',{
    title:'Express',
    userId:req.signedCookies.userId,
    html:req.signedCookies.html
})
})

module.exports = router;