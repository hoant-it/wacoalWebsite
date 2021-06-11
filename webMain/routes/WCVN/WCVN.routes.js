const express = require('express');
const router = express.Router();
const VNWCControl= require('../../Controlers/VNWC/VNWC.Control');


router.get('/VNWC_SDTC', VNWCControl.WCVN_SDTC);

module.exports = router;