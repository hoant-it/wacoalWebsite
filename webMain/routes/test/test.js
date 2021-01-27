var express = require('express');
var router = express.Router();
const db= require('../../databases/database').sequelize;
// const importExcel=require('convert-excel-to-json');
const xlsx= require('xlsx');
const del=require('del');
const alert=require('alert')


var message='';

router.get('/', (req,res) => {
res.render('test',{
  userId:'',
  html:'',
  message:message
})
});
// import excel file vao he thong



router.post('/', async(req,res) =>{
try {
 const format=["Ho","Ten","Namsin"]
  const posts=[];
  var file = req.files.filename;
  var filename=file.name;
  file.mv('./public/excel/'+filename,(err) =>{
  if(err){
    res.send('error');
  } else {
    const workbook=xlsx.readFile('./public/excel/'+filename);
    const worksheet= workbook.Sheets[workbook.SheetNames[0]];
    let post={};
   var i=0;
    for(let cell in worksheet){
      const cellAsString = cell.toString();
      console.log(cellAsString);
      console.log(worksheet[cell].v);
      if(i===1){
        if(worksheet[cell].v !== format[0]){
         message='err';
         return res.redirect('/test');
        }
      }
      if(cellAsString[1]!=='r' && cellAsString !== 'm'  && cellAsString[1]>1){
        if(cellAsString[0]==='A'){
          post.ho=worksheet[cell].v;
        }
        if(cellAsString[0]==='B'){
          post.ten=worksheet[cell].v;
        }
        if(cellAsString[0]==='C'){
          post.ngaysinh=worksheet[cell].v;
          posts.push(post);
          post = {};
        }
      
      }
      i++;
    }
  }
  for (var i = 0 ; i <posts.length; i++){
     db.query(`wacoal_insert_test_v1 @Ho=:Ho, @Ten=:Ten , @NamSinh=''`,{
      replacements: {Ho: posts[i].ho, Ten:posts[i].ten}
    }).then(result=>{
      if(result[0][0].StatusErr==='Err'){
        message+='Err';
      }
      else{
        message='ok';
      }
      // console.dir(result[0][0].StatusErr);
    })
  }
  del(['./public/excel/'+filename]);
  console.log(message);
 
  res.redirect('/test')
});
} catch (error) {
  console.log(error);
}

});



module.exports = router;
