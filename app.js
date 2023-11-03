const mongoose=require('mongoose')
const express=require('express')
const dotenv=require('dotenv')
const app=express()
const router=express.Router()
const auth=require('./auth')
const auth1=require('./auth1')
const Authenticate=require('./auth2')
dotenv.config({path:'./config.env'})
const DB=process.env.DATABASE
const PORT=process.env.PORT
app.use(express.json())
app.use(require('./auth'))
app.use(require('./auth1'))
mongoose.connect(DB).then(()=>{
    console.log(`connection is successful`)
}).catch((err)=>
{
    console.log(`no connection`)
})
app.get('/',(req,res)=>
{
    res.send(`this is home`)
    console.log(`home`)
})
router.get('/display',Authenticate,(req,res)=>
{
    res.send(req.rootUser)
    console.log(`about`)
})
app.listen(PORT,()=>{
    console.log(`server is listening on port number ${PORT}`)
})
