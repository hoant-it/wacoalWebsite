var express = require('express');
var router = express.Router();
const db= require('../databases/database').sequelize;
var CryptoJS = require("crypto-js");
var milderedirectHome= require('../middlewares/middle.redirectHome').redirectHome;

// result=[];

// function data_Tree(arr,parent_id="0", level=0){
// arr.forEach(element => {
//   if(element["parent_id"]=== parent_id){
//     element["level"]=level;
//     if(element["href"]===""){
//       if(level===0){
//         html+=`<li class="active"><a> ${element["title"]} <span class="fa fa-chevron-down"></span></a>`;
//         html+=`<ul class="nav child_menu">`;
//       }
//       else {
//         html+=`<li><a> ${element["title"]} <span class="fa fa-chevron-down"></span></a>`;
//         html+=`<ul class="nav child_menu">`;
//       }
   
//     result.push(element);
//     child=data_Tree(arr,element["id"],level + 1);
//       result.concat(child);
//       html+=`</ul>`
//     html+=`</li>`
//     }
//     else{
//       html+=`<li><a href="${element["href"]}"> ${element["title"]}</a>`;
//     result.push(element);
//     child=data_Tree(arr,element["id"],level + 1);
//       result.concat(child);
//     html+=`</li>`
//     }
//   }
// });
// return result;
// }

router.get('/',milderedirectHome, async(req,res) =>{
  res.render('login',{
    messageError:"",
    html:""
  });
});

router.post('/',milderedirectHome,async(req,res) =>{
  // var localdata = localStorage.getItem('my_key'); 
  const{userName,password}= req.body
  var dataUserA=[]
  await db.query('sp_Wacoal_Web_ListUserGetRole @UserName=:UserName',{
    replacements: { UserName: userName.toUpperCase()},
  }).then(results => {
  dataUserA=results[0];
  console.log(dataUserA);
  })
  if(!dataUserA){
    res.redirect('/login')
  }
  else{
    var bytes = CryptoJS.AES.decrypt(dataUserA[0].WebPass, 'itsasecret123');
    // Chuyển sang chuỗi gốc
    var message_decode = bytes.toString(CryptoJS.enc.Utf8);
    // console.log(`chuỗi đã được giải mã hóa : ${message_decode}`);
    // console.log(`pass la  : ${req.body.password}`);
    if(message_decode===req.body.password){
      res.cookie('userId',userName,{
        signed:true
      })
      res.cookie('IDAuthorization',dataUserA[0].IDAuthorization,{
        signed:true
      })
      res.cookie('UserInGroupID',dataUserA[0].UserInGroupID,{
        signed:true
      })

      // html="";
      // html=`<ul class="nav side-menu" id="side-menu">`;
      // await db.query('sp_Wacoal_LoadMenuWeb_V1 @IDAuthorization=:IDAuthorization,@UserInGroupID=:UserInGroupID',{
      //   replacements: { IDAuthorization: dataUserA[0].IDAuthorization, UserInGroupID:dataUserA[0].UserInGroupID},
      // }).then(result => {
      //   arr=result[0];
      //   // console.log(arr);
      //   list_cat=data_Tree(arr,"0");
      //   html+=`</ul>`
      // });

      // console.log(html)
      // localStorage.setItem('my_key',html);
      // localStorage.setItem('html',html);
      // sessionStorage.setItem('html',html)
    //   res.cookie('html',html,{
    //    signed:true
    //  })

      res.redirect('/home')
    }
    else{
      res.redirect('/Login')
    }
  }
});

module.exports = router;