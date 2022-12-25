const express=require("express")
const app=express()
const mongoose=require("mongoose")
app.use(express.json());
require("./models/userDetails")
require("./models/doctorSchema")
const mongourl="mongodb+srv://shimittal:shivani@cluster0.s51nxga.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongourl,{
    useNewUrlParser:true,
}).then(()=>{
    console.log("connected to database");
}).catch((e)=>console.log(e))

const user=mongoose.model("userDetails");
const doctor=mongoose.model("doctorDetails");
app.listen(5000,()=>{
    console.log("server started")
})



app.post("/register",async(req,res)=>{
    console.log("Hi")
    console.log(req.body)
    const {name,email,password,phoneno,address,doctordata}=req.body;
    console.log(address);
    //console.log(address[country]);
    console.log("cfhjgsd" ,doctordata);
    console.log(doctordata.service);
    console.log(doctordata.gender);
    try{
         const doctord=await doctor.create({
            gender:doctordata.gender,
            bloodgroup:doctordata.bloodgroup,
            address:doctordata.address,
            adhaarcard:doctordata.adhaarcard,
            permanentAddress:doctordata.permanentAddress,
            fatherName:doctordata.fatherName,
            motherName:doctordata.motherName,
            maritalStatus:doctordata.maritalStatus,
            dob:doctordata.dob ,
            alternateContactNo:doctordata.alternateContactNo,
            service:doctordata.service,
            educationalInfo:[],
            experienceDetails:[],
            doctorAccountdetails:[],
            nomineeAccountDetails:[]
        });
        await user.create({
            name:name,
            email:email,
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