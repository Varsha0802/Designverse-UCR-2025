import express from 'express';
import Chat from '../models/ChatModel.js';

const router = express.Router();

// Get the last 5 chat messages
router.get('/last5', async (req, res) => {
  try {
    const chats = await Chat.find().sort({ timestamp: -1 }).limit(5); // Sort by timestamp descending
    res.status(200).json(chats.reverse()); // Reverse to return in chronological order
  } catch (error) {
    console.error('Error fetching chat messages:', error);
    res.status(500).json({ error: 'Failed to fetch chat messages' });
  }
});

// Save a new chat message
router.post('/', async (req, res) => {
  try {
    const { userMessage, botMessage } = req.body;
    const chat = new Chat({ userMessage, botMessage });
    await chat.save();
    res.status(201).json(chat);
  } catch (error) {
    console.error('Error saving chat message:', error);
    res.status(500).json({ error: 'Failed to save chat message' });
  }
});

export default router;