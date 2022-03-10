const express = require('express');
const router = express.Router()
const userSchema = require('../models/userModel')


// create a user
router.post('/user', (req, res) => {
    const user = userSchema(req.body)
    user.save()
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }))
})

// get all users
router.get('/users', (req, res) => {
    userSchema
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }))
})


// update a user
router.put('/user/:id', (req, res) => {
    const { id } = req.params;
    const { url, name, email, description } = req.body;
    userSchema
    .updateOne({_id: id}, { $set: {url, name, email, description} })
    .then((data) =>  res.json(data))
    .catch((err) => res.json({ message: err }))
})

// detele a user 
router.delete('/user/:id', (req, res) => {
    const { id } = req.params;
    userSchema
    .remove({_id : id})
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err }))
})




module.exports = router