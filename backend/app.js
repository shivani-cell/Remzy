const express=require("express")
const app=express()
const mongoose=require("mongoose")
const multer = require("multer");
app.use(express.json());
require("./models/userDetails")
require("./models/doctorSchema")
//const User = connection.models.Userinfo;

//media upload start

//const upload = require("./routes/upload");
const Grid = require("gridfs-stream");


//media upload end

const user=mongoose.model("userDetails");
const doctor=mongoose.model("doctorDetails");

const mongourl="mongodb+srv://shimittal:shivani@cluster0.s51nxga.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongourl,{
    useNewUrlParser:true,
}).then(()=>{
    console.log("connected to database");
}).catch((e)=>console.log(e))

app.listen(5000,()=>{
    console.log("server started")
})
//app.use("/file", upload);

app.post("/addasdoctor",async(req,res)=>{
    console.log(req)
    console.log(req.body);
    const doctord= await doctor.create({
        image:req.files.filename,
        gender:doctordata[0].gender,
        bloodgroup:doctordata[0].bloodgroup,
        address:doctordata[0].address,
        adhaarcard:doctordata[0].adhaarcard,
        permanentAddress:doctordata[0].permanentAddress,
        fatherName:doctordata[0].fatherName,
        motherName:doctordata[0].motherName,
        maritalStatus:doctordata[0].maritalStatus,
        alternateContactNo:doctordata[0].alternateContactNo,
        service:doctordata[0].service,
        educationalInfo:[],
        experienceDetails:[],
        doctorAccountdetails:[],
        nomineeAccountDetails:[]
    });
  User.findOneAndUpdate(
    {
      _id: req.user._id,
    },{
      doctord:doctord
    },
    (err, updatedUser) => {
      if (err) {
        res.status(200).json({
          status: "400",
          msg: "Cannot add as a doctor ",
        });
      } else {
        console.log(updatedUser);
        res.status(200).json({
          status: "200",
          msg: "Added as a doctor",
          updatedUser: updatedUser,
        });
      }
    }
  );
})

app.post("/login",async(req,res)=>{
  console.log("Trying to login")
  console.log(req.body)
  const {email,password}=req.body;
    
    user.findOne({ email, password }, function (err, User) {
      console.log(User)
        if (err || User == null) {
          res.sendStatus(400)
        } else {
          res.send({status:"ok"})
        }
    });
});


app.post("/register",async(req,res)=>{
    console.log("Hi, Trying to register")
    console.log(req.body)
    const {name,email,dob,password,phoneno,address}=req.body;
    // console.log(doctordata[0].gender);
    // console.log(doctordata[0].bloodgroup);
    try{
        //  const doctord= await doctor.create({
        //     image:req.files.filename,
        //     gender:doctordata[0].gender,
        //     bloodgroup:doctordata[0].bloodgroup,
        //     address:doctordata[0].address,
        //     adhaarcard:doctordata[0].adhaarcard,
        //     permanentAddress:doctordata[0].permanentAddress,
        //     fatherName:doctordata[0].fatherName,
        //     motherName:doctordata[0].motherName,
        //     maritalStatus:doctordata[0].maritalStatus,
        //     alternateContactNo:doctordata[0].alternateContactNo,
        //     service:doctordata[0].service,
        //     educationalInfo:[],
        //     experienceDetails:[],
        //     doctorAccountdetails:[],
        //     nomineeAccountDetails:[]
        // });
        await user.create({
            name:name,
            email:email,
            dob:dob,
            password:password,
            phoneno:phoneno,
            dob:dob,
            isDoctor:false,
            address:address,
            doctordata:[],
        });
        res.send({status:"ok"})
    }
    catch(error){
        console.log(error)
        res.send({status:"error"})
    }
})
