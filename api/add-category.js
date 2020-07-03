var express=require('express')
var passCatModel = require('../modules/password_category');
var router=express.Router()

var getPassCat= passCatModel.find({},{"passord_category":1});
router.get('/getCategory',function(req,res){
    getPassCat.exec(function(err,data){
        if(err) throw err

        res.send(data)
    })
   
})


router.post('/add-category',function(req,res){
    var passCategory=req.body.pass_cat
    
    var passcat=new passCatModel({passord_category:passCategory})
    passcat.save(function(err,data){
        if(err) throw err
        res.send('successfully added new category')
    })
})

router.put('/add-update-category',function(req,res){
    res.send('Nodejs Restful API PUT method working')
})

router.patch('/update-category',function(req,res){
    res.send('Nodejs Restful API pactch method working')
})
module.exports=router;