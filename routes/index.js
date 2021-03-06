'use strict';

const routes = require('express').Router();
const days = require('./days');

routes.use('/', days);

module.exports = routes;