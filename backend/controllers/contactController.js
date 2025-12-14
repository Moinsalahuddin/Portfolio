import Message from '../models/Message.js';

// Get all messages
export const getAllMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a message
export const createMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newMessage = new Message({
      name,
      email,
      subject,
      message
    });

    await newMessage.save();
    res.status(201).json({ 
      message: 'Message sent successfully',
      data: newMessage 
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get single message
export const getMessageById = async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);
    if (!message) {
      return res.status(404).json({ message: 'Message not found' });
    }
    res.status(200).json(message);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mark message as read
export const markAsRead = async (req, res) => {
  try {
    const message = await Message.findByIdAndUpdate(
      req.params.id,
      { read: true },
      { new: true }
    );
    if (!message) {
      return res.status(404).json({ message: 'Message not found' });
    }
    res.status(200).json(message);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

