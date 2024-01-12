const router = require("express").Router();
const ConversationSchema = require("../models/Conversation");


//...// posting the new conversation between the two new friends
router.post("/newConversation", async (req, res) => {
  const user1 = req.body.user1;
  const user2 = req.body.user2;

  // Check if conversation already exists with the same memberse
  const existingConversation = await ConversationSchema.findOne({
    members: { $all: [user1, user2] },
  });

  // check Conversation already exists
  if (existingConversation) {
    return res.status(409).json({ error: "Conversation already exists" });
  }

  // Create a new conversation
  const newConversation = new ConversationSchema({
    members: [user1, user2],
  });

  // saving the conversation in the database
  try {
    const savedConversation = await newConversation.save();
    return res.status(200).json(savedConversation);
  } catch (err) {
    return res.status(500).json(err);
  }
});


//...//to get the conversations of a particualr
// router.get("/getConversation/:userId", async (req, res) => {

//   try {
//     const conversation = await ConversationSchema.find({
//       members: { $in: [req.params.userId] },
//     });

//     // const newConver = conversation.pupulate('members')
//     // console.log(newConver)
//     return res.status(200).json(conversation);
//   } catch (err) {
//     return res.status(500).json(err);
//   }

// });
// module.exports = router;

router.get("/getConversation/:userId", async (req, res) => {
  try {
    const conversation = await ConversationSchema.find({
      members: { $in: [req.params.userId] },
    })
    .populate('members', '-password'); // Populate 'members' field, excluding 'password' field

    return res.status(200).json(conversation);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

module.exports = router;

