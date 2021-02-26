var express = require('express');
const db = require('../../databases/database').sequelize;
var router = express.Router();

var _mesErr = '';

/* GET user page. */
router.get('/', async(req, res) => {
    var mess = _mesErr;
    _mesErr = '';
    // console.log('vao trang')
    var arrLoaiChi = [];
    await db.query("wacoal_LOAICHIITEM_Load_V1", {

    }).then(result => {
        arrLoaiChi = result[0];
        //   console.log(arrLoaiChi);
    })
    res.render("kho/KhoLoaiChi", {
        title: 'Express',
        userId: req.signedCookies.userId,
        html: '',
        arrLoaiChi: arrLoaiChi,
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

        await db.query(`wacoal_LOAICHIITEM_Update_V1
        @LOAICHICODE=:LOAICHICODE,
        @LOAICHINAME_VN=:LOAICHINAME_VN,
        @LOAICHINAME_EN=:LOAICHINAME_EN,
        @UserName=:UserName
   `, {
                replacements: {
                    LOAICHICODE: code,
                    LOAICHINAME_VN: namevn,
                    LOAICHINAME_EN: nameen,
                    UserName: req.signedCookies.userId
                }
            }).then(result => {
                console.log(result);
                _mesErr = 'Update is sucessfull';
                return res.redirect('/kho/loaichi');
            })
            .catch(err => {
                _mesErr = ('Error:', err);
                return res.redirect('/kho/loaichi');
            })
        res.redirect('/kho/loaichi');
    }
    if (bsubmit === 'submitAdd') {
        // console.log("dang add ne")
        await db.query(`wacoal_LOAICHIITEM_Insert_V1 
    @LOAICHICODE=:LOAICHICODE,
    @LOAICHINAME_VN=:LOAICHINAME_VN,
    @LOAICHINAME_EN=:LOAICHINAME_EN,
    @UserName=:UserName
    `, {
                replacements: {
                    LOAICHICODE: code,
                    LOAICHINAME_VN: namevn,
                    LOAICHINAME_EN: nameen,
                    UserName: req.signedCookies.userId
                }
            }).then(result => {
                console.log(result);
                _mesErr = 'Update is sucessfull';
                return res.redirect('/kho/loaichi');
            })
            .catch(err => {
                _mesErr = ('Error:', err);
                return res.redirect('/kho/loaichi');
            })
    }
    if (bsubmit === 'submitDelete') {
        await db.query('wacoal_LOAICHIITEM_Delete_V1 @LOAICHICODE=:LOAICHICODE', {
                replacements: {
                    LOAICHICODE: code
                }
            }).then(resulft => {
                console.log(resulft);
                _mesErr = 'Update is sucessfull';
                return res.redirect('/kho/loaichi');
            })
            .catch(err => {
                _mesErr = ('Error:', err);
                return res.redirect('/kho/loaichi');
            })
    }
});
module.exports = router;