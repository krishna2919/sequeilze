const sequelize = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    return sequelize.define("addressbook", {
        Title: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [2,50],
                    msg: 'Your title may be 2 to 50 characters only.'
                }
            }
        },

        addressLine1: {
            type: Sequelize.STRING,
            validate: {
                len: {
                    args: [2,50],
                    msg: 'Your title may be 2 to 50 characters only.'
                }
            }

        },

        addressLine2: {
            type: Sequelize.STRING,
            validate: {
                len: {
                    args: [2,50],
                    msg: 'Your title may be 2 to 50 characters only.'
                }
            }
        },

        Country: {
            type: Sequelize.STRING,
            enum: ['India', 'Australia', 'Canada', 'Japan']
        },

        State: {
            type: Sequelize.STRING,
            enum: ['Gujarat', 'Rajasthan', 'Punjab', 'Assam']
        },

        City: {
            type: Sequelize.STRING,
            enum: ['Ahmedabad', 'Junagadh', 'Surat', 'Bhuj']

        },
        PinCode: {
            type: Sequelize.INTEGER
        }


    }, { freeZeTableName: true, timestamps: false });

}