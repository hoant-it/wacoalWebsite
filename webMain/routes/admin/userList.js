var express = require('express');
const db= require('../../databases/database').sequelize;
// var CryptoJS = require("crypto-js");
var router = express.Router();

/* GET user page. */
router.get('/', async (req,res) => {
  res.render("admin/userList", {
    title:'Express',
    userId:req.signedCookies.userId,
    html:req.signedCookies.html
  });

} )




module.exports = router;
