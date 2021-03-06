'use strict';

const routes = require('express').Router();
const day = require('./day');
const todos = require('./todos');

routes.use('/', day);
routes.use('/', todos);

module.exports = routes;