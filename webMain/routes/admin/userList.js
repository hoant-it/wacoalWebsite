var express = require('express');
const db= require('../../databases/database').sequelize;
// var CryptoJS = require("crypto-js");
var router = express.Router();

/* GET user page. */
router.get('/', async (req,res) => {
  var arrUserList=[];
await db.query("wacoal_GetUserList_Web_V1",{

}).then(result => {
  arrUserList=result[0];
  console.log(arrUserList);
})
  res.render("admin/userList", {
    title:'Express',
    userId:req.signedCookies.userId,
    html:req.signedCookies.html,
    arrUserList:arrUserList
  });

} );

router.post('/',async(req,res) => {
  const {bsubmit}= req.body;
  if(bsubmit==="submitSave"){
    console.log("dang save ne")
  }else{
    console.log("dang cancel ne")
  }
});




module.exports = router;
