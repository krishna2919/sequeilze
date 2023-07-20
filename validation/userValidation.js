const Joi = require('joi')


module.exports = {

    registration: Joi.object({
        Name: Joi.string().required().empty().messages({
            "string.base": `Name should be a type of 'text'`,
            "string.empty": `Name cannot be an empty field`,
            "any.required": `Name is a required field`,
        }),

        gender: Joi.string().required().empty().messages({
            "string.base": `gender  should be a type of string`,
            "string.empty": `gender cannot be an empty field`,
            "any.required": `gender is a required field`,
        }),

        Email: Joi.string().required().empty().email().messages({
            "string.base": `Email should be a type of string`,
            "string.empty": `Email cannot be an empty field`,
            "string.email": `Email format not valid`,
            "any.required": `Email is a required field`,
        }),

        Password: Joi.string().required().empty().min(6).max(16).messages({
            "string.base": `password should be a type of string`,
            "string.empty": `password cannot be an empty field`,
            "string.min": "password should be of minimum 6 characters",
            "string.max": "password should be of maximum 16 characters",
            "any.required": `password is a required field`,
        }),


    }),

    login: Joi.object({

        Email: Joi.string().required().empty().email().messages({
            "string.base": `Email should be a type of string`,
            "string.empty": `Email cannot be an empty field`,
            "string.email": `Email format not valid`,
            "any.required": `Email is a required field`,
        }),

        Password: Joi.string().required().empty().min(6).max(16).messages({
            "string.base": `password should be a type of string`,
            "string.empty": `password cannot be an empty field`,
            "string.min": "password should be of minimum 6 characters",
            "string.max": "password should be of maximum 16 characters",
            "any.required": `password is a required field`,
        }),
    }),

    updateProfile: Joi.object({
        Name: Joi.string().required().empty().messages({
            "string.base": `first name should be a type of 'text'`,
            "string.empty": `first name cannot be an empty field`,
            "any.required": `first name is a required field`,
        }),

        gender: Joi.string().required().empty().messages({
            "string.base": `gender should be selected`,
            "string.empty": `gender cannot be an empty field`,
            "any.required": `gender is a required field`,
        }),
        Email: Joi.string().required().empty().email().messages({
            "string.base": `Email should be a type of 'text'`,
            "string.empty": `Email cannot be an empty field`,
            "string.email": `Email format not valid`,
            "any.required": `Email is a required field`,
        }),
    }),
    resetPassword: Joi.object({
        CurrentPassword: Joi.string().empty().required().messages({
            "string.base": ` currentPassword should be a type of 'text'`,
            "string.empty": ` currentPassword cannot be an empty field`,
            "any.required": ` currentPassword is a required field`,
        }),
        Password: Joi.string().required().empty().min(6).max(16).messages({
            "string.base": `password should be a type of 'text'`,
            "string.empty": `password cannot be an empty field`,
            "string.min": "password should be of minimum 6 characters",
            "string.max": "password should be of maximum 16 characters",
            "any.required": `password is a required field`,
        }),
        ConfirmPassword: Joi.string().required().valid(Joi.ref('Password')).messages({
            "string.base": `confirm password should be a type of 'text'`,
            "any.only": "confirm password doesn't match password",
            "any.required": `confirm password is a required field`,
        })
    })

}