const mongoose=require('mongoose')
const{Schema, Mongoose}=mongoose

//model of time where time stamp type string is document
const TimeSchema=new mongoose.Schema({
    timeStamp:{type:String,required:true}
})

const Timemodel=mongoose.model("Time",TimeSchema);


module.exports= Timemodel;