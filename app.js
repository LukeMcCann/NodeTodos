'use strict';

const app = require('express')();
const ejs = require('ejs');
require('dotenv').config();

const routes = require('./routes');

const port = process.env.PORT || 3000;

app.use('/', routes);

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});