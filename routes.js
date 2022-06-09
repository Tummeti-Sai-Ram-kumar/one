// We maintain seperate Routes.js file for easy debugging and maintaining routes seperately  

const express = require('express');
const router = express.Router(); // Using Router method from the Express module 

router.get('/helloworld',function(req,res){
    res.send('Reading the files from routes.js file');
})

module.exports = router;

