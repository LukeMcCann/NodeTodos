'use strict';

const day = require('express').Router();

day.get('/', (req, res) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    const todayAsInt = new Date().getDate();
    let todayAsString = days[todayAsInt];

    res.render("list", { kindOfDay: todayAsString });
});

module.exports = day;