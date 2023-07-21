const express = require('express');
const router = express();
const passport = require('passport');
const { addAddressBook, viewAddressBook, updateAddressBook, deleteAddressBook } = require('../Controller/addressBookController');
const Validate = require('../validation/addressBookValidation');
const { validator } = require('../helpers/validator');


router.post("/addAddressBook", passport.authenticate('jwt', { session: false }), validator.body(Validate.AddressBook), addAddressBook);

router.get("/viewAddressBook", passport.authenticate('jwt', { session: false }), viewAddressBook);

router.put("/updateAddressBook/:id", passport.authenticate('jwt', { session: false }), validator.body(Validate.updateAddressBook), updateAddressBook);

router.delete("/deleteAddressBook/:id", passport.authenticate('jwt', { session: false }), deleteAddressBook);


module.exports = router;