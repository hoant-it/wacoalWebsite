var express = require('express');
const db= require('../../databases/database').sequelize;
// var CryptoJS = require("crypto-js");
var router = express.Router();

// /* GET treelist. */
router.get('/treelist/:ruleCode',async(req,res) => {
    const{ruleCode}=req.params
    try {
        await db.query("wacoal_ListMenu_By_Rule_Load_Web_v2 @PermisionGroupCode=:PermisionGroupCode ",{
            replacements:{PermisionGroupCode:ruleCode}

        }).then(function(data){
            res.json({
                // result:"ok",
                data:data[0],
                // message:'query list NGGROUPASSYPR sucessfully'
            })
        })
        
    } catch (error) {
        res.json({
            result:"failed",
            data:{},
            message:`Query Failed. Error: ${error}`
        })
    };
});


router.get('/gridview/:ruleCode', async( req, res) => {
    const{ruleCode}=req.params
    try {
        await db.query('wacoal_ListMenu_Load_web_V1 @PermisionGroupCode=:PermisionGroupCode',{
            replacements:{PermisionGroupCode:ruleCode}
        }).then(data=>{
            res.json({
                data:data[0],
                message:'ok'
            })
        }).catch(err => {
            res.json({
                data:[],
                message:"err: "+err.message
            })
        })
        
    } catch (error) {
        res.json({
            data:{},
            message:`Query Failed. Error: ${error}`
        })
    }
})

router.get('/gridviewRuleInRole/:roleCode', async( req, res ) => {
    const{roleCode}=req.params;
 
    try {
        await db.query('wacoal_Rule_In_Role_Load_Web_V1 @GroupUserCode=:GroupUserCode',{
            replacements:{GroupUserCode:roleCode}
        }).then(result => {
            res.json({
                data:result[0]
            })
        }).catch(err =>{
            res.json({
                data:[],
                message:"err: "+err.message
            })
        })
    } catch (error) {
        res.json({
            data:{},
            message:`Query Failed. Error: ${error}`
        })
    }
})

router.get('/gridviewRuleList/:roleCode', async( req, res ) => {
    const{roleCode}=req.params;
 
    try {
        await db.query('wacoal_ListPermisionGroup_Load_web_V1 @GroupUserCode=:GroupUserCode',{
            replacements:{GroupUserCode:roleCode}
        }).then(result => {
            res.json({
                data:result[0]
            })
        }).catch(err =>{
            res.json({
                data:[],
                message:"err: "+err.message
            })
        })
    } catch (error) {
        res.json({
            data:{},
            message:`Query Failed. Error: ${error}`
        })
    }
})


router.get('/gridviewUserInRole/:roleCode', async( req, res ) => {
    const{roleCode}=req.params;
 
    try {
        await db.query('wacoal_UserInRole_Load_Web_V1 @GroupUserCode=:GroupUserCode',{
            replacements:{GroupUserCode:roleCode}
        }).then(result => {
            res.json({
                data:result[0]
            })
        }).catch(err =>{
            res.json({
                data:[],
                message:"err: "+err.message
            })
        })
    } catch (error) {
        res.json({
            data:{},
            message:`Query Failed. Error: ${error}`
        })
    }
})

router.get('/gridviewUserList/:roleCode', async( req, res ) => {
    const{roleCode}=req.params;
 
    try {
        await db.query('wacoal_ListUser_load_v1 ',{
            replacements:{}
        }).then(result => {
            res.json({
                data:result[0]
            })
        }).catch(err =>{
            res.json({
                data:[],
                message:"err: "+err.message
            })
        })
    } catch (error) {
        res.json({
            data:{},
            message:`Query Failed. Error: ${error}`
        })
    }
})

router.get('/khoOrderTinhchiGridview/:Order/:KhachHang', async( req, res ) => {
    const{Order,KhachHang}=req.params;
 console.log(req.params);
      
    try {
        await db.query('wacoal_Load_TinhChiOrder_V6 @ORDERNO=:ORDERNO, @MAKH=:MAKH ',{
            replacements:{ORDERNO:  Order, MAKH:KhachHang}
        }).then(result => {
            res.json({
                data:result[0]
            })
        }).catch(err =>{
            res.json({
                data:[],
                message:"err: "+err.message
            })
        })
    } catch (error) {
        res.json({
            data:{},
            message:`Query Failed. Error: ${error}`
        })
    }
})


router.get('/khoOrderTinhchiGridviewMaHangMiss/:Order/:KhachHang', async( req, res ) => {
    const{Order,KhachHang}=req.params;
 console.log(req.params);
      
    try {
        await db.query('wacoal_OrderTinhChiMaHangMiss_Web_v1 @ORDERNO=:ORDERNO, @MAKH=:MAKH ',{
            replacements:{ORDERNO:  Order, MAKH:KhachHang}
        }).then(result => {
            res.json({
                data:result[0]
            })
        }).catch(err =>{
            res.json({
                data:[],
                message:"err: "+err.message
            })
        })
    } catch (error) {
        res.json({
            data:{},
            message:`Query Failed. Error: ${error}`
        })
    }
})


router.get('/Khowacoal_KHACHHANG_load_Web_V1', async( req, res ) => {
    const{Order,KhachHang}=req.params;
 console.log(req.params);
      
    try {
        await db.query('wacoal_KHACHHANG_load_Web_V1',{
           
        }).then(result => {
            res.json({
                data:result[0]
            })
        }).catch(err =>{
            res.json({
                data:[],
                message:"err: "+err.message
            })
        })
    } catch (error) {
        res.json({
            data:{},
            message:`Query Failed. Error: ${error}`
        })
    }
})

module.exports = router;
