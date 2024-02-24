const mongoose=require("mongoose");
const  schema=mongoose.Schema;

const formSchema=new schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    }
})

const form=mongoose.model('FormData',formSchema);
module.exports=form;
