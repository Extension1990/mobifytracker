const express = require('express');
const router = express.Router();

const {
  getUsers,
  addUser,
  editUser,
  deleteUser,
  getUserById,
} = require('../controllers/user');

// Get User
router.get('/', getUsers);
// Add User
router.post('/', addUser);
// Edit User
router.put('/:id', editUser);
// Delete User
router.delete('/:id', deleteUser);
// get User by Id
router.get('/:id', getUserById);

module.exports = router;