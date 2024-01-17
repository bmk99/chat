const router = require("express").Router();
const MessagesSchema = require("../models/Messages");

//create a post

// router.post("/new", async (req, res) => {
//     const newMessage = new MessagesSchema(req.body)
//     try {
//         const mess = await newMessage.save()
//         const message = mess.populate("senderId","-password")
//         console.log(mess)
//         return res.status(200).json(message)
//     } catch (err) {
//         return res.status(500).json({error:err})

//     }

// });
router.post("/new", async (req, res) => {
  const { conversationId, senderId, text } = req.body;

  try {
    const newMessage = await MessagesSchema.create({
      conversationId,
      senderId,
      text,
    });
    //   console.log(newMessage)
    // You can optionally populate senderId here if needed
    const populatedMessage = await MessagesSchema.populate(
      newMessage,
      "senderId",
      "-password"
    );

    return res.status(200).json(populatedMessage);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Error creating a new message." });
  }
});

router.get("/get/:conversationId", async (req, res) => {
  try {
    const messages = await MessagesSchema.find({
      conversationId: req.params.conversationId,
    }).populate("senderId", "-password");
    return res.status(200).json(messages);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err });
  }
});

module.exports = router;
