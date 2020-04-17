const express = require("express");
const mongoose = require("mongoose");

const { mongoUser, mongoPassword } = require("./.config/mongoInfo");
const monogoURI = `mongodb+srv://${mongoUser}:${mongoPassword}@cluster0-xdvc0.mongodb.net/test?retryWrites=true&w=majority`;
mongoose.connect(monogoURI, {
	useUnifiedTopology: true,
	useNewUrlParser: true,
});
const db = mongoose.connection;
db.on("connected", () => {
	console.log("Connect to MongoDB");
});
db.on("error", (error) => {
	console.log("There was an error connecting to MongoDB", error);
});

const app = express();

app.get("/", (req, res) => {
	res.send("hi there");
});

app.listen("3000", () => {
	console.log("listening");
});
