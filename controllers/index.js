const router = require('express').Router();
const path = require('path');
const apiRoutes = require('./api');

router.use('/api', apiRoutes);


// code to serve up the info to the front end will go here
router.use((req, res) => {
    console.log(`${req}: ----------> ${res}`)
});


module.exports = router;


