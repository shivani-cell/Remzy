const mongoose=require("mongoose")
const { stringify } = require("nodemon/lib/utils")


const documentsSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        data:Buffer,
        contentType:String
    }
      /*passportSizePhoto:String,
    adhardCard:String,
    residentialProof:String,
    drivingLicence:String,
    voterId:String,
    passport:String,
    panCard:String,
    bankPassbook:String,
    higherSecondary:String,
    seniorSecondary:String,
    registrationCertification:String,
    degreeCert:String,
    allSemesterMarksheet:Array,
    experienceCert:Array,
*/
});

mongoose.model("uploadDocuments",documentsSchema)