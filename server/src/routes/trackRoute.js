const mongoose = require("mongoose");
const express = require("express");
const reqAuth = require("../middlewares/reqAuth");

const router = express.Router();

const Track = mongoose.model("Track");

// User need to be signed in inorder to perform route
router.use(reqAuth);

// Get all tracks
router.get("/tracks", async (req, res) => {
	let track = await Track.find({ userId: req.user._id });

	res.send(track);
});

// Create a new track
router.post("/tracks", async (req, res) => {
	const { name, locations } = req.body;

	if (!name || !locations) res.status(422).send({ error: " you must provde a name and locations" });
	try {
		const track = new Track({ name, locations, userId: req.user._id });
		await track.save();
		res.send(track);
	} catch (err) {
		res.send(422).send({ error: err.message });
	}
});

module.exports = router;
