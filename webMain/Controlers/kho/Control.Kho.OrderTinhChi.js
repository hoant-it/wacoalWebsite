
const db= require('../../databases/database').sequelize;

module.exports.OrderTinhChiLoad = async (req,res) =>{

    var arrNamSelect=[];
    var arrKhachHang=[];
    await db.query('wacoal_DONHANGHEAD_Load_Web_V1').then(result => {
        arrNamSelect=result[0]
    }).catch(err => {
        console.log(err.message);
    })

    await db.query('wacoal_KHACHHANG_load_Web_V1').then(result => {
        arrKhachHang=result[0]
    }).catch(err => {
        console.log(err.message);
    })
    // console.log(arrNamSelect);
    res.render('kho/KhoOrderTinhChiGridViewDev',{
        title:'TCTDH_wacoal',
        userId:req.signedCookies.userId,
        html:'',
        arrNamSelect:arrNamSelect,
    })
  }


  module.exports.OrderTinhChiPost = async (req,res) =>{
    const{oderNo,khachHang}=req.body;
    var arrMaHangmiss=[];
    await db.query('wacoal_OrderTinhChiMaHangMiss_Web_v1 @ORDERNO=:ORDERNO, @MAKH=:MAKH',{
        replacements:{ORDERNO:oderNo,MAKH:khachHang}
    }
    ).then(result => {
        arrMaHangmiss=result[0];
    }).catch(err => {
        console.log(err.message);
    });
    res.send(arrMaHangmiss);
  }
  