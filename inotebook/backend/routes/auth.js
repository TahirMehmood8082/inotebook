const express = require('express')
const User = require('../models/User');
const router = express.Router();

//Create a user using: POST "/api/auth/" . Doesn't require Auth
router.get('/', (req, res)=>{
    // obj = {
    //     a: 'thios',
    //     number: 34
    // }
    // res.json(obj)
    console.log("request body from auth.js: ",req.body);
    const user = User(req.body);
    user.save()


    //res send in respose of thunderclient
    //res.send("Hello from auth")
    res.send(req.body)
})

module.exports = router