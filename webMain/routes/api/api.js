var express = require('express');
const db= require('../../databases/database').sequelize;
// var CryptoJS = require("crypto-js");
var router = express.Router();
const ControlLoaiChi=require('../../Controlers/api/api.LoaiChi');
const ControlMauChiMauNL=require('../../Controlers/api/api.MauChiMauNL');
const ControlApiRule=require('../../Controlers/api/api.Rule');
const ControlApiRole=require('../../Controlers/api/api.Role');
const ControlApiTinhChi=require('../../Controlers/api/api.TinhChi');
const LoaiMayApi=require('../../Controlers/api/LoaiMay.Api');
const CongThucTinhChiApi= require('../../Controlers/api/CongThucTinhChi.api');
const KhachHangApi=require('../../Controlers/api/api.KhachHang');
// /* GET treelist. */

//rule
router.get('/treelist/:ruleCode',ControlApiRule.MenuListByRuleLoad);
router.get('/gridview/:ruleCode',ControlApiRule.MenuListLoadWeb);

//role
router.get('/gridviewRuleInRole/:roleCode',ControlApiRole.RuleInRoleLoad);
router.get('/gridviewRuleList/:roleCode',ControlApiRole.ListPermisionGroupLoad);
router.get('/gridviewUserInRole/:roleCode', ControlApiRole.UserInRoleLoad);
router.get('/gridviewUserList/:roleCode', ControlApiRole.UserListLoad);

//Tinhchi
router.get('/khoOrderTinhchiGridview/:Order/:KhachHang', ControlApiTinhChi.khoOrderTinhchiGridview);
router.get('/khoOrderTinhchiGridviewMaHangMiss/:Order/:KhachHang', ControlApiTinhChi.khoOrderTinhchiGridviewMaHangMiss);
router.get('/Khowacoal_KHACHHANG_load_Web_V1', KhachHangApi.Khowacoal_KHACHHANG_load_Web_V1);

//MAUCHIMAUNL
router.get('/wacoal_MAUCHIMAUNL_Load_Web_V1', ControlMauChiMauNL.MauChiMauNLLoad)

//loai chi
router.get('/wacoal_LOAICHIITEM_Load_V1',ControlLoaiChi.LoaiChiLoad)
//loai may
router.get('/wacoal_LoaiMay_Load_Web_V1',LoaiMayApi.wacoal_LoaiMay_Load_Web_V1)

//Cong Thuc Tinh Chi
router.get('/wacoal_CONGTHUCTINHCHIITEM_Load_Web_V1',CongThucTinhChiApi.wacoal_CONGTHUCTINHCHIITEM_Load_Web_V1)

//Vi Tri Chi
router.get(`/wacoal_VITRICHIITEM_Load_Web_V1`,ControlApiTinhChi.wacoal_VITRICHIITEM_Load_Web_V1);

module.exports = router;
