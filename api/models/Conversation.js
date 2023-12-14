const { mongoose, Schema } = require("mongoose");

const ConversationSchema = new mongoose.Schema(
  {
    members: [
      {
        type: Schema.Types.ObjectId,
      }
    ]
  },
  { timestamps: true }
);

const Conversation = mongoose.model("Conversation", ConversationSchema);
module.exports = Conversation;
