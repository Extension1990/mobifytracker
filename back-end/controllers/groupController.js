const Group = require('../models/groupModel');
const Member = require('../models/memberModel');

// returns Groups
exports.getGroups = (req, res, next) => {
  Group.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json(data);
    }
  });
};

// add Group
exports.addGroup = (req, res, next) => {
  Group.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};

// add member
exports.addMember = (req, res, next) => {
  Member.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};

// edit Group
exports.editGroup = (req, res, next) => {
  Group.findByIdAndUpdate(req.params.id, { $set: req.body }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(201).json(data);
    }
  });
};

// delete Group
exports.deleteGroup = (req, res, next) => {
  Group.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
};


// get one Group
exports.getGroupById = (req, res, next) => {
  Group.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
};