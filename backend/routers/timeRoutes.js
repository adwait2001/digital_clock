const express=require('express')
const Time=require('../models/timeModel'); 

const router=express.Router();//routes to create time APIS

//API to post or store time
router.post("/",async(req,res)=>{
    const time=new Time(req.body);
    const newTime=await time.save();
    if (newTime) {
        return res.status(201).send({ message: 'Time lapse added', data: newTime });
      }
      return res.status(500).send({ message: ' Time lapse not added.' });
})

//API to get all the orders
router.get("/",async(req,res)=>{
    const times=await Time.find({}).sort({_id:-1}) //sort in descending order so latest lap is displayed at top
    res.send(times);
  })
  

module.exports=router;