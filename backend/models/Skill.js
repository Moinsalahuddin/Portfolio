import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Programming', 'Frameworks', 'Databases', 'Tools']
  },
  icon: {
    type: String,
    default: ''
  }
}, {
  timestamps: true
});

const Skill = mongoose.model('Skill', skillSchema);

export default Skill;

