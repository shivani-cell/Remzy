const express=require("express")
const app=express()
const mongoose=require("mongoose")
app.use(express.json());
require("./userDetails")

const mongourl="mongodb+srv://shimittal:shivani@cluster0.s51nxga.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongourl,{
    useNewUrlParser:true,
}).then(()=>{
    console.log("connected to database");
}).catch((e)=>console.log(e))

const user=mongoose.model("PatientDetails");

app.listen(5000,()=>{
    console.log("server started")
})

app.post("/post",async(req,res)=>{
    console.log(req.body);
    const {data}=req.body;
    if(data=="shivani")
    {
        res.send({status:"ok"})
    }
})

app.post("/register",async(req,res)=>{
    console.log("Hi")
    const {name,email,password,phoneno}=req.body;
    try{
        await user.create({
            name:name,
            email:email,
            password:password,
            phoneno:phoneno,
        });
        res.send({status:"ok"})
    }
    catch(error){
        res.send({status:"error"})
    }
})