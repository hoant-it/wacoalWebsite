var express = require('express');
const db = require('../../databases/database').sequelize;
var router = express.Router();

var _mesErr = '';

/* GET user page. */
router.get('/', async(req, res) => {
    var mess = _mesErr;
    _mesErr = '';
    // console.log('vao trang')
    var arrLoaiMay = [];
    await db.query("wacoal_MACHINEITEM_Load_V1", {

    }).then(result => {
        arrLoaiMay = result[0];
        //   console.log(arrLoaiMay);
    })
    res.render("kho/KhoLoaiMay", {
        title: 'Wacoal Website-Loai May',
        userId: req.signedCookies.userId,
        html: '',
        arrLoaiMay: arrLoaiMay,
        mess: mess
    });
});

router.post('/', async(req, res, next) => {
    const {
        bsubmit, code, namevn, nameen, x
    } = req.body;
    // alert('aaa');
    // res.send('ok');
    console.log(req.body);
    if (bsubmit === "submitSave") {

        await db.query(`wacoal_MACHINEITEM_Update_V1
        @CODE=:CODE,
        @MACHINENAME_VN=:MACHINENAME_VN,
        @MACHINENAME_EN=:MACHINENAME_EN,
        @UserName=:UserName
   `, {
                replacements: {
                    CODE: code,
                    MACHINENAME_VN: namevn,
                    MACHINENAME_EN: nameen,
                    UserName: req.signedCookies.userId
                }
            }).then(result => {
                console.log(result);
                _mesErr = 'Update is sucessfull';
                return res.redirect('/kho/loaimay');
            })
            .catch(err => {
                _mesErr = ('Error:', err);
                return res.redirect('/kho/loaimay');
            })
        res.redirect('/kho/loaimay');
    }
    if (bsubmit === 'submitAdd') {
        // console.log("dang add ne")
        await db.query(`wacoal_MACHINEITEM_Insert_V1 
    @MACHINENAME_VN=:MACHINENAME_VN,
    @MACHINENAME_EN=:MACHINENAME_EN,
    @UserName=:UserName
    `, {
                replacements: {
                    // LOAICHICODE: code,
                    MACHINENAME_VN: namevn,
                    MACHINENAME_EN: nameen,
                    UserName: req.signedCookies.userId
                }
            }).then(result => {
                console.log(result);
                _mesErr = 'Update is sucessfull';
                return res.redirect('/kho/loaimay');
            })
            .catch(err => {
                _mesErr = ('Error:', err);
                return res.redirect('/kho/loaimay');
            })
    }
    if (bsubmit === 'submitDelete') {
        await db.query('wacoal_MACHINEITEM_Delete_V1 @CODE=:CODE', {
                replacements: {
                    CODE: code
                }
            }).then(resulft => {
                console.log(resulft);
                _mesErr = 'Update is sucessfull';
                return res.redirect('/kho/loaimay');
            })
            .catch(err => {
                _mesErr = ('Error:', err);
                return res.redirect('/kho/loaimay');
            })
    }
});
module.exports = router;