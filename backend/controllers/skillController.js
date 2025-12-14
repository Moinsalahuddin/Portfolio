import Skill from '../models/Skill.js';

// Get all skills
export const getAllSkills = async (req, res) => {
  try {
    const skills = await Skill.find().sort({ category: 1, name: 1 });
    res.status(200).json(skills);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get skills by category
export const getSkillsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const skills = await Skill.find({ category });
    res.status(200).json(skills);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a skill
export const createSkill = async (req, res) => {
  try {
    const skill = new Skill(req.body);
    await skill.save();
    res.status(201).json(skill);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

