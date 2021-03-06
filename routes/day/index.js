'use strict';

const day = require('express').Router();

day.get('/', (req, res) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    const todayAsInt = new Date().getDate();
    let todayAsString = days[todayAsInt];

    if ((typeof todayAsString) === 'undefined') {
        res.status(404).json({ status: 404, message: 'Day is undefined.' });
    }

    res.render("list", { dayAsString: todayAsString });
});

module.exports = day;