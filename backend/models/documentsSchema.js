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
      
});

mongoose.model("uploadDocuments",documentsSchema)