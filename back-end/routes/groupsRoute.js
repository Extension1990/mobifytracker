const express = require('express');
const router = express.Router();

const {
  getGroups,
  addGroup,
  addMember,
  editGroup,
  deleteGroup,
  getGroupById,
} = require('../controllers/groupController');

// Get Group
router.get('/', getGroups);
// Add Group
router.post('/add/', addGroup);
// Add Member
router.post('/add/member', addMember);
// Edit Group
router.put('/edit/:id', editGroup);
// Delete Group
router.delete('/delete/:id', deleteGroup);
// get Group by Id
router.get('/:id', getGroupById);

module.exports = router;