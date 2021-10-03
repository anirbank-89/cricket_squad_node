import express from 'express';
import { getAllCricketers, addCricketer } from '../controllers/cricketers.js';
const router = express.Router();

router.get('/', getAllCricketers);
router.post('/add', addCricketer)

export default router;