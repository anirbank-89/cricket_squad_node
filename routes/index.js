import express from 'express';

import { addUser, deleteUser, editUser, getUserById, getUsers } from '../controllers/User.js';

var router = express.Router();

// router.get('/', (req,res) => {
//     res.send("Hello!");
// });

router.post('/cricketers', addUser);
router.get('/cricketers', getUsers);
router.get('/cricketers/:id', getUserById);
router.put('/cricketers/:id', editUser);
router.delete('/cricketers/:id', deleteUser);

export default router;