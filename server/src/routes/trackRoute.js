const mongoose = require("mongoose");
const express = require("express");
const reqAuth = require("../middlewares/reqAuth");

const router = express.Router();

const Track = mongoose.model("Track");

// User need to be signed in inorder to perform route
router.use(reqAuth);

router.get("/tracks", async (req, res) => {
	let track = await Track.find({ userId: req.user._id });

	res.send(track);
});

module.exports = router;
