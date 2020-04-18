const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const User = mongoose.model("User");

const router = express.Router();

router.post("/signup", async (req, res) => {
	let { email, password } = req.body;
	try {
		let user = new User({ email, password });
		await user.save();
		let token = jwt.sign({ userId: user._id }, "PRIVATE_KEY");
		res.send({ token });
	} catch (error) {
		res.status(422).send(error.message);
	}
});

router.post("/signin", async (req, res) => {
	let { email, password } = req.body;

	if (!email || !password) res.status(422).send({ error: "Must provide email and password" });

	let user = await User.findOne({ email });
	if (!user) res.status(422).send({ error: "Email not found" });

	try {
		await user.comparePassword(password);
		// Sign the user in
		let token = jwt.sign({ userId: user._id }, "PRIVATE_KEY");
		res.send({ token });
	} catch (err) {
		res.status(422).send({ error: "Invalid password or email" });
	}
});

module.exports = router;
