var express = require('express');
const { Cookie } = require('express-session');
var router = express.Router();

//rem code lai de test session
 


// /* GET home page. */
// router.get('/',redirectHome, async (req, res) => {
//   const{userID}=req.session;
//   console.log(req.session);
// //   var message = CryptoJS.AES.encrypt('W@c0Al', 'itsasecret123').toString();
// // // Xem chuỗi đã mã hóa
// // console.log(`chuỗi đã mã hóa : ${message}`);
// // // Lấy danh sách byte đã mã hóa
// // var bytes = CryptoJS.AES.decrypt(message, 'itsasecret123');
// // // Chuyển sang chuỗi gốc
// // var message_decode = bytes.toString(CryptoJS.enc.Utf8);
// // console.log(`chuỗi đã được giải mã hóa : ${message_decode}`);
//   res.render('login', {
//      title: 'Express' ,
//      messageError: ""
//     });
// });


//rem code lai de test session

//test session tai day

// const redirectHome= (req,res,next) =>{
//   if(req.session.userID){
//     res.redirect('/home')
//   } else{
//     next();
//   }
// }

router.get('/', async (req,res) => {

  // console.log(req.session);
res.redirect('/login')


});

module.exports = router;


