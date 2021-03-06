'use strict';

const routes = require('express').Router();

routes.post('/', (req, res) => {
    console.log(req.body.newItem);
});

module.exports = routes;