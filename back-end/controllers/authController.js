const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'sdjkfh8923yhjdksbfma@#*(&@*!^#&@bhjb2qiuhesdbhjdsfg839ujkdhfjk';

// var messagebird = require('messagebird')('0s0o9IZ0hDRBaGQW4R3SjqOiR');

exports.register = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
        if(err) {
            res.json({
                error: err
            })
        }

        let user = new User({
            username: req.body.username,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            password: hashedPass,
        });

        user.save().then(user => {
            res.json({
                message: 'User registered successfully.'
            })
        }).catch(error => {
            res.json({
                message: 'An error has occured'
            })
        })
    })
}

exports.login = (req, res) => {
    console.log(req)
    var username = req.body.username;
    var password = req.body.password;

    User.findOne({$or: [{username:username}]})
    .then(user => {
        console.log(user)
        if (!user) {
            res.json({ status: 'error', error: 'Invalid username/password' });
        }
        if (bcrypt.compare(password, user.password)) {
            const token = jwt.sign(
                {
                    id: user._id,
                    username: user.username
                },
                JWT_SECRET
            )
    
            return res.json(user);
            
        }
    });
}