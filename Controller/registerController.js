
const { GeneralResponse } = require("../utils/response");
const { GeneralError } = require("../utils/error");
const config = require("../utils/config");
const logger = require('../loggers/logger');
const db = require('../startup/db');
const user = db.user;
const genrateToken = require('../helpers/auth');
const configs = require('config');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const saltRounds = 10;
const multer = require('multer');
const upload = require('../helpers/upload');
const { authenticate } = require("passport");

module.exports = {

    //for add user
    addUser: async (req, res, next) => {
        console.log(req.body);
        try {
            const findUser = await user.findOne({ where: { Email: req.body.Email } });
            if (!findUser) {
                const Password = await bcrypt.hash(req.body.Password, saltRounds);

                const User = {
                    Name: req.body.Name,
                    gender: req.body.gender,
                    Email: req.body.Email,
                    Image: req.file.filename,
                    Password: Password,
                }
                const addUser = await user.create(User);
                if (addUser) {
                    await next(
                        new GeneralResponse(
                            req.body.Name + "Successfully Registered....",
                            undefined,
                            config.HTTP_CREATED
                        )
                    );


                } else {
                    await next(
                        new GeneralError(
                            "User Registration Failed....",
                            undefined,
                            config.HTTP_ACCEPTED
                        )
                    );
                }
            } else {
                await next(
                    new GeneralError(
                        "User email already exist",
                        undefined
                    )
                );
            }

        } catch (err) {
            logger.error("err", err)
        }
    },


    //for login user

    loginUser: async (req, res, next) => {
        try {
            const User = await user.findOne({ where: { Email: req.body.Email } });
            if (User == null) {
                res.send("This user does not exists...");
            }
            const login = await bcrypt.compare(req.body.Password, User.Password);

            if (login) {
                const token = res.middlewareData;
                console.log('token', token);
                res.header('x-auth-token', token).send(token);


            } else {

                await next(
                    new GeneralError(

                        "Email and Password Incorrect...",
                        undefined,
                        config.HTTP_ACCEPTED
                    )
                );
            }

        } catch (err) {
            logger.error("err", err)
        }

    },


    //for view user

    viewuser: async (req, res, next) => {
        const Email = req.user.Email
        console.log(Email);
        const User = await user.findOne({ where: { Email: Email } });
        if (!User) {
            await next(
                new GeneralError(

                    "user not defined",
                    undefined,
                    config.HTTP_ACCEPTED
                )
            );
        }
        else {
            res.send(User);
        }
    },


    //for update user

    updateProfile: async (req, res, next) => {
        try {

            const Email = req.user.Email
            const User = await user.findOne({ where: { Email: Email } });
            if (User) {
                const updateUser = {
                    Name: req.body.Name,
                    gender: req.body.gender,
                    Email: req.body.Email,
                }
                if (req.file) {
                    updateUser.Image = req.file.filename
                }

                const updatedUser = await user.update(updateUser, {
                    where: { Email: Email }
                });

                if (updatedUser) {
                    await next(
                        new GeneralResponse(
                            "User Updated...",
                            undefined,
                            config.HTTP_CREATED
                        )
                    );
                }


            } else {

                await next(
                    new GeneralError(
                        "User not found.....",
                        undefined,
                        config.HTTP_ACCEPTED
                    )
                );

            }
        } catch (err) {
            console.log("err", err);
        }

    },


    //for reser password

    resetPassword: async (req, res, next) => {

        const Email = req.user.Email;
        console.log(Email);
        const salt = await bcrypt.genSalt(10);
        const find = await user.findOne({ where: { Email: Email } });
        if (find) {

            const oldpassword = req.body.oldpassword;
            const hashpassword = await bcrypt.compare(oldpassword, find.Password);
            console.log(hashpassword);
            if (hashpassword) {
                console.log(req.body.newpassword);
                const updatepassword = { Password: await bcrypt.hash(req.body.newpassword, salt) };
                console.log(updatepassword);
                const update_data = await user.update(updatepassword, { where: { Email: Email } });
                if (update_data) {
                    await next(
                        new GeneralResponse(
                            "Password reset...",
                            undefined,
                            config.HTTP_CREATED
                        )
                    );
                }
                else {
                    await next(
                        new GeneralError(
                            "password is not reseted...",
                            undefined,
                        )
                    );
                }
            }
            else {
                await next(
                    new GeneralError(
                        "Enter correct oldpassword...",
                        undefined,
                    )
                );
            }

        }
    },
}


