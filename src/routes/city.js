const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

require('../schema/City')
const city = mongoose.model('cities');

router.get('/', (req,res) => {
    city.find().then(result => {
        res.send(result);
    }).catch(err =>{
        console.log(err);
    })
})

router.get('/cordinates', (req,res) => {
    city.find({ latitude: 1, longitude: 1, _id: 0 }).then(result => {
        res.send(result);
    }).catch(err =>{
        console.log(err);
    })
})



module.exports = router;