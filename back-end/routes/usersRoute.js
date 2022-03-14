const express = require('express');
const router = express.Router();

const {
  getUsers,
  addUser,
  editUser,
  deleteUser,
  getUserById,
} = require('../controllers/usersController');

// Get User
router.get('/', getUsers);
// Add User
router.post('/add/', addUser);
// Edit User
router.put('/edit/:id', editUser);
// Delete User
router.delete('/delete/:id', deleteUser);
// get User by Id
router.get('/:id', getUserById);

module.exports = router;