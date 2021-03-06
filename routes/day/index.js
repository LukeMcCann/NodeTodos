'use strict';

const day = require('express').Router();

day.get('/', (req, res) => {
    const today = new Date();

    const options = {
        weekday: "long",
        day: "numeric", 
        month: "long"
    };

    const day = today.toLocaleDateString("en-GB", options);

    res.render("list", {
        kindOfDay: day
    });
});

module.exports = day;