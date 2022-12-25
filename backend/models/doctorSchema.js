const mongoose=require("mongoose")
const { stringify } = require("nodemon/lib/utils")

const DoctorDetailsSchema=new mongoose.Schema({
  gender: String,
  bloodgroup: String,
  address: String,
  adhaarcard: String,
  
});

mongoose.model("userDetails",UserDetailsSchema);