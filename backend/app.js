const express=require("express")
const app=express()
const mongoose=require("mongoose")
const multer = require("multer");
app.use(express.json());
require("./models/userDetails")
require("./models/doctorSchema")


//media upload start

const upload = require("./routes/upload");
const Grid = require("gridfs-stream");
app.use("/file", upload);

//media upload end

const user=mongoose.model("userDetails");
const doctor=mongoose.model("doctorDetails");

const mongourl="mongodb+srv://shimittal:shivani@cluster0.s51nxga.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongourl,{
    useNewUrlParser:true,
}).then(()=>{
    console.log("connected to database");
}).catch((e)=>console.log(e))


app.listen(3001,()=>{
    console.log("server started")
})


app.post("/register",async(req,res)=>{
    console.log("Hi")
    console.log(req.body)
    const {name,email,dob,password,phoneno,address,doctordata}=req.body;
    console.log(doctordata[0].gender);
    console.log(doctordata[0].bloodgroup);
    try{
         const doctord= await doctor.create({
            gender:doctordata[0].gender,
            bloodgroup:doctordata[0].bloodgroup,
            address:doctordata[0].address,
            adhaarcard:doctordata[0].adhaarcard,
            permanentAddress:doctordata[0].permanentAddress,
            fatherName:doctordata[0].fatherName,
            motherName:doctordata[0].motherName,
            maritalStatus:doctordata[0].maritalStatus,
            dob:doctordata[0].dob ,
            alternateContactNo:doctordata[0].alternateContactNo,
            service:doctordata[0].service,
            educationalInfo:[],
            experienceDetails:[],
            doctorAccountdetails:[],
            nomineeAccountDetails:[]
        });
        await user.create({
            name:name,
            email:email,
            dob:dob,
            password:password,
            phoneno:phoneno,
            isDoctor:false,
            address:address,
            doctordata:doctord
        });
        res.send({status:"ok"})
    }
    catch(error){
        console.log(error)
        res.send({status:"error"})
    }
})