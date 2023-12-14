const router = require("express").Router();
const ConversationSchema = require("../models/Conversation");

router.post("/newConversation", async (req, res) => {
  const user1 = req.body.user1;
  const user2 = req.body.user2;

  // Check if conversation already exists with the same members
  const existingConversation = await ConversationSchema.findOne({
    members: { $all: [user1, user2] },
  });

  if (existingConversation) {
    // Conversation already exists
    return res.status(409).json({ error: 'Conversation already exists' });
  }

  // Create a new conversation
  const newConversation = new ConversationSchema({
    members: [user1, user2],
  });

  try {
    const savedConversation = await newConversation.save();
    return res.status(200).json(savedConversation);
  } catch (err) {
    return res.status(500).json(err);
  }
});


//get conv of a user

router.get("/getConversation/:userId", async (req, res) => {
  try {
    const conversation = await ConversationSchema.find({
      members: { $in: [req.params.userId] },
    });
    return res.status(200).json(conversation);
  } catch (err) {
    return res.status(500).json(err);
  }
});
module.exports = router;
