const addUser=require('../Controller/registerController');
const express = require('express');
const router = express();
const  generateToken = require("../helpers/auth");
const config=require('config');
const upload=require('../helpers/upload');
const passport = require('passport');

router.post("/user", upload.single('Image'), addUser.addUser);

router.post('/login', generateToken.genrateToken,addUser.loginUser);

router.get('/view', passport.authenticate('jwt', { session: false }), addUser.viewuser);

router.post('/updateprofile/:id',passport.authenticate('jwt', { session: false }), upload.single('Image'), addUser.updateProfile);

router.put('/reset',passport.authenticate('jwt', { session: false }),addUser.resetPassword);
router.get('/logout',passport.authenticate('jwt',{session:false}),addUser.logout);
module.exports = router;