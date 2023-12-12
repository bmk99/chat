const router = require("express").Router();
const ConversationSchema = require("../models/Conversation");

//create a post
router.post("/new", async (req, res) => {
    const [senderId, receiverId] = [req.body.senderId, req.body.receiverId];
  
    try {
      // Check if the conversation already exists
      const existingConversation = await ConversationSchema.findOne({
        $and: [
          { 'members.senderId': senderId, 'members.receiverId': receiverId }        ]
      });
  
      if (existingConversation) {
        return res.status(400).json({ error: "Conversation already exists" });
      }
  
      // If the conversation doesn't exist, create a new one
      const newConversation = new ConversationSchema({
        members: { senderId, receiverId }
      });
  
      const savedConversation = await newConversation.save();
      return res.status(200).json(savedConversation);
  
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  });
  
router.get("/get/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const conversationList = await ConversationSchema.find({
      $or: [{ "members.senderId": userId }, { "members.receiverId": userId }],
    });
    return res.status(200).json(conversationList);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err });
  }
});

module.exports = router;
