const {mongoose,Schema}= require("mongoose");

const ConversationSchema = new mongoose.Schema(
  {
    members: {
      senderId:Schema.Types.ObjectId,
      receiverId:Schema.Types.ObjectId
    },
  },
  { timestamps: true }
);

const Conversation = mongoose.model("Conversation", ConversationSchema);
module.exports = Conversation







// const {mongoose,Schema}= require("mongoose");

// const ConversationSchema = new mongoose.Schema(
//   {
//     members: {
//       senderId:Schema.Types.ObjectId,
//       receiverId:Schema.Types.ObjectId
//     },
//   },
//   { timestamps: true }
// );

// const Conversation = mongoose.model("Conversation", ConversationSchema);
// module.exports = Conversation
