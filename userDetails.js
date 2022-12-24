const mongoose=require("mongoose")
const { stringify } = require("nodemon/lib/utils")
const UserDetailsSchema=new mongoose.Schema({
name: String,
email: String,
password: String,
phoneno: String,

},{
collection: "patientinfo",
});

mongoose.model("PatientDetails",UserDetailsSchema);