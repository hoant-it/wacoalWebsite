const express = require('express');
const router = express.Router();
const ControlKhoMauChiMauNL = require('../../Controlers/kho/Control.Kho.MauChiMauNL');
const MiddleKhoMauChiMauNL=require('../../middlewares/kho/middle.MauchiMauNL')
const ControlKhoOrderTinhChi = require('../../Controlers/kho/Control.Kho.OrderTinhChi');
const ControlKhoSDTC = require('../../Controlers/kho/Control.Kho.SDTC');
const ControlKhoQTQLNVL = require('../../Controlers/kho/Control.Kho.QTQLNVL');
// const ControlQTDC=require('../../Controlers/kho/Control.Kho.QTDC');
const ControlKhoOerInputV2= require('../../Controlers/kho/Control.Kho.OrderInputV2');
const ControlKhoCongDoanMaHangInput= require('../../Controlers/kho/Control.Kho.CongDoanMaHangInput');
const ControlKhoCDMHChiKhacMau=require('../../Controlers/kho/Control.Kho.CDMHchikhacmauinput');
const ControlKhoMauNLMaUMaHang=require('../../Controlers/kho/Control.Kho.MauNLMauMaHang');
const LoaiChiControl= require('../../Controlers/kho/LoaiChi.Control');
const LoaiMayControl= require('../../Controlers/kho/LoaiMay.Control');
const CongThucTinhChiControl=require('../../Controlers/kho/CongThucTinhChi.Control');
const VitriChiControl= require('../../Controlers/kho/VitriChi.Control');
const KhachHangControl= require('../../Controlers/kho/KhachHang.Control');
const QuyTrinhNhanHangControl=require('../../Controlers/kho/QuyTrinhNhanHang.control');


//MauChi_MauNL
router.get('/MauChiMauNl', ControlKhoMauChiMauNL.MauchiMauNLLoad);
router.post('/MauChiMauNl',MiddleKhoMauChiMauNL.MauChiMauNLUpdateMiddle, ControlKhoMauChiMauNL.MauChiMauNLUpdate);
router.post('/MauChiMauNl/delete', ControlKhoMauChiMauNL.MauChiMauNLDelete);
//OrderTinhChi
router.get('/KhoOderTinhChiGridViewDev',ControlKhoOrderTinhChi.OrderTinhChiLoad)
router.post('/KhoOderTinhChiGridViewDev',ControlKhoOrderTinhChi.OrderTinhChiPost)
//KhoSDTC
router.get('/khoSDTC',ControlKhoSDTC.SDTCGet)
//QTQLNVL
router.get('/QTQLNVL',ControlKhoQTQLNVL.QTQLNVLGet)
//KhoQTDatChi
// router.get('KhoQTDatChi',ControlQTDC.QTDC)
//inputorderv2
router.get('/inputorderv2',ControlKhoOerInputV2.OrderInputV2Load);
router.post('/inputorderv2',ControlKhoOerInputV2.OrderInputV2Post);
//congodanmahanginput
router.get('/congodanmahanginput',ControlKhoCongDoanMaHangInput.CongDoanMaHangGet);
router.post('/congodanmahanginput',ControlKhoCongDoanMaHangInput.CongdoanMaHangPost);
//CDMHchikhacmauinput
router.get('/CDMHchikhacmauinput',ControlKhoCDMHChiKhacMau.CDMHChiKhacMauGet);
router.post('/CDMHchikhacmauinput',ControlKhoCDMHChiKhacMau.CDMHChiKhacMauPost);
//MauNLMauMaHang
router.get('/MauNLMauMaHang',ControlKhoMauNLMaUMaHang.MauNLMauMaHangGet);
router.post('/MauNLMauMaHang',ControlKhoMauNLMaUMaHang.MauNLMauMaHangPost);
//Loai Chi
router.get('/loaichi',LoaiChiControl.LoaiChiLoad);
router.post('/loaichi',LoaiChiControl.LoaiChiUpdate);
router.post('/loaichi/delete',LoaiChiControl.LoaiChiDelete);
// router.post('/MauNLMauMaHang',ControlKhoMauNLMaUMaHang.MauNLMauMaHangPost);
router.get('/loaimay',LoaiMayControl.LoaiMayLoad);
router.post('/loaimay',LoaiMayControl.LoaiMayUpdate);
router.post('/loaimay/delete',LoaiMayControl.LoaiMayDelete);

//CongThucTinhChi
router.get('/congthuctinhchi',CongThucTinhChiControl.CongThucTinhChiLoad);
router.post('/congthuctinhchi',CongThucTinhChiControl.CongThuCTinhchiUpdate);
router.post('/congthuctinhchi/delete',CongThucTinhChiControl.CongThucTinhChiDelete);

//Vi Tri Chi
router.get('/ViTriChi',VitriChiControl.ViTriChiLoad);
router.post('/ViTriChi',VitriChiControl.ViTriChiUpdate);
router.post('/ViTriChi/delete',VitriChiControl.VitriChiDelete);

//Khách Hàng
router.get('/KhachHang',KhachHangControl.KhachHangLoad);
router.post('/KhachHang',KhachHangControl.UpdateKhachHang);
router.post('/KhachHang/delete',KhachHangControl.KhachHangDelete);

//Lien lac nha cung cap
//LienLacThieuDu
router.get('/LienLacThieuDu',QuyTrinhNhanHangControl.LienLacThieuDu);
//LIENLACETDETAQTY
router.get('/LIENLACETDETAQTY',QuyTrinhNhanHangControl.LIENLACETDETAQTY);
//LIENLACLOINVL
router.get('/LIENLACLOINVL',QuyTrinhNhanHangControl.LIENLACLOINVL);
//LIENLACDIEUCHINHNGAYGUINVL
router.get('/LIENLACDIEUCHINHNGAYGUINVL',QuyTrinhNhanHangControl.LIENLACDIEUCHINHNGAYGUINVL);
//NHANHANG
router.get('/NHANHANG',QuyTrinhNhanHangControl.NHANHANG);
//SXNVLLENKE
router.get('/SXNVLLENKE',QuyTrinhNhanHangControl.SXNVLLENKE);
//LAYHANG
router.get('/LAYHANG',QuyTrinhNhanHangControl.LAYHANG);
//KIEMTRACHATLUONG
router.get('/KIEMTRACHATLUONG',QuyTrinhNhanHangControl.KIEMTRACHATLUONG);

//GIAOHANG
router.get('/GIAOHANG',QuyTrinhNhanHangControl.GIAOHANG);

//QLNVLDU
router.get('/QLNVLDU',QuyTrinhNhanHangControl.QLNVLDU);

module.exports = router;