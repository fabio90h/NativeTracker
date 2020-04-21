// Models: should always be declared at the top
require("./models/User");
require("./models/Track");

const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./routes/authRoute");
const trackRouter = require("./routes/trackRoute");

// Middlewares
const reqAuth = require("./middlewares/reqAuth");

const app = express();
app.use(express.json()); // will parse the information coming in the request paramenter

// Routes
app.use(authRouter);
app.use(trackRouter);

/** Connect to MongoDB through Mongoose
 * Go to cloud.mongodb.com to sign up form the database host
 */
const { mongoUser, mongoPassword } = require("../.config/mongoInfo");
const monogoURI = `mongodb+srv://${mongoUser}:${mongoPassword}@cluster0-xdvc0.mongodb.net/test?retryWrites=true&w=majority`;
mongoose.connect(monogoURI, {
	useUnifiedTopology: true,
	useNewUrlParser: true,
	useCreateIndex: true,
});
const db = mongoose.connection;
db.on("connected", () => {
	console.log("Connected to MongoDB");
});
db.on("error", (error) => {
	console.log("There was an error connecting to MongoDB", error);
});

// Test connection
app.get("/", reqAuth, (req, res) => {
	res.send(`Email is ${req.user.email}`);
});

// Listen to PORT
app.listen("3000", () => {
	console.log("Listening...");
});
