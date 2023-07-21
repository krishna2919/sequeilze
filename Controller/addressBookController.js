const logger = require('../loggers/logger');
const db = require('../startup/db');
const { GeneralResponse } = require("../utils/response");
const { GeneralError } = require("../utils/error");
const config = require("../utils/config");
const validation=require('../validation/addressBookValidation');

const addressBook = db.address;


//add addressbook

module.exports.addAddressBook = async (req, res, next) => {
  
    const add_address=await addressBook.bulkCreate(req.body);
   
    if(add_address)
    {
        await next(
            new GeneralResponse(
                " Address Added....",
                undefined,
                config.HTTP_CREATED
            )
        );
    }
    else
    {
        await next(
            new GeneralError(
                "Not Successfully added Address Data....",
                undefined,
                config.HTTP_ACCEPTED
            )
        );
    }
}


//view addressbook

module.exports.viewAddressBook = async (req, res, next) => {
    try {
        const data = await addressBook.findAll();
        if (data) {
            res.send(data);
        } else {

            await next(
                new GeneralError(
                    "addressBookData is Not Showing...",
                    undefined,
                    config.HTTP_ACCEPTED
                )
            );

        }

    } catch (err) {
        logger.error("err", err)
    }
};


//update addressbook

module.exports.updateAddressBook = async (req, res, next) => {
    try {
        const id = req.params.id
        const data = {
            Title: req.body.Title,
            addressLine1: req.body.addressLine1,
            addressLine2: req.body.addressLine2,
            Country: req.body.Country,
            State: req.body.State,
            City: req.body.City,
            PinCode: req.body.PinCode,
        }
        const update = addressBook.update(data, {
            where: { id: id }
        });
        if (update) {
            await next(
                new GeneralResponse(
                    "AddressBook is Updated.....",
                    undefined,
                    config.HTTP_CREATED
                )
            );
        } else {
            await next(
                new GeneralError(
                    "AddressBook Is Not Updated....",
                    undefined,
                    config.HTTP_ACCEPTED
                )
            );
        }

    } catch (err) {
        logger.error("err", err)
    }
}

//delete addressbook

module.exports.deleteAddressBook = async (req, res, next) => {
    try {

        const id = req.params.id

        const deleteAddressBookData = await addressBook.destroy({
            where: { id: id }
        });

        if (deleteAddressBookData) {
            await next(
                new GeneralResponse(
                    "AddressBook Deleted....",
                    undefined,
                    config.HTTP_CREATED
                )
            );
        } else {
            await next(
                new GeneralError(
                    "AddressBook is Not Deleted....",
                    undefined,
                    config.HTTP_ACCEPTED
                )
            );
        }

    } catch (err) {
        logger.error("err", err);
    }
};