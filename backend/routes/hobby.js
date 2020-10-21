const router = require('express').Router();
let Hobby = require('../models/hobby.models');

module.exports = router;

router.route('/').get((req, res) => {         //Handles HTTP GET Requests
  Hobby.find()
    .then(hobby => res.json(hobby))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {     //Handles HTTP POST requests
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);  //4 fields in the DB
  const date = Date.parse(req.body.date);

  const newHobby = new Hobby({
    username,
    description,
    duration,
    date,
  });

  newHobby.save()
  .then(() => res.json('Hobby added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {                       //returns a hobby item by id
    Hobby.findById(req.params.id)
      .then(hobby => res.json(hobby))
      .catch(err => res.status(400).json('Error: ' + err));
    });

router.route('/:id').delete((req, res) => {
  Hobby.findByIdAndDelete(req.params.id)
    .then(() => res.json('Hobby deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {           //Update hobby items
  Hobby.findById(req.params.id)
    .then(hobby => {
      hobby.username = req.body.username;
      hobby.description = req.body.description;
      hobby.duration = Number(req.body.duration);
      hobby.date = Date.parse(req.body.date);

      hobby.save()                                       //Saves the updated object to the database
        .then(() => res.json('Hobby updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});
