const express=require('express') 
const route=express.Router() 


  route.get('',(req,res)=>{
    res.render('index')

  })
  route.get('/getAllContact',(req,res)=>{
    return res.json('ok')

  })
  

module.exports=route