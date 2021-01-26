var express = require('express');
var router = express.Router();
const db= require('../../databases/database').sequelize;
// const importExcel=require('convert-excel-to-json');
const xlsx= require('xlsx');


router.get('/', (req,res) => {
res.render('test',{
  userId:'',
  html:''
})
});
// import excel file vao he thong
const posts=[];
const arrErr=[];

router.post('/', async(req,res) =>{
try {

  var file = req.files.filename;
  var filename=file.name;
  file.mv('./public/excel/'+filename,(err) =>{
  if(err){
    res.send('error');
  } else {
    const workbook=xlsx.readFile('./public/excel/'+filename);
    const worksheet= workbook.Sheets[workbook.SheetNames[0]];
    let post={};
    for(let cell in worksheet){
      const cellAsString = cell.toString();
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
    }
  }
  // console.log(worksheet);
  console.log(posts);
  for (var i = 0 ; i <posts.length; i++){
     db.query(`wacoal_insert_test_v1 @Ho=:Ho, @Ten=:Ten , @NamSinh=''`,{
      replacements: {Ho: posts[i].ho, Ten:posts[i].ten}
    }).then(result=>{
      arrErr=result[0];
    })
  }
  res.send(arrErr);
});
} catch (error) {
  
}

});



module.exports = router;
