'use strict';

const app = require('express')();
const bodyParser = require('body-parser');
require('dotenv').config();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;
const routes = require('./routes');

app.use('/', routes);

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});