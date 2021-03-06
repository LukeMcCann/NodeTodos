'use strict';

const days = require('express').Router();

days.get('/', (req, res) => {
    const today = new Date();
    const currentDay = today.getDay();
    let day = "";

    if (currentDay === 6 || currentDay === 0) {
        day = "Weekend";
    } else { 
        day = "Weekday";
    }

    res.render("list", { kindOfDay: day });
});

module.exports = days;