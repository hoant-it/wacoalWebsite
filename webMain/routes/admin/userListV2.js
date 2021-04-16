var express = require('express');
const db= require('../../databases/database').sequelize;
// var CryptoJS = require("crypto-js");
var router = express.Router();

/* GET user page. */
router.get('/', async (req,res) => {
  var arrUserList=[];
  var arrListPositions=[];
  var arrListDepartment=[];

  try {
    await db.query("wacoal_GetUserList_Web_V1",{

    }).then(result => {
      arrUserList=result[0];
      // console.log(arrUserList);
    }).catch(err => {
      console.log(err);
    });
    await db.query('ListPositions_Load_Web_V1',{
      replacements:{}
    }).then(result => {
      arrListPositions=result[0];
    }).catch(err => {
      console.log(err);
    });
    await db.query('ListDepartment_Load_Web_V1').then(result => {
      arrListDepartment=result[0];
    })


      res.render("admin/userListV2", {
        title:'Express',
        userId:req.signedCookies.userId,
        html:'',
        arrUserList:arrUserList,
        arrListPositions:arrListPositions,
        arrListDepartment:arrListDepartment
      });
    
  } catch (error) {
    console.log(error.parent.message);
  }
} );

router.post('/',async(req,res) => {
  var mes='';
  const {Name,FullName,Email,PositionName,DepartmentCode,Status,PositionCode}=req.body;
  if(Status === "submitDelete"){
    try {
      await db.query(`wacoal_ListUser_Delete_Web_V1 @UserName=:UserName`,{
        replacements:{UserName:Name}
      }).then(result => {
        console.log(result);
        mes='ok';
      }).catch(err => {
        mes = ('Error:', err.parent.message);
      })
      
    } catch (error) {
      mes = ('Error: ',error.parent.message);
    }
  }
  if(Status === "submitInsert"){
    try {
      if(Name===""){
        mes = ('Error: Không được để trống User Name');
      } else{
        await   db.query(`wacoal_ListUser_Insert 
        @UserName=:UserName, 
        @FullName=:FullName, 
        @Email=:Email, 
        @PositionsCode=:PositionsCode,
        @DepartmentCode=:DepartmentCode,
        @UserCreate=:UserCreate
        `,{ replacements:{
            UserName:Name,
            FullName:FullName,
            Email:Email,
            PositionsCode:PositionCode,
            DepartmentCode:DepartmentCode,
            UserCreate:req.signedCookies.userId
          }})
      }
        } catch (error) {
      mes = ('Error: ',error.parent.message);
    }
  }
  if(Status === "submitEdit"){
   try {
     await db.query(`wacoal_ListUser_Update_Web_V1 
     @UserName=:UserName,
     @FullName=:FullName,
     @Email=:Email,
     @PositionsCode=:PositionsCode,
     @DepartmentCode=:DepartmentCode,
     @UpdateBy=:UpdateBy
     `,{replacements: {
      UserName:Name,
      FullName:FullName,
      Email:Email,
      PositionsCode:PositionCode,
      DepartmentCode: DepartmentCode,
      UpdateBy:req.signedCookies.userId
     }})
   } catch (error) {
    mes= ('Error: ', err.parent.message);
   }
  }

  res.send(mes);

  // console.log(Status);
  // if(Status === "submitEdit"){
  //   console.log("edit ne");
  // }
  // else if(Status)
  // console.log(req.body);
 
  // const {bsubmit}= req.body;
  // if(bsubmit==="submitSave"){
  //   console.log("dang save ne")
  // }else{
  //   console.log("dang cancel ne")
  // }
});




module.exports = router;
