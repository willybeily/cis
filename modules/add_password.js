const mongoose = require('mongoose');
//var mongoosePaginate = require('mongoose-paginate');
mongoose.connect('mongodb+srv://aashu:p%40ssw0rd%279%27%21@cluster0-s9hrn.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useCreateIndex: true,});
var conn =mongoose.Collection;
var passSchema =new mongoose.Schema({
    password_category: {type:String, 
        required: true,
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