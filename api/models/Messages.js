const { mongoose, Schema } = require("mongoose");

const MessagesSchema = new mongoose.Schema(
  {
    conversationId: {
      type: Schema.Types.ObjectId,
    },
    senderId: {
      type: Schema.Types.ObjectId,
    },
    text: {
      type: String,
    },
  },
  { timestamps: true }
);

const Messages = mongoose.model("Messages", MessagesSchema);

module.exports = Messages;
