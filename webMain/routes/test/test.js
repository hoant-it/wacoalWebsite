var express = require('express');
var router = express.Router();
const db= require('../../databases/database').sequelize;
// const importExcel=require('convert-excel-to-json');
const xlsx= require('xlsx');
const del=require('del');


var mess='';

router.get('/', (req,res) => {
  // console.log(message);
res.render('ajaxtest',{
  title:'test',
  userId:'',
  html:'',
  mess: mess,
})
mess='';
});
// import excel file vao he thong
// router.post('/', async(req,res) =>{
//   console.log(req.body);
//   mess="err";
//   res.redirect('/test')

// });

router.post('/', async (req, res) =>{  
  // const {Name,FullName,Email,PositionName,DepartmentCode}=res.body;
  // console.log(Nareq.body.Name);
	// console.log('body: ' + JSON.stringify(req.body));
	res.send(req.body);

});

module.exports = router;
