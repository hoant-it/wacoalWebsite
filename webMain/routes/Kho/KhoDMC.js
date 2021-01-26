var express = require('express');
const db= require('../../databases/database').sequelize;
var router = express.Router();


router.get('/', async(req,res) =>{
    var arrMachine=[]
    await db.query(' SELECT CODE,MACHINENAME_VN FROM dbo.MACHINEITEM ',{

    }).then(result => {
        arrMachine=result[0];
    });
    console.log
res.render('kho/DMC',{
    title:'Express',
    userId:req.signedCookies.userId,
    html:req.signedCookies.html,
    arrUserList:null,
    arrMachine:arrMachine
})
})


router.post('/', async ( req, res ) =>{
    const{congdoan,loaimay}=req.body;
    console.log('cong doan' +congdoan);
    console.log('loai may' +loaimay);

})

module.exports = router;