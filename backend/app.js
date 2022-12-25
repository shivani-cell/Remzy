const express=require("express")
const app=express()
const mongoose=require("mongoose")
app.use(express.json());
require("./models/userDetails")

const mongourl="mongodb+srv://shimittal:shivani@cluster0.s51nxga.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongourl,{
    useNewUrlParser:true,
}).then(()=>{
    console.log("connected to database");
}).catch((e)=>console.log(e))

const user=mongoose.model("userDetails");

app.listen(5000,()=>{
    console.log("server started")
})



app.post("/register",async(req,res)=>{
    console.log("Hi")
    console.log(req.body)
    const {name,email,password,phoneno,address}=req.body;
    try{
        await user.create({
            name:name,
            email:email,
            password:password,
            phoneno:phoneno,
            isDoctor:false,
            address:req.body.address
        });
        res.send({status:"ok"})
    }
    catch(error){
        res.send({status:"error"})
    }
})