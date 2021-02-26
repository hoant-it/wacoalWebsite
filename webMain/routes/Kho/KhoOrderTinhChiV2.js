var express = require('express');
const db= require('../../databases/database').sequelize;
var router = express.Router();

var arrOrder=[];
var arrNamSelect=[
    // {values:"",name:''},
    {values:"2102",name:'2102'},
    // {values:"2021",name:'2021'},
]
var _selectNam='';

router.get('/', async(req,res) =>{
    // console.log(arrNamSelect);
res.render('kho/KhoOrderTinhChiV2',{
    title:'TCTDH_wacoal',
    userId:req.signedCookies.userId,
    html:'',
    arrOrder:arrOrder,
    arrNamSelect:arrNamSelect,
    selectNam:_selectNam,
})
})

router.post('/',async(req, res ) => {
    try {
        const {bsubmit,selectNam,selectKH}= req.body;
        console.log(req.body);
        if(bsubmit==="submitSearch"){
            await db.query('wacoal_Load_TinhChiOrder_V4 @ORDERNO=:ORDERNO, @MAKH=:MAKH  ',{
                replacements: { ORDERNO:  selectNam, MAKH:selectKH },
            }).then(result =>{
                arrOrder=result[0];
            });
            _selectNam=selectNam;
            // console.log(_selectNam);
            // _selectThang=selectThang;
            res.redirect('/kho/ordertinhchiv2');
        }else{
          console.log("dang cancel ne")
        }
        
    } catch (error) {
        
    }
  
}) 




module.exports = router;