const express = require("express");
const router = express.Router();
const User = require("../models/user.model");

router.get("/", (req, res) => {
  User.find()
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      res.json(err);
    });
});

router.post('/add', (req, res) => {
    const newUser = new User({ username: req.body.username });

    newUser.save()
        .then(() => res.json(newUser))
        .catch(err => res.json(err))
});

router.get('/:id', (req, res) => {
    User.findOne({_id: req.params.id})
    .then(user => res.json(user))
    .catch(err => res.json(err))
})


module.exports = router;