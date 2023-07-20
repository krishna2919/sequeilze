const express = require('express');
const app = express();
const helmet = require("helmet");
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
require('./startup/routes')(app);
const db = require('./startup/db');



const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
require('./helpers/Passport')(passport);


app.use(cors());
app.use(helmet());

app.use(session({ secret: 'kisu' }));
app.use(passport.initialize());
app.use(passport.session());


const port = 8000;

app.use(require("./helpers/response"));
app.use(require("./helpers/error").handleJoiErrors);
app.use(require("./helpers/error").handleErrors);




app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});