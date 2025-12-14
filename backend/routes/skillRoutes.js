import express from 'express';
import {
  getAllSkills,
  getSkillsByCategory,
  createSkill
} from '../controllers/skillController.js';

const router = express.Router();

router.get('/', getAllSkills);
router.get('/category/:category', getSkillsByCategory);
router.post('/', createSkill);

export default router;

