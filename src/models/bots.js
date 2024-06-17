const mongoose = require("mongoose");

const BotChatsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    token: { type: String, required: true, unique: true },
    listGroup: { type: Array, default: [] },
  },
  { timestamps: true }
);

const BotChat = mongoose.model("animal", BotChatsSchema);

module.exports = BotChat;
