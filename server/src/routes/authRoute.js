const express = require("express");
const mongoose = require("mongoose");

const User = mongoose.model("User");

const router = express.Router();

router.post("/signup", async (req, res) => {
	let { email, password } = req.body;
	try {
		let user = new User({ email, password });
		await user.save();
		res.send("You made a post request");
	} catch (error) {
		res.status(422).send(error.message);
	}
});

module.exports = router;
