const Sequelize = require('sequelize');

const data = new Sequelize('sequelize', 'root', '', {
    host: "localhost",
    dialect: "mysql",

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

db.sequelize.sync()
    .then(() => {
        console.log(' re-sync');
    })


module.exports = db;