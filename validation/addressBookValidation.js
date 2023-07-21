const Joi = require('joi');

module.exports = {
    AddressBook: Joi.array().items(
        Joi.object({
            Title: Joi.string().required().empty().messages({
                "string.base": `Title should be a type of 'text'`,
                "string.empty": `Title cannot be an empty field`,
                "any.required": `Title is a required field`,
            }),
            addressLine1: Joi.string().required().empty().messages({
                "string.base": `addressLine1 should be a type of 'text'`,
                "string.empty": `addressLine1 cannot be an empty field`,
                "any.required": `addressLine1 is a required field`,
            }),
            addressLine2: Joi.string().required().empty().messages({
                "string.base": `addressLine2 should be a type of 'text'`,
                "string.empty": `addressLine2 cannot be an empty field`,
                "any.required": `addressLine2 is a required field`,
            }),
            Country: Joi.string().required().empty().messages({
                "string.base": `Country should be a type of 'text'`,
                "string.empty": `Country cannot be an empty field`,
                "any.required": `Country is a required field`,
            }),
            State: Joi.string().required().empty().messages({
                "string.base": `State should be a type of 'text'`,
                "string.empty": `State cannot be an empty field`,
                "any.required": `State is a required field`,
            }),
            City: Joi.string().required().empty().messages({
                "string.base": `City should be a type of 'text'`,
                "string.empty": `City cannot be an empty field`,
                "any.required": `City is a required field`,
            }),
            PinCode: Joi.number().required().empty().messages({
                "number.base": `PinCode should be number`,
                "number.empty": `PinCode cannot be an empty field`,
                "any.required": `PinCode is a required field`,
            }),
        })

    ),
    updateAddressBook: Joi.object({
        Title: Joi.string().required().empty().messages({
            "string.base": `Title should be a type of 'text'`,
            "string.empty": `Title cannot be an empty field`,
            "any.required": `Title is a required field`,
        }),
        addressLine1: Joi.string().required().empty().messages({
            "string.base": `addressLine1 should be a type of 'text'`,
            "string.empty": `addressLine1 cannot be an empty field`,
            "any.required": `addressLine1 is a required field`,
        }),
        addressLine2: Joi.string().required().empty().messages({
            "string.base": `addressLine2 should be a type of 'text'`,
            "string.empty": `addressLine2 cannot be an empty field`,
            "any.required": `addressLine2 is a required field`,
        }),
        Country: Joi.string().required().empty().messages({
            "string.base": `Country should be a type of 'text'`,
            "string.empty": `Country cannot be an empty field`,
            "any.required": `Country is a required field`,
        }),
        State: Joi.string().required().empty().messages({
            "string.base": `State should be a type of 'text'`,
            "string.empty": `State cannot be an empty field`,
            "any.required": `State is a required field`,
        }),
        City: Joi.string().required().empty().messages({
            "string.base": `City should be a type of 'text'`,
            "string.empty": `City cannot be an empty field`,
            "any.required": `City is a required field`,
        }),
        PinCode: Joi.number().required().empty().messages({
            "number.base": `PinCode should be number`,
            "number.empty": `PinCode cannot be an empty field`,
            "any.required": `PinCode is a required field`,
        }),
    })



}