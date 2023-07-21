const express = require('express');
const router = express();
const passport = require('passport');
const addressBookController = require('../Controller/addressBookController');
const Validate = require('../validation/addressBookValidation');



router.post("/addAddressBook",passport.authenticate('jwt',{session:false}) ,addressBookController.addAddressBook);

router.get("/viewAddressBook", passport.authenticate('jwt', { session: false }), addressBookController.viewAddressBook);

router.put("/updateAddressBook/:id", passport.authenticate('jwt', { session: false }), addressBookController.updateAddressBook);

router.delete("/deleteAddressBook/:id", passport.authenticate('jwt', { session: false }), addressBookController.deleteAddressBook);


module.exports=router;