const mongoose=require('mongoose')
const electionSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    partyname:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    type:{
        type:String,
        required:true
    }

})
const Candidate=mongoose.model('CANDIDATE',electionSchema)
module.exports=Candidate