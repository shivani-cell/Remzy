const mongoose=require("mongoose")
const { stringify } = require("nodemon/lib/utils")

const addressSchema=new mongoose.Schema({
   country: String,
   state: String,
   city: String,
   pincode: String, 
})

const UserDetailsSchema=new mongoose.Schema({
name: String,
email: String,
password: String,
phoneno: String,
isDoctor: Boolean,
address: [addressSchema],
doctordata: [doctorSchema],
},{
collection: "Userinfo",
});

mongoose.model("userDetails",UserDetailsSchema);