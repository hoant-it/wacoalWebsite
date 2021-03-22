var express = require('express');
const db= require('../../databases/database').sequelize;
// var CryptoJS = require("crypto-js");
var router = express.Router();

/* GET user page. */
router.get('/', async (req,res) => {
  var ListDepartment=[];


  try {
    await db.query("ListDepartment_Load_Web_V1",{

    }).then(result => {
      ListDepartment=result[0];
      // console.log(ListDepartment);
    }).catch(err => {
      console.log(err);
    });

      res.render("admin/ListDeparment", {
        title:'Express',
        userId:req.signedCookies.userId,
        html:'',
        ListDepartment:ListDepartment,
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
          }}).then(result => {
          console.log(result);
          mes = 'ok';
          }).catch(err => {
          mes = ('Error:', err.parent.message);
          })
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
     }}).then(resulf =>{
       mes='ok';
     }).catch(err => {
       mes= ('Error', err.parent.message);
     })
     
   } catch (error) {
    mes= ('Error', err.parent.message);
   }
  }

  res.send(mes);

});




module.exports = router;
