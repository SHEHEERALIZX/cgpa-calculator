var express = require('express');
const { path } = require('../app');
var router = express.Router();
var validator = require('validator');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/submit', function(req, res, next) {

    const values = req.body


    let  { mpi,os,ds,csh,salab,dslab,cshlab,miniproject }= values


    
    if(mpi != "" && os !=="" && ds !== '' && salab !=="" && dslab !== "" && cshlab !== "" && miniproject !== "" ) {
      let cgpa ;

     mpi = 4 * req.body.mpi;
     os  = 4 * req.body.os;
     ds  = 5 * req.body.DS;
     csh = 4 * req.body.csh;
     salab = 3 * req.body.salab;
     dslab = 3 * req.body.dslab;
     cshlab = 3 * req.body.cshlab;
     miniproject = 5 * req.body.miniproject;

    let totalpercent = mpi + os + ds + csh + salab + dslab + cshlab + miniproject;
     cgpa = totalpercent / 31;
    //  res.sendFile(path)
    console.log(cgpa);
    let check = false;
    // console.log(typeof(cgpa));
    if(isNaN(cgpa)){
      check = true
    }

    console.log("after check"+check);

    // res.send({status:"Success",body:req.body,percent:totalpercent,cgpa})
    res.render('result',{cgpa,check})
    } else {
      res.send({status:'Failed',reason:"All field requires"})
    }

     
});

module.exports = router;
