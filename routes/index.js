'use strict';

const routes = require('express').Router();
const day = require('./day');

routes.use('/', day);

module.exports = routes;