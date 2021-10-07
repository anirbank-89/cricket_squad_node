import express from 'express';
import { getAllCricketers, addCricketer, getCricketerById, editCricketer, deleteCricketer } from '../controllers/cricketers.js';
const router = express.Router();

router.get('/', getAllCricketers);
router.post('/add', addCricketer);
router.get('/:id', getCricketerById);
router.put('/:id', editCricketer);
router.delete('/:id', deleteCricketer);

export default router;