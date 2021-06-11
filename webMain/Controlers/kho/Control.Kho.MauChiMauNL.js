
const db= require('../../databases/database').sequelize;

module.exports.MauchiMauNLLoad = async (req,res) =>{
    res.render('kho/MauChi_MauNl',{
        title:'MCMNL_wacoal',
        userId:req.signedCookies.userId,
        html:'',
    })
  }

  module.exports.MauChiMauNLUpdate= async (req, res ) =>{
      let lError={}
      const {mauNL,loaiChi,mauChi,status}= req.body;
      console.log(req.body);
     if(status==='submitInsert'){
         try {
            await db.query(`wacoal_MAUCHIMAUNL_Insert_Web_V1 
            @MAUNL=:MAUNL, 
            @LOAICHI=:LOAICHI, 
            @MAUCHI=:MAUCHI,
            @UserName=:UserName`,{
                replacements:{
                    MAUNL:mauNL,
                    LOAICHI:loaiChi,
                    MAUCHI:mauChi,
                    UserName:req.signedCookies.userId
                }
            }).then(result => {
                console.log(result);
                lError.errMes='sucessfull';
                lError.statusErr=true;
            })
         } catch (error) {
            lError.errMes=('Error: ',error.parent.message);
            lError.statusErr=false;
         }
     }
     if(status==="submitEdit"){
         try {
            await db.query(`wacoal_MAUCHIMAUNL_Update_Web_V1 
            @MAUNL=:MAUNL, 
            @LOAICHI=:LOAICHI, 
            @MAUCHI=:MAUCHI,
            @UserName=:UserName`,{
                replacements:{
                    MAUNL:mauNL,
                    LOAICHI:loaiChi,
                    MAUCHI:mauChi,
                    UserName:req.signedCookies.userId
                }
            }).then(result => {
                console.log(result);
                lError.errMes='sucessfull';
                lError.statusErr=true;
            })
         } catch (error) {
            lError.errMes=('Error: ',error.parent.message);
            lError.statusErr=false;
         }
     }
     console.log(lError);
     res.send(lError);
  }

  module.exports.MauChiMauNLDelete= async (req, res ) => {
    let lError={};
    console.log(req.body);
      const{mauNl,LoaiChi}=req.body;
      try {
        await db.query(`MAUCHIMAUNL_Delete_Web_V1 
        @MAUNL=:MAUNL,
        @LOAICHI=:LOAICHI`,{
            replacements:{MAUNL:mauNl,LOAICHI:LoaiChi}
        }).then(result => {
            console.log(result);
            lError.errMes='successfull';
            lError.statusErr=true;
        }).catch(err =>{
            lError.errMes=('Error: ',err.parent.message);
            lError.statusErr=false;
        });
      } catch (error) {
        lError.errMes=('Error: ',error.parent.message);
        lError.statusErr=false;
      }
      res.send(lError);
  }