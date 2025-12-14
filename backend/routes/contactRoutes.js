import express from 'express';
import {
  getAllMessages,
  createMessage,
  getMessageById,
  markAsRead
} from '../controllers/contactController.js';

const router = express.Router();

router.get('/', getAllMessages);
router.post('/', createMessage);
router.get('/:id', getMessageById);
router.put('/:id/read', markAsRead);

export default router;

