'use strict';

const app = require('express')();

require('dotenv').config();
app.set('view engine', 'ejs');

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.render('list', {foo: 'FOO'});
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});