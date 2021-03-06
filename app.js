'use strict';

const app = require('express')();
const bodyParser = require('body-parser');
require('dotenv').config();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

let items = ['Practice Node JS', 'Complete ToDo List Application', 'Play Guitar'];

app.get('/', (req, res) => {
    const today = new Date();

    const options = {
        weekday: "long",
        day: "numeric", 
        month: "long"
    };

    const day = today.toLocaleDateString("en-GB", options);

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