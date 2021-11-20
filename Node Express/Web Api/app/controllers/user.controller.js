const db = require("../models");
const User = db.users;

exports.update = (req, res) => {
    if (!req.body){
        return res.status(400).send({
            message: 'Update body cannot be empty'
        })
    }

    const id = req.params.id;

    User.findByIdAndUpdate(id, req.body)
        .then((data) => {
            if (!data){
                res.status(404).send({
                    message: "User was not found"
                })
            }
            else {
                res.send({
                    message: `Update was successfull for id: ${data.id}`
                })
            }

        })
        .catch((error) => {
            res.status(500).send({
                message: "Update did not happen"
            })
        })
}

// Create action
exports.create = (req,res) => {
    // Validation
    if (!req.body.userName){
        res.status(400).send({message: 'userName cannot be empty'})
        return;
    }

    const user = new User({
        userName: req.body.userName,
        fullName: req.body.fullName,
        active: true
    })

    user.save().then((savedUser) => {
        res.send(savedUser);
    })
    .catch((err) => {
        res.status(500).send(err)
    })
};

exports.findAll = (req,res) => {
    User.find({})
    .then((users) => {
        res.send(users)
    })
    .catch((err) => {
        res.status(500).send(err)
    })
}

exports.getById = (req, res) => {
    const id = req.params.id;

    User.findById(id).then((user) => {
        if (!user){
            res.status(404).send({
                message: `user with id ${id} was not found`
            })
        }
        res.send(user);
    })
    .catch((err) => {
        res.status(500).send(err);
    })
}

exports.delete = (req, res) => {
    const id = req.params.id;

    User.findByIdAndRemove(id)
        .then((user) => {
            if (!user){
                res.status(404).send({
                    message: `Could not find user with id: ${id}`
                });
            }
            res.send({
                message: `The record with id:${id} was deleted`
            });
        })
        .catch(() => {
            res.status(500).send({
                message: "Something unexpected has happened"
            });
        });
}

exports.deleteAll = (req, res) => {
    User.remove({})
    .then((data) => {
        console.log("All users have been deleted");
        res.send({
            message: 'All users have been deleted'
        })
    })
    .catch((err) => {
        console.log(err);
        res.status(500).send("Something bad happened when deleting the users");
    })
}