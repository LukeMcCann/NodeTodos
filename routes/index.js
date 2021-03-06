'use strict';

const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.render('list', {foo: 'FOO'});
});

module.exports = routes;