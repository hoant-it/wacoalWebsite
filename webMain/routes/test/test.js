var express = require('express');
var router = express.Router();
const db= require('../../databases/database').sequelize;

// var arr=[{
//   "id":1,
//   "title":"thể thao",
//   "parent_id":0,
//   "level":0,
//   "href":""
// },
// {
//   "id":2,
//   "title":"xa hoi",
//   "parent_id":0,
//   "level":0,
//   "href":""
// },
// {
//   "id":3,
//   "title":"the thao trong nuoc",
//   "parent_id":1,
//   "level":0,
//   "href":""
// },
// {
//   "id":4,
//   "title":"giao thong",
//   "parent_id":2,
//   "level":0,
//   "href":"/test"
// },
// {
//   "id":5,
//   "title":"Moi truong",
//   "parent_id":2,
//   "level":0,
//   "href":"/test"
// },
// {
//   "id":6,
//   "title":"the thao quoc te 1",
//   "parent_id":1,
//   "level":0,
//   "href":"/test"
// },
// {
//   "id":7,
//   "title":"the thao quoc te 2",
//   "parent_id":3,
//   "level":0,
//   "href":"/home"
// },
// {
//   "id":8,
//   "title":"the thao quoc te 3",
//   "parent_id":3,
//   "level":0,
//   "href":"/test"
// },
// ]
// var arrfinal=data_Tree(arr,)
result=[];
 html=`<ul class="nav side-menu" id="side-menu">`;
function data_Tree(arr,parent_id="0", level=0){
arr.forEach(element => {
  if(element["parent_id"]=== parent_id){
    element["level"]=level;
    if(element["href"]===""){
      html+=`<li class=""><a></i> ${element["title"]} <span class="fa fa-chevron-down"></span></a>`;
      html+=`<ul class="nav child_menu" style="display: block;">`;
    result.push(element);
    child=data_Tree(arr,element["id"],level + 1);
      result.concat(child);
      html+=`</ul>`
    html+=`</li>`
    }
    else{
      html+=`<li class=""><a href="${element["href"]}"> ${element["title"]}</a>`;
    result.push(element);
    child=data_Tree(arr,element["id"],level + 1);
      result.concat(child);
    html+=`</li>`
    }
  }
});
return result;
}
var list_cat=[];
// list_cat=data_Tree(arr,0);
html+=`</ul>`

router.get("/", async(req,res)=>{
  try{
    atauser=["Hoa","Nhung"];
 
    var dataUserA=[]
      await db.query('SELECT TOP 10 UserName,FullName FROM dbo.ListUser',{
    }).then(results => {
      dataUserA=results[0];
      // console.log(list_cat);
    })
    // req.app.locals._userName='TuyetNhung';
  //  console.log(req.app.locals._userName);
  //  req.app.locals._treelistHtml=html;
  //  console.log(req.app.locals._treelistHtml);
    // console.log (html);
    res.render('home',{
      title: 'Express' ,
      thaihoa:req.app.locals._userName,
      datauser:dataUserA,
      // list_cat:list_cat,
      html:req.app.locals._treelistHtml
    })
  }catch (error) {
    res.json({
        result:"failed",
        data:{},
        message:`Query Failed.Error: ${error}`
  });
  }
  });


  router.get("/1", async(req,res) =>{
    html="";
    html=`<ul class="nav side-menu" id="side-menu">`;
    await db.query('sp_Wacoal_LoadMenuWeb_V1 13,101',{
      // replacement
    }).then(result => {
      arr=result[0];
      // console.log(arr);
      list_cat=data_Tree(arr,"0");
      html+=`</ul>`
      // console.log(list_cat);
      console.log(html);
      req.app.locals._treelistHtml=html;
    });

    var dataUserA=[]
    await db.query('SELECT TOP 10 UserName,FullName FROM dbo.ListUser',{
  }).then(results => {
    dataUserA=results[0];
    // console.log(list_cat);
  })
    req.app.locals._userName='TuyetNhung';
    res.render('home',{
      title:'Express',
      thaihoa:req.app.locals._userName,
      datauser:dataUserA,
      html:req.app.locals._treelistHtml
    })
  })


module.exports = router;
