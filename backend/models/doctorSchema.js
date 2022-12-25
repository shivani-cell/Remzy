const mongoose=require("mongoose")
const { stringify } = require("nodemon/lib/utils")


const AccountDetailsSchema=new mongoose.Schema({
   bankName:String,
   accountNo:String,
   accountHolderName:String,
   IFSCcode:String,
});

const NomineeAccountDetailsSchema =new mongoose.Schema({
    accountDetails:[AccountDetailsSchema],
    relation:String,
    adharCardNo:String,
    emailId:String,
    mobileNo:String,
 });
 

const DoctorExperienceSchema=new mongoose.Schema({
   companyName:String,
   startDate:Date,
   endDate:Date,
   designation:String,
   otherDetails:String,
});

const educationalBackgroundSchema=new mongoose.Schema({
  instituteName:String,
  universityName:String,
  percentage:String,
  yearOfCompletion:Date,
  specialization:String,
  
});

const DoctorEducationSchema = new mongoose.Schema({
 higherSecondary:[educationalBackgroundSchema],
 seniorSecondary:[educationalBackgroundSchema],
 graduation:[educationalBackgroundSchema],
 degree:String,
});

const DoctorDetailsSchema=new mongoose.Schema({
  gender: String,
  bloodgroup: String,
  address: String,
  adhaarcard: String,
  permanentAddress: String,
  fatherName:String,
  motherName:String,
  maritalStatus:String,
  dob:Date,
  alternateContactNo:String,
  service:Array,
  educationalInfo:[DoctorEducationSchema],
  experienceDetails:[DoctorExperienceSchema],
  doctorAccountdetails:[AccountDetailsSchema],
  nomineeAccountDetails:[NomineeAccountDetailsSchema],

});

mongoose.model("doctorDetails",DoctorDetailsSchema);