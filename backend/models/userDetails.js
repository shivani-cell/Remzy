const mongoose=require("mongoose")
const { stringify } = require("nodemon/lib/utils")
const doctorDetails = require('./doctorDetails').Schema;


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
doctordata:{type: Schema.Types.ObjectId, ref: 'doctorDetails'},
},{
collection: "Userinfo",
});

mongoose.model("userDetails",UserDetailsSchema);