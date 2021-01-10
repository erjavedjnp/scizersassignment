const express=require('express') 
const route=express.Router() 
const mongoose = require('mongoose')

//database connection
require('../models/db_connection')

const Contact = mongoose.model('contact') 

  route.get('',(req,res)=>{
    res.render('index')

  }) 

  route.post('/getAllContact',async(req,res)=>{
    let searchData = req.body.data
    var contact
     try {
        contact =  await Contact.find({$or:[{mobile: { $regex: '.*' + searchData.split('').join('.*')  + '.*',$options: 'i'}},{name: { $regex: '.*' + searchData.split('').join('.*') + '.*',$options: 'i'}}]},'name mobile').sort({'name':1}) 
        } catch (error) {
          console.error(error);
        } 
    return res.json(contact) 
  })

  route.post('/getDataWithID',async(req,res)=>{
    var id = req.body.id
    var contact
     try {
        contact =  await Contact.findOne({},'name mobile').where('_id').equals(id)
        } catch (error) {
          console.error(error);
        } 
    return res.json(contact) 
  })

  route.post('/addtoContactData',async(req,res)=>{
    // taking data from client 
    var name = req.body.contact.name  
    var mobile =  req.body.contact.mobile

    data={name:name, mobile:mobile}
    var contact = new Contact(data);
     
       contact.save((err)=>{
         if(err){
           if(err.code==11000)
            return res.json('<p class="text-danger">This Contact is already Added.</p>')
           return  res.json('<p class="text-warning">something went wrong with database</p>')
         }
        return res.json('<p class="text-success">One New Contact Added Successfully.</p>')
      })  
   // if(error.name === 'MongoError' && error.code === 11000) 
     //return res.json('error')

  })

  route.post('/deleteContact',async(req,res)=>{
    // taking data from client 
    var id = req.body.id  
     try { 
      await Contact.findOneAndDelete()
            .where('_id').equals(id)
      return res.json('one contact has been deletd from your contact list')
    } catch (error) {
      console.error(error);
      return res.json('Something went wrong!') 
     
    } 
  }) 

  route.post('/editContact',async(req,res)=>{
    // taking data from client 
    var id = req.body.data.id
    var name = req.body.data.name
    var mobile = req.body.data.mobile 
    try { 
      await Contact.updateOne({},{name:name, mobile:mobile})
            .where('_id').equals(id)
      return res.json('<p class="text-info">One contact has been updated just.</p>')
    } catch (error) {
      console.error(error);
      return res.json('Something went wrong!') 
     
    }
    return res.json('Contact has been deleted successfully')

  })
  
   

module.exports=route