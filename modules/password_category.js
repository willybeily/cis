const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://ashwanikumar:vermakumar@cluster0.i6je3.mongodb.net/testing?retryWrites=true&w=majority", {useNewUrlParser: true, useCreateIndex: true,});
var conn =mongoose.Collection;
var passcatSchema =new mongoose.Schema({
    passord_category: {type:String, 
        required: true,
        index: {
            unique: false,        
        }},
     email:
     {
         type:String,
         required:true,
        index:{
            unique:false
        }
     },
    
    date:{
        type: Date, 
        default: Date.now }
});

var passCateModel = mongoose.model('password_categories', passcatSchema);
module.exports=passCateModel;

