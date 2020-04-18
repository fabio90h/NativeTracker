const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
});

// Before creating a new User, this will run first and encrypt the password
userSchema.pre("save", function (next) {
	let user = this;
	if (!user.isModified("password")) return next();

	// Generate SALT
	bcrypt.genSalt(10, (err, salt) => {
		if (err) return next(err);

		// Hashing password with SALT generated
		bcrypt.hash(user.password, salt, (err, hash) => {
			if (err) return next(err);
			user.password = hash;
			next();
		});
	});
});

// Creating a method to compare password in the User Model
userSchema.methods.comparePassword = function (candidatePassword) {
	let user = this;

	return new Promise((resolve, reject) => {
		bcrypt.compare(candidatePassword, user.password, (err, isMatch) => {
			if (err) reject(err);
			if (!isMatch) reject(false);
			resolve(true);
		});
	});
};

mongoose.model("User", userSchema);
