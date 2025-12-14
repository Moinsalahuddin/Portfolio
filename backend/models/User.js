import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  github: {
    type: String,
    required: true
  },
  profile: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema);

export default User;

