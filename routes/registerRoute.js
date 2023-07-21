const { addUser, loginUser, updateProfile, resetPassword, viewuser } = require('../Controller/registerController');
const express = require('express');
const router = express();
const generateToken = require("../helpers/auth");
const config = require('config');
const upload = require('../helpers/upload');
const passport = require('passport');
const Validate = require('../validation/userValidation');
const { validator } = require('../helpers/validator');

router.post("/user", upload.single('Image'), validator.body(Validate.registration), addUser);

router.post('/login', generateToken.genrateToken, validator.body(Validate.login), loginUser);

router.get('/view', passport.authenticate('jwt', { session: false }), viewuser);

router.post('/updateprofile/:id', passport.authenticate('jwt', { session: false }), upload.single('Image'), validator.body(Validate.updateProfile), updateProfile);

router.put('/reset', passport.authenticate('jwt', { session: false }), validator.body(Validate.resetPassword), resetPassword);

module.exports = router;