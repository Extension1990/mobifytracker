const User = require('../models/userModel');

// returns Users
exports.getUsers = (req, res, next) => {
  User.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json(data);
    }
  });
};

// add User
exports.addUser = (req, res, next) => {
  User.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};

// edit User
exports.editUser = (req, res, next) => {
  User.findByIdAndUpdate(req.params.id, { $set: req.body }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(201).json(data);
    }
  });
};

// delete User
exports.deleteUser = (req, res, next) => {
  User.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
};


// get one User
exports.getUserById = (req, res, next) => {
  User.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
};