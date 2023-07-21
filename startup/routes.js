const registrationRoute = require('../routes/registerRoute');
const addressBookRoute = require('../routes/addressBookRoutes')


const express = require('express');

module.exports = function (app) {

    app.use(express.json());

    app.use('/api/registration', registrationRoute);
    app.use('/api/addressBook', addressBookRoute);

}