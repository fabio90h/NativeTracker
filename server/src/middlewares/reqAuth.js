const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = mongoose.model("User");

module.exports = (req, res, next) => {
	const { authorization } = req.headers;

	if (!authorization) res.status(401).send("You must be logged on...");

	let token = authorization.replace("Bearer ", "");

	// DECODING USER ID
	jwt.verify(token, "PRIVATE_KEY", async (err, payload) => {
		if (err) res.status(401).send("You must be logged on...");
		let { userId } = payload;
		let user = await User.findById(userId);
		req.user = user;
		next();
	});
};
