const User = require("../models/User");
const router = require("express").Router();
const bcrypt = require("bcrypt");

//get a user
router.get("/getUser", async (req, res) => {
  const userId = req.query.userId;
  const username = req.query.username;
  try {
    const user = userId
      ? await User.findById(userId)
      : await User.findOne({ username: username });
    const { password, updatedAt, ...other } = user._doc;

    return res.status(200).setHeader('Cache-Control', 'no-store').json(other);
  } catch (err) {
    return res.status(500).json(err);
  }
});
module.exports = router;
