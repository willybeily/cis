const mongoose = require('mongoose');
//var mongoosePaginate = require('mongoose-paginate');
mongoose.connect("mongodb+srv://ashwanikumar:vermakumar@cluster0.i6je3.mongodb.net/testing?retryWrites=true&w=majority", {useNewUrlParser: true, useCreateIndex: true,});
var conn =mongoose.Collection;
var passSchema =new mongoose.Schema({
    password_category: {type:String, 
        required: true,
        },
        
        email:{
            type:String,
            required:true,
           index:{
               unique:false
           }
        },
        project_name: {type:String, 
            required: true,
           },
        password_detail: {type:String, 
            required: true,
           },
       
    date:{
        type: Date, 
        default: Date.now }
});
//passSchema.plugin(mongoosePaginate);
var passModel = mongoose.model('password_details', passSchema);
module.exports=passModel;
