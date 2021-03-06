'use strict';

const app = require('express')();
require('dotenv').config();
app.set('view engine', 'ejs');

const port = process.env.PORT || 3000;
const routes = require('./routes');

app.use('/', routes);

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});