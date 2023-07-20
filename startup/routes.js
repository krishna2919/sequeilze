const registrationRoute=require('../routes/registerRoute');


const express=require('express');

module.exports=function (app)
{

    app.use(express.json());

    app.use('/api/registration',registrationRoute);
    
  
}