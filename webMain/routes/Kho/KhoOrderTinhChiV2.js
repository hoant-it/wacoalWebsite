var express = require('express');
const db= require('../../databases/database').sequelize;
var router = express.Router();


var arrNamSelect=[
    // {values:"",name:''},
    // {values:"2102",name:'2102'},
    // {values:"2021",name:'2021'},
]


router.get('/', async(req,res) =>{
    await db.query('wacoal_DONHANGHEAD_Load_Web_V1').then(result => {
        arrNamSelect=result[0]
    }).catch(err => {
        console.log(err.message);
    })
    // console.log(arrNamSelect);
res.render('kho/KhoOrderTinhChiV2',{
    title:'TCTDH_wacoal',
    userId:req.signedCookies.userId,
    html:'',
    arrOrder:[],
    arrNamSelect:arrNamSelect,
    selectNam:'',
})
})

router.post('/',async(req, res ) => {
    var arrOrder=[];
    try {
        const {bsubmit,selectNam,selectKH}= req.body;
        console.log(req.body);
        if(bsubmit==="submitSearch"){
            await db.query('wacoal_Load_TinhChiOrder_V4 @ORDERNO=:ORDERNO, @MAKH=:MAKH  ',{
                replacements: { ORDERNO:  selectNam, MAKH:selectKH },
            }).then(result =>{
                arrOrder=result[0];
            });
      
            // console.log(_selectNam);
            // _selectThang=selectThang;
            res.render('kho/KhoOrderTinhChiV2',{
                title:'TCTDH_wacoal',
                userId:req.signedCookies.userId,
                html:'',
                arrOrder:arrOrder,
                arrNamSelect:arrNamSelect,
                selectNam:selectNam,
            })
        }else{
          console.log("dang cancel ne")
        }
        
    } catch (error) {
        
    }
  
}) 




module.exports = router;