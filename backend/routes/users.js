const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {   
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => { //Handles HTTP POST requests
  const username = req.body.username;     //New username forms part of the Request body

  const newUser = new User({username});   //New user instance

  newUser.save()                          //New user is saved to the DB
    .then(() => res.json('User added!'))  //"User added" is being returned
    .catch(err => res.status(400).json('Error: ' + err));
});
//I'll buy you an icecream ;)
module.exports = router;
