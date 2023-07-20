const sequelize = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    return sequelize.define("user_detail", {
        Name:{
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [2,50],
                    msg: 'Your full name may be 2 to 50 characters only.'
                }
            }
        },

        gender: {
            type: Sequelize.STRING,
            enum: ['Male', 'Female', 'Other']
        },

        Image: {
            type: Sequelize.STRING
        },

        Email: {
            type: Sequelize.STRING,
            //defaultValue: 'usermodule@gmail.com',
            allowNull: false,
            unique: {
                msg: 'This email is already taken.'
            },
            validate: {
                isEmail: {
                    msg: 'Email address must be valid.'
                }
            }
        },

        Password: {
            type:Sequelize.STRING,
            validate: {
                len: {
                    args: [5, 72],
                    msg: 'Your password may be 5 to 72 characters only.'
                }
            }
        }



    }, { freeZeTableName: true, timestamps: false });

}