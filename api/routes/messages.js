const router = require("express").Router();
const MessagesSchema = require("../models/Messages")

//create a post

router.post("/new", async (req, res) => {
    const newMessage = new MessagesSchema(req.body)
    try {
        const message = await newMessage.save() 
        return res.status(200).json(message)
    } catch (err) {
        return res.status(500).json({error:err})
        
    }
 
});
router.get("/get/:conversationId",async (req,res)=>{
   
    try {
        const messages =await MessagesSchema.find({
            conversationId: req.params.conversationId
        })
        return res.status(200).json(messages)
        
        
    } catch (err) {
    
        console.log(err)
        return res.status(500).json({error:err})
        
    }

})

module.exports = router