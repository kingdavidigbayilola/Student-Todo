const express = require('express');
const router = express.Router();
const Student = require('../models/student.model');



router.get("/", (req, res) => {
  Student.find()
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      res.json(err);
    });
});


router.post('/add', (req, res) => {
    const newStudent = new Student({
      username: req.body.username,
      subject: req.body.subject,
      classDuaration: Number(req.body.classDuaration),
      date: Date.parse(req.body.date)
    });

  
  
    newStudent.save()
        .then(() => res.json(newStudent))
        .catch(err => res.json(err))
})

router.get('/:id', (req, res) => {
  Student.findOne({_id: req.params.id})
  .then(user => res.json(user))
  .catch(err => res.json(err))
})

router.delete('/:id', (req, res) => {
    Student.findOne({ _id: req.params.id })
    .remove()
    .then(student => res.json(student))
    .catch(err => res.json(err))
})

router.post('/update/:id', (req, res) => {
    Student.findOne({ _id: req.params.id })
    .then(student => {
        student.username = req.body.username;
        student.subject = req.body.subject;
        student.classDuaration = Number(req.body.classDuaration);
        student.date = Date.parse(req.body.date);

        student.save()
        .then(() => res.json(student))
        .catch(err => res.json(err))
    })
    .catch(err => res.json(err))
})






module.exports = router;