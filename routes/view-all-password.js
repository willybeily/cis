var express = require('express');
var router = express.Router();
var userModule=require('../modules/users');
var passCatModel = require('../modules/password_category');
var passModel = require('../modules/add_password');
var bcrypt =require('bcryptjs');
var jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');

var getPassCat= passCatModel.find({});
var getAllPass= passModel.find({});
var getemail=userModule.find({});
/* GET home page. */

function checkLoginUser(req,res,next){
  var userToken=localStorage.getItem('userToken');
  try {
    var decoded = jwt.verify(userToken, 'loginToken');
  } catch(err) {
    res.redirect('/');
  }
  next();
}

if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
}

function checkUsername(req,res,next){
  var uname=req.body.uname;
  var checkexitemail=userModule.findOne({username:uname});
  checkexitemail.exec((err,data)=>{
 if(err) throw err;
 if(data){
  
return res.render('signup', { title: 'Confidential Information Storage', msg:'Username Already Exit' });

 }
 next();
  });
}

function checkEmail(req,res,next){
  var email=req.body.email;
  var checkexitemail=userModule.findOne({email:email});
  checkexitemail.exec((err,data)=>{
 if(err) throw err;
 if(data){
  
return res.render('signup', { title: 'Confidential Information Storage', msg:'Email Already Exit' });

 }
 next();
  });
}


router.get('/',checkLoginUser, function(req, res, next) {

  console.log(req.body.email)
   
    var loginUser=localStorage.getItem('loginUser');
 
  

    getAllPass
   .exec(function(err,data){
  if(err) throw err;
  
  res.render('view-all-password', { title: 'Confidential Information Storage',
  loginUser: loginUser,
  records: data,
    email:localStorage.getItem('email'),
  
  });
    });
  });


  router.get('/:page',checkLoginUser, function(req, res, next) {
   
    var loginUser=localStorage.getItem('loginUser');
  
    var perPage = 3;
    var page = req.params.page || 1;
  
    getAllPass.skip((perPage * page) - perPage)
    .limit(perPage).exec(function(err,data){
  if(err) throw err;
  passModel.countDocuments({}).exec((err,count)=>{    
  res.render('view-all-password', { title: 'Confidential Information Storage',
  loginUser: loginUser,
  records: data,
  lengths:data.length,
  email:localStorage.getItem('email'),
    current: page,
    pages: Math.ceil(count / perPage) 
  });
    });
  });
  });


  
  module.exports = router;