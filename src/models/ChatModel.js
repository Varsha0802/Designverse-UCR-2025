import mongoose from 'mongoose';

const chatSchema = new mongoose.Schema({
  userMessage: { type: String, required: true },
  botMessage: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

const Chat = mongoose.model('Chat', chatSchema);

export default Chat;