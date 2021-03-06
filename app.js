'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const getDate = require('./date');
require('dotenv').config();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
const date = require(__dirname + "/date.js");

const port = process.env.PORT || 3000;

const items = ['Practice Node JS', 'Complete ToDo List Application', 'Play Guitar'];

app.get('/', (req, res) => {

    let day = date.getDate();

    res.render("list", {
        kindOfDay: day,
        newListItems: items,
    });
});

app.post('/', (req, res) => {
    let item = req.body.newItem;
    items.push(item);

    res.redirect('/');
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});