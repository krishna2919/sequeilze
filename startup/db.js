const Sequelize = require('sequelize');

const data = new Sequelize('b5eaibq5aqmkgplyf7yq', 'u7d3cgjlu9soc5te', 'pSPh1I4PZyp5Nk1BGICL', {
    host: 'b5eaibq5aqmkgplyf7yq-mysql.services.clever-cloud.com',
    dialect: 'mysql',
    port: 3306, // Make sure to specify the port
    dialectOptions: {
        // Additional options specific to the MySQL dialect
    },
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

data.authenticate()
    .then(() => {
        console.log("Connected");
    })
    .catch((err) => {
        console.log("error" + err);
    });


const db = {};
db.Sequelize = Sequelize;
db.sequelize = data;

db.user = require('../models/user')(data, Sequelize);
db.address = require('../models/addressBook')(data, Sequelize);

db.sequelize.sync()
    .then(() => {
        console.log(' re-sync');
    })


module.exports = db;